import React from "react";

//Import des pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Import du style général
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//Import Router
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  //Frame motion a besoin d'une cle pour fonctionner, on importe donc useLocation qui contient une clef par page.
  const location = useLocation();

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
      {/*On ajoute animate presence qui wrap notre switch pour utiliser l'exit dans framer et qu'on puisse
      donner à framer la position dans laquelle on est pour savoir quand appliquer l'exit anim
      exitBeforeEnter permet d'appliquer d'attendre que l'anim exit soit fini pour passer à l'anim de la page suivante
      sinon les deux startent en même temps. */}
      <AnimatePresence exitBeforeEnter>
        {/*On ajoute dans le switch la location et la clef pour framer
         */}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            {/* Ici on wrap notre OurWork dans un Route
      path indique quand est-ce qu'on veux render Ourwork, ici quand le lien est http://localhost:3000/work */}
            <OurWork />
          </Route>
          <Route>
            <MovieDetail path="/work/:id" />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
