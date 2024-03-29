import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getStoreInformation } from "../../services/store";
import StoreInfo from "./components/StoreInfo";
import Layout from "../../components/layout/Layout";

/**
 * Component to render the contact information of the stores.
 * @returns {JSX.Element} - Contact component.
 */
function Contact() {
  const [stores, setStores] = useState([]);

  /**
   * Gets the store's information.
   */
  const loadStores = async () => {
    try {
      const response = await getStoreInformation();
      setStores(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadStores();
  }, []);

  return (
    <Layout>
      <Grid
        container
        direction="column"
        sx={{ width: "90%", maxWidth: "600px", p: 2 }}
        rowSpacing={2}
      >
        {stores.map((store, index) => (
          <StoreInfo key={index} storeNit={store.store_nit} storeName={store.store_name} />
        ))}
      </Grid>
    </Layout>
  );
}

export default Contact;
