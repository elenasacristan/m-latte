import React from "react";
import "./activities.css";
import Activity from "../activity/activity";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Activities = () => {
  return (
    <div class="activities container">
      <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
        Conciertos
      </h2>

      <hr class="mt-2 mb-5" />
      <div class="row text-center">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </div>
  );
};

export default Activities;
