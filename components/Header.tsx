
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-logo text-5xl leading-none group-hover:scale-110 transition-transform">§</span>
            <span className="text-sm font-bold tracking-tighter uppercase">
              Section9
            </span>
          </Link>
        
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/unique-offer"
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-muted hover:text-black'}`
            }
          >
            L'OFFRE
          </NavLink>

          <NavLink 
            to="/toolkit"
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-muted hover:text-black'}`
            }
          >
            TOOLKIT
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-muted hover:text-black'}`
            }
          >
            MANIFESTE
          </NavLink>
          
          <NavLink 
            to="/events" 
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-muted hover:text-black'}`
            }
          >
            EVENTS
          </NavLink>
          
          {/* <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-[11px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-muted hover:text-black'}`
            }
          >
            CONTACTS
          </NavLink> */}

          <Link 
            to="/contact" 
            className="group ml-4 px-6 py-2.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 shadow-lg shadow-black/5"
          >
            INTÉGRER MON LAB <Zap size={12} className="group-hover:fill-current transition-all" />
          </Link>
        </nav>

        <div className="flex items-center gap-6 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-gray-200 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <Link to="/contact" className="group w-full p-6 bg-black text-white rounded-[2rem] text-xl font-bold uppercase tracking-widest flex justify-between items-center" onClick={() => setIsMobileMenuOpen(false)}>
            INTÉGRER MON LAB <Zap size={20} />
          </Link>
          <Link to="/unique-offer" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>L'OFFRE</Link>
          <Link to="/toolkit" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>TOOLKIT</Link>
          <Link to="/about" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>MANIFESTE</Link>
          <Link to="/events" className="text-3xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link>
          <Link to="/contact" className="text-3xl font-bold tracking-tighter underline underline-offset-8" onClick={() => setIsMobileMenuOpen(false)}>CONTACTS</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
