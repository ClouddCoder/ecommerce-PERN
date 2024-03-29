import { useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import ProductContext from "../../context/product-context/ProductContext";
import InvoiceDetail from "./components/InvoiceDetail";
import Layout from "../../components/layout/Layout";

/**
 * Component to render the orders made by the user.
 * @returns {JSX.Element} - Orders component.
 */
function Orders() {
  const { loader, setLoader, loadOrderDetail, myOrders, clearProductsList } =
    useContext(ProductContext);

  // Displays the loader every time the component is re-render.
  useEffect(() => {
    setLoader(true);
  }, []);

  useEffect(() => {
    // Clears the products list to avoid duplicates
    // when the user wants to buy the product again.
    clearProductsList();
    // Gets the orders made by the user.
    loadOrderDetail();
  }, []);

  return (
    <Layout>
      {loader && (
        <div className="loader-container">
          <div className="spinner" />
        </div>
      )}

      <Grid
        container
        direction="column"
        sx={{ width: "90%", maxWidth: "600px", p: 2 }}
        rowSpacing={4}
      >
        <Grid item>
          <h3>Mis ordenes</h3>
        </Grid>
        <Grid item container direction="column" rowSpacing={2}>
          {myOrders?.map((order, i) => (
            <InvoiceDetail product={order} key={i} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Orders;
