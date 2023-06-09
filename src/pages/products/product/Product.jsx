import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../context/products/ProductContext";
import UserContext from "../../../context/UserContext";
import CartContext from "../../../context/cart/CartContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import Toaster from "../../../components/Toast/Toast";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialState = {
    notaUsuario: "",
  };
  const [showToast, setShowToast] = useState(false);
  const [notas, setNotas] = useState(initialState);
  const { getProduct, product } = useContext(ProductContext);
  const { addItemToCart, cartCount } = useContext(CartContext);
  const { userState } = useContext(UserContext);
  const { authStatus } = userState;

  const { name, price, brand, stock, image } = product[0];

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };

    fetchProduct();
  }, []);
  const handleChange = (e) => {
    setNotas((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleShowToast = () => setShowToast(!showToast);

  const handleButtonNotas = () => setNotas(initialState);

  const handleButtonNotSignIn = () => {
    navigate("/auth");
  };

  const addProductHandler = () => {
    if (cartCount < stock) {
      addItemToCart(product[0]);
      setShowToast(!showToast)
    }
  };

  return (
    <div className="bg-white">
      {product.length === 0 ? null : (
        <>
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <div className="flex items-center">
                    <Link
                      to="/products"
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      Catálogo
                    </Link>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-sm">
                  <a
                    href="#"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {name}
                  </a>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
              <div className="w-full rounded-lg overflow-hidden lg:block">
                <img
                  src={image}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {name}
                </h1>
              </div>

              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="text-3xl font-extrabold text-gray-400">
                  Características
                </h2>

                <p className="text-base text-gray-900 mt-6">
                  <b>Precio</b>: ${price} CLP
                </p>

                <p className="text-base text-gray-900 mb-6">
                  <b>Descripción</b>: {brand}
                </p>

                <p className="text-base text-gray-900 mb-6">
                  <b>Stock</b>: {stock}
                </p>

                {!authStatus ? (
                  stock === 0 ? (
                    <h4 className="text-red-800 no-underline">Sin Stock</h4>
                  ) : (
                    <button
                      onClick={handleButtonNotSignIn}
                      type="button"
                      className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Compralo para adquirir
                    </button>
                  )
                ) : stock === 0 ? (
                  <h4 className="text-red-800 no-underline">Sin Stock</h4>
                ) : (
                  <Link to={`/product/${id}`}>
                    {" "}
                    <button
                      onClick={addProductHandler}
                      type="button"
                      variant="contained"
                      className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 backgroundColor: #246560"
                    >
                      Añadir
                    </button>
                  </Link>
                )}
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      Ingresa indicaciones especiales de tu producto
                    </p>
                  </div>
                  <div class="form-group">
                    <label for="comment">Escribe tu nota: </label>
                    <textarea
                      name="notaUsuario"
                      value={notas.notaUsuario}
                      onChange={handleChange}
                      class="form-control"
                      rows="5"
                      id="comment"
                    ></textarea>
                    <button
                      onClick={handleButtonNotas}
                      type="submit"
                      variant="contained"
                      class="btn btn-primary mt-6"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Toaster
        showToast={showToast}
        toggleShowToast={toggleShowToast}
      ></Toaster>
    </div>
  );
};

export default Product;
