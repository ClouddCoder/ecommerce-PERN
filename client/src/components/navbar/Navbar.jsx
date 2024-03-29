import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Overlay from "./components/overlay/Overlay";
import NavbarLinks from "./components/navbar-links/NavbarLinks";
import NavbarProfileLinks from "./components/navbar-profile-links/NavbarProfileLinks";
import { checkScreenSize } from "../../utils/MUIMediaQuery";
import "./Navbar.css";

/**
 * Component that renders the navbar.
 * @returns {JSX.Element} - Navbar.
 */
function Navbar() {
  // If toggle is true, the overlay will be displayed
  const [toggle, setToggle] = useState(false);

  const title = "Lottus";
  let phoneScreen = false;

  // Checks if the screen size is phone.
  if (checkScreenSize() === "phone") phoneScreen = true;

  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="header__navbar">
        {phoneScreen ? (
          <>
            <div className="header__navbar__menu">
              <IconButton onClick={() => setToggle(true)}>
                <MenuIcon fontSize="large" />
              </IconButton>
              {toggle ? (
                <Overlay newClassName="header__navbar__overlay" setToggle={setToggle} />
              ) : (
                <Overlay newClassName="header__navbar__overlay hidden" setToggle={setToggle} />
              )}
              <Link to="/">
                <div className="header__navbar__title">
                  <h1>{title}</h1>
                </div>
              </Link>
            </div>
            <IconButton onClick={() => navigate("/cart")}>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </IconButton>
          </>
        ) : (
          <>
            <Link to="/">
              <div className="header__navbar__title">
                <h1>{title}</h1>
              </div>
            </Link>
            <NavbarLinks newSelector="header__navbar__links" />
            <NavbarProfileLinks newSelector="header__navbar__profile-links" />
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
