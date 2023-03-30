import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { green, lightGreen, red } from "@mui/material/colors";

import React from "react";

import "./locations.scss";

const locations = () => {
  return (
    <Grid container xs={6} sm={6} md={12} lg={12} xl={12}>
      <Grid Item className="Item2">
        <h2>Cobertura del despacho</h2>

        <iframe
          width="500"
          height="1000"
          frameborder="0"
          scrolling="no"
          margintop=""
          marginwidth=""
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=1000&amp;hl=en&amp;q=huechuraba%20Santiago+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </Grid>
      <Grid item className="Item2">
        <h2>Nuestros locales</h2>
        <Card sx={{ maxWidth: 1000, margin: 5 }}>
          <CardMedia
            sx={{ height: 200, margin: 5 }}
            image="https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cafetería
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Av. Vitacura 2360
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500, margin: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://images.unsplash.com/photo-1609757754057-8a8e17eb73b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNhc29uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cafetería
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Marchant Pereira 982
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500, margin: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cafetería
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Av. Tobalaba 1976{" "}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default locations;
