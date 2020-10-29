import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";
import Activities from "./components/activities/activities";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <About /> */}
      <Activities />
    </>
  );
};

export default App;
