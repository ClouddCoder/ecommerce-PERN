import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CustomFavIcon from "./CustomFavIcon";
import AuthContext from "../../../../context/auth-context/AuthContext";
import ProductContext from "../../../../context/product-context/ProductContext";

function CustomWishlistButton({ product }) {
  const { auth } = useContext(AuthContext);
  const { wishlist, handleWish } = useContext(ProductContext);
  const props = { position: "absolute", top: "10px", right: "10px" };

  // Verifica si el producto esta en la wishlist.
  const findWish = wishlist.find((wish) => wish.product_id === product.product_id);
  const productAsWish = Boolean(findWish);

  const [addWish, setAddWish] = useState(productAsWish);

  const navigate = useNavigate();

  // Establece el initial state cada vez que la variable productAsWish cambie de valor cuando
  // se hace peticion a la API.
  useEffect(() => {
    setAddWish(productAsWish);
  }, [productAsWish]);

  if (auth) {
    // Si el producto esta en la wishlist, el boton cambia de color
    // y puede ser removido de la wishlist
    if (addWish) {
      return (
        <IconButton
          component="span"
          onClick={() => {
            handleWish(product, true);
            setAddWish(false);
          }}
          sx={props}
        >
          <CustomFavIcon stateWish={addWish} />
        </IconButton>
      );
    }

    // Si el producto no esta en la wishlist, el boton no tiene color y
    // puede agrega el producto de la wishlist
    return (
      <IconButton
        component="span"
        onClick={() => {
          handleWish(product);
          setAddWish(true);
        }}
        sx={props}
      >
        <CustomFavIcon stateWish={addWish} />
      </IconButton>
    );
  }

  return (
    <IconButton component="span" onClick={() => navigate("/login")} sx={props}>
      <CustomFavIcon stateWish={addWish} />
    </IconButton>
  );
}

export default CustomWishlistButton;
