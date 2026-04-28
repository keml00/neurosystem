import { motion } from 'framer-motion';
import { Bot, Globe, Terminal, Smartphone, ArrowRight } from 'lucide-react';

const scalingSteps = [
    {
        title: "СТАРТ: TELEGRAM-БОТ",
        price: "от 120 000 ₽",
        description: "Фундамент вашего бизнеса. Базовая логика, сценарии взаимодействия, база данных и интеграция с вашей CRM.",
        icon: <Bot className="w-6 h-6" />,
        color: "text-transformative-teal"
    },
    {
        title: "ВЕБ-ИНТЕРФЕЙС",
        price: "+ от 80 000 ₽",
        description: "Разворачиваем полноценную веб-версию. Используем уже готовую логику бота, добавляя личные кабинеты и расширенное управление.",
        icon: <Globe className="w-6 h-6" />,
        color: "text-amber-haze"
    },
    {
        title: "ДЕСКТОП-ВЕРСИЯ",
        price: "+ от 100 000 ₽",
        description: "Упаковка в нативное приложение для Windows, macOS или Linux через Electron/Tauri с автообновлениями.",
        icon: <Terminal className="w-6 h-6" />,
        color: "text-white"
    },
    {
        title: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
        price: "+ от 200 000 ₽",
        description: "Выход в App Store и Google Play. Полная адаптация под мобильные ОС, пуш-уведомления и высокая производительность.",
        icon: <Smartphone className="w-6 h-6" />,
        color: "text-transformative-teal"
    }
];

export default function ProjectScaling() {
    return (
        <section className="section-padding bg-future-dusk relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        МАСШТАБИРОВАНИЕ <span className="text-amber-haze italic">БЕЗ ГРАНИЦ</span>
                    </h2>
                    <p className="text-xl text-cloud-dancer/60 leading-relaxed">
                        Мы строим проекты по модульному принципу. Логика, созданная на старте, переиспользуется на каждом этапе роста. Вам не нужно переплачивать за разработку с нуля.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transformative-teal/20 via-amber-haze/20 to-transformative-teal/20 -translate-y-1/2 z-0" />

                    {scalingSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-amber-haze/40 transition-all duration-500 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 ${step.color} group-hover:scale-110 transition-transform`}>
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-amber-haze transition-colors">{step.title}</h3>
                            <div className="text-transformative-teal font-bold text-sm mb-4 tracking-widest">{step.price}</div>
                            <p className="text-sm text-cloud-dancer/60 leading-relaxed mb-6">{step.description}</p>

                            {index < scalingSteps.length - 1 && (
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                                    <span>Следующий шаг</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight text-center lg:text-left">Почему выгодно расти поэтапно?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <div className="text-amber-haze font-black text-2xl">01</div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Низкий порог входа</h4>
                            <p className="text-cloud-dancer/60 text-sm">Начинаем с MVP за 120 000 ₽. Проверяем гипотезу, получаем первых клиентов и только потом расширяемся.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-amber-haze font-black text-2xl">02</div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Экономия до 60%</h4>
                            <p className="text-cloud-dancer/60 text-sm">Backend и бизнес-логика пишутся один раз. Вы платите только за адаптацию интерфейса под новые платформы.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-amber-haze font-black text-2xl">03</div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Скорость запуска</h4>
                            <p className="text-cloud-dancer/60 text-sm">Первая работающая версия (бот) готова уже через 2 недели. Ваш бизнес начинает работать, пока идет разработка веба.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
