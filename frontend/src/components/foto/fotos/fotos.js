import React from "react";
import "./fotos.css";
import Foto from "../foto/foto";

const Fotos = () => {
  return (
    <div class="fotos container px-2">
      <h2 className="font-weight-light text-center text-lg-left mt-4 mb-5">
        Fotos
      </h2>

      <div class="d-flex flex-wrap text-center">
        {[1, 2, 3, 4,5,6,7,8].map((number, index) => (
          index % 2 === 0 ?
            <Foto rotate={"right"}/> :
            <Foto rotate={"left"}/>
        ))}
      </div>
    </div>
  );
};

export default Fotos;
