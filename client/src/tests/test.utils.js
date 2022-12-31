import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "../context/auth-context/AuthContext";
import ProductContext from "../context/product-context/ProductContext";
import Login from "../pages/login/Login";
import Catalogue from "../pages/catalogue/Catalogue";
import StoreContact from "../pages/store-contact/StoreContact";
import StoreInfo from "../pages/store-contact/components/StoreInfo";
import Home from "../pages/home/Home";
import Invoice from "../pages/invoice/Invoice";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Product from "../pages/product/Product";
import MyData from "../pages/my-data/MyData";
import EditData from "../pages/edit-data/EditData";
import EditAddress from "../pages/edit-address/EditAddress";
import EditPassword from "../pages/edit-password/EditPassword";

// AuthContext props for testing components.
export const authContextProps = {
  auth: true,
  setAuth: jest.fn(),
  userId: 1,
  setUserId: jest.fn(),
  user: "user",
  setUser: jest.fn(),
  userName: "user",
  setUserName: jest.fn(),
  userLastname: "user",
  setUserLastname: jest.fn(),
  userEmail: "user@user.com",
  setUserEmail: jest.fn(),
  userPassword: "1234",
  setUserPassword: jest.fn(),
  token: "1234",
  setToken: jest.fn(),
};

// products for testing catalogue component.
export const mockProducts = [
  {
    product_id: "656589",
    product_name: "Blusa",
    gender_value: "mujer",
    product_price: "45000",
    product_stock: "100",
  },
  {
    product_id: "656804",
    product_name: "Camisa",
    gender_value: "hombre",
    product_price: "45000",
    product_stock: "100",
  },
  {
    product_id: "657019",
    product_name: "Corbata",
    gender_value: "hombre",
    product_price: "45000",
    product_stock: "100",
  },
  {
    product_id: "657234",
    product_name: "Pantalon",
    gender_value: "mujer",
    product_price: "45000",
    product_stock: "100",
  },
  {
    product_id: "657449",
    product_name: "Pantaloneta",
    gender_value: "niño",
    product_price: "45000",
    product_stock: "100",
  },
  {
    product_id: "657664",
    product_name: "tenis-colegial",
    gender_value: "niña",
    product_price: "45000",
    product_stock: "100",
  },
];

// product' variants for testing product component.
export const mockProductVariants = [
  {
    variant_id: 1,
    product_id: 656589,
    variant_name: "blusa-negra-mujer",
    variant_price: 50000,
    variant_quantity: 10,
    gender_value: "mujer",
    color_id: 1,
    color_value: "negro",
  },
  {
    variant_id: 2,
    product_id: 656589,
    variant_name: "blusa-blanca-mujer",
    variant_price: 60000,
    variant_quantity: 10,
    gender_value: "mujer",
    color_id: 2,
    color_value: "blanco",
  },
  {
    variant_id: 3,
    product_id: 656589,
    variant_name: "blusa-roja-mujer",
    variant_price: 55000,
    variant_quantity: 50,
    gender_value: "mujer",
    color_id: 4,
    color_value: "rojo",
  },
];

// ProductContext props for testing components.
export const productContextProps = {
  addToCart: jest.fn(),
  loadProducts: jest.fn(),
  getProductVariants: jest.fn(),
  clearListOfProductsToBuy: jest.fn(),
  products: mockProducts,
  variants: mockProductVariants,
  wishlist: [],
  getWishlist: jest.fn(),
  handleWish: jest.fn(),
  resetProductState: jest.fn(),
};

// ProductContext props for testing Product component.
export const productProductContextProps = {
  addToCart: jest.fn(),
  loadProducts: jest.fn(),
  getProductVariants: jest.fn(),
  clearListOfProductsToBuy: jest.fn(),
  products: mockProducts,
  variants: mockProductVariants,
  wishlist: [],
  getWishlist: jest.fn(),
  resetProductState: jest.fn(),
};

export const mockStores = [
  { store_nit: 1, store_name: "Tienda 1", store_address: "Calle 1" },
  { store_nit: 2, store_name: "Tienda 2", store_address: "Calle 2" },
  { store_nit: 3, store_name: "Tienda 3", store_address: "Calle 3" },
];

export const mockStorePhone = [
  { store_nit: 1, phone_number: "123456789" },
  { store_nit: 2, phone_number: "987654321" },
  { store_nit: 3, phone_number: "547897884" },
];

export const mockCustomers = [
  {
    customer_id: 1,
    customer_name: "carlos",
    customer_lastname: "vargas",
    customer_email: "carlos",
    customer_password: "1234",
  },
  {
    customer_id: 2,
    customer_name: "luna",
    customer_lastname: "cortes",
    customer_email: "luna",
    customer_password: "12345",
  },
];

// This component is used to wrap the Navigation component to test it
export function GlobalContext({ children }) {
  return (
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>{children}</ProductContext.Provider>
    </AuthContext.Provider>
  );
}

// Renders login component
export function LoginTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>
        <Router>
          <Login />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders catalogue component.
export function CatalogueTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>
        <Router>
          <Catalogue />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders store component.
export function StoreContactTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>
        <Router>
          <StoreContact />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders store info component.
export function StoreInfoTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>
        <Router>
          <StoreInfo />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders Home component.
export function HomeTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>
        <Router>
          <Home />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

export const productProps = {
  cart: mockProducts,
  totalPrice: 45000,
  clearCart: jest.fn(),
  invoiceId: 1,
};

// Renders Invoice component.
export function InvoiceTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productProps}>
        <Router>
          <Invoice />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders Navbar component.
export function NavbarTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productContextProps}>
        <Router>
          <Navbar />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders Footer component.
export function FooterTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <Router>
        <Footer />
      </Router>
    </AuthContext.Provider>,
  );
}

// Renders Product component.
export function ProductTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productProductContextProps}>
        <Router>
          <Product />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders MyData component.
export function MyDataTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productProductContextProps}>
        <Router>
          <MyData />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders EditData component.
export function EditDataTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productProductContextProps}>
        <Router>
          <EditData />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders EditAddress component.
export function EditAddressTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productProductContextProps}>
        <Router>
          <EditAddress />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}

// Renders EditPassword component.
export function EditPasswordTest() {
  return render(
    <AuthContext.Provider value={authContextProps}>
      <ProductContext.Provider value={productProductContextProps}>
        <Router>
          <EditPassword />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>,
  );
}
