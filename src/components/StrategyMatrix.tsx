import { motion } from 'framer-motion';
import { Check, Zap, Layout } from 'lucide-react';

export default function StrategyMatrix() {
    return (
        <section className="section-padding bg-future-dusk">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        БОТ ИЛИ <span className="text-transformative-teal italic">ВЕБ</span>?
                    </h2>
                    <p className="text-xl text-cloud-dancer/60 leading-relaxed">
                        Помогаем выбрать оптимальную точку старта для вашего продукта.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Bot Matrix */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-transformative-teal/10 flex items-center justify-center text-transformative-teal border border-transformative-teal/20">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Начинайте с БОТА, если:</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                { text: "Нужно быстро проверить идею (MVP за 2-3 недели)", icon: <Check className="w-5 h-5 text-transformative-teal" /> },
                                { text: "Ограниченный бюджет на старте разработки", icon: <Check className="w-5 h-5 text-transformative-teal" /> },
                                { text: "Ваша аудитория живет в мессенджерах", icon: <Check className="w-5 h-5 text-transformative-teal" /> },
                                { text: "Логика продукта: заявки, каталог или FAQ", icon: <Check className="w-5 h-5 text-transformative-teal" /> },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1">{item.icon}</div>
                                    <span className="text-white/60 leading-relaxed font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Web Matrix */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-amber-haze/10 flex items-center justify-center text-amber-haze border border-amber-haze/20">
                                <Layout className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Сразу делайте ВЕБ, если:</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                { text: "Требуется сложная аналитика и детальные дашборды", icon: <Check className="w-5 h-5 text-amber-haze" /> },
                                { text: "Работа с огромными массивами табличных данных", icon: <Check className="w-5 h-5 text-amber-haze" /> },
                                { text: "Необходимо мощное SEO и органический трафик", icon: <Check className="w-5 h-5 text-amber-haze" /> },
                                { text: "Продукт требует интеграции с множеством сторонних систем", icon: <Check className="w-5 h-5 text-amber-haze" /> },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1">{item.icon}</div>
                                    <span className="text-white/60 leading-relaxed font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Modular Advantage */}
                <div className="mt-20 max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-transformative-teal/5 to-amber-haze/5 border border-white/5 text-center">
                    <p className="text-white font-medium italic">
                        "Независимо от выбора, мы закладываем архитектуру, которая позволит в будущем бесшовно переходить между форматами."
                    </p>
                </div>
            </div>
        </section>
    );
}
