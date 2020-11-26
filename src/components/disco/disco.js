import React from "react";
import "./disco.css";


const Disco = ({ side, disco }) => {

  return (
    <div className={`timeline-item timeline-${side}`} data-aos="fade-up">
      <div className="timeline-content text-center">
        <h2>{disco.year}</h2>
        <div className="row disco-titulo-autor pb-4 pb-lg-0 px-1">
          <div className="col px-0">
            <h3 className="disco-titulo">{disco.titulo}</h3>
            <h5 className="text-md-right pr-md-4">{disco.autor}</h5>
          </div>
        </div>
        <div className="row disco-details px-1 px-md-3">
          <div className="mx-auto mr-lg-auto col-lg-5 pl-lg-0">
            <img
              className="mb-3"
              src={`https://res.cloudinary.com/dm3k4mri1/${disco.imagen_disco}`}
              alt={`caratula disco ${disco.titulo}`}
            />
             <h4 className="pb-1">{disco.lugar}</h4>
          </div>
          <div className="col-lg-6 mt-2 mt-lg-0 align-self-end colaboracion">
            <h3 className="colabora-title text-left pb-2">{disco.titulo1}</h3>
            <p className="text-left pl-1 pl-sm-4 ml-auto">{disco.colaboraciones}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p className="ml-lg-2">{disco.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disco;
