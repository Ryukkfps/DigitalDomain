import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutPage from './Pages/About/AboutPage';
import Services from './Pages/Services/ServicesPage';
import OurCompanies from './Pages/OurCompanies/OurCompanies';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path = "OurCompanies" element={<OurCompanies/>}/>
      </Routes>
    </Router>
  );
}

export default App;
