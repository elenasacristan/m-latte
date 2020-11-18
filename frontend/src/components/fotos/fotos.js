import React, {useState, useEffect} from "react";
import "./fotos.css";
import Foto from "../foto/foto";

const Fotos = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/galeria/Foto/")
      .then((res) => res.json())
      .then((data) => {
        setFotos(data);
      });
  }, []);

  if (fotos.length < 1) {
    return "loading";
  } else {
    return (
      <div className="fotos container px-2">
        <h2 className="main-title title text-center text-lg-left mt-4 mb-5">
          Fotos
        </h2>

        <div className="fotos-container">
          {fotos.map((foto, index) =>
            index % 2 === 0 ? (
              <Foto key={foto.id} foto={foto} rotate={"right"} />
            ) : (
              <Foto key={foto.id} foto={foto} rotate={"left"} />
            )
          )}
        </div>
      </div>
    );
  }
};

export default Fotos;
