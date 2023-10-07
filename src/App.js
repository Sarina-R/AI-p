import React from "react";
import "./App.css";
import { Brand, Cta, Navbar } from "./components";
import {
  WhatG,
  Posibility,
  Header,
  Footer,
  Feature,
  Mew,
  Blog,
} from "./container";
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
        {/* <Feature /> */}
        <Mew />
        <Posibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
