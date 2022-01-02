import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Import de BrowserRouter
//Ce que permet react router c'est de render uniquement le components auquel on fait appel
// et ce basé sur l'URL sur lequel on est, du coup pas besoin de recharcher la page
// On a l'impression qu'on est sur une App.
//Une fois importé on wrap notre app dans BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
