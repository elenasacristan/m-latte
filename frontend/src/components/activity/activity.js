import React from "react";
import "./activity.css";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Activity = () => {
  return (
    <div class="col-lg-4 col-md-6 col-12">
      <div className="d-block mb-4 h-100 acivity-container">
        <img class="img-fluid" src={Pedagogico} />
        <h2 className="mt-4 mx-auto">Pedagogico</h2>
        <button className="btn btn-lg mb-4">Detalles</button>
      </div>
    </div>
  );
};

export default Activity;
