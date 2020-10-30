import React from "react";
import "./foto.css";
import Pedagogicos from "../../common/images/Pedagogicos.png";

const Foto = ({ rotate }) => {
  return (
    <div className={`mb-5 foto-container mx-auto ${rotate}`}>
      <img src={Pedagogicos} />
      <h6 className="mt-4">
        Foto taller alegría
      </h6>
    </div>
  );
};

export default Foto;
