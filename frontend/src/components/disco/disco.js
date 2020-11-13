import React from "react";
import "./disco.css";

const Disco = ({ side, disco }) => {
  return (
    // <div className={`timeline-item timeline-${side}`}>
    //       <div className="timeline-content text-center">
    //         <h2>{disco.year}</h2>
    //         <h3>{disco.titulo}</h3>
    //         <h5>{disco.autor}</h5>
    //         <div className="d-flex justify-content-center">
    //           <img src={disco.imagen_disco} />
    //         </div>
    //         <p>{disco.descripcion}</p>
    //       </div>
    //     </div>

    <div className={`timeline-item timeline-${side}`}>
      <div className="timeline-content text-center">
        <div className="row">
          <div className="col-lg-5 container-year-img text-center">
            <h2>{disco.year}</h2>
            <img className="mb-3 mx-lg-2" src={disco.imagen_disco} />
          </div>
          <div className="col-lg-7 mt-2 mt-lg-4">
            <h3>{disco.titulo}</h3>
            <h5>{disco.autor}</h5>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p className="ml-lg-2 ">{disco.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disco;
