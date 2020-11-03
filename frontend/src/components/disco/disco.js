import React from "react";
import "./disco.css";
import Pedagogico from "../../common/images/Pedagogicos.png";


const Disco= ({ side }) => {
  return (
    <div class={`timeline-item timeline-${side}`}>
          <div class="timeline-content text-center">
            <h2>2017</h2>
            <h3>Takisunchis</h3>
            <h5>Marta Revuelta</h5>
            <div className="d-flex justify-content-center">
              <img src={Pedagogico} />
            </div>
            <p>Canciones para niños</p>
          </div>
        </div>
  );
};

export default Disco;
