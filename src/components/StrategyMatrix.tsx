import { motion } from 'framer-motion';
import { Check, Zap, Layout, ArrowRight } from 'lucide-react';

export default function StrategyMatrix() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        БОТ ИЛИ <span className="gradient-text italic">ВЕБ</span>?
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed">
                        Помогаем выбрать оптимальную точку старта для вашего продукта.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 hover:border-[#30D5C8]/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#30D5C8]/10 flex items-center justify-center text-[#30D5C8] border border-[#30D5C8]/20 group-hover:bg-[#30D5C8]/20 transition-colors">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Начинайте с БОТА, если:</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                { text: "Нужно быстро проверить идею (MVP за 2-3 недели)" },
                                { text: "Ограниченный бюджет на старте разработки" },
                                { text: "Ваша аудитория живет в мессенджерах" },
                                { text: "Логика продукта: заявки, каталог или FAQ" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#30D5C8]/10 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-[#30D5C8]" />
                                    </div>
                                    <span className="text-white/60 leading-relaxed font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-white/[0.05]">
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#30D5C8]">
                                <ArrowRight className="w-3 h-3" /> Идеально для стартапов
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 hover:border-[#FFB347]/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#FFB347]/10 flex items-center justify-center text-[#FFB347] border border-[#FFB347]/20 group-hover:bg-[#FFB347]/20 transition-colors">
                                <Layout className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Сразу делайте ВЕБ, если:</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                { text: "Требуется сложная аналитика и детальные дашборды" },
                                { text: "Работа с огромными массивами табличных данных" },
                                { text: "Необходимо мощное SEO и органический трафик" },
                                { text: "Продукт требует интеграции с множеством сторонних систем" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#FFB347]/10 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-[#FFB347]" />
                                    </div>
                                    <span className="text-white/60 leading-relaxed font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-white/[0.05]">
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFB347]">
                                <ArrowRight className="w-3 h-3" /> Для масштабных проектов
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-4xl mx-auto p-10 rounded-[3rem] bg-gradient-to-r from-[#30D5C8]/5 to-[#FFB347]/5 border border-white/[0.07] text-center"
                >
                    <p className="text-white font-medium italic text-lg leading-relaxed">
                        "Независимо от выбора, мы закладываем архитектуру, которая позволит в будущем бесшовно переходить между форматами."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
