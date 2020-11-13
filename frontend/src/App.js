import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/navbar";
import Detail from "./components/detail/detail";
import Main from "./components/main/main";
import Activities from "./components/activities/activities";
import Fotos from "./components/fotos/fotos";
import Videos from "./components/videos/videos";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Colabora from "./components/colabora/colabora";
import Contacto from "./components/contacto/contacto";

const App = () => {
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/SobreMi" component={About} />
          <Route exact path="/actividades/:tipo" component={Activities} />
          <Route exact path="/actividades/:tipo/:actividadId" component={Detail} />
          <Route exact path="/fotos" component={Fotos} />
          <Route exact path="/videos" component={Videos} />    
          <Route exact path="/colabora" component={Colabora} />    
          <Route exact path="/contacto" component={Contacto} />    
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
