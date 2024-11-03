import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutPage from './Pages/About/AboutPage';
import Services from './Pages/Services/ServicesPage';
import OurCompanies from './Pages/OurCompanies/OurCompanies';
import ContactUs from './Pages/ContactUs/ContactUs'
import WhatsappButton from './Pages/ContactUs/Whatsapp';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path = "/OurCompanies" element={<OurCompanies/>}/>
        <Route path = "/ContactUs" element={<ContactUs/>}/>
      </Routes>
      <WhatsappButton/>
      <Footer/>
    </Router>
  );
}

export default App;
