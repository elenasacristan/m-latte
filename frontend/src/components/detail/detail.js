import React, {useState, useEffect} from "react";
import "./detail.css";
import Pedagogico from "../../common/images/Pedagogicos.png";
import CardDetail from "../card_detail/card_detail";

const Detail = ({ match }) => {
  const [actividad, setActividad] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/actividades/Actividades/${match.params.actividadId}/`)
      .then((res) => res.json())
      .then((data) => setActividad(data));
  }, []);
  
  if (Object.keys(actividad).length < 1) {
    return "loading";
  } else {
    return (
      <div className="detail mx-auto container">
        <h3 className="font-weight-light text-center text-lg-left mt-4 mb-5">
          {actividad.titulo}
        </h3>
  
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <img className="w-100 mb-5" src={actividad.foto} />
          </div>
          <div className="col-12 col-md-6 col-lg-7 col-xl-8 pl-lg-5">
            <p className="text-justify">
            {actividad.descripcion}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 mt-md-2">
            <CardDetail actividad={actividad}/>
          </div>
        </div>
      </div>
    );
  }

};

export default Detail;
