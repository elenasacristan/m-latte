import React from "react";
import Spinner from "../../common/images/Spinner.svg";
import './Spinner.css'

export default function Spiner() {
  return (
    <div className="Spinner">
      <img src={Spinner} alt="Cargando..."/>
    </div>
  );
}