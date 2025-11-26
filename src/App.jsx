import React, { useState } from 'react';
import { Bot, Shield, ShoppingCart, ArrowRight, Zap, BookOpen, GraduationCap, Laptop } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* HEADER */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                TB
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">TechBase</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Support & Education</span>
              </div>
            </div>
            <div className="hidden md:block text-sm text-slate-400">
              Єдина база знань та рішень
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="pt-32 pb-16 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Система працює стабільно
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Експертна <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Підтримка</span> <br/>
          та <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Навчання</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Ми розробляємо інтелектуальних помічників для вирішення складних технічних задач. 
          Від налаштування обладнання в полі до автоматизації бізнесу.
        </p>
      </div>

      {/* MAIN SPLIT SECTION */}
      <div className="max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row gap-6">
        
        {/* DEFENSE & NGO CARD */}
        <div className="flex-1 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-all"></div>
          
          <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-slate-700 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-900/20">
            <Shield size={28} />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-white">Military & NGO Support</h2>
          <p className="text-slate-400 mb-8 min-h-[48px]">
            Інструменти для діагностики, бази знань та навчальні боти для військових та волонтерів.
          </p>
          
          <div className="space-y-4 mb-10">
            <ProjectCard 
              icon={<Zap size={18} />}
              title="Starlink Debugger"
              desc="Швидка діагностика та вирішення проблем зв'язку."
              badge="Live"
              color="emerald"
            />
             <ProjectCard 
              icon={<GraduationCap size={18} />}
              title="Drone Academy Bot"
              desc="Інтерактивне навчання збірці та пілотуванню FPV."
              badge="Beta"
              color="emerald"
            />
          </div>

          <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40">
            Отримати доступ <ArrowRight size={18} />
          </button>
        </div>

        {/* BUSINESS CARD */}
        <div className="flex-1 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-all"></div>

           <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-slate-700 group-hover:scale-105 transition-transform shadow-lg shadow-blue-900/20">
            <Laptop size={28} />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-white">Business Solutions</h2>
          <p className="text-slate-400 mb-8 min-h-[48px]">
            Впровадження AI-консультантів та автоматизація обслуговування клієнтів.
          </p>

          <div className="space-y-4 mb-10">
            <ProjectCard 
              icon={<ShoppingCart size={18} />}
              title="Smart Order Bot"
              desc="Прийом замовлень та підтримка клієнтів 24/7."
              badge="Demo"
              color="blue"
            />
             <ProjectCard 
              icon={<BookOpen size={18} />}
              title="Corporate Knowledge Base"
              desc="Навчання персоналу та швидкий пошук інструкцій."
              badge="Concept"
              color="blue"
            />
          </div>

           <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40">
            Замовити рішення <ArrowRight size={18} />
          </button>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center font-bold text-xs">TB</div>
          <span className="font-bold text-lg">TechBase</span>
        </div>
        <p className="text-slate-600 text-sm">&copy; 2025 TechBase. Розроблено в Україні.</p>
      </footer>
    </div>
  );
}

// Компонент картки
function ProjectCard({ icon, title, desc, badge, color }) {
  const isEmerald = color === 'emerald';
  const iconColor = isEmerald ? 'text-emerald-400' : 'text-blue-400';
  const badgeBg = isEmerald ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20';

  return (
    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-4 items-start hover:bg-slate-800/80 transition-colors">
      <div className={`mt-1 ${iconColor}`}>{icon}</div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-slate-200 text-sm md:text-base">{title}</h3>
          <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${badgeBg} font-bold`}>
            {badge}
          </span>
        </div>
        <p className="text-sm text-slate-400 leading-snug">{desc}</p>
      </div>
    </div>
  );
}

export default App;
