
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[11px] font-bold uppercase tracking-widest transition-colors ${
    isActive ? 'text-black' : 'text-muted hover:text-black'
  }`;

const SERVICES = [
  { to: '/lieux', label: 'Lieux & collectifs' },
  { to: '/organisations', label: 'Organisations' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const servicesActive = SERVICES.some((s) => pathname === s.to || pathname.startsWith(`${s.to}/`));
  const close = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-logo text-5xl leading-none group-hover:scale-110 transition-transform">§</span>
            <span className="text-sm font-bold tracking-tighter uppercase">Section9</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {/* Services — dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors ${
                servicesActive ? 'text-black' : 'text-muted group-hover:text-black'
              }`}
            >
              Services <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="min-w-[220px] bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 p-2 flex flex-col">
                {SERVICES.map((s) => (
                  <NavLink
                    key={s.to}
                    to={s.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-colors ${
                        isActive ? 'bg-black text-white' : 'text-muted hover:bg-gray-100 hover:text-black'
                      }`
                    }
                  >
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/projets" className={navLinkClass}>Projets</NavLink>
          <NavLink to="/events" className={navLinkClass}>Évènements</NavLink>
          <NavLink to="/about" className={navLinkClass}>À propos</NavLink>

          <a
            href="mailto:meet.section9@gmail.com"
            className="group ml-4 px-6 py-2.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 shadow-lg shadow-black/5"
          >
            Contacter S9 <Zap size={12} className="group-hover:fill-current transition-all" />
          </a>
        </nav>

        <div className="flex items-center gap-6 lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface border-b border-gray-200 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <a
            href="mailto:meet.section9@gmail.com"
            className="group w-full p-6 bg-black text-white rounded-[2rem] text-xl font-bold uppercase tracking-widest flex justify-between items-center"
            onClick={close}
          >
            Contacter S9 <Zap size={20} />
          </a>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Services</span>
            <Link to="/lieux" className="text-2xl font-bold tracking-tight pl-4" onClick={close}>Lieux &amp; collectifs</Link>
            <Link to="/organisations" className="text-2xl font-bold tracking-tight pl-4" onClick={close}>Organisations</Link>
          </div>
          <Link to="/projets" className="text-3xl font-bold tracking-tighter" onClick={close}>Projets</Link>
          <Link to="/events" className="text-3xl font-bold tracking-tighter" onClick={close}>Évènements</Link>
          <Link to="/about" className="text-3xl font-bold tracking-tighter" onClick={close}>À propos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
