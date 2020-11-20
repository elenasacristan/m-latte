import React from "react";
import "./activity.css";
import { Link } from "react-router-dom";

const Activity = ({ color, actividad, tipo }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="d-block mb-4 h-100 acivity-container">
        <img className="img-fluid" src={`https://res.cloudinary.com/dm3k4mri1/${actividad.foto}`}/>
        <h2 className="title mt-4 mx-auto">{actividad.titulo}</h2>
        <Link
          to={`/actividades/${tipo}/${actividad.id}`}
          style={{ "backgroundColor": color }}
          className="btn btn-lg mb-4"
        >
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Activity;
