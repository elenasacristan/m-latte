import React, { useState, useEffect } from "react";
import "./footer.css";

const Footer = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    fetch("/api/footer/footer/")
      .then((res) => res.json())
      .then((data) => setFooter(data[0]))
      .catch(err => console.log(err));
  }, []);

  if (
    Object.keys(footer) < 1 
  ) {
    return <div className="placeholder-footer"></div>;
  } else {
    return (
      <div className="footer pt-4 p-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center text-sm-left pb-2 pb-md-0">
              <h6 className="mb-3">{footer.titulo}</h6>
              <p>
                <span className="d-none d-md-inline">{footer.titulo2} </span>
                {footer.email}
                <br />
                <span className="d-none d-md-inline">{footer.titulo3} </span>
                {footer.telefono}
              </p>
            </div>
            <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center">
              <a
                href={`mailto:${footer.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa ${footer.icono1}`}></i>
              </a>
              <a href={footer.link2} target="_blank" rel="noopener noreferrer">
                <i className={`fa ${footer.icono2} pl-4`}></i>
              </a>
              <a href={footer.link3} target="_blank" rel="noopener noreferrer">
                <i className={`fa ${footer.icono3} pl-4`}></i>
              </a>
              <a href={footer.link4} target="_blank" rel="noopener noreferrer">
                <i className={`fa ${footer.icono4} pl-4`}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
