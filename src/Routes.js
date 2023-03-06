import React from "react";
import Home from "./core/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function Routes() {
//   return <BrowserRouter></BrowserRouter>;
// }

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
