import React from "react";
import "./disco.css";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Disco= ({ color }) => {
  return (
    <div class="col-lg-4 col-md-6 col-12 mb-5">
      <div className="d-block mb-4 disco-container mx-auto">
        <h2 className="mt-4 mx-auto">Pedagogico</h2>
        <h3 className="py-2">Marta Revuelta</h3>
      </div>
      <button className="btn btn-sm mb-4 mx-auto">
        Detalles
      </button>
    </div>
  );
};

export default Disco;
