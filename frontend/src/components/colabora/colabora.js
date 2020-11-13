import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./colabora.css";

const Colabora = () => {
  const [colabora, setColabora] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/colabora/Colabora/")
      .then((res) => res.json())
      .then((data) => setColabora(data[0]));
  }, []);

  if (Object.keys(colabora).length < 1) {
    return "loading";
  } else {
    return (
      <div className="colabora mx-auto container text-center">
        <h2 className="mt-4 mb-5">{colabora.titulo}</h2>
        <p className="mx-2">{colabora.texto1}</p>
        <p className="mx-2">{colabora.n_cuenta}</p>
        <hr />
        <p className="mt-5 mx-2">
          {colabora.texto2}
          <Link to="/contacto"> {colabora.palabra_link} </Link>
          {colabora.texto3}
        </p>
      </div>
    );
  }
};

export default Colabora;
