import React from "react";
import "./discografia.css";
import Disco from "../disco/disco";
import Pedagogico from "../../common/images/Pedagogicos.png";

const Discografia = () => {
  return (
    <div class="discografia ml-4 ml-lg-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="font-weight-light text-center text-lg-left mt-4 mb-5">
              Discografía y colaboraciones
            </h4>
          </div>
        </div>

        <div className="row timeline">
          <div className="disco-wrapper">
            <div
              className="col discografia-item d-flex flex-column"
              data-year="2006"
            >
              <h3>Takisunchis</h3>
              <h5>Marta Revuelta</h5>
              <div>
                <img className="img-fluid" src={Pedagogico} />
              </div>
              <p>Canciones para niños</p>
            </div>
            <div
              className="col discografia-item d-flex flex-column"
              data-year="2006"
            >
              <h3>Takisunchis</h3>
              <h5>Marta Revuelta</h5>
              <div>
                <img className="img-fluid" src={Pedagogico} />
              </div>
              <p>Canciones para niños</p>
            </div>
            <div
              className="col discografia-item d-flex flex-column"
              data-year="2006"
            >
              <h3>Takisunchis</h3>
              <h5>Marta Revuelta</h5>
              <div>
                <img className="img-fluid" src={Pedagogico} />
              </div>
              <p>Canciones para niños</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row text-center">
        {[1, 2, 3, 4].map((number) => (
          <Disco />
        ))}
      </div> */}
    </div>
  );
};

export default Discografia;
