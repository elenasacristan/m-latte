import React from "react";
import "./notfound.css";
import not_found from "../../common/images/not_found.png";

const NotFound = () => {
  return (
    <div className="notfound text-center" id="about">
        <h2 className="title main-title m-auto w-75">No hemos encontrado la página</h2>
        <img className="pt-5" alt="pagina no existe" src={not_found} />
    </div>
  );
};

export default NotFound;
