import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, MessageSquare } from 'lucide-react';

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
            {/* Background Effects */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                <span className="text-[#00f2ff] font-bold">AI</span>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">NEUROSYSTEMS</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                            АВТОМАТИЗАЦИЯ <br />
                            <span className="text-neon-cyan italic">БИЗНЕСА</span> <br />
                            ЧЕРЕЗ ИИ
                        </h1>

                        <p className="text-base md:text-xl text-white/40 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Проектируем и внедряем интеллектуальные системы, которые заменяют рутину на прибыль. Ваш персональный инженерный отдел на аутсорсе.
                            <span className="text-white"> Бесплатно составим ТЗ и рассчитаем ROI вашего проекта за 24 часа.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
                            <button
                                onClick={onOpenConsultation}
                                className="w-full sm:w-auto btn-neon-cyan flex items-center justify-center gap-3 py-6 px-10 group"
                            >
                                ОБСУДИТЬ ПРОЕКТ
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={handleCtaClick}
                                className="w-full sm:w-auto text-white/70 hover:text-white transition-colors flex items-center justify-center gap-3 py-6 px-10"
                            >
                                <MessageSquare className="w-5 h-5" />
                                БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                            </button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 text-sm font-bold text-white/40">
                            <div className="flex items-center gap-2">
                                <span className="text-[#00f2ff]">✔</span> 150+ ЗАПУЩЕННЫХ СИСТЕМ
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#00f2ff]">✔</span> 30% ЭКОНОМИИ БЮДЖЕТА
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#00f2ff]">✔</span> 0 ₽ ГАРАНТИЯ НА БАГИ
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last"
                    >
                        <div className="relative z-10 p-4 max-w-[500px] lg:max-w-full">
                            <img
                                src="/hero-new.png"
                                alt="AI Neurosystems"
                                className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,242,255,0.2)]"
                                style={{
                                    maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                                }}
                            />
                        </div>
                        {/* Pulsing glow behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-transparent rounded-full blur-[100px] animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
