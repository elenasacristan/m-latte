import React, { useState, useEffect } from "react";
import "./about.css";
import Discografia from "../discografia/discografia";

const About = () => {
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/sobremi/sobremi/")
      .then((res) => res.json())
      .then((data) => {
        setAboutMe(data[0]);
      });
  }, []);

  if (Object.keys(aboutMe) < 1) {
    return "loading";
  } else {
    return (
      <div className="about mt-5 mx-auto container" id="about">
        <div className="row">
          <div className="col-12 col-xl-5 about-marta">
            <h2 className="main-title title mb-sm-4">{aboutMe.titulo1}</h2>
            <h4>{aboutMe.titulo2}</h4>
            <img className="img-fluid" src={aboutMe.imagen_marta} />

            {aboutMe.descripcion.split("\\").map((parrafo, index) => (
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
    );
  }
};

export default About;
