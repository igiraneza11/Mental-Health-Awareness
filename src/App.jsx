import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Info from './pages/info';
import Involved from './pages/involved';
import Support from './pages/support';
import '../src/styles/style.css';

function App() {
  return (
    <div>
   <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/involved" element={<Involved />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
  </Router>
    </div>
  )
}

export default App;