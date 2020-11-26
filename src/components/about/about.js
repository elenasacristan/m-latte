import React, { useState, useEffect } from "react";
import "./about.css";
import Discografia from "../discografia/discografia";
import Spinner from "../Spinner/Spinner";

const About = () => {
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    fetch("/api/sobremi/sobremi/")
      .then((res) => res.json())
      .then((data) => {
        setAboutMe(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (Object.keys(aboutMe) < 1) {
    return <Spinner />;
  } else {
    return (
      <div className="bkg-about">
        <div className="about mt-5 mx-auto container" id="about">
          <div className="row mb-5 container-sobre">
            <div className="col">
              <h2 className="main-title title mb-sm-4">{aboutMe.titulo0}</h2>
              {aboutMe.descripcion0 && aboutMe.descripcion0.split("\\").map((parrafo, index) => (
                <p key={index} className="about-marta-description">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-5 about-marta mt-5">
              <h2 className="main-title title mb-sm-4">{aboutMe.titulo1}</h2>
              <h4>{aboutMe.titulo2}</h4>
              <img
                className="img-fluid"
                src={`https://res.cloudinary.com/dm3k4mri1/${aboutMe.imagen_marta}`}
                alt="Marta Revuelta"
              />

              {aboutMe.descripcion && aboutMe.descripcion.split("\\").map((parrafo, index) => (
                <p key={index} className="about-marta-description">
                  {parrafo}
                </p>
              ))}
            </div>
            <div className="col-12 offset-xl-1 col-xl-6 discografia-container">
              <Discografia />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
