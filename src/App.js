import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App1";
import Signup from "./container/signup/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AI-p" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
