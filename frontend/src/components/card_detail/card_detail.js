import React from "react";
import "./card_detail.css";
import { FaUsers } from "react-icons/fa";

const CardDetail = ({actividad}) => {
  return (
    <div className="card-detail mx-auto">
      <FaUsers className="card-detail-icon" color="#FF6C6C" size="3.5rem"/>
      <h3 className="text-center text-lg-left pl-lg-4">{actividad.titulo2}</h3>
      <ul>
      {actividad.destinatarios.split('\\').map(destinatario => <li key={destinatario}>{destinatario}</li>)}
      </ul>
      <div className="card-detail-circle d-flex flex-column align-items-center justify-content-center">
        <h6>{actividad.titulo3}</h6>
        <h4 className="text-center py-3">{actividad.autor}</h4>
      </div>
    </div>
  );
};

export default CardDetail;
