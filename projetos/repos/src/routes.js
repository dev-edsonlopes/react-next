import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";
const Routes = () => {
  return (
    <BrowserRouter>
       <Route path="/" element={<Main />} />
      <Route path="/repositorio" element={<Repositorio />} />
    </BrowserRouter>
  );
};

export default Routes;
