import { motion, AnimatePresence } from "motion/react";
import { 
  Code, 
  Terminal, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  Instagram, 
  Twitter, 
  Github, 
  Menu,
  X,
  Cpu,
  Globe,
  Monitor,
  Smartphone,
  CheckCircle,
  Play,
  MessageCircle,
  Bot,
  Loader2
} from "lucide-react";
import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import { GoogleGenAI } from "@google/genai";

// --- Configuration ---

// --- Components ---

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM...");

  const texts = [
    "LOADING ASSETS...",
    "OPTIMIZING CODE...",
    "GENERATING BRUTALIST UI...",
    "CONNECTING TO DATABASE...",
    "READY TO LAUNCH!"
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Slower progress for more impact
      currentProgress += Math.random() * 8;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
      
      setProgress(currentProgress);
      
      // Update text based on progress
      const textIndex = Math.min(
        Math.floor((currentProgress / 100) * texts.length),
        texts.length - 1
      );
      setLoadingText(texts[textIndex]);
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] bg-brand-cream flex flex-col items-center justify-center p-6 select-none"
    >
      <div className="max-w-md w-full">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="font-mono text-[10px] text-brand-purple font-bold block mb-1">SYSTEM STATUS : BOOTING</span>
            <h2 className="font-display font-black text-3xl text-brand-red tracking-tighter italic">RAPZDEV LOADING</h2>
          </div>
          <span className="font-mono font-black text-4xl text-brand-black">{Math.floor(progress)}%</span>
        </div>
        
        <div className="h-16 w-full bg-white brutalist-border relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(23,23,23,1)]">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-brand-lime border-r-4 border-brand-black"
          />
          {/* Grid effect inside progress bar */}
          <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg"></div>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-4">
          <Loader2 className="animate-spin text-brand-red" size={24} />
          <p className="font-display font-black text-sm tracking-[0.2em] text-brand-black uppercase">
            {loadingText}
          </p>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-brand-black"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-brand-black"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-brand-black"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-brand-black"></div>

      <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-30">
        <div className="flex gap-8">
           <div className="flex items-center gap-2">
              <Cpu size={14} />
              <span className="font-mono text-[8px] font-bold">CORE_X64</span>
           </div>
           <div className="flex items-center gap-2">
              <Terminal size={14} />
              <span className="font-mono text-[8px] font-bold">TTY_1</span>
           </div>
        </div>
        <span className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-red">
          EST. 2026 // JASA_JOKI_CODING
        </span>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream border-b-2 border-brand-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-display font-bold text-brand-red tracking-tight">RAPZDEV</a>
          <div className="hidden md:flex items-center gap-8 font-display font-bold text-sm">
            <a href="#home" className="hover:text-brand-red transition-colors">HOME</a>
            <a href="#pricing" className="hover:text-brand-red transition-colors">LAYANAN</a>
            <a href="#tech-stack" className="hover:text-brand-red transition-colors">PORTOFOLIO</a>
            <a href="#testimonials" className="hover:text-brand-red transition-colors">TESTIMONI</a>
            <a href="#contact" className="hover:text-brand-red transition-colors">KONTAK</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => window.open('https://wa.me/628558759111', '_blank')}
            className="bg-brand-red text-white px-6 py-2 rounded-sm font-display font-bold text-xs brutalist-border-sm hover:translate-y-[-1px] transition-transform"
          >
            ORDER SEKARANG
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-b-2 border-brand-black p-6 flex flex-col gap-4 font-display font-bold"
        >
          <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>LAYANAN</a>
          <a href="#tech-stack" onClick={() => setIsOpen(false)}>PORTOFOLIO</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>TESTIMONI</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>KONTAK</a>
          <div className="flex flex-col gap-4 pt-4 border-t border-brand-black/10">
            <button 
              onClick={() => window.open('https://wa.me/628558759111', '_blank')}
              className="bg-brand-red text-white w-full py-3 rounded-sm brutalist-border-sm text-xs"
            >
              ORDER SEKARANG
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const HeaderMarquee = ({ text }: { text: string }) => {
  return (
    <div className="bg-brand-lime border-y-2 border-brand-black py-2 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center text-xs font-display font-bold px-4">
            {text} <span className="mx-4 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const TypewriterText = ({ texts, delay = 100, pause = 2000 }: { texts: string[], delay?: number, pause?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex <= currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, delay + (Math.random() * 50)); // Add slight randomness for "mechanical" feel

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, delay / 2);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex > currentText.length) {
      // Pause at end of typing
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex < 0) {
      // Switch to next text
      setIsDeleting(false);
      setCharIndex(0);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts, delay, pause]);

  return (
    <span className="relative">
      <span className="relative z-10">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className="inline-block w-2 h-8 md:h-16 lg:h-20 bg-brand-red ml-1 align-middle shadow-[2px_2px_0px_0px_rgba(23,23,23,1)]"
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto bg-blue-100/20 brutalist-border p-1 md:p-12 relative overflow-hidden grid-bg">
        {/* Decorations */}
        <div className="absolute top-10 right-10 text-brand-lime select-none opacity-50">
           <Code size={40} />
        </div>
        <div className="absolute bottom-20 left-10 text-brand-purple select-none opacity-50">
           <Terminal size={30} />
        </div>

        <div className="flex flex-col items-center text-center relative z-10 py-8 lg:py-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold text-brand-red tracking-tight max-w-5xl leading-[0.9] mb-8"
          >
            <TypewriterText 
              texts={[
                "SOLUSI CODING CEPAT & TERPERCAYA",
                "JASA JOKI CODING NOMOR 1",
                "TUGAS KULIAH AMAN & TANPA PLAGIAT",
                "DEVELOPMENT APPS MASA DEPAN"
              ]} 
              delay={60} 
              pause={3000}
            />
          </motion.h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 text-xs md:text-sm font-display font-bold">
            <div className="flex flex-col items-center lg:items-start text-center">
               <span className="opacity-50">FAST DELIVERY</span>
               <span>HARI INI JADI</span>
            </div>
            <div className="w-px h-8 bg-brand-black/20 hidden md:block"></div>
            <div className="flex flex-col items-center lg:items-start text-center">
               <span className="opacity-50">EXPERTISE</span>
               <span>3+ TAHUN PENGALAMAN</span>
            </div>
            <div className="w-px h-8 bg-brand-black/20 hidden md:block"></div>
            <div className="flex flex-col items-center lg:items-start text-center">
               <span className="opacity-50">DASHBOARD</span>
               <span>FREE MAINTENANCE</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => window.open('https://wa.me/628558759111', '_blank')}
              className="bg-brand-red text-white px-8 py-4 rounded-sm font-display font-bold text-sm brutalist-border flex items-center gap-2 hover:translate-y-[-2px] transition-transform"
            >
              <Send className="w-5 h-5" />
              HUBUNGI ADMIN
            </button>
            <button className="bg-white text-brand-black px-8 py-4 rounded-sm font-display font-bold text-sm brutalist-border flex items-center gap-2 hover:translate-y-[-2px] transition-transform">
              <Monitor className="w-5 h-5" />
              LIHAT PORTOFOLIO
            </button>
          </div>
        </div>

        {/* Coding Image mockup */}
        <div className="mt-12 overflow-hidden flex justify-center">
            <div className="relative inline-block">
                <div className="flex flex-wrap justify-center gap-4 md:-space-x-12">
                   <img src="https://cdn.phototourl.com/free/2026-04-20-95c57b5b-baf6-463f-b58b-639e85a8e1b0.jpg" alt="Workstation 1" className="w-48 h-64 md:w-64 md:h-80 object-cover brutalist-border rotate-[-6deg]" />
                   <img src="https://cdn.phototourl.com/free/2026-04-20-e05f21e1-51c4-493b-baa8-c0f9de11c822.jpg" alt="Coding Screen" className="w-48 h-64 md:w-64 md:h-80 object-cover brutalist-border z-10 relative scale-110" />
                   <img src="https://cdn.phototourl.com/free/2026-04-20-3560bf9b-ff0e-4fcf-b9da-16c1364716f5.jpg" alt="Workstation 2" className="w-48 h-64 md:w-64 md:h-80 object-cover brutalist-border rotate-[6deg]" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ServiceHighlights = () => {
    const services = [
        { name: "WEB DEVELOPMENT", desc: "Html, Css, Js", img: "https://cdn.phototourl.com/free/2026-04-20-8e4d3cdc-3dd6-467c-b88d-4f023666b9d5.jpg" },
        { name: "MOBILE APP", desc: "Flutter, React Native", img: "https://cdn.phototourl.com/free/2026-04-20-795c28f5-d6d3-47d5-98bc-556857b8a19a.jpg" },
        { name: "AUTOMATION BOT", desc: "WhatApps, Telegram, Discord", img: "https://cdn.phototourl.com/free/2026-04-20-d91a9f6d-d780-48f3-b98a-5de9e6410eed.jpg" },
        { name: "TUGAS CODING", desc: "Matkul IT, Python, Java, C++", img: "https://cdn.phototourl.com/free/2026-04-20-bf769d96-26a4-41eb-b793-e606485057b9.jpg" },
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-red uppercase">LAYANAN UNGGULAN</h2>
                <div className="hidden sm:flex gap-2">
                    <button className="p-2 rounded-full border-2 border-brand-black hover:bg-brand-black hover:text-white transition-colors">
                        <ArrowLeft />
                    </button>
                    <button className="p-2 rounded-full border-2 border-brand-black bg-brand-black text-white hover:bg-white hover:text-brand-black transition-colors">
                        <ArrowRight />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white p-4 brutalist-border"
                    >
                        <div className="relative mb-4 overflow-hidden rounded-sm">
                            <img src={item.img} alt={item.name} className="w-full aspect-[4/5] object-cover" />
                            <div className="absolute top-2 right-2 bg-brand-black text-white p-3 rounded-full flex flex-col items-center justify-center leading-none text-[8px] font-bold">
                                <span>VERIFIED</span>
                                <span className="text-xs">TOP</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-display font-bold text-center mb-1">{item.name}</h3>
                        <p className="text-[10px] text-center opacity-60 font-black">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const TechStack = () => {
    const stacks = [
        { name: "REACT JS", type: "FRONTEND", img: "https://cdn.phototourl.com/free/2026-04-20-07431cfb-427c-4d03-9ee7-9b32221c9645.jpg" },
        { name: "NODE JS", type: "BACKEND", img: "https://cdn.phototourl.com/free/2026-04-20-230c3d1b-588c-481f-9849-0f40b1581b85.jpg" },
        { name: "PYTHON", type: "ALGORITHM", img: "https://cdn.phototourl.com/free/2026-04-19-b089c513-a53c-473f-8b1f-46e8743ec5f4.jpg" },
        { name: "FLUTTER", type: "MOBILE", img: "https://cdn.phototourl.com/free/2026-04-19-716edfd5-5b63-4dab-9adb-4a7ef42d9d02.jpg" },
        { name: "POSTGRES", type: "DATABASE", img: "https://cdn.phototourl.com/free/2026-04-19-5a993c57-1a13-4fa4-95d1-6332be748557.jpg" },
        { name: "DART", type: "LANG", img: "https://cdn.phototourl.com/free/2026-04-19-6443b98e-19fa-41e7-aef1-02984760af55.jpg" },
        { name: "TAILWIND", type: "STYLING", img: "https://cdn.phototourl.com/free/2026-04-19-1dab37c3-ea90-495a-9b72-298cacac4fbf.jpg" },
        { name: "TYPESCRIPT", type: "LANG", img: "https://cdn.phototourl.com/free/2026-04-19-c305422d-caac-4563-b968-78478ff96c5d.jpg" },
    ];

    return (
        <section id="tech-stack" className="py-20 px-6 bg-brand-cream border-t-2 border-brand-black">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-red mb-12 uppercase">TECH STACK YANG KAMI KUASAI</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stacks.map((item, i) => (
                        <div key={i} className="flex flex-col group">
                            <div className="brutalist-border overflow-hidden mb-4 bg-brand-lime/20">
                                <img src={item.img} alt={item.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-brand-black pb-2">
                                <span className="font-display font-bold text-sm">{item.name}</span>
                                <div className="flex items-center gap-2">
                                    <div className="border border-brand-black px-2 py-0.5 text-[8px] font-black leading-none">{item.type}</div>
                                    <div className="flex gap-1">
                                        <Github className="w-3 h-3" />
                                        <Globe className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingSection = () => {
    const packages = [
        { type: "PAKET TUGAS/MAHASISWA", desc: "Script sederhana, dokumentasi kode, penjelasan", badge: "FAST TRACK", price: "HUBUNGI ADMIN", color: "bg-brand-purple" },
        { type: "PAKET BISNIS/COMPANY", desc: "Landing page, dashboard, SEO, API integration", badge: "PROFESSIONAL", price: "HUBUNGI ADMIN", color: "bg-brand-lime" },
        { type: "PAKET CUSTOM PROJECT", desc: "Sistem kompleks sesuai request kebutuhan Anda", badge: "EXPERT", price: "HUBUNGI ADMIN", color: "bg-brand-red" },
    ];

    return (
        <section id="pricing" className="py-20 px-6 bg-brand-cream border-y-2 border-brand-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-red text-center mb-16 underline-offset-8 uppercase">HARGA LAYANAN</h2>
                
                <div className="space-y-6">
                    {packages.map((t, i) => (
                        <div key={i} className="flex flex-col md:row relative">
                            <div className="flex flex-col md:flex-row border-4 border-brand-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(23,23,23,0.1)]">
                                <div className="w-24 border-r-4 border-brand-black flex items-center justify-center p-4 bg-white">
                                     <div className="grid grid-cols-3 gap-1">
                                        {[...Array(9)].map((_, j) => (
                                            <div key={j} className={`w-2 h-2 ${j % 2 === 0 ? 'bg-brand-red' : 'bg-brand-black'}`}></div>
                                        ))}
                                     </div>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-display font-bold leading-tight uppercase">{t.type}</h3>
                                    <p className="text-xs opacity-60 font-bold mt-1 uppercase leading-relaxed">{t.desc}</p>
                                </div>
                                <div className="border-t-4 md:border-t-0 md:border-l-4 border-dashed border-brand-black bg-white md:w-48 p-6 flex flex-col items-center justify-center gap-2">
                                    <span className="text-[10px] font-black opacity-50">{t.badge}</span>
                                    <button 
                                        onClick={() => window.open('https://wa.me/628558759111', '_blank')}
                                        className="bg-brand-red text-white w-full py-2 font-black text-xs brutalist-border-sm hover:translate-y-[-2px] transition-transform"
                                    >
                                        {t.price}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2 relative">
                    <div className="brutalist-border border-4 p-2 bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img src="https://cdn.phototourl.com/free/2026-04-20-4166e534-42d4-4446-8afb-6188d75d6604.jpg" alt="Meeting" className="w-full h-auto object-cover grayscale contrast-125" />
                        <div className="absolute inset-0 flex items-center justify-center">
                             
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-8 -left-8 text-brand-lime animate-pulse">
                        <div className="brutalist-border bg-white p-3 rounded-full">
                            <CheckCircle size={40} />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-6xl font-display font-extrabold text-brand-red leading-[0.9] mb-8 uppercase">
                        KENAPA HARUS DI RAPZDEV?
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="bg-brand-lime p-2 h-fit brutalist-border-sm">
                                <Cpu size={20} />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg uppercase">KODE BERSIH & OPTIMAL</h4>
                                <p className="text-xs font-bold opacity-60 uppercase">Kami menjamin kode yang Anda terima mudah dibaca, rapi, dan berperforma tinggi.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-brand-purple p-2 h-fit brutalist-border-sm">
                                <X size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg uppercase">ZERO PLAGIAT PLAGIAT CLUB</h4>
                                <p className="text-xs font-bold opacity-60 uppercase">Setiap baris kode dibuat berdasarkan logika murni, bukan sekadar copas dari internet.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-brand-red p-2 h-fit brutalist-border-sm">
                                <Send size={20} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg uppercase">SUPORT & REVISI</h4>
                                <p className="text-xs font-bold opacity-60 uppercase">Kami dampingi sampai projek Anda benar-benar berjalan dan sesuai ekspektasi.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

const BundleProject = () => {
    return (
        <section className="py-24 px-6 bg-brand-cream relative overflow-hidden">
             {/* Decorative items */}
             <div className="absolute top-20 left-[10%] w-32 h-32 brutalist-border rotate-[-15deg] hidden md:block grayscale">
                <img src="https://picsum.photos/seed/code-script/300/300" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-20 right-[15%] w-40 h-54 brutalist-border rotate-[10deg] hidden md:block">
                <img src="https://picsum.photos/seed/programming/300/400" className="w-full h-full object-cover" />
             </div>

             <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="flex justify-center mb-8">
                    <Terminal className="text-brand-purple w-12 h-12" />
                </div>
                <h2 className="text-3xl md:text-6xl font-display font-black text-brand-black mb-12 uppercase">
                    <span className="text-brand-red">READY-MADE JOKI DAN JASA</span> <br />
                   DENGAN HARGA LEBIH MURAH
                </h2>
                <button className="bg-brand-red text-white py-4 px-10 font-display font-black text-sm brutalist-border hover:bg-brand-black transition-colors uppercase">
                    BISA KONSULTASI TANYA TANYA
                </button>
             </div>
        </section>
    );
};

const Testimonials = () => {
    const feedbacks = [
        { 
            name: "BUDI SETIAWAN", 
            role: "MAHASISWA IT", 
            comment: "Tugas matkul Algoritma saya selesai dalam 4 jam saja! Penjelasannya juga detail banget, dapet A+ deh pokoknya matkul ini.",
            img: "https://picsum.photos/seed/budi/100/100"
        },
        { 
            name: "SANTI PUTRI", 
            role: "STARTUP FOUNDER", 
            comment: "RapzDev bantu bikin MVP website kami cuma dalam 2 minggu. Kodenya rapi dan scalable. Sangat profesional untuk harga yang terjangkau.",
            img: "https://picsum.photos/seed/santi/100/100"
        },
        { 
            name: "ANDI WIJAYA", 
            role: "MARKETING MANAGER", 
            comment: "Bot scraping telegram yang dibuat sangat membantu operasional harian kami. Maintenance-nya juga oke, respon adminnya cepet.",
            img: "https://picsum.photos/seed/andi/100/100"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

    return (
        <section id="testimonials" className="py-20 px-6 bg-white border-t-2 border-brand-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-red text-center mb-12 uppercase italic">APA KATA MEREKA?</h2>
                
                <div className="relative">
                    <div className="brutalist-border bg-brand-cream p-8 md:p-12 min-h-[300px] flex flex-col items-center text-center">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <div className="w-20 h-20 rounded-full brutalist-border-sm mx-auto overflow-hidden bg-white">
                                <img src={feedbacks[currentIndex].img} alt={feedbacks[currentIndex].name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-lg md:text-xl font-display font-bold italic leading-relaxed">
                                "{feedbacks[currentIndex].comment}"
                            </p>
                            <div>
                                <h4 className="font-display font-black text-brand-red">{feedbacks[currentIndex].name}</h4>
                                <p className="text-[10px] font-black opacity-50 uppercase">{feedbacks[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button 
                            onClick={prev}
                            className="p-3 bg-white border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(23,23,23,1)] hover:translate-y-px hover:translate-x-px hover:shadow-none transition-all"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button 
                            onClick={next}
                            className="p-3 bg-brand-black text-white border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(23,23,23,0.3)] hover:translate-y-px hover:translate-x-px hover:shadow-none transition-all"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="pt-20 bg-white border-t-2 border-brand-black">
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <a href="#" className="text-4xl font-display font-black text-brand-red">RAPZDEV</a>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/rapzding/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5 hover:text-brand-red cursor-pointer" />
                            </a>
                            <a href="https://x.com/faaaz2008" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-5 h-5 hover:text-brand-red cursor-pointer" />
                            </a>
                            <a href="https://github.com/Rappbukansepuh" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 hover:text-brand-red cursor-pointer" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 font-display font-bold text-xs">
                        <a href="#home" className="hover:text-brand-red uppercase">HOME</a>
                        <a href="#pricing" className="hover:text-brand-red uppercase">LAYANAN</a>
                        <a href="#tech-stack" className="hover:text-brand-red uppercase">PORTOFOLIO</a>
                        <a href="#contact" className="hover:text-brand-red uppercase">KONTAK</a>
                        <a href="#testimonials" className="hover:text-brand-red uppercase">ORDER</a>
                    </div>
                    
                    <div className="flex flex-col gap-4 font-display font-bold text-xs">
                        <a href="#" className="hover:text-brand-red uppercase">KEBIJAKAN LAYANAN</a>
                        <a href="#" className="hover:text-brand-red uppercase">KERJASAMA</a>
                        <a href="#" className="hover:text-brand-red uppercase">REFUND POLICY</a>
                        <a href="#" className="hover:text-brand-red uppercase">TANYA JAWAB</a>
                    </div>

                    <div className="space-y-4">
                        <p className="font-display font-bold text-xs opacity-50 uppercase">Butuh bantuan coding? Langsung kontak ke</p>
                        <a href="mailto:rapzdevbiz@gmail.com" className="text-lg md:text-xl font-display font-black hover:text-brand-red underline underline-offset-4">rapzdevbiz@gmail.com</a>
                    </div>
                </div>
                
                <div className="mt-20 pt-8 border-t border-brand-black/10 text-center font-display font-bold text-[10px] opacity-30">
                    RAPZDEV CODING SOLUTIONS 2026-2030
                </div>
            </div>
            {/* Bottom Checkered Bar */}
            <div className="h-6 checkered-pattern w-full"></div>
        </footer>
    );
};

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: 'Halo! Saya RapzBot. Ada yang bisa saya bantu terkait layanan coding RapzDev?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: [
                    {
                        role: "user",
                        parts: [{ text: userMsg }]
                    }
                ],
                config: {
                    systemInstruction: `You are RapzBot, the official AI assistant for RapzDev (Jasa Joki Kebutuhan Coding).
Your goal is to help users understand our services and encourage them to order or contact us.

### About RapzDev:
Motto: "Solusi Coding Cepat & Terpercaya"
Branding: Retro-Brutalist, Bold, Dynamic.

### Services:
1. WEB DEVELOPMENT: React, Next, Vue, CRUD, Landing Pages, Dashboard, SEO.
2. MOBILE APP: Flutter, React Native.
3. AUTOMATION BOT: Scraping, Telegram Bots, Discord Bots.
4. TUGAS CODING: IT Course assignments (Python, Java, C++, etc.), algorithm tasks.

### Why Choose Us:
- Fast Delivery: Same-day service available (Hari ini jadi).
- Expertise: 3+ years of experience.
- Quality: Clean & optimal code, zero plagiarism.
- Support: Post-project maintenance and revisions.

### Call to Action:
Encourage users to contact admin via WhatsApp at 628558759111 for pricing or orders.

### Guidelines:
- Keep responses concise, friendly, and professional.
- Use Indonesian (Bahasa Indonesia) as the primary language.
- Reassure the user that we prioritize confidentiality and speed.
- If asked about price, say "Harga tergantung kompleksitas, silakan konsultasi gratis via WhatsApp Admin".`
                }
            });

            const botResponse = response.text || "Maaf, sepertinya ada gangguan. Silakan coba lagi atau hubungi WhatsApp kami.";
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => [...prev, { role: 'bot', text: "Maaf, sistem sedang sibuk. Silakan hubungi admin di 628558759111." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] font-display">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[320px] md:w-[400px] h-[500px] bg-white brutalist-border shadow-[8px_8px_0px_0px_rgba(23,23,23,1)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-brand-red text-white p-4 border-b-2 border-brand-black flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Bot size={20} />
                                <span className="font-black italic">RAPZBOT AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/30 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 text-xs font-bold leading-relaxed brutalist-border-sm ${
                                        msg.role === 'user' 
                                        ? 'bg-brand-lime text-brand-black translate-x-1' 
                                        : 'bg-white text-brand-black -translate-x-1'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 brutalist-border-sm flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-brand-red" />
                                        <span className="text-[10px] font-black italic">RAPZBOT LAGI MIKIR...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t-2 border-brand-black bg-white flex gap-2">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Tanya sesuatu..."
                                className="flex-1 border-2 border-brand-black p-2 text-xs font-bold focus:outline-none focus:bg-brand-lime/10"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading}
                                className="bg-brand-red text-white p-2 brutalist-border-sm hover:translate-y-[-2px] transition-transform disabled:opacity-50"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-brand-purple text-white p-4 rounded-full brutalist-border shadow-[4px_4px_0px_0px_rgba(23,23,23,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(23,23,23,1)] transition-all flex items-center justify-center"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-lime border-2 border-brand-black rounded-full animate-pulse"></div>
            </button>
        </div>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        service: "WEB DEV"
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "NAMA WAJIB DIISI";
        
        if (!formData.email.trim()) {
            newErrors.email = "EMAIL WAJIB DIISI";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "FORMAT EMAIL TIDAK VALID";
        }
        
        if (!formData.message.trim()) {
            newErrors.message = "PESAN WAJIB DIISI";
        } else if (formData.message.length < 10) {
            newErrors.message = "PESAN MINIMAL 10 KARAKTER";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: "", email: "", message: "", service: "WEB DEV" });
                setTimeout(() => setIsSuccess(false), 5000);
            }, 1500);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-brand-cream border-t-2 border-brand-black">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-brand-red leading-none uppercase italic">PESAN LAYANAN SEKARANG</h2>
                    <p className="text-sm font-bold opacity-60 uppercase leading-relaxed">
                        PUNYA PERTANYAAN ATAU MAU LANGSUNG ORDER? ISI FORMULIR DI SAMPING ATAU HUBUNGI KAMI VIA WHATSAPP UNTUK FAST RESPONSE.
                    </p>
                    
                    <div className="pt-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-lime p-2 brutalist-border-sm">
                                <MessageCircle size={20} />
                            </div>
                            <span className="font-display font-black text-sm">WHATSAPP: +62 855-8759-111</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-purple p-2 brutalist-border-sm">
                                <Send size={20} className="text-white" />
                            </div>
                            <span className="font-display font-black text-sm text-brand-black">EMAIL: rapzdevbiz@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <form onSubmit={handleSubmit} className="brutalist-border bg-white p-8 space-y-6 shadow-[12px_12px_0px_0px_rgba(23,23,23,1)]">
                        {isSuccess && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-brand-lime p-4 brutalist-border-sm text-[10px] font-black text-brand-black uppercase text-center"
                            >
                                BERHASIL! PESAN ANDA TELAH TERKIRIM.
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] font-display font-black uppercase">NAMA LENGKAP</label>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="JON DOE"
                                className={`w-full brutalist-border-sm p-3 font-display font-bold text-xs focus:bg-brand-lime/10 outline-none transition-colors ${errors.name ? 'border-brand-red' : 'border-brand-black'}`}
                            />
                            {errors.name && <p className="text-[8px] font-black text-brand-red uppercase">{errors.name}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-display font-black uppercase">ALAMAT EMAIL</label>
                            <input 
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="JON@EMAIL.COM"
                                className={`w-full brutalist-border-sm p-3 font-display font-bold text-xs focus:bg-brand-lime/10 outline-none transition-colors ${errors.email ? 'border-brand-red' : 'border-brand-black'}`}
                            />
                            {errors.email && <p className="text-[8px] font-black text-brand-red uppercase">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-display font-black uppercase">JENIS LAYANAN</label>
                            <select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full brutalist-border-sm p-3 font-display font-bold text-xs focus:bg-brand-lime/10 outline-none cursor-pointer"
                            >
                                <option value="WEB DEV">WEB DEVELOPMENT</option>
                                <option value="MOBILE APP">MOBILE APPS</option>
                                <option value="BOT">AUTOMATION BOT</option>
                                <option value="JOKI">JOKI TUGAS</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-display font-black uppercase">PESAN / DETAIL PROJEK</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="JELASKAN KEBUTUHAN ANDA..."
                                className={`w-full brutalist-border-sm p-3 font-display font-bold text-xs focus:bg-brand-lime/10 outline-none transition-colors resize-none ${errors.message ? 'border-brand-red' : 'border-brand-black'}`}
                            />
                            {errors.message && <p className="text-[8px] font-black text-brand-red uppercase">{errors.message}</p>}
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-red text-white py-4 font-display font-black text-xs brutalist-border hover:bg-brand-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    MENGIRIM...
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    KIRIM PESAN
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            <Navbar />
            <Hero />
            <HeaderMarquee text="RAPZDEV * JASA JOKI CODING * JAMINAN KODE OPTIMAL * HARI INI JADI * NO PLAGIAT *" />
            <ServiceHighlights />
            <TechStack />
            <PricingSection />
            <div className="bg-brand-purple h-12 border-y-2 border-brand-black overflow-hidden flex items-center">
                <div className="flex animate-marquee text-white font-display font-black text-sm uppercase">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="px-8 whitespace-nowrap italic">WEB DEV * MOBILE APPS * AUTOMATION * BOT  *</span>
                    ))}
                </div>
            </div>
            <WhyChooseUs />
            <div className="bg-brand-lime h-12 border-y-2 border-brand-black overflow-hidden flex items-center">
                <div className="flex animate-marquee text-brand-black font-display font-black text-sm uppercase">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="px-8 whitespace-nowrap italic">TERJANGKAU * BERPENGALAMAN * FAST RESPONSE * SUPORT 24/7 *</span>
                    ))}
                </div>
            </div>
            <Testimonials />
            <ContactForm />
            <BundleProject />
            <Footer />
            <ChatBot />
        </div>
    );
}
