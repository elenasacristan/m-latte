import React from 'react';
import Logo from '../../common/images/logo.png';
import './navbar.css';
import { RiMenu3Line } from 'react-icons/ri';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <RiMenu3Line className="hamburguer-button" size="2rem"/>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Quienes Somos
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Actividades
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Conciertos
              </a>
              <a className="dropdown-item" href="#">
                Talleres
              </a>
              <a className="dropdown-item" href="#">
                Otros
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Galería
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Fotos
              </a>
              <a className="dropdown-item" href="#">
                Videos
              </a>
              <a className="dropdown-item" href="#">
                Audios
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Discografía
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Quieres colaborar
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
