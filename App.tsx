
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import OfferDetail from './pages/OfferDetail';
import MetaDesignToolkit from './pages/MetaDesignToolkit';
import ToolkitDetail from './pages/ToolkitDetail';
import UniqueOffer from './pages/UniqueOffer';
import UniqueOfferV2 from './pages/UniqueOfferV2';
import SectionsToKeep from './pages/SectionsToKeep';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const GA_MEASUREMENT_ID = 'G-MKRG7BWT1K';

const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'function') return;
    const path = `${location.pathname}${location.search}${location.hash}`;
    gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location]);
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
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Offers />} />
            <Route path="/home-old" element={<Home />} />
            <Route path="/v2" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/unique-offer" element={<UniqueOffer />} />
            <Route path="/unique-offer-v2" element={<UniqueOfferV2 />} />
            <Route path="/sections-to-keep" element={<SectionsToKeep />} />
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
