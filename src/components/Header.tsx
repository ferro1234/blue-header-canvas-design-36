
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
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
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+0012345678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>printbe@infor.com</span>
            </div>
          </div>
          <div className="text-xs">
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
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">PrintBe</span>
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
              <Link to="/ako-pripravit-grafiku" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>Ako pripraviť grafiku</span>
                <ChevronDown size={14} />
              </Link>
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

            {/* CTA Button */}
            <div className="flex items-center ml-5">
              <Button className="btn-primary">
                Objednať DTF tlač →
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
