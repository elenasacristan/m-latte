import React from "react";
import "./card_detail.css";
import { FaUsers } from "react-icons/fa";

const CardDetail = () => {
  return (
    <div className="card-detail mx-auto">
      <FaUsers className="card-detail-icon" color="#FF6C6C" size="3.5rem"/>
      <h3 className="text-center">Destinatarios</h3>
      <ul>
        <li>Colegios</li>
        <li>Entidades sociales que trabajen con infancia y juventud, etc.</li>
      </ul>
      <div className="card-detail-circle d-flex flex-column align-items-center justify-content-center">
        <h6>Grupo:</h6>
        <h4 className="text-center py-3">Marta Revuelta</h4>
      </div>
    </div>
  );
};

export default CardDetail;
