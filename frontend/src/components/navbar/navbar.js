import React from "react";
import Logo from "../../common/images/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <RiMenu3Line className="hamburguer-button" size="2rem" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/SobreMi">
              Sobre Mi
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Actividades
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/actividades/Conciertos">
                Conciertos
              </Link>
              <Link className="dropdown-item" to="/actividades/Talleres">
                Talleres
              </Link>
              <Link className="dropdown-item" to="/actividades/Otros">
                Otros
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Galería
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/fotos">
                Fotos
              </Link>
              <Link className="dropdown-item" to="/videos">
                Videos
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Colabora
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
