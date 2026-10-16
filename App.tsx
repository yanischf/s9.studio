
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SeoManager from './components/SeoManager';
import { getSeo } from './seo';
import Home from './pages/Home';
import Lieux from './pages/Lieux';
import Organisations from './pages/Organisations';
import Projets from './pages/Projets';
import About from './pages/About';
import Events from './pages/Events';
import MetaDesignToolkit from './pages/MetaDesignToolkit';
import ToolkitDetail from './pages/ToolkitDetail';
import OfferDetail from './pages/OfferDetail';
// Archives (noindex) — anciennes versions conservées pour réutilisation.
import ArchivedHome from './pages/archive/Offers';
import HomeMeta from './pages/archive/HomeMeta';
import HomeOld from './pages/archive/HomeOld';
import Home2 from './pages/archive/Home2';
import UniqueOffer from './pages/archive/UniqueOffer';
import UniqueOfferV2 from './pages/archive/UniqueOfferV2';
import SectionsToKeep from './pages/archive/SectionsToKeep';

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
      page_title: getSeo(location.pathname).title,
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
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <SeoManager />
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lieux" element={<Lieux />} />
            <Route path="/organisations" element={<Organisations />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/about" element={<About />} />
            <Route path="/toolkit" element={<MetaDesignToolkit />} />
            <Route path="/toolkit/:id" element={<ToolkitDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/offer/:id" element={<OfferDetail />} />
            {/* Archives (noindex) */}
            <Route path="/archive/home" element={<ArchivedHome />} />
            <Route path="/archive/home-meta" element={<HomeMeta />} />
            <Route path="/archive/home-old" element={<HomeOld />} />
            <Route path="/archive/v2" element={<Home2 />} />
            <Route path="/archive/unique-offer" element={<UniqueOffer />} />
            <Route path="/archive/unique-offer-v2" element={<UniqueOfferV2 />} />
            <Route path="/archive/sections-to-keep" element={<SectionsToKeep />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
