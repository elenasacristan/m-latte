import React from "react";
import "./activities.css";
import Activity from "../activity/activity";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Activities = () => {
  return (
    <div class="activities container">
      <h2 className="font-weight-light text-center text-lg-left mt-4 mb-5">
        Conciertos
      </h2>

      <div class="row text-center">
        {[1,2,3,4].map((number, index) => (
            index % 2 === 0 ?
                <Activity color="#2994A4" /> :
                <Activity color="#C84E56" /> 
        )
        )}
      </div>
    </div>
  );
};

export default Activities;
