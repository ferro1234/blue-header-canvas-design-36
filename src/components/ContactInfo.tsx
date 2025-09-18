import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <section id="kontakt" className="bg-gradient-to-b from-blue-700 to-blue-900 py-16" aria-labelledby="kontakt-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="kontakt-heading" className="text-4xl font-bold text-white mb-4">Kontaktujte nás</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-yellow-400" />
              Adresa dielne
            </h3>
            <div className="space-y-3 text-blue-100 text-lg">
              <p className="font-semibold">Vrakunská cesta 22</p>
              <p>82105 BRATISLAVA</p>
              <p className="text-yellow-200 mt-4">
                Stretnutie si prosím dohodnite vopred telefonicky
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-3 text-yellow-400" />
              Kontaktné údaje
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-xl font-semibold">0918 412 692</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:vyroba@365tlac.sk" className="text-yellow-300 hover:text-yellow-100 transition-colors text-lg">
                  vyroba@365tlac.sk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-100 text-lg">Po-Pi 8:00-17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6">Fakturačné údaje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-100 text-lg">
            <div>
              <p className="text-white font-semibold text-xl mb-2">Kanucto s.r.o.</p>
              <p>Dvojkrížna 13155/2</p>
              <p>82107 BRATISLAVA</p>
            </div>
            <div>
              <p>IČO: 51982595</p>
              <p>DIČ: 2120856408</p>
              <p>IČ DPH: SK2120856408</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};