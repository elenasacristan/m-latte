import React, { useState, useEffect } from "react";
import "./inicio.css";
import About_card from "../about_card/about_card";
import Hacemos_item from "../hacemos-item/Hacemos_item";
import Spinner from "../Spinner/Spinner";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Inicio = () => {
  const [inicio, setInicio] = useState({});
  const [queHacemos, setQueHacemos] = useState([]);
  const [queQueremos, setQueQueremos] = useState([]);

  useEffect(() => {
    fetch("/api/inicio/inicio/")
      .then((res) => res.json())
      .then((data) => {
        setInicio(data[0]);
      });
    fetch("/api/inicio/queQueremos/")
      .then((res) => res.json())
      .then((data) => {
        setQueQueremos(data);
      });
    fetch("/api/inicio/queHacemos/")
      .then((res) => res.json())
      .then((data) => {
        setQueHacemos(data);
      });
      Aos.init({ duration: 2000 });
  }, []);

  if (Object.keys(inicio) < 1 || queQueremos.length < 1 || setQueHacemos.length < 1) {
    return <Spinner/>;
  } else {
    return (
      <div className="inicio">
        <div className="inicio-banner" style={{ backgroundImage:`url(https://res.cloudinary.com/dm3k4mri1/${inicio.imagen_inicio})` }}>
          <div className="container-sentence d-flex">
            <h3 className="text-center">
              {inicio.frase}
              <br />{inicio.author}
            </h3>
          </div>
        </div>
        <div className="inicio-proposito container">
          <div className="row pt-5 pb-4 d-flex justify-content-center">
            {queQueremos.map((item) => (
              <About_card key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="inicio-hacemos-container d-flex" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 mb-5 mb-lg-0 text-center">
                <h1>{inicio.title2}</h1>
              </div>
              {queHacemos.map((item) => (
              <Hacemos_item key={item.id} item={item} />
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Inicio;
