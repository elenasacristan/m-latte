import React from "react";
import "./Hacemos_item.css";
import {Link} from "react-router-dom"

const HacemosItem = ({ item }) => {
  return (
    <div className="col-sm-4 col-lg-2 d-flex flex-column mx-auto align-items-center mb-4 mb-md-0">
      <i className={`fa ${item.logo_name}`}></i>
      <h5 className="my-2">{item.titulo}</h5>
      <Link className="btn btn-sm pt-0 pb-0" to={`/actividades/${item.titulo}`}>{item.text_boton}</Link>
    </div>
  );
};

export default HacemosItem;
