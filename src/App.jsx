import React, { useState, useEffect } from 'react';
import { Bot, Shield, ShoppingCart, ArrowRight, Zap, BookOpen, GraduationCap, Laptop, Moon, Sun, Globe, CheckCircle2, Activity } from 'lucide-react';

const translations = {
  ua: {
    navSubtitle: "Support & Education",
    heroBadge: "Система активна",
    heroTitle1: "Цифрова",
    heroTitle2: "Оборона",
    heroTitle3: "та",
    heroTitle4: "Бізнес",
    heroDesc: "Ми створюємо автономні системи та AI-асистентів. Від координації в зоні бойових дій до масштабування підприємств.",
    card1Title: "Military & NGO",
    card1Desc: "Тактичні рішення, захищений зв'язок та бази знань для ЗСУ.",
    card1Btn: "Долучитися",
    card2Title: "Enterprise AI",
    card2Desc: "Комерційна автоматизація, CRM-боти та складський облік.",
    card2Btn: "Співпраця",
    footer: "TechBase. Powered by ГО 'Чат Підтримка'",
    projects: {
      starlink: { title: "Starlink Debugger", desc: "Діагностика мережі та усунення неполадок." },
      drone: { title: "FPV Academy", desc: "Інтерактивний курс пілотування та інженерії." },
      order: { title: "OrderAI Bot", desc: "Автоматизація замовлень та підтримка 24/7." },
      base: { title: "BizKnowledge", desc: "Корпоративна база знань та онбординг." }
    }
  },
  en: {
    navSubtitle: "Support & Education",
    heroBadge: "System Operational",
    heroTitle1: "Digital",
    heroTitle2: "Defense",
    heroTitle3: "&",
    heroTitle4: "Business",
    heroDesc: "Building autonomous systems and AI assistants. From combat zone coordination to enterprise scaling.",
    card1Title: "Military & NGO",
    card1Desc: "Tactical solutions, secure comms & knowledge bases.",
    card1Btn: "Join Mission",
    card2Title: "Enterprise AI",
    card2Desc: "Commercial automation, CRM bots & inventory management.",
    card2Btn: "Partnership",
    footer: "TechBase. Powered by NGO 'Chat Support'",
    projects: {
      starlink: { title: "Starlink Debugger", desc: "Network diagnostics and troubleshooting." },
      drone: { title: "FPV Academy", desc: "Interactive piloting and engineering course." },
      order: { title: "OrderAI Bot", desc: "Order automation and 24/7 support." },
      base: { title: "BizKnowledge", desc: "Corporate knowledge base & onboarding." }
    }
  }
};

function App() {
  const [lang, setLang] = useState('ua'); 
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-cyan-500 selection:text-white overflow-hidden relative`}>
      
      {/* NEON BACKGROUND BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob ${isDark ? 'bg-indigo-600' : 'bg-indigo-300'}`}></div>
        <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000 ${isDark ? 'bg-cyan-600' : 'bg-cyan-300'}`}></div>
        <div className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000 ${isDark ? 'bg-blue-800' : 'bg-blue-300'}`}></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isDark ? 'bg-[#0B0F19]/80 border-slate-800/50' : 'bg-white/80 border-slate-200'} backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative group cursor-pointer">
                <div className={`absolute -inset-2 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-indigo-500' : 'bg-gradient-to-r from-cyan-300 to-indigo-300'}`}></div>
                <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-2xl ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-indigo-600'}`}>
                  TB
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">TechBase</span>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isDark ? 'text-cyan-400' : 'text-indigo-500'}`}>{t.navSubtitle}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')} className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold transition-all border ${isDark ? 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 text-slate-300' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700'}`}>
                <Globe size={14} /> {lang.toUpperCase()}
              </button>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2.5 rounded-full transition-all border ${isDark ? 'bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 text-yellow-400' : 'bg-white border-slate-200 hover:border-indigo-400 text-indigo-600'}`}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative pt-44 pb-20 px-4 text-center z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold mb-8 transition-all shadow-lg ${isDark ? 'bg-slate-900/50 border-cyan-500/30 text-cyan-400 shadow-cyan-500/10' : 'bg-white border-indigo-100 text-indigo-600 shadow-indigo-200'}`}>
          <Activity size={14} className="animate-pulse" />
          {t.heroBadge}
        </div>
        
        <h1 className={`text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {t.heroTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg">{t.heroTitle2}</span> <br className="hidden md:block" />
          {t.heroTitle3} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-lg">{t.heroTitle4}</span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.heroDesc}
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-4 pb-32 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* NGO CARD */}
        <div className={`flex-1 rounded-[2rem] p-8 md:p-10 border transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isDark ? 'bg-[#0B0F19]/60 border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]' : 'bg-white/80 border-slate-200 hover:border-emerald-400 hover:shadow-xl'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-slate-900 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-emerald-50 text-emerald-600'}`}>
            <Shield size={32} />
          </div>
          
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.card1Title}</h2>
          <p className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.card1Desc}</p>
          
          <div className="space-y-4 mb-10">
            <ProjectCard isDark={isDark} icon={<Zap size={20} />} title={t.projects.starlink.title} desc={t.projects.starlink.desc} color="emerald" />
            <ProjectCard isDark={isDark} icon={<GraduationCap size={20} />} title={t.projects.drone.title} desc={t.projects.drone.desc} color="emerald" />
          </div>

          <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isDark ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-200'}`}>
            {t.card1Btn} <ArrowRight size={18} />
          </button>
        </div>

        {/* BUSINESS CARD */}
        <div className={`flex-1 rounded-[2rem] p-8 md:p-10 border transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 ${isDark ? 'bg-[#0B0F19]/60 border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]' : 'bg-white/80 border-slate-200 hover:border-blue-400 hover:shadow-xl'}`}>
           <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

           <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-slate-900 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'bg-blue-50 text-blue-600'}`}>
            <Laptop size={32} />
          </div>
          
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.card2Title}</h2>
          <p className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.card2Desc}</p>

          <div className="space-y-4 mb-10">
            <ProjectCard isDark={isDark} icon={<ShoppingCart size={20} />} title={t.projects.order.title} desc={t.projects.order.desc} color="cyan" />
            <ProjectCard isDark={isDark} icon={<BookOpen size={20} />} title={t.projects.base.title} desc={t.projects.base.desc} color="cyan" />
          </div>

           <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isDark ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200'}`}>
            {t.card2Btn} <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={`py-12 text-center border-t relative z-10 ${isDark ? 'bg-[#0B0F19] border-slate-900' : 'bg-white border-slate-200'}`}>
        <p className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          &copy; 2025 {t.footer}
        </p>
      </footer>
    </div>
  );
}

function ProjectCard({ icon, title, desc, color, isDark }) {
  const isEmerald = color === 'emerald';
  const iconColor = isEmerald 
    ? (isDark ? 'text-emerald-400' : 'text-emerald-600') 
    : (isDark ? 'text-cyan-400' : 'text-blue-600');
  
  const bgClass = isDark 
    ? 'bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700' 
    : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200';

  return (
    <div className={`${bgClass} p-4 rounded-xl border flex gap-5 items-center transition-all duration-300 hover:scale-[1.02]`}>
      <div className={`${iconColor} bg-opacity-10 p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>{icon}</div>
      <div>
        <h3 className={`font-bold text-base mb-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{title}</h3>
        <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{desc}</p>
      </div>
    </div>
  );
}

export default App;
