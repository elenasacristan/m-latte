import React, { useState } from "react";
import "./foto.css";

const Foto = ({ rotate, foto }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`mb-1 mb-lg-5 foto-container mx-auto ${rotate}`}>
      {loaded ? null : (
        <div
          style={{
            background: "white",
            height: "400px",
            width: "400px",
          }}
        />
      )}
      <img
        style={loaded ? {} : { display: "none" }}
        src={`https://res.cloudinary.com/dm3k4mri1/${foto.foto}`}
        onLoad={() => setLoaded(true)}
      />
      <h6 className="mt-4 text-center">{foto.titulo}</h6>
    </div>
  );
};

export default Foto;
