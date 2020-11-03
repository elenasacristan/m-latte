import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About_card from "./components/about_card/about_card";
import About from "./components/about/about";
import Activities from "./components/activities/activities";
import Detail from "./components/detail/detail";
import Discografia from "./components/discografia/discografia";
import Fotos from "./components/fotos/fotos";
import Videos from "./components/videos/videos";
import Inicio from "./components/inicio/inicio";


const App = () => {
  return (
    <>
      <NavBar />
      {/* <About /> */}
      {/* <Activities /> */}
      {/* <Detail />*/}
      {/* <Fotos /> */}
      {/* <Videos/> */}
      {/* <Audios/> */}
      {/* <About_card /> */}
      <Inicio/>
    </>
  );
};

export default App;
