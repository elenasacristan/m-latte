import React from "react";
import "./contacto.css";

const Contacto = () => {
  return (
    <div className="contacto mx-auto container">
      <h2 className="mt-4 mb-5 text-center">Contacto</h2>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nombre:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email:</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            En que podemos ayudarte?
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        <input
          className="mt-2 btn btn-success w-100"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default Contacto;
