import React, { useState } from "react";
import "./contacto.css";
import contacto_img from "../../common/images/contact.png";

const Contacto = () => {
  const [contact, setContact] = useState({
    nombre: "",
    email: "",
    descripcion: "",
    date: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    message: "",
    error: "",
    error_email: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (
      contact.nombre.trim() === "" ||
      contact.email.trim() === "" ||
      contact.descripcion.trim() === ""
    ) {
      setErrorMessage({
        message: "Todos los campos son obligatorios",
        error: "Todos los campos son obligatorios",
        error_email: "",
      });
      return;
    }

    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(contact.email)) {
      setErrorMessage({
        message: "",
        error: "",
        error_email: "Por favor introduzca un email valido",
      });
      return;
    }

    setErrorMessage({
      message: "",
      error: "",
      error_email: "",
    });

    //post data
    fetch("http://127.0.0.1:8000/api/contacto/Contacto/", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
    setErrorMessage({
      message: "¡Gracias por tu mensaje!",
      error: "",
      error_email: "",
    });

    setContact({
      nombre: "",
      email: "",
      descripcion: "",
      date: "",
    });
  };

  let { nombre, email, descripcion } = contact;

  return (
    <div className="contacto mx-auto px-4 px-md-5">
      <h2 className="title mt-4 mb-3 mb-lg-5 text-center">Contacto</h2>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 d-flex justify-content-center d-lg-block px-sm-5 px-lg-0 px-xl-4">
          <img src={contacto_img}></img>
        </div>
        <div className="mt-5 mt-lg-0 col col-lg-5">
          {errorMessage.error || errorMessage.message ? (
            errorMessage.error ? (
              <p className="error-msg text-center pt-2">{errorMessage.error}</p>
            ) : (
              <p className="success-msg text-center pt-2">
                {errorMessage.message}
              </p>
            )
          ) : null}

          <form className="mx-auto" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                name="nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                value={email}
                name="email"
              />
              {errorMessage.error_email && (
                <p className="error-email mt-1">{errorMessage.error_email}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="descripcion">En que podemos ayudarte?</label>
              <textarea
                onChange={handleChange}
                className="form-control"
                id="descripcion"
                rows="3"
                value={descripcion}
                name="descripcion"
              ></textarea>
            </div>
            <input className="mt-2 btn w-100" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
