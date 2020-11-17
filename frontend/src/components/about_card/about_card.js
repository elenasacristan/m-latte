import React from "react";
import "./about_card.css";

const About_card = ({ item }) => {
  return (
    <div className="col-md-4">
      <div className="about-card-container d-flex flex-column mx-auto mb-4 mb-md-0">
        <div className="d-flex align-items-center justify-content-center pb-3">
          <i className={`fa ${item.logo_name}`}></i>
          <h4 className="ml-2">{item.titulo}</h4>
        </div>
        <ul className="pr-2 pl-3 mb-0">
          {item.description.split("\\").map((point, index) => (
            <li className="mt-1" key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About_card;
