import React from "react";
import "./card_detail.css";

const CardDetail = ({ actividad }) => {
  return (
    <div className="mt-4 card-detail mx-auto">
      <i
        className={`text-center card-detail-icon fa ${actividad.logo_name}`}
        aria-hidden="true"
      ></i>
      <h4 className="pl-3 pl-sm-5 card-detail-title2">{actividad.titulo2}</h4>
      <ul className="pb-5 pb-sm-4">
        {actividad.destinatarios && actividad.destinatarios.split("\\").map((destinatario) => (
          <li key={destinatario}>{destinatario}</li>
        ))}
      </ul>
      {actividad.tipo_actividad === 1 && (
        <div className="card-detail-circle d-flex flex-column align-items-center justify-content-center">
          <h6>{actividad.titulo3}</h6>
          <h4 className="text-center py-3">{actividad.autor}</h4>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
