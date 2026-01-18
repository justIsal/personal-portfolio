import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Home from './pages/Home';
import Archive from './pages/Archive';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="relative min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar />
        <SocialSidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
