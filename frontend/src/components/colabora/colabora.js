import React from "react";
import { Link } from "react-router-dom";
import "./colabora.css";

const Colabora = () => {
  return (
    <div className="colabora mx-auto container text-center">
      <h2 className="mt-4 mb-5">Quieres colaborar?</h2>
      <p className="mx-2">
        Si eres de los que sabe que la música tiene un gran poder en las
        personas y quieres ayudarnos a seguir acercársela a todos, estaremos
        encantados si quieres hacer alguna donación en el siguiente número de
        cuenta:
      </p>
      <p className="mx-2">ES2500730100500615247246</p>
      <hr/>
      <p className="mx-2">
        Si quieres contactar con nosotros por este u otro motivo, pulsa
        <Link to="/contacto"> aquí</Link>
      </p>
    </div>
  );
};

export default Colabora;
