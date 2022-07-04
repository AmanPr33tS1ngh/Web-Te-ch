import './App.css';
import Footer from './components/Footer';
import {
  HashRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Services from './components/Services';
import Contact from './components/Contact';

import React from 'react';

function App() {
  return (
    <>
      <React.Fragment>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/courses" element={<Courses />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/Services" element={<Services />} exact />
          </Routes>
          <Footer />
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
