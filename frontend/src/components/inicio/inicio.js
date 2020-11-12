import React from "react";
import "./inicio.css";
import banner from "../../common/images/banner.png";
import About_card from "../about_card/about_card";
import Hacemos_item from "../hacemos-item/Hacemos_item";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="inicio-banner">
        <img src={banner} />
        <div className="container-sentence d-flex">
          <h3 className="text-center">
            "La música puede dar nombre a lo innombrable y comunicar lo
            desconocido" <br/>(Leonard Bernstein)
          </h3>
        </div>
      </div>
      <div className="inicio-proposito container">
        <div className="row pt-4 pb-0 d-flex justify-content-center">
          <About_card />
          <About_card />
          <About_card />
        </div>
      </div>

      <div className="inicio-hacemos-container d-flex">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-5 mb-lg-0 text-center">
              <h1>Lo que hacemos</h1>
            </div>
            <Hacemos_item />
            <Hacemos_item />
            <Hacemos_item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
