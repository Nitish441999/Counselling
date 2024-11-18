import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
