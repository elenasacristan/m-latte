import React, { useState, useEffect } from "react";
import "./fotos.css";
import Foto from "../foto/foto";
import Spinner from "../Spinner/Spinner";

const Fotos = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch("/api/galeria/Foto/")
      .then((res) => res.json())
      .then((data) => {
        setFotos(data);
      });
  }, []);

  if (fotos.length < 1) {
    return <Spinner />;
  } else {
    return (
      <div className="fotos">
        <div className="container px-4 pb-5">
          <h2 className="main-title title text-center text-lg-left mt-4  mb-5">
            Fotos
          </h2>
          <div className="fotos-container">
            {fotos.map((foto, index) =>
              index % 2 === 0 ? (
                <a
                  key={foto.id}
                  href={`https://res.cloudinary.com/dm3k4mri1/${foto.foto}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Foto foto={foto} rotate={"right"} />
                </a>
              ) : (
                <a
                  key={foto.id}
                  href={`https://res.cloudinary.com/dm3k4mri1/${foto.foto}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Foto foto={foto} rotate={"left"} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Fotos;
