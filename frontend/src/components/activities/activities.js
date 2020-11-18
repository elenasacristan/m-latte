import React, { useState, useEffect } from "react";
import "./activities.css";
import Activity from "../activity/activity";

const Activities = ({ match }) => {
  const [tipoActividad, setTipoActividad] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/actividades/tipoActividad/")
      .then((res) => res.json())
      .then((data) => setTipoActividad(data));
  }, []);

  if (tipoActividad.length < 1) {
    return "loading";
  } else {
    return (
      <div className="activities container px-4">
        <h2 className="main-title title text-center text-lg-left mt-4 mb-5">
          {match.params.tipo}
        </h2>

        <div className="row text-center">
          {tipoActividad
            .filter((tipo) => tipo.nombre === match.params.tipo)[0]
            .actividades.map((actividad, index) =>
              index % 2 === 0 ? (
                <Activity
                  key={actividad.id}
                  actividad={actividad}
                  tipo={match.params.tipo}
                  color="#2994A4"
                />
              ) : (
                <Activity
                  key={actividad.id}
                  actividad={actividad}
                  tipo={match.params.tipo}
                  color="#C84E56"
                />
              )
            )}
        </div>
      </div>
    );
  }
};

export default Activities;
