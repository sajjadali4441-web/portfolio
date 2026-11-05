import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'EMPLOYMENT', href: '#employment' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'RESUME', href: '#resume' },
    { name: 'ABOUT ME', href: '#about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09162e]/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
          : 'bg-[#09162e] border-b border-white/10'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo / Name */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-white font-mono tracking-[0.2em] text-sm font-bold hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
            aria-label={`${personalProfile.name} Portfolio Home`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{personalProfile.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest text-slate-300"
            role="navigation"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#0a1b38] border-b border-cyan-500/20 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-fadeIn"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-xs font-semibold tracking-widest text-slate-200 hover:text-white hover:bg-blue-900/60 rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
