import { motion } from 'framer-motion';
import { Bot, Globe, Terminal, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

const scalingSteps = [
    {
        title: "СТАРТ: TELEGRAM-БОТ",
        price: "от 120 000 ₽",
        description: "Фундамент вашего бизнеса. Базовая логика, сценарии взаимодействия, база данных и интеграция с вашей CRM.",
        icon: <Bot className="w-6 h-6" />,
        color: "text-[#30D5C8]",
        borderGlow: "group-hover:border-[#30D5C8]/40"
    },
    {
        title: "ВЕБ-ИНТЕРФЕЙС",
        price: "+ от 80 000 ₽",
        description: "Разворачиваем полноценную веб-версию. Используем уже готовую логику бота, добавляя личные кабинеты и расширенное управление.",
        icon: <Globe className="w-6 h-6" />,
        color: "text-[#FFB347]",
        borderGlow: "group-hover:border-[#FFB347]/40"
    },
    {
        title: "ДЕСКТОП-ВЕРСИЯ",
        price: "+ от 100 000 ₽",
        description: "Упаковка в нативное приложение для Windows, macOS или Linux через Electron/Tauri с автообновлениями.",
        icon: <Terminal className="w-6 h-6" />,
        color: "text-white",
        borderGlow: "group-hover:border-white/30"
    },
    {
        title: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
        price: "+ от 200 000 ₽",
        description: "Выход в App Store и Google Play. Полная адаптация под мобильные ОС, пуш-уведомления и высокая производительность.",
        icon: <Smartphone className="w-6 h-6" />,
        color: "text-[#30D5C8]",
        borderGlow: "group-hover:border-[#30D5C8]/40"
    }
];

export default function ProjectScaling() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="glow-orb top-0 -left-32 w-[500px] h-[500px] bg-[#FF6B35]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        МАСШТАБИРОВАНИЕ <span className="gradient-text italic">БЕЗ ГРАНИЦ</span>
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed">
                        Мы строим проекты по модульному принципу. Логика, созданная на старте, переиспользуется на каждом этапе роста. Вам не нужно переплачивать за разработку с нуля.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[#30D5C8]/20 via-[#FFB347]/20 to-[#30D5C8]/20 -translate-y-1/2 z-0" />

                    {scalingSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`relative z-10 glass-card p-8 ${step.borderGlow} transition-all duration-500`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white/[0.04] flex items-center justify-center mb-6 border border-white/[0.07] ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-[#FFB347] transition-colors">{step.title}</h3>
                            <div className="text-[#30D5C8] font-bold text-sm mb-4 tracking-widest">{step.price}</div>
                            <p className="text-sm text-white/50 leading-relaxed mb-6">{step.description}</p>

                            {index < scalingSteps.length - 1 && (
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                                    <span>Следующий шаг</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.07]"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight text-center lg:text-left">
                        <Sparkles className="w-5 h-5 inline mr-2 text-[#FFB347]" />
                        Почему выгодно расти поэтапно?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-[#FFB347] font-black text-3xl">01</div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Низкий порог входа</h4>
                            <p className="text-white/50 text-sm">Начинаем с MVP за 120 000 ₽. Проверяем гипотезу, получаем первых клиентов и только потом расширяемся.</p>
                        </div>
                        <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-[#FFB347] font-black text-3xl">02</div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Экономия до 60%</h4>
                            <p className="text-white/50 text-sm">Backend и бизнес-логика пишутся один раз. Вы платите только за адаптацию интерфейса под новые платформы.</p>
                        </div>
                        <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-[#FFB347] font-black text-3xl">03</div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Скорость запуска</h4>
                            <p className="text-white/50 text-sm">Первая работающая версия (бот) готова уже через 2 недели. Ваш бизнес начинает работать, пока идет разработка веба.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
