import React from "react";
import "./detail.css";
import Pedagogico from "../../common/images/Pedagogicos.png";
import CardDetail from "../card_detail/card_detail";

const Detail = () => {
  return (
    <div className="detail mx-auto container">
      <h3 className="font-weight-light text-center text-lg-left mt-4 mb-5 container">
        Conciertos Pedagogicos
      </h3>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
          <img className="w-100 mb-5" src={Pedagogico} />
        </div>
        <div className="col-12 col-md-6 col-lg-7 col-xl-8">
          <p className="text-justify">
            Consectetur cillum anim adipisicing velit officia sint tempor velit
            do ullamco esse. Amet excepteur labore adipisicing ea. Eu pariatur
            labore ex id velit. Eiusmod quis labore non voluptate sint aliquip
            ut sit sint laborum. Sunt occaecat aliquip quis cupidatat eiusmod
            eiusmod aute esse labore non culpa. Minim irure minim et occaecat.
            Aute pariatur do fugiat cillum occaecat veniam.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5 mt-md-2">
          <CardDetail />
        </div>
      </div>
    </div>
  );
};

export default Detail;
