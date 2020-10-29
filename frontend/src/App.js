import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";
import Activities from "./components/activities/activities";
import Detail from "./components/detail/detail";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <About /> */}
      {/* <Activities /> */}
      <Detail />
    </>
  );
};

export default App;
