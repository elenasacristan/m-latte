import React from "react";
import "./discografia.css";
import Disco from "../disco/disco";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Discografia = () => {
  return (
    <div className="discografia">
      <h4 className="text-center my-5">
        Discografía y colaboraciones
      </h4>
      <div className="timeline">
        {[1, 2, 3, 4].map((number) =>
          number % 2 === 0 ? <Disco side="left" /> : <Disco side="right" />
        )}
      </div>
    </div>
  );
};

export default Discografia;
