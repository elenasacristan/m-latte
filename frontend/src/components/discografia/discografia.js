import React from "react";
import "./discografia.css";
import Disco from "../disco/disco";

const Discografia = () => {
  return (
    <div class="discografia container">
      <h2 className="font-weight-light text-center text-lg-left mt-4 mb-5">
        Discografía
      </h2>

      <div class="row text-center">
        {[1, 2, 3, 4].map((number) => (
          <Disco />
        ))}
      </div>
    </div>
  );
};

export default Discografia;
