import React, { useState, useEffect } from "react";
import "./discografia.css";
import Disco from "../disco/disco";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Discografia = () => {
  const [discos, setDiscos] = useState([]);
  const [titleDiscografia, setTitleDiscografia] = useState('');

  useEffect(() => {
    fetch("http://localhost:8000/api/sobremi/disco/")
      .then((res) => res.json())
      .then((data) => {
        setDiscos(data);
      });
      fetch("http://localhost:8000/api/sobremi/sobremi/")
      .then((res) => res.json())
      .then((data) => {
        setTitleDiscografia(data[0].titulo3);
      });
      Aos.init({ duration: 1000 });
  }, []);


  if (!titleDiscografia && discos.length < 1) {
    return "";
  } else{
    return (
      <div className="discografia">
        <h4 className="text-center mb-5 title-discografia mt-lg-0 py-xl-0">{titleDiscografia}</h4>
        <div className="timeline m-auto">
          {discos.map((disco, index) =>
            index % 2 === 0 ? (
              <Disco key={disco.id} disco={disco} side="left" />
            ) : (
              <Disco key={disco.id} disco={disco} side="right" />
            )
          )}
        </div>
      </div>
    );
  }


  
};

export default Discografia;
