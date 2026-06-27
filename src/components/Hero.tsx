import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface HeroProps {
    onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
    const telegramUrl = "https://t.me/keml00";
    const template = encodeURIComponent(
        "Здравствуйте! Я хочу получить проект ТЗ бесплатно.\n\n" +
        "1. Ниша проекта:\n" +
        "2. Текущая проблема:\n" +
        "3. Желаемый результат:\n" +
        "4. Ссылка на сайт (если есть):"
    );

    const handleCtaClick = () => {
        window.open(`${telegramUrl}?text=${template}`, '_blank');
    };

    return (
        <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">
            <div className="glow-orb top-1/4 -left-32 w-[600px] h-[600px] bg-[#30D5C8]" />
            <div className="glow-orb bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#FF6B35]" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center justify-center lg:justify-start gap-2 mb-8"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                                <Sparkles className="w-3 h-3 text-[#30D5C8]" />
                                AI-АВТОМАТИЗАЦИЯ 2026
                            </span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
                            АВТОМАТИЗАЦИЯ{' '}
                            <br />
                            <span className="gradient-text italic">БИЗНЕСА</span>
                            <br />
                            ЧЕРЕЗ ИИ
                        </h1>

                        <p className="text-base md:text-lg text-white/50 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Проектируем и внедряем интеллектуальные системы, которые заменяют рутину на прибыль. Ваш персональный инженерный отдел на аутсорсе.
                            <span className="text-white/70"> Бесплатно составим ТЗ и рассчитаем ROI вашего проекта за 24 часа.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
                            <button
                                onClick={onOpenConsultation}
                                className="w-full sm:w-auto btn-amber-glow flex items-center justify-center gap-3 py-6 px-10 group"
                            >
                                ОБСУДИТЬ ПРОЕКТ
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={handleCtaClick}
                                className="w-full sm:w-auto btn-glass flex items-center justify-center gap-3 py-6 px-10"
                            >
                                <MessageSquare className="w-5 h-5" />
                                БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                            </button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 text-sm font-bold text-white/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[#30D5C8]">✦</span> 150+ ЗАПУЩЕННЫХ СИСТЕМ
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#30D5C8]">✦</span> 30% ЭКОНОМИИ БЮДЖЕТА
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#30D5C8]">✦</span> 0 ₽ ГАРАНТИЯ НА БАГИ
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last"
                    >
                        <div className="relative z-10 p-4 max-w-[500px] lg:max-w-full animate-float">
                            <img
                                src="/hero-new.png"
                                alt="AI Neurosystems"
                                className="w-full h-auto"
                                style={{
                                    maskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.8) 50%, transparent 75%)',
                                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.8) 50%, transparent 75%)'
                                }}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#30D5C8]/10 to-transparent rounded-full blur-[120px] animate-pulse-slow -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFB347]/5 rounded-full blur-[100px] animate-pulse-slow" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
