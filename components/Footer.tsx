
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-100 py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-logo text-3xl leading-none group-hover:scale-110 transition-transform">§</span>
            <span className="text-[10px] font-bold tracking-tighter uppercase text-black">Section9</span>
          </Link>
          <span className="text-[10px] font-medium text-muted uppercase tracking-widest">
            © {new Date().getFullYear()}
          </span>
        </div>

        <nav className="flex items-center gap-8">
          <Link to="/about" className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted hover:text-black transition-colors">Manifeste</Link>
          <Link to="/unique-offer" className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted hover:text-black transition-colors">L'Offre</Link>
          <Link to="/contact" className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted hover:text-black transition-colors">Contact</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted hover:text-black transition-colors">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
