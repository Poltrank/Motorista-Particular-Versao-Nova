
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  ShieldCheck, 
  ChevronRight, 
  Navigation,
  School,
  Briefcase,
  HeartPulse,
  Plane
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const PriceItem = ({ route, price }: { route: string, price: string }) => (
  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
    <span className="text-slate-700 font-medium text-left mr-2">{route}</span>
    <span className="text-blue-600 font-bold whitespace-nowrap">{price}</span>
  </div>
);

const WhatsAppButton = () => {
  const phone = "5547974008115";
  const message = encodeURIComponent("Ola, vim pelo site, gostaria de fazer um orcamento.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-md">
        Fazer Orçamento
      </div>
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const phone = "5547974008115";
    const message = encodeURIComponent("Ola, vim pelo site, gostaria de fazer um orcamento.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
              <Car className="text-white" size={20} />
            </div>
            <span className="font-bold text-lg text-slate-800">
              Motorista Jaraguá
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/motorista_jaraguadosul" 
              target="_blank" 
              className="text-slate-600 hover:text-pink-600 transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <button 
              onClick={openWhatsApp}
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all active:scale-95"
            >
              Orçamento
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Motorista Particular Jaraguá do Sul
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Seu Motorista de <span className="text-blue-600">Confiança</span> e Tecnologia.
              </h1>
              
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Procuro levar seus filhos para escola, alguém da família para o trabalho, 
                pessoas idosas para consultas ou viagens particulares. Entre em contato!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                >
                  Solicitar Orçamento
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/4NLJ5Wkv/Gemini-Generated-Image-q913btq913btq913.png" 
                  alt="Trabalho com carro elétrico BYD Mini Dolphin 2026" 
                  className="w-full h-auto rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-1">Veículo 2026</p>
                  <p className="text-slate-800 font-bold">BYD Dolphin Mini - 100% Elétrico</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard icon={School} title="Escolar" description="Transporte seguro para crianças e adolescentes." />
              <ServiceCard icon={Briefcase} title="Trabalho" description="Pontualidade para seus compromissos diários." />
              <ServiceCard icon={HeartPulse} title="Saúde" description="Acompanhamento atencioso para consultas médicas." />
              <ServiceCard icon={Plane} title="Viagens" description="Translados para aeroportos e cidades vizinhas." />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Tabela Fixa de Preços</h2>
              <div className="grid gap-3">
                <PriceItem route="Jaraguá do Sul x Joinville (Cidade)" price="R$ 160" />
                <PriceItem route="Jaraguá do Sul x Joinville (Aeroporto)" price="R$ 180" />
                <PriceItem route="Jaraguá do Sul x Blumenau" price="R$ 160" />
                <PriceItem route="Jaraguá do Sul x Pomerode" price="R$ 100" />
              </div>
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                <Navigation className="text-blue-600 shrink-0" />
                <p className="text-sm text-blue-800">
                  Para orçamentos entre <strong>bairros de Jaraguá do Sul</strong>, favor entrar em contato diretamente pelo WhatsApp.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">Diferenciais</h3>
                <ul className="space-y-4">
                  {[
                    "Veículo 100% Elétrico (silencioso e confortável)",
                    "Motorista experiente (Uber, 99, Muvi, Zopp, InDriver)",
                    "Carro moderno: BYD Dolphin Mini 2026",
                    "Segurança e confiança para sua família"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-slate-300">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px]">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
                >
                  Falar no WhatsApp
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-500 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-white font-bold text-lg">Motorista Particular Jaraguá do Sul</p>
            <p className="text-sm">Atendimento em Jaraguá do Sul e toda região norte de SC.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/motorista_jaraguadosul" target="_blank" className="hover:text-white transition-colors"><Instagram /></a>
            <button onClick={openWhatsApp} className="hover:text-white transition-colors"><Phone /></button>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
