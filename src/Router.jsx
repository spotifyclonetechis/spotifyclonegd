import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Play from "./containers/Play";

const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Play />} />
        {/* <Route exact path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default Router;
