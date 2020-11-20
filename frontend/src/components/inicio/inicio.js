import React, { useState, useEffect } from "react";
import "./inicio.css";
import About_card from "../about_card/about_card";
import Hacemos_item from "../hacemos-item/Hacemos_item";

const Inicio = () => {
  const [inicio, setInicio] = useState({});
  const [queHacemos, setQueHacemos] = useState([]);
  const [queQueremos, setQueQueremos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/inicio/inicio/")
      .then((res) => res.json())
      .then((data) => {
        setInicio(data[0]);
      });
    fetch("http://localhost:8000/api/inicio/queQueremos/")
      .then((res) => res.json())
      .then((data) => {
        setQueQueremos(data);
      });
    fetch("http://localhost:8000/api/inicio/queHacemos/")
      .then((res) => res.json())
      .then((data) => {
        setQueHacemos(data);
      });
  }, []);

  if (Object.keys(inicio) < 1 && queQueremos.length < 1 && setQueHacemos.length < 1) {
    return "loading";
  } else {
    return (
      <div className="inicio">
        <div className="inicio-banner" style={{ backgroundImage:`url(${inicio.imagen_inicio})` }}>
          <div className="container-sentence d-flex">
            <h3 className="text-center">
              {inicio.frase}
              <br />{inicio.author}
            </h3>
          </div>
        </div>
        <div className="inicio-proposito container">
          <div className="row pt-5 pb-4 d-flex justify-content-center">
            {queQueremos.map((item) => (
              <About_card key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="inicio-hacemos-container d-flex">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 mb-5 mb-lg-0 text-center">
                <h1>{inicio.title2}</h1>
              </div>
              {queHacemos.map((item) => (
              <Hacemos_item key={item.id} item={item} />
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Inicio;
