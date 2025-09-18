
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    // If we're on the home page, scroll directly to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Effect to handle scrolling when navigating from another page with hash
  React.useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>0918 412 692</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>vyroba@365tlac.sk</span>
            </div>
          </div>
          <div className="text-xs hidden md:block">
            Tlačíme 7 dní v týždni od 8:00 do 17:00 mimo otváracie hodiny nás prosím kontaktujte osobne
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">tlacdtf.sk</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6 mx-5 text-sm">
              <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>Úvod</span>
                <ChevronDown size={14} />
              </Link>
              <div 
                onClick={() => scrollToSection('preco-my')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                <span>Prečo My</span>
                <ChevronDown size={14} />
              </div>
              <div 
                onClick={() => scrollToSection('ako-to-funguje')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                <span>Ako to funguje</span>
                <ChevronDown size={14} />
              </div>
              <div 
                onClick={() => scrollToSection('cennik')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                <span>Cenník</span>
                <ChevronDown size={14} />
              </div>
              <span 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                FAQ
              </span>
              <span 
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                Kontakt
              </span>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center ml-5">
              <Button 
                className="btn-secondary"
                onClick={() => scrollToSection('kontakt')}
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Úvod
              </Link>
              <button 
                onClick={() => scrollToSection('preco-my')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Prečo My
              </button>
              <button 
                onClick={() => scrollToSection('ako-to-funguje')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Ako to funguje
              </button>
              <button 
                onClick={() => scrollToSection('cennik')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Cenník
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Kontakt
              </button>
              <div className="pt-2">
                <Button 
                  className="btn-secondary w-full"
                  onClick={() => scrollToSection('kontakt')}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
