import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { FileText, Printer, Truck, Zap, Send, Clock, Award, Gauge, CheckCircle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Rýchlosť výroby",
      description: "Tlačíme ešte v deň objednávky."
    },
    {
      icon: Award,
      title: "Kvalita tlače",
      description: "Vysoké rozlíšenie a odolnosť voči praniu."
    },
    {
      icon: Gauge,
      title: "Kapacita",
      description: "Denná produkcia až 110 bežných metrov."
    },
    {
      icon: CheckCircle,
      title: "Spoľahlivosť",
      description: "Odosielame najneskôr nasledujúci pracovný deň."
    }
  ];

  return (
    <section id="preco-my" className="bg-gradient-to-b from-blue-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Prečo si vybrať nás</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={48} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{advantage.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DtfSteps = () => {
  const dtfSteps = [
    {
      icon: FileText,
      title: "1. Pošlite nám svoj dizajn",
      description: "vo formáte PNG, AI, SVG, PDF, eps."
    },
    {
      icon: Printer,
      title: "2. My ho vytlačíme",
      description: "na špeciálny DTF film."
    },
    {
      icon: Truck,
      title: "3. Odošleme vám hotový transfer",
      description: "pripravený na aplikáciu."
    },
    {
      icon: Zap,
      title: "4. Aplikujte pomocou tepelného lisu",
      description: "na váš textil."
    }
  ];

  return (
    <section id="ako-to-funguje" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ako to funguje</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dtfSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < dtfSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DtgGallery = () => {
  const dtgSamples = [
    { id: 1, color: 'bg-gradient-to-br from-red-400 to-pink-600', title: 'Logo na tričku' },
    { id: 2, color: 'bg-gradient-to-br from-blue-400 to-indigo-600', title: 'Farebný dizajn' },
    { id: 3, color: 'bg-gradient-to-br from-green-400 to-emerald-600', title: 'Potlač mikiny' },
    { id: 4, color: 'bg-gradient-to-br from-yellow-400 to-orange-600', title: 'Grafické tričko' },
    { id: 5, color: 'bg-gradient-to-br from-purple-400 to-violet-600', title: 'Dizajnová čiapka' },
    { id: 6, color: 'bg-gradient-to-br from-teal-400 to-cyan-600', title: 'Športové tričko' }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">DTG ukážky tlače</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dtgSamples.map(sample => (
            <div key={sample.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className={`${sample.color} h-40 w-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCalculator = () => {
  const [meters, setMeters] = useState([6]);
  const [shipping, setShipping] = useState('no');
  const [graphics, setGraphics] = useState('no');
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerMeter, setPricePerMeter] = useState(0);

  const calculatePrice = (meterCount: number) => {
    if (meterCount <= 1) return { price: 20, total: meterCount * 20 };
    else if (meterCount <= 5) return { price: 15, total: meterCount * 15 };
    else if (meterCount <= 10) return { price: 14, total: meterCount * 14 };
    else if (meterCount <= 50) return { price: 12, total: meterCount * 12 };
    else return { price: 8, total: meterCount * 8 };
  };

  useEffect(() => {
    const meterCount = meters[0];
    const baseCalculation = calculatePrice(meterCount);
    let total = baseCalculation.total;

    if (shipping === 'yes') {
      total += 4;
    }
    if (graphics === 'yes') {
      total += 3;
    }
    setTotalPrice(total);
    setPricePerMeter(baseCalculation.price);
  }, [meters, shipping, graphics]);

  return (
    <section id="cennik" className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Cenník DTF tlače
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl mx-auto">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col justify-between relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10 -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-pink-200 to-yellow-200 rounded-full opacity-10 translate-y-12 translate-x-12"></div>
                <div className="relative z-10 space-y-8 flex-1">
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <Label className="text-xl font-bold text-gray-800">Počet bežných metrov</Label>
                        <p className="text-gray-600 text-sm mt-1">Bežný meter je 0,6x1m</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="px-2">
                        <Slider value={meters} onValueChange={setMeters} max={200} min={0.2} step={0.1} className="w-full" />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 px-2">
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">0,2m</span>
                        <span className="font-bold text-xl text-purple-600 bg-purple-100 px-3 py-1 rounded-full">{meters[0]}m</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">200m</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <Label className="text-xl font-bold text-gray-800">Doprava v rámci SR</Label>
                        <p className="text-gray-600 text-sm mt-1">+4€ za prepravu, možnosť odberu v Košiciach</p>
                      </div>
                    </div>
                    <div className="px-2">
                      <RadioGroup value={shipping} onValueChange={setShipping} className="flex gap-4">
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-xl border-2 border-transparent hover:border-green-200 transition-all duration-200">
                          <RadioGroupItem value="yes" id="shipping-yes" className="w-4 h-4" />
                          <Label htmlFor="shipping-yes" className="text-base font-semibold text-gray-700 cursor-pointer">
                            ÁNO
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-slate-50 px-4 py-2 rounded-xl border-2 border-transparent hover:border-gray-200 transition-all duration-200">
                          <RadioGroupItem value="no" id="shipping-no" className="w-4 h-4" />
                          <Label htmlFor="shipping-no" className="text-base font-semibold text-gray-700 cursor-pointer">
                            NIE
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <Label className="text-xl font-bold text-gray-800">Grafická práca</Label>
                        <p className="text-gray-600 text-sm mt-1">Pomoc s grafikou od 3€</p>
                      </div>
                    </div>
                    <div className="px-2">
                      <RadioGroup value={graphics} onValueChange={setGraphics} className="flex gap-4">
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-violet-50 px-4 py-2 rounded-xl border-2 border-transparent hover:border-purple-200 transition-all duration-200">
                          <RadioGroupItem value="yes" id="graphics-yes" className="w-4 h-4" />
                          <Label htmlFor="graphics-yes" className="text-base font-semibold text-gray-700 cursor-pointer">
                            ÁNO
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-slate-50 px-4 py-2 rounded-xl border-2 border-transparent hover:border-gray-200 transition-all duration-200">
                          <RadioGroupItem value="no" id="graphics-no" className="w-4 h-4" />
                          <Label htmlFor="graphics-no" className="text-base font-semibold text-gray-700 cursor-pointer">
                            NIE
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 p-8 border-4 border-transparent bg-clip-padding rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
                <div className="relative z-10 space-y-8 flex-1 flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                      VÝSLEDNÁ CENA
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                  </div>
                  <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                      {totalPrice.toFixed(2)}€
                    </p>
                    <p className="text-xl text-gray-700 font-semibold mb-1">{pricePerMeter.toFixed(2)}€/bm</p>
                    <p className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full inline-block">bez DPH</p>
                  </div>
                  <Button className="w-full py-8 text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                    OBJEDNAŤ TERAZ
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-6 px-12 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Objednať DTF transfer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="kontakt" className="bg-gradient-to-b from-blue-700 to-blue-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white mb-4">Kontaktujte nás</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left"></div>
          <div className="text-center md:text-right"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Meno a Priezvisko"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
              />
              <Input
                placeholder="Firma (Voliteľné)"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="email"
                placeholder="vas@email.sk"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
              />
              <Input
                placeholder="Tel. číslo (Voliteľné)"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
              />
            </div>
            <Textarea
              placeholder="Tu napíšte vašu správu"
              rows={4}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 resize-none text-lg"
            />
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy"
                className="bg-white/10 border-white/20 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
              />
              <Label htmlFor="privacy" className="text-blue-100 leading-relaxed cursor-pointer">
                Potvrdzujem, že som si prečítal/a{' '}
                <a href="#" className="text-yellow-400 hover:text-yellow-300 underline">
                  Ochranu osobných údajov
                </a>
                .
              </Label>
            </div>
            <div className="text-center pt-2">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 text-lg font-bold py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                <Send className="w-5 h-5" />
                Odoslať
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="bg-gradient-to-b from-blue-700 to-blue-900 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Často kladené otázky</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="formats" className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <AccordionTrigger className="px-8 py-3 text-left text-white text-sm font-semibold hover:bg-white/5 transition-colors [&>svg]:text-yellow-400">
              Aké formáty dizajnov akceptujete?
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 text-blue-100 text-sm leading-relaxed">
              Akceptujeme všetky bežné grafické formáty: PNG, JPEG, AI, SVG, PDF, EPS, PSD. Pre najlepšiu kvalitu tlače odporúčame vektorové formáty (AI, SVG, EPS) alebo vysoké rozlíšenie pre rastrové obrázky (min. 300 DPI).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="minimum-order" className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <AccordionTrigger className="px-8 py-3 text-left text-white text-sm font-semibold hover:bg-white/5 transition-colors [&>svg]:text-yellow-400">
              Aký je minimálny odber?
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 text-blue-100 text-sm leading-relaxed">
              Minimálny odber je 0,2 bežného metra. Bežný meter má rozmery 0,6 x 1 meter. Pre menšie množstvá sa cena počíta podľa najvyššej sadzby 20€/bm.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="delivery-time" className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <AccordionTrigger className="px-8 py-3 text-left text-white text-sm font-semibold hover:bg-white/5 transition-colors [&>svg]:text-yellow-400">
              Ako dlho trvá dodanie?
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 text-blue-100 text-sm leading-relaxed">
              Štandardné dodanie trvá 3-5 pracovných dní od potvrdenia objednávky a úhrady. Express dodanie je možné do 24 hodín za príplatok. Doprava v rámci SR stojí 4€, možnosť osobného odberu v Košiciach.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="dtf-application" className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <AccordionTrigger className="px-8 py-3 text-left text-white text-sm font-semibold hover:bg-white/5 transition-colors [&>svg]:text-yellow-400">
              Ako aplikovať DTF transfer na textil?
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 text-blue-100 text-sm leading-relaxed">
              DTF transfer sa aplikuje pomocou tepelného lisu pri teplote 160-170°C po dobu 10-15 sekúnd. Po vychladnutí opatrne odlepte nosný film. Transfer je kompatibilný s bavlnou, polyesterom a zmesovými materiálmi. Detailný návod dodávame s každou objednávkou.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="colors-quality" className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <AccordionTrigger className="px-8 py-3 text-left text-white text-sm font-semibold hover:bg-white/5 transition-colors [&>svg]:text-yellow-400">
              Aká je kvalita farieb a trvanlivosť?
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 text-blue-100 text-sm leading-relaxed">
              Používame vysoko kvalitné DTF farby s výbornou kryvosťou a žiarivými farbami. Transfer vydrží 50+ praní pri teplote do 40°C. Farby sú odolné voči UV žiareniu a nelúpajú sa pri správnej aplikácii.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="graphic-services" className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <AccordionTrigger className="px-8 py-3 text-left text-white text-sm font-semibold hover:bg-white/5 transition-colors [&>svg]:text-yellow-400">
              Ponúkate grafické služby?
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 text-blue-100 text-sm leading-relaxed">
              Áno, ponúkame grafické služby od 3€. Môžeme upraviť váš dizajn, zmeniť veľkosť, farby alebo vytvoriť nový dizajn podľa vašich požiadaviek. Cena závisí od zložitosti práce. Kontaktujte nás pre individuálnu kalkuláciu.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <DtfSteps />
      <DtgGallery />
      <PricingCalculator />
      <ContactForm />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
