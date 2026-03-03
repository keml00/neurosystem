import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import LegalModal from './components/LegalModal';
import ConsultationModal from './components/ConsultationModal';
import ProjectScaling from './components/ProjectScaling';
import StrategyMatrix from './components/StrategyMatrix';
import TrustConditions from './components/TrustConditions';
import BriefingInfo from './components/BriefingInfo';
import ScrollToTop from './components/ScrollToTop';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [legalType, setLegalType] = useState<'privacy' | 'legal'>('privacy');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(1248);

  useEffect(() => {
    const savedCount = localStorage.getItem('visitorCount');
    if (savedCount) {
      const newCount = parseInt(savedCount) + 1;
      setVisitorCount(newCount);
      localStorage.setItem('visitorCount', newCount.toString());
    } else {
      localStorage.setItem('visitorCount', '1248');
    }
  }, []);

  const openLegal = (type: 'privacy' | 'legal') => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Команда', href: '#team' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <div className="relative selection:bg-[#00f2ff]/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f2ff] to-[#ff6b35] origin-left z-[60]"
        style={{ scaleX }}
      />

      <nav className="glass-nav py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
              <span className="text-neon-cyan font-bold text-sm">AI</span>
            </div>
            <div className="text-xl font-bold tracking-[0.2em] text-white">
              NEURO<span className="text-neon-cyan italic">SYSTEMS</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hidden lg:block btn-neon-orange !py-2 !px-8 !text-[10px] !tracking-[0.2em]">ЗАКАЗАТЬ ТЗ</a>
            <button
              className="lg:hidden text-white hover:text-neon-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-ral-grey/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-neon-cyan text-sm font-bold uppercase tracking-widest transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-[1px] bg-white/5 my-2" />
                <a
                  href="#contact"
                  className="btn-neon-orange text-center py-4 text-[10px] tracking-[0.3em]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ЗАКАЗАТЬ ТЗ
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
        <Services />
        <Pricing />
        <ProjectScaling />
        <StrategyMatrix />
        <BriefingInfo />
        <TrustConditions />
        <Testimonials />
        <Team />
        <Contact />
      </main>

      <footer className="py-20 bg-ral-grey border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold tracking-[0.4em] text-white/80 mb-6">NEUROSYSTEMS</div>
          <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-12">
            AI-АВТОМАТИЗАЦИЯ С ФОКУСОМ НА ВАШ ROI
          </p>
          <div className="flex justify-center gap-10 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-12">
            <span>© 2026</span>
            <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</button>
            <button onClick={() => openLegal('legal')} className="hover:text-white transition-colors">ПРАВОВАЯ ИНФОРМАЦИЯ</button>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full opacity-30 hover:opacity-100 transition-opacity duration-700">
            <div className="w-1 h-1 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">УНИКАЛЬНЫХ ПОСЕТИТЕЛЕЙ: </span>
            <span className="text-[9px] font-bold text-neon-cyan tabular-nums">
              {visitorCount.toLocaleString('ru-RU')}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-neon-cyan/5 rounded-full blur-[150px] -z-10" />
      </footer>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        type={legalType}
      />
      <Analytics />
      <ScrollToTop />
    </div>
  );
}

export default App;
