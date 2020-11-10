import React from "react";
import "./Hacemos_item.css";


const Hacemos_item = () => {
  return (
    <div className="col-sm-4 col-lg-2 d-flex flex-column mx-auto align-items-center mb-4 mb-md-0">
    <i class="fa fa-diamond"></i>
      <h5 className="my-2">Proposito</h5>
      <button className="btn btn-sm pt-2 pb-0">Detalles</button>
    </div>
  );
};

export default Hacemos_item;
