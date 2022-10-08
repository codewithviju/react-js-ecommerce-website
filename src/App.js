import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
