import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <Grid container margin="10" rowSpacing={1} padding="1px" className="footer" marginTop={5}>
        <Grid item xs={12} sm={6} md={3}>
            <img src={"../../assets/images/REVECO.jpg"} alt="logo"></img>
          <Stack alignItems="center" justifyContent="center">
            <Stack spacing={2} direction="row" margin="5px"></Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack alignItems="center" justifyContent="center">
            <h3>Locales</h3>
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <Link to="#" className="links-footer">
                Av. Vitacura 2360
              </Link>
              <Link to="#" className="links-footer">
                Marchant Pereira 982
              </Link>
              <Link to="#" className="links-footer">
                Av. Tobalaba 1976
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack alignItems="center" justifyContent="center">
            <h3>Productos y Servicios</h3>
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <Link to="/Products" className="links-footer">
                Menú
              </Link>
              <Link to="#" className="links-footer">
                Tienda
              </Link>
              <Link to="#" className="links-footer">
                Eventos
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack alignItems="center" justifyContent="center">
            <h3 className="title-links">Próximamente</h3>
            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center"
            ></Stack>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
