import React from "react";

//Import des pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

//Import du style général
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//Import Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Ici on importe notre composant Global Stlyle qui viens appliquer le style global à la page.*/}
      <GlobalStyle />
      <Nav />
      {/* Ici on wrap notre About Us dans un Route
      path indique quand est-ce qu'on veux render About Us
      / est toujours présent dans l'URL du coup il le render toujorus
      Enfin le deuxième props est "exact" qui dit qu'il faut qu'il y ai exactement / dans le lien pour pouvoir render
      c'est pratique parce que Route va chercher une approximation de notre lien. 
      Après avoir ajouté le exact, quand on va sur http://localhost:3000/work, j'ai que work qui est render
      */}
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          {/* Ici on wrap notre OurWork dans un Route
      path indique quand est-ce qu'on veux render Ourwork, ici quand le lien est http://localhost:3000/work */}
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
