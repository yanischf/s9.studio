
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import OfferDetail from './pages/OfferDetail';
import MetaDesignToolkit from './pages/MetaDesignToolkit';
import ToolkitDetail from './pages/ToolkitDetail';
import UniqueOffer from './pages/UniqueOffer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Verrouillage du mode clair au démarrage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/unique-offer" element={<UniqueOffer />} />
            <Route path="/offres" element={<Offers />} />
            <Route path="/toolkit" element={<MetaDesignToolkit />} />
            <Route path="/toolkit/:id" element={<ToolkitDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offer/:id" element={<OfferDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
