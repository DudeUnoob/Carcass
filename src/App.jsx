import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Navbar />
      <Home />
      <Destination />
      <Trip />
      <Footer /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
