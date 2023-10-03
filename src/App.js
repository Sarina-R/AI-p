import React from "react";
import "./App.css";
import { Brand, Cta, Navbar } from "./components";
import { WhatG, Posibility, Header, Footer, Features, Blog } from "./container";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatG />
        {/* <Features /> */}
        <Posibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
