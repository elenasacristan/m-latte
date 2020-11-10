import React from "react";
import "./about.css";
import Discografia from "../discografia/discografia";
import Marta from "../../common/images/Marta.JPG";

const About = () => {
  return (
    <div className="about mx-auto container">
    {/* <h2 className="title">Sobre Mi</h2> */}
    {/* <hr/> */}
      <div className="row">
        <div className="col-12 col-xl-7 about-marta">
          <h2 className="mb-2 title">Sobre Mi:</h2>
          <h4>Marta Revuelta</h4>
          <img className="img-fluid" src={Marta} />
          <p className="about-marta-description">
            Cantante, maestra de música y educadora social, con amplia
            experiencia en impartición de talleres de musicoterapia para
            diferentes colectivos sociales, así como en la creación de diversos
            coros o la realización de cursos formativos relacionados con la
            música, la voz, guitarra, etc. Así mismo, desde hace más de 18 años
            realiza conciertos tanto en solitario como con diferentes
            agrupaciones musicales (Pangea, Algarabía, Álvaro Fraile...), con
            repertorios tan variados como la música del mundo, música sefardí,
            medieval, renacentista, canciones medicina, infantiles o canciones
            de siempre para mayores, además de haber grabado varios discos
            ("Takisunchis", "De Clérigos, sefardíes y trovadores", "SolFeAndo" y
            "De Aquí y De Allá"), colaborado con otros artistas, poner voz a
            música de otros compositores y haber cantado en escenarios de
            Guatemala, India, Perú, Argentina, Francia o Brasil. Por todo ello,
            es creadora y fundadora del proyecto Música Latte, con el cuál
            apuesta por utilizar la música como recurso para el bienestar, la
            integración social y el desarrollo personal, de manera que todo el
            mundo pueda experimentar y sentir de cerca el poder que tiene la
            música sobre nosotros. A su vez es asesora músico-social en un
            innovador proyecto tecnológico, científico y social que Nokia y
            Cáritas están desarrollando en España para estudiar cómo influye la
            música inmersiva en personas con trastornos neurodegenerativos.
          </p>
        </div>
        <div className="col-12 offset-xl-1 col-xl-4 discografia-container">
          <Discografia />
        </div>
      </div>
    </div>
  );
};

export default About;
