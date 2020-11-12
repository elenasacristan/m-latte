import React from "react";
import "./activity.css";
import { Link } from "react-router-dom";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Activity = ({ color, tipo }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="d-block mb-4 h-100 acivity-container">
        <img className="img-fluid" src={Pedagogico} />
        <h2 className="mt-4 mx-auto">Pedagogico</h2>
        <Link
          to={`/actividades/${tipo}/Conciertos pedagogicos`}
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
