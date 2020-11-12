import React from "react";
import "./disco.css";

const Disco= ({ side, disco }) => {
 
  return (
    <div className={`timeline-item timeline-${side}`}>
          <div className="timeline-content text-center">
            <h2>{disco.year}</h2>
            <h3>{disco.titulo}</h3>
            <h5>{disco.autor}</h5>
            <div className="d-flex justify-content-center">
              <img src={disco.imagen_disco} />
            </div>
            <p>{disco.descripcion}</p>
          </div>
        </div>
  );
};

export default Disco;
