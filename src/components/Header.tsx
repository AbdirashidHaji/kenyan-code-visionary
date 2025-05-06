
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="font-bold text-xl text-kenyan-blue">
          AM<span className="text-kenyan-orange">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-kenyan-blue transition-colors"
              >
                {item}
              </a>
            )
          )}
          <Button className="bg-kenyan-blue hover:bg-kenyan-blue/90">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full animate-fade-in">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-kenyan-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <Button className="mt-2 w-full bg-kenyan-blue hover:bg-kenyan-blue/90">
            Resume
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
