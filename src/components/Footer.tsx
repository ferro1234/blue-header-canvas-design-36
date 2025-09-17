
import React from 'react';

interface FooterProps {
  topWaveColor?: string;
}

export const Footer = ({ topWaveColor = "#1e3a8a" }: FooterProps) => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-30">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H0V120Z" 
            fill={topWaveColor}
          />
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#000000"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 font-semibold mb-2">ADRESA DIELNE:</p>
                <p className="text-gray-400">Vrakunská cesta 22</p>
                <p className="text-gray-400">82105 BRATISLAVA</p>
              </div>
              <div>
                <p className="text-gray-400">Stretnutie si prosím dohodnite vopred telefonicky</p>
                <p className="text-white font-semibold mt-2">0918 412 692</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Fakturačné údaje</h3>
            <div className="space-y-2 text-gray-400">
              <p className="text-white font-semibold">Kanucto s.r.o.</p>
              <p>Dvojkrížna 13155/2</p>
              <p>82107 BRATISLAVA</p>
              <p>IČO: 51982595</p>
              <p>DIČ: 2120856408</p>
              <p>IČ DPH: SK2120856408</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Info</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Cenník
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Ukážky
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Kontakt
              </a>
              <a href="mailto:vyroba@365tlac.sk" className="block text-white hover:text-yellow-400 transition-colors font-semibold">
                vyroba@365tlac.sk
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Objednávky</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Objednať DTF transfery
              </a>
              <a href="/ako-pripravit-grafiku" className="block text-gray-400 hover:text-white transition-colors">
                Ako pripraviť grafiku?
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">© 2025 Kanucto s.r.o.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Ochrana osobných údajov
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Obchodné podmienky
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
