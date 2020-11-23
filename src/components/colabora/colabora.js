import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <div class="row d-flex align-items-center">
            <div class="col-lg-5 d-flex justify-content-center d-lg-block">
              <img src={colaborate}></img>
            </div>
            <div class="mt-5 mt-lg-0 col-lg-6 mx-auto">
              <p>{colabora.texto1}</p>
              <p>
                <strong>{colabora.n_cuenta}</strong>
              </p>
              <hr />
              <p className="mt-5">
                {colabora.texto2}
                <Link to="/contacto"> {colabora.palabra_link} </Link>
                {colabora.texto3}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Colabora;
