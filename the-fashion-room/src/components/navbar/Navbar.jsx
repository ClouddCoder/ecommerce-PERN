import React, { useContext } from "react";
import AuthContext from "../../context/auth-context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { auth, setAuth, userName } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar">
        <div className="navbarTitle">The fashion room</div>
        <ul className="navbarLinks">
          <li className="link">
            <Link to="#">Ayuda</Link>
          </li>
          <li className="link">
            <Link to="#">Acerca</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contacto</Link>
          </li>
          {auth ? (
            <li className="orders">
              <Link to="/orders">Mis compras</Link>
            </li>
          ) : null}
        </ul>

        {auth ? (
          <div className="navbarLogin">
            <p className="navbarUserName">{userName}</p>
            <div />
            <Link to="/" component="button" onClick={() => setAuth(false)}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="navbarLogin">
            <Link to="/login">Login</Link>
            <div />
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
