import React from "react";

//Import des pages
import AboutUs from "./pages/AboutUs";

//Import du style général
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      {/* Ici on importe notre composant Global Stlyle qui viens appliquer le style global à la page.*/}
      <GlobalStyle/>
      <AboutUs />
    </div>
  );
}

export default App;
