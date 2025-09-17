import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FileImage, Palette, Download, CheckCircle, Monitor, Printer, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GraphicsGuideStep = ({
  icon: Icon,
  title,
  description,
  details,
  isEven = false,
  expandableContent = null
}) => {
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 mb-16`}>
      <div className="flex-1">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Icon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{description}</p>
          <div className="space-y-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{detail}</span>
              </div>
            ))}
          </div>
          {expandableContent && expandableContent}
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className={`w-64 h-64 bg-gradient-to-br ${isEven ? 'from-purple-400 to-pink-600' : 'from-blue-400 to-indigo-600'} rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300`}>
          <Icon size={80} className="text-white opacity-80" />
        </div>
      </div>
    </div>
  );
};

const FormatCard = ({
  format,
  extension,
  description,
  color
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
        <FileImage size={24} className="text-white" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{format}</h4>
      <p className="text-sm text-gray-500 font-mono mb-3">{extension}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const SampleDownloadCard = ({ title, imageSrc, downloadLink }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
        <FileImage size={48} className="text-gray-400" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
      <Button className="w-full" variant="outline">
        <Download size={16} className="mr-2" />
        Stiahnuť ukážku
      </Button>
    </div>
  );
};

const GraphicsGuide = () => {
  const steps = [
    {
      icon: Settings,
      title: "1. Nastavte rozmery grafiky",
      description: "Správne nastavenie rozmerov je základom pre kvalitný DTF transfer.",
      details: [
        "Maximálna šírka: 56,5 cm",
        "Maximálna dĺžka: 220 cm (2,2 m)",
        "Pridajte presah: +1 mm na každej strane"
      ]
    },
    {
      icon: Palette,
      title: "2. Pracujte v správnej farebnosti",
      description: "Farebný profil a kalibrácia sú kľúčové pre presné farby na DTF transferoch.",
      details: [
        "Farebný profil: 8-bit CMYK",
        "Biela farba: nastavte na 0 % CMYK",
        "Kalibrácia monitora: používajte farebne presný monitor"
      ],
      expandableContent: (
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="soft-proofing">
              <AccordionTrigger className="text-blue-600 hover:text-blue-800">
                Soft proofing (Adobe Photoshop)
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 space-y-2">
                <p className="font-semibold mb-3">Ako nastaviť soft proofing v Adobe Photoshop:</p>
                <div className="space-y-2">
                  <p>1. Stiahnite si ICC profil tlače z odkazu: <span className="text-blue-600 underline cursor-pointer">Stiahnuť ICC profil</span></p>
                  <p>2. Nainštalujte ICC profil podľa vášho systému (Windows / MacOS).</p>
                  <p>3. Otvorte grafiku v Adobe Photoshop.</p>
                  <p>4. Kliknite: Zobraziť → Nastavenie proofingu → Vlastné.</p>
                  <p>5. Vyberte nainštalovaný ICC profil (Nexprim DTF).</p>
                  <p>6. Povoliť rendering intent: Relatívny kolorimetrický.</p>
                  <p>7. Povoliť kompenzáciu čierneho bodu.</p>
                  <p>8. Stlačte OK.</p>
                  <p>9. Aktivujte náhľad proofingu klávesovou skratkou CTRL+Y.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )
    },
    {
      icon: Monitor,
      title: "3. Skontrolujte detaily grafiky",
      description: "Pozornosť na detaily zabezpečí profesionálny výsledok DTF tlače.",
      details: [
        "Minimálna hrúbka čiar: 0,50 mm",
        "Nepoužívajte čiary smerujúce do nuly",
        "Anti-aliasing: zapnutý (hladké hrany)",
        "Vyhnite sa polopriehľadnosti pod 40 % (môže vytvoriť biele okraje)"
      ]
    },
    {
      icon: Download,
      title: "4. Exportujte grafiku správne",
      description: "Správny export zabezpečí najlepšiu kvalitu DTF transferu.",
      details: [
        "Max. výstupná šírka súboru: 57 cm",
        "Pozadie: odstráňte, ak to formát umožňuje",
        "Rozlíšenie: minimálne 300 dpi",
        "Kompresia: vypnite všetku kompresiu",
        "Anti-aliasing: musí byť zapnutý pri bitmapách",
        "Veľké grafiky (nad 2,2 m): rozdeľte na segmenty ~56 cm šírky",
        "Každý segment musí mať 5 mm presah z každej strany"
      ]
    }
  ];

  const formats = [
    {
      format: "PNG",
      extension: ".png",
      description: "Ideálny pre dizajny s priesvitným pozadím a jednoduché grafiky.",
      color: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      format: "AI/EPS",
      extension: ".ai, .eps",
      description: "Vektorové formáty pre najlepšiu kvalitu a škálovateľnosť.",
      color: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    {
      format: "SVG",
      extension: ".svg",
      description: "Moderný vektorový formát, ideálny pre webové grafiky.",
      color: "bg-gradient-to-r from-purple-500 to-violet-600"
    },
    {
      format: "PDF",
      extension: ".pdf",
      description: "Univerzálny formát zachovávajúci kvalitu a farby.",
      color: "bg-gradient-to-r from-blue-500 to-cyan-600"
    }
  ];

  const samples = [
    {
      title: "Vektorová grafika vo formáte PDF",
      imageSrc: "/sample-vector.jpg",
      downloadLink: "/downloads/sample-vector.pdf"
    },
    {
      title: "Bitmapová grafika vo formáte PDF", 
      imageSrc: "/sample-bitmap.jpg",
      downloadLink: "/downloads/sample-bitmap.pdf"
    },
    {
      title: "Zmenšená grafika vo formáte PDF",
      imageSrc: "/sample-scaled.jpg", 
      downloadLink: "/downloads/sample-scaled.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ako pripraviť <span className="text-yellow-400">grafiku</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Postupujte podľa našich krokov a získajte perfektné DTF transfery s najvyššou kvalitou tlače
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-8 rounded-full"></div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kroky prípravy grafiky
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {steps.map((step, index) => (
            <GraphicsGuideStep 
              key={index} 
              icon={step.icon} 
              title={step.title} 
              description={step.description} 
              details={step.details} 
              isEven={index % 2 === 1}
              expandableContent={step.expandableContent}
            />
          ))}
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Podporované formáty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Akceptujeme všetky bežné grafické formáty pre najlepšie výsledky
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formats.map((format, index) => (
              <FormatCard 
                key={index} 
                format={format.format} 
                extension={format.extension} 
                description={format.description} 
                color={format.color} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sample Downloads Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ukážky správne pripravenej grafiky
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stiahnite si ukážky správne pripravenej grafiky pre DTF tlač
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {samples.map((sample, index) => (
              <SampleDownloadCard 
                key={index}
                title={sample.title}
                imageSrc={sample.imageSrc}
                downloadLink={sample.downloadLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pripravili ste grafiku?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Odošlite nám svoj dizajn a my ho pretvoríme na kvalitný DTF transfer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Objednať DTF tlač →
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4">
              Kontaktujte nás →
            </Button>
          </div>
        </div>
      </section>

      <Footer topWaveColor="#ffffff" />
    </div>
  );
};

export default GraphicsGuide;
