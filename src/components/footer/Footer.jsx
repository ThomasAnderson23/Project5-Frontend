import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import "./footer.css";
import { Tooltip, IconButton } from "@mui/material";
import QR from "../../assets/images/QR.png";
import Logo from "../../assets/images/Logo.gif";
import { Instagram } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        justifyContent="center"
        // margin="10"
        rowSpacing={1}
        padding="1px"
        className="footer"
        marginTop={1}
      >
        <Grid item>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              sx={{ textAlign: "-webkit-center" }}
            >
              <img className="logo" src={Logo} alt="logo" height="100px"></img>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12} xl={12} sx={{ textAlign: "center" }}>
              <Tooltip title="Instagram" aria-label="editar">
                <IconButton
                  //color="primary"
                  aria-label="Editar"
                  component="span"
                  sx={{ marginTop: "-25px" }}
                  // onClick={() =>
                  //   handleOpenEditModal(propiedad)
                  // }
                >
                  <Instagram sx={{ fontSize: 28 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Facebook" aria-label="editar">
                <IconButton
                  //color="primary"
                  aria-label="Editar"
                  component="span"
                  sx={{ marginTop: "-25px" }}
                  // onClick={() =>
                  //   handleOpenEditModal(propiedad)
                  // }
                >
                  <FacebookIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Stack alignItems="center" justifyContent="center">
            <Stack spacing={2} direction="row" margin="5px"></Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack alignItems="center" justifyContent="center">
            <h3>Locales</h3>
            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: 3 }}
            >
              <Link to="locations" className="links-footer">
                Av. Vitacura 2360
              </Link>
              <Link to="locations" className="links-footer">
                Marchant Pereira 982
              </Link>
              <Link to="locations" className="links-footer">
                Av. Tobalaba 1976
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack alignItems="center" justifyContent="center">
            <h3>Productos y Servicios</h3>
            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: 3 }}
            >
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
            <img src={QR} alt="" height={150} width={150} />
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
