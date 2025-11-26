import React, { useState, useEffect } from 'react';
import { Bot, Shield, ShoppingCart, ArrowRight, Zap, BookOpen, GraduationCap, Laptop, Moon, Sun, Globe, CheckCircle2 } from 'lucide-react';

// --- Словник перекладів ---
const translations = {
  ua: {
    navSubtitle: "Support & Education",
    heroBadge: "Система працює стабільно",
    heroTitle1: "Експертна",
    heroTitle2: "Підтримка",
    heroTitle3: "та",
    heroTitle4: "Навчання",
    heroDesc: "Ми розробляємо інтелектуальних помічників для вирішення складних технічних задач. Від налаштування обладнання в полі до автоматизації бізнесу.",
    card1Title: "Military & NGO",
    card1Desc: "Інструменти для діагностики, бази знань та навчальні боти для військових та волонтерів.",
    card1Btn: "Отримати доступ",
    card2Title: "Business Solutions",
    card2Desc: "Впровадження AI-консультантів та автоматизація обслуговування клієнтів.",
    card2Btn: "Замовити рішення",
    footer: "TechBase. Розроблено в Україні.",
    poweredBy: "За підтримки ГО 'Чат Підтримка'",
    projects: {
      starlink: { title: "Starlink Debugger", desc: "Діагностика та вирішення проблем зв'язку." },
      drone: { title: "Drone Academy", desc: "Інтерактивне навчання збірці та пілотуванню." },
      order: { title: "Smart Order Bot", desc: "Прийом замовлень та підтримка клієнтів 24/7." },
      base: { title: "Corp Knowledge", desc: "Навчання персоналу та база знань." }
    }
  },
  en: {
    navSubtitle: "Support & Education",
    heroBadge: "System Operational",
    heroTitle1: "Expert",
    heroTitle2: "Support",
    heroTitle3: "&",
    heroTitle4: "Education",
    heroDesc: "We develop intelligent assistants for solving complex technical challenges. From field equipment setup to business automation.",
    card1Title: "Military & NGO",
    card1Desc: "Diagnostic tools, knowledge bases, and training bots for military and volunteers.",
    card1Btn: "Get Access",
    card2Title: "Business Solutions",
    card2Desc: "Implementation of AI consultants and customer service automation.",
    card2Btn: "Order Solution",
    footer: "TechBase. Developed in Ukraine.",
    poweredBy: "Powered by NGO 'Chat Support'",
    projects: {
      starlink: { title: "Starlink Debugger", desc: "Diagnostics and connectivity troubleshooting." },
      drone: { title: "Drone Academy", desc: "Interactive assembly and piloting training." },
      order: { title: "Smart Order Bot", desc: "Order processing and 24/7 customer support." },
      base: { title: "Corp Knowledge", desc: "Staff training and knowledge base." }
    }
  }
};

function App() {
  const [lang, setLang] = useState('ua'); // 'ua' або 'en'
  const [theme, setTheme] = useState('dark'); // 'dark' або 'light'

  // Логіка перемикання теми
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
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-indigo-500 selection:text-white overflow-hidden relative`}>
      
      {/* Background Blobs Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${isDark ? 'bg-indigo-900' : 'bg-indigo-200'}`}></div>
        <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${isDark ? 'bg-emerald-900' : 'bg-emerald-200'}`}></div>
        <div className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${isDark ? 'bg-blue-900' : 'bg-blue-200'}`}></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className={`absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${isDark ? 'bg-gradient-to-r from-indigo-600 to-blue-600' : 'bg-gradient-to-r from-indigo-400 to-blue-400'}`}></div>
                <div className={`relative w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white shadow-xl ${isDark ? 'bg-slate-900' : 'bg-indigo-600'}`}>
                  TB
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">TechBase</span>
                <span className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.navSubtitle}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Lang Toggle */}
              <button 
                onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${isDark ? 'bg-slate-900 hover:bg-slate-800 border border-slate-800' : 'bg-slate-100 hover:bg-slate-200 border border-slate-200'}`}
              >
                <Globe size={14} />
                {lang.toUpperCase()}
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-full transition-all ${isDark ? 'bg-slate-900 text-yellow-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative pt-40 pb-20 px-4 text-center z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium mb-8 transition-colors ${isDark ? 'bg-slate-900/50 border-slate-700 text-emerald-400' : 'bg-white/50 border-slate-200 text-emerald-600'}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t.heroBadge}
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {t.heroTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">{t.heroTitle2}</span> <br className="hidden md:block" />
          {t.heroTitle3} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">{t.heroTitle4}</span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.heroDesc}
        </p>
      </div>

      {/* CARDS SECTION (Bento Grid Style) */}
      <div className="max-w-7xl mx-auto px-4 pb-32 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* CARD 1: NGO */}
        <div className={`flex-1 rounded-3xl p-8 md:p-10 border transition-all duration-500 group relative overflow-hidden ${isDark ? 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/50' : 'bg-white/60 border-slate-200 hover:border-emerald-500/50 shadow-xl shadow-slate-200/50'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-slate-800 text-emerald-400 border border-slate-700' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'} shadow-lg`}>
            <Shield size={28} />
          </div>
          
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.card1Title}</h2>
          <p className={`mb-8 h-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.card1Desc}
          </p>
          
          <div className="space-y-4 mb-10">
            <ProjectCard 
              isDark={isDark}
              icon={<Zap size={18} />}
              title={t.projects.starlink.title}
              desc={t.projects.starlink.desc}
              color="emerald"
            />
             <ProjectCard 
              isDark={isDark}
              icon={<GraduationCap size={18} />}
              title={t.projects.drone.title}
              desc={t.projects.drone.desc}
              color="emerald"
            />
          </div>

          <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-2px] ${isDark ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20'}`}>
            {t.card1Btn} <ArrowRight size={18} />
          </button>
        </div>

        {/* CARD 2: BUSINESS */}
        <div className={`flex-1 rounded-3xl p-8 md:p-10 border transition-all duration-500 group relative overflow-hidden ${isDark ? 'bg-slate-900/40 border-slate-800 hover:border-blue-500/50' : 'bg-white/60 border-slate-200 hover:border-blue-500/50 shadow-xl shadow-slate-200/50'}`}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>

           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-blue-50 text-blue-600 border border-blue-100'} shadow-lg`}>
            <Laptop size={28} />
          </div>
          
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.card2Title}</h2>
          <p className={`mb-8 h-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.card2Desc}
          </p>

          <div className="space-y-4 mb-10">
            <ProjectCard 
              isDark={isDark}
              icon={<ShoppingCart size={18} />}
              title={t.projects.order.title}
              desc={t.projects.order.desc}
              color="blue"
            />
             <ProjectCard 
              isDark={isDark}
              icon={<BookOpen size={18} />}
              title={t.projects.base.title}
              desc={t.projects.base.desc}
              color="blue"
            />
          </div>

           <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-2px] ${isDark ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'}`}>
            {t.card2Btn} <ArrowRight size={18} />
          </button>
        </div>

      </div>

      {/* FOOTER */}
      <footer className={`py-12 text-center border-t transition-colors ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
          <CheckCircle2 size={16} className="text-emerald-500" />
          <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t.poweredBy}</span>
        </div>
        <p className={`text-sm ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>&copy; 2025 {t.footer}</p>
      </footer>
    </div>
  );
}

// Компонент картки
function ProjectCard({ icon, title, desc, color, isDark }) {
  const isEmerald = color === 'emerald';
  const iconColor = isEmerald ? (isDark ? 'text-emerald-400' : 'text-emerald-600') : (isDark ? 'text-blue-400' : 'text-blue-600');
  const bgClass = isDark ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50';

  return (
    <div className={`${bgClass} p-4 rounded-xl border flex gap-4 items-start transition-colors duration-300`}>
      <div className={`mt-1 ${iconColor}`}>{icon}</div>
      <div>
        <h3 className={`font-bold text-sm md:text-base mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{title}</h3>
        <p className={`text-sm leading-snug ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      </div>
    </div>
  );
}

export default App;
