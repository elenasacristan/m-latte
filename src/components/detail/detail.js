import React, { useState, useEffect } from "react";
import "./detail.css";
import CardDetail from "../card_detail/card_detail";
import NotFound from "../notfound/notfound";
import Spinner from "../Spinner/Spinner";

const Detail = ({ match }) => {
  const [actividad, setActividad] = useState({});
  const [notfound, setNotfound] = useState(false);

  useEffect(() => {
    fetch(`/api/actividades/Actividades/${match.params.actividadId}/`)
      .then((res) => {
        if (res.ok) {
          setNotfound(false);
          return res.json();
        }
        setNotfound(true);
        throw new Error("Something went wrong");
      })
      .then((data) => setActividad(data))
      .catch((err) => console.log(err));
  }, [match.params.actividadId]);

  if (notfound) {
    return <NotFound />;
  } else if (Object.keys(actividad).length < 1) {
    return <Spinner />;
  } else {
    return (
      <div className="detail px-3">
        <div className="mx-auto container">
          <h3 className="subtitle text-lg-left mt-4 mb-4 mb-sm-5">
            {actividad.titulo}
          </h3>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 container-image-duration">
              <img
                className="w-100 mb-5"
                src={`https://res.cloudinary.com/dm3k4mri1/${actividad.foto}`}
                alt="actividad"
              />
              {actividad.duracion && (
                <div className="duracion pt-1 pt-sm-2 text-center">
                  <i className={`fa ${actividad.icono}`}></i>
                  <p className="mb-0">{actividad.duracion}</p>
                </div>
              )}
            </div>
            <div className="description col-12 col-md-6 col-lg-7 col-xl-8 pl-lg-5">
              {actividad.descripcion && actividad.descripcion.split("\\").map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5 mt-md-0">
              <CardDetail actividad={actividad} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
