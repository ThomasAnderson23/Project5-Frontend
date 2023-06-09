//import UserContext from "../../context/UserContext";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../home/home.css";
import * as React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ProductSwiper from "../../components/productSwiper/ProductSwiper";
import ProductContext from "../../context/products/ProductContext";
import { Container } from "@mui/system";

function Home() {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();

      console.log(products);
    };
    fetchProducts();

    console.log(products);
  }, []);

  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/products");
  };
  return (
    <Grid container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="brand"
          sx={{
            backgroundColor: "#d2b179",
            //padding: "200px 50px 200px 50px",
            minHeight: 400,
            textAlign: "center",
            fontFamily: "Myriad Pro Regular",
            position: "relative",
          }}
        >
          <Container
            sx={{
              position: "absolute",
              bottom: 0,
              marginBottom: 2,
            }}
          >
            <Button
              variant="buttonDefault"
              size="small"
              onClick={navigateToMenu}
              className="buttonDefault"
              sx={{backgroundColor: "#296560", color: "white"}}
            >
              ¡Ven a conocernos!
            </Button>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="cafe-image"
        ></Grid>
      </Grid>

      {/* Segundo Banner*/}

      <Grid
        container
        sx={{
          marginTop: "50px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="brunch"
          sx={{
            backgroundColor: "#d2b179",
            padding: "200px 50px 200px 50px",
          }}
        ></Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            backgroundColor: "light",
            padding: "100px 25px 25px 50px",
          }}
        >
          <ProductSwiper products={products} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
