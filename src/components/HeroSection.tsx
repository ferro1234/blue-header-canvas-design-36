
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8">
          {/* Left content */}
          <div className="text-gray-900 fade-in-up">
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Nonstop:
              <br />
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/5f7c0d41-3393-49e2-a30b-4cefdbf0f031.png"
                  alt="Jaroslav Kušnirer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  DTF výroba
                </span>
              </div>
            </h1>

            {/* Text without indentation */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Naše digitálne termotransfery sú nielen kvalitne vytlačené, ale 
                aj rýchlo vyrobené a vyexpedované. Pridajte k tomu lákavé ceny a máte kombináciu, 
                ktorá osloví každého. Volám sa Jaroslav Kušnirer a vediem túto tlačiareň. Rád vám 
                pomôžem s tlačou vašej reklamy.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-secondary text-lg px-8 py-4">
                Kontaktujte nás →
              </Button>
            </div>
          </div>

          {/* Right content - Floating image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative float-animation">
              <img 
                src="/lovable-uploads/96200e31-b2d0-4300-b340-756abb96d1f0.png"
                alt="Business Magazine"
                className="w-[537px] h-auto transform rotate-12 hover:rotate-6 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave - positioned directly after content */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#2563eb"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
