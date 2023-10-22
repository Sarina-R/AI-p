import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App1";
import Signup from "./container/signup/signup";
import Email from "./container/email/Email";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AI-p" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/send-an-email-to-me" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
