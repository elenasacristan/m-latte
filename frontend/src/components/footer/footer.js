import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-center text-sm-left pb-2 pb-md-0">
            <h6 className="mb-4">Contacto:</h6>
            <p>
              <span className="d-none d-md-inline">E-mail: </span>musicalatte.paratodos@gmail.com
              <br />
              <span  className="d-none d-md-inline">Teléfono: </span>(+34) 676 92 42 85
            </p>
          </div>
          <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook-official pl-4"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram pl-4"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube pl-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
