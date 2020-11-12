import React from "react";
import "./about_card.css";


const About_card = () => {
  return (
    <div className="col-md-4">
      <div className="about-card-container d-flex flex-column mx-auto mb-4 mb-md-0">
        <div className="d-flex align-items-center pb-3">
         <i className="fa fa-bullseye"></i>
          <h4 className="ml-2">Proposito</h4>
        </div>
        <ul className="pr-2 pl-3">
          <li>Concienciar del poder que tiene la musica en la salud</li>
          <li>Dotar de musica al entorno laboral y personal</li>
          <li>Poner el foco ne las personal en riesgo de exclusion social</li>
        </ul>
      </div>
    </div>
  );
};

export default About_card;
