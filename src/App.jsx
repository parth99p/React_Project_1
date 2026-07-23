import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";

const App = () => {

let [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Navbar cart={cart} setCart={setCart}/>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
