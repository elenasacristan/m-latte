import React from "react";
import "./foto.css";

const Foto = ({ rotate, foto }) => {
  return (
    <div className={`mb-5 foto-container mx-auto ${rotate}`}>
      <img src={`https://res.cloudinary.com/dm3k4mri1/${foto.foto}`} />
      <h6 className="mt-4 text-center">
      {foto.titulo}
      </h6>
    </div>
  );
};

export default Foto;
