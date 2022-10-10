import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomTypography from "../custom-typography/CustomTypography";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Form({ children, title }) {
  return (
    <Grid container direction="column" align="center">
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item={true} container direction="column" pt={15} pb={25}>
        <Grid item>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <CustomTypography variant="h5">{title}</CustomTypography>
            </CardContent>
            <CardContent>{children}</CardContent>
          </Card>
        </Grid>
        <Grid>
          <Button component={Link} variant="contained" to="/" color="primary">
            Regresar
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Form;
