import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StoreInfo from "./components/StoreInfo";
import Navbar from "../../commons/navbar/Navbar";
import Footer from "../../commons/footer/Footer";
import axios from "axios";

/**
 * Componente que muestra la informacion de la tienda
 */
function Contact() {
  const [stores, getStores] = useState();
  const [storesPhones, getStoresPhones] = useState();

  /**
   * Peticion a la API para obtener la informacion de las tiendas
   */
  const loadStores = async () => {
    const response = await axios.get("http://localhost:3050/api/stores");
    const data = await response.data;
    getStores(data);
  };

  /**
   * Peticion a la API para obtener la informacion de los telefonos de las tiendas
   */
  const loadStoresPhones = async () => {
    const response = await axios.get("http://localhost:3050/api/stores/phones");
    const data = await response.data;
    getStoresPhones(data);
  };

  /**
   * Ejecuta la funcion loadStores() y loadStoresPhones()
   */
  useEffect(() => {
    loadStores();
  }, []);

  useEffect(() => {
    loadStoresPhones();
  }, []);

  return (
    <div>
      <Navbar />
      <Container component="div" sx={{ height: "auto", mt: 5, mb: 5 }}>
        <Box>
          <Grid container justifyContent="center" spacing={2}>
            {storesPhones &&
              stores?.map((store, index) => {
                return (
                  <StoreInfo
                    key={index}
                    store_name={store.name}
                    store_address={store.address}
                    store_phone={storesPhones[index].phone}
                  />
                );
              })}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
