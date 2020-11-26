import React, { useState, useEffect } from "react";
import colaborate from "../../common/images/colaborate.png";
import "./colabora.css";
import Spinner from "../Spinner/Spinner";

const Colabora = () => {
  const [colabora, setColabora] = useState({});

  useEffect(() => {
    fetch("/api/colabora/Colabora/")
      .then((res) => res.json())
      .then((data) => setColabora(data[0]));
  }, []);

  if (Object.keys(colabora).length < 1) {
    return <Spinner />;
  } else {
    return (
      <div className="colabora mx-auto px-4 px-md-5 pb-5">
        <div className="mx-auto text-center">
          <h2 className="main-title title mt-4 mb-5">{colabora.titulo}</h2>
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 d-flex justify-content-center d-lg-block">
              <img src={colaborate} alt="ilustracion colabora"></img>
            </div>
            <div className="mt-5 mt-lg-0 col-lg-6 mx-auto">
              <p>{colabora.texto1}</p>
              <p>
                <strong>{colabora.n_cuenta}</strong>
              </p>

              {colabora.link_pago && colabora.palabra_link && (
                <>
                  <hr />
                  <p className="mt-5">
                    {colabora.texto2}
                    <a
                      href={colabora.link_pago}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {colabora.palabra_link}{" "}
                    </a>
                    {colabora.texto3}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Colabora;
