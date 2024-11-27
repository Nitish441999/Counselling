import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import MbbsCource from "./Pages/Cource/MbbsCource";
import BtechCource from "./Pages/Cource/BtechCource";
import LawCource from "./Pages/Cource/LawCource";
import AllCollage from "./Pages/Collages/AllCollage";

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/mbbsCourses" element={<MbbsCource />} />
        <Route path="/betchCourses" element={<BtechCource />} />
        <Route path="/lawCourses" element={<LawCource />} />
        <Route path={location.pathname} element={<AllCollage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
