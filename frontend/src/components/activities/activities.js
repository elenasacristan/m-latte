import React from "react";
import "./activities.css";
import Activity from "../activity/activity";

const Activities = ({ match }) => {
  return (
    <div className="activities container">
      <h2 className="text-center text-lg-left mt-4 mb-5">
        {match.params.tipo}
      </h2>

      <div className="row text-center">
        {[1, 2, 3, 4].map((number, index) =>
          index % 2 === 0 ? (
            <Activity tipo={match.params.tipo} color="#2994A4" />
          ) : (
            <Activity tipo={match.params.tipo} color="#C84E56" />
          )
        )}
      </div>
    </div>
  );
};

export default Activities;
