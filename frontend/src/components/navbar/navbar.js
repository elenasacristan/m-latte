import React, { useState, useEffect } from "react";
import Logo from "../../common/images/logo.png";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
  const [openDropDown, setOpenDropDown] = useState("open");
  const [tipoActividad, setTipoActividad] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/actividades/tipoActividad/")
      .then((res) => res.json())
      .then((data) => setTipoActividad(data));
  }, []);

  const closeDropDown = () => {
    setOpenDropDown(openDropDown ? "" : "open");
  };

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
        className={`${openDropDown} collapse navbar-collapse justify-content-center`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link onClick={closeDropDown} className="nav-link" to="/Inicio">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={closeDropDown} className="nav-link" to="/SobreMi">
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
              {tipoActividad.length < 1 ? (
                <p className="p-3 mb-0">Cargando...</p>
              ) : (
                tipoActividad.map((tipo) => (
                  <Link
                    key={tipo.id}
                    onClick={closeDropDown}
                    className="dropdown-item"
                    to={`/actividades/${tipo.nombre}`}
                  >
                    {tipo.nombre}
                  </Link>
                ))
              )}
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
              <Link
                onClick={closeDropDown}
                className="dropdown-item"
                to="/fotos"
              >
                Fotos
              </Link>
              <Link
                onClick={closeDropDown}
                className="dropdown-item"
                to="/videos"
              >
                Videos
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link onClick={closeDropDown} className="nav-link" to="/Colabora">
              Colabora
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={closeDropDown} className="nav-link" to="/Contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
