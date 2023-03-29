import { useContext, useEffect } from "react";
import CardProducts from "../../components/cardProducts/card-products";
import ProductContext from "../../context/products/ProductContext";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    const fecthProducts = async () => {
      await getProducts();
    };
    fecthProducts();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="display-3 text-center fst-italic fw-bold">Menú</h1>
          <h3 className="display-6 text-start fst-italic">
            Desayunos y sugerencias
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <CardProducts key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
