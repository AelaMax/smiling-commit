import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Praxis from './pages/Praxis';
import Service from './pages/Service';
import Implants from './pages/Implants';
import Robotics from './pages/Robotics';
import Esthetics from './pages/Esthetics';
import Gallery from './pages/Gallery';
import Map from './pages/Map';

// import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Appointment from './components/Appointment';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* <Hero />
      <About />
      <Appointment />
    <Services /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Praxis' element={<Praxis />} />
        <Route path='service' element={<Service />} />
        <Route path='implants' element={<Implants />} />
        <Route path='robotics' element={<Robotics />} />
        <Route path='esthetics' element={<Esthetics />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='map' element={<Map />} />
        {/* <Route path='SingleService/:id' element={<SingleService />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
