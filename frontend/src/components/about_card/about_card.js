import React from "react";
import "./about_card.css";
import { GiBullseye } from "react-icons/gi";
import { GrDiamond } from "react-icons/gr";
import { FaEye } from "react-icons/fa";

const About_card = () => {
  return (
    <div className="col-md-4">
      <div className="about-card-container d-flex flex-column mb-md-5">
        <div className="d-flex align-items-center pb-3">
          <GiBullseye size="2rem" color="#4F9BA6" />
          <h4 className="ml-2">Proposito</h4>
        </div>
        <ul className="pr-2 pl-4">
          <li>Consectetur cillum anim adipisicing velit officia</li>
          <li>Consectetur cillum anim adipisicing velit officia</li>
          <li>Consectetur cillum anim adipisicing velit officia</li>
        </ul>
      </div>
    </div>
  );
};

export default About_card;
