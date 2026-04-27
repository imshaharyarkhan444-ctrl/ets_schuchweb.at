import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#strengths' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
              scrolled ? 'bg-deep-blue' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-deep-blue' : 'text-white'
              }`}>
                ETS
              </span>
              <span className={`block text-[10px] font-medium uppercase tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                Elektro Technik Schuch
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-deep-blue hover:bg-deep-blue/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 rounded-lg bg-soft-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-soft-green/25 transition-all duration-200 hover:bg-soft-green-dark hover:shadow-xl hover:shadow-soft-green/30 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-deep-blue' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-deep-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-3 text-center rounded-lg bg-soft-green px-5 py-3 text-sm font-semibold text-white shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
