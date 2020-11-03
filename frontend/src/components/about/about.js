import React from "react";
import "./about.css";
import Discografia from "../discografia/discografia";
import Marta from "../../common/images/Marta.JPG";

const About = () => {
  return (
    <div className="about mx-auto container">
      <div className="row">
        <div className="col-xl-7">
          <h2>Sobre Mi</h2>
          <h4>Marta Revuelta</h4>
          <img className="img-fluid" src={Marta} />
          <p>
            Consectetur cillum anim adipisicing velit officia sint tempor velit
            do ullamco esse. Amet excepteur labore adipisicing ea. Eu pariatur
            labore ex id velit. Eiusmod quis labore non voluptate sint aliquip
            ut sit sint laborum. Sunt occaecat aliquip quis cupidatat eiusmod
            eiusmod aute esse labore non culpa. Minim irure minim et occaecat.
            Aute pariatur do fugiat cillum occaecat veniam.
          </p>
          <p>
            Consectetur cillum anim adipisicing velit officia sint tempor velit
            do ullamco esse. Amet excepteur labore adipisicing ea. Eu pariatur
            labore ex id velit. Eiusmod quis labore non voluptate sint aliquip
            ut sit sint laborum. Sunt occaecat aliquip quis cupidatat eiusmod
            eiusmod aute esse labore non culpa. Minim irure minim et occaecat.
            Aute pariatur do fugiat cillum occaecat veniam.
          </p>
        </div>
        <div className="offset-xl-1 col-xl-4">
          <Discografia />
        </div>
      </div>
    </div>
  );
};

export default About;
