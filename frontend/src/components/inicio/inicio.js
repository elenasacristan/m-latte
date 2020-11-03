import React from "react";
import "./inicio.css";
import banner from "../../common/images/banner.png";
import About_card from "../about_card/about_card";
import { GrDiamond } from "react-icons/gr";

const Inicio = () => {
  return (
    <div class="inicio">
      <div className="inicio-banner">
        <img src={banner} />
      </div>
      <div className="inicio-proposito container">
        <div className="row">
          <About_card />
          <About_card />
          <About_card />
        </div>
      </div>

      <div className="inicio-hacemos-container container d-flex">
        <div className="row w-100">
          <div className="col-md-3">
            <h1>Lo que hacemos</h1>
          </div>
          <div className="col-sm-4 col-md-3 d-flex flex-column mx-auto align-items-center">
            <GrDiamond size="2rem" color="#4F9BA6" />
            <h4 className="ml-2">Proposito</h4>
            <button className="btn btn-success">Detalles</button>
          </div>
          <div className="col-sm-4 col-md-3 d-flex flex-column mx-auto align-items-center">
            <GrDiamond size="2rem" color="#4F9BA6" />
            <h4 className="ml-2">Proposito</h4>
            <button className="btn btn-success">Detalles</button>
          </div>
          <div className="col-sm-4 col-md-3 d-flex flex-column mx-auto align-items-center">
            <GrDiamond size="2rem" color="#4F9BA6" />
            <h4 className="ml-2">Proposito</h4>
            <button className="btn btn-success">Detalles</button>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Inicio;
