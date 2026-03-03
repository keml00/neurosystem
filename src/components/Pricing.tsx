import { motion } from 'framer-motion';
import { Check, Zap, Bot, Smartphone, Layout, Globe } from 'lucide-react';

const pricingTiers = [
    {
        title: "AI ТЕЛЕГРАМ-БОТ",
        price: "95 000",
        description: "Автоматизация ответов, приём заявок и базовые AI-сценарии для малого бизнеса.",
        features: [
            "Интеграция с GPT-4o / Claude",
            "Сценарии продаж и FAQ",
            "Админ-панель в Telegram",
            "Интеграция с CRM (Amo/Bitrix)",
            "Срок: от 14 дней"
        ],
        icon: <Bot className="w-8 h-8 text-neon-cyan" />,
        highlight: false
    },
    {
        title: "AI-АГЕНТ / CRM",
        price: "180 000",
        description: "Умный помощник для обработки баз данных, генерации отчётов и сложных интеграций.",
        features: [
            "RAG-системы (база знаний)",
            "Авто-генерация документов",
            "Интеграция с почтой и API",
            "Голосовые интерфейсы",
            "Срок: от 21 дня"
        ],
        icon: <Zap className="w-8 h-8 text-neon-orange" />,
        highlight: true
    },
    {
        title: "TELEGRAM MINI APP",
        price: "220 000",
        description: "Полноценный веб-интерфейс внутри Telegram с личным кабинетом и платежами.",
        features: [
            "Кастомный UI/UX дизайн",
            "Корзина и приём платежей",
            "Push-уведомления",
            "Сложная серверная логика",
            "Срок: от 28 дней"
        ],
        icon: <Smartphone className="w-8 h-8 text-neon-cyan" />,
        highlight: false
    },
    {
        title: "CUSTOM AI СИСТЕМЫ",
        price: "ОТ 450 000",
        description: "Индивидуальная разработка цифровой инфраструктуры и масштабируемых AI-решений.",
        features: [
            "Собственные LLM модели",
            "Высоконагруженные системы",
            "Security-аудит данных",
            "VIP-поддержка 24/7",
            "Срок: индивидуально"
        ],
        icon: <Globe className="w-8 h-8 text-white" />,
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[200px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
                        ИНВЕСТИРУЙТЕ В <span className="text-neon-cyan italic">РОСТ</span>
                    </h2>
                    <p className="text-xl text-white/40 leading-relaxed">
                        Прозрачное ценообразование без скрытых платежей. Стоимость фиксируется в договоре.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 group ${tier.highlight
                                    ? 'bg-white/10 border-neon-orange shadow-neon-orange'
                                    : 'bg-white/5 border-white/10 hover:border-neon-cyan/50 hover:shadow-neon-cyan'
                                }`}
                        >
                            <div className="mb-8">
                                <div className="mb-4">{tier.icon}</div>
                                <h3 className="text-lg font-black text-white mb-2 tracking-wider">{tier.title}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl font-bold text-white tracking-tighter">{tier.price}</span>
                                    <span className="text-white/40 text-sm font-bold">₽</span>
                                </div>
                                <p className="text-sm text-white/40 leading-relaxed min-h-[60px]">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-white/60 text-sm">
                                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-neon-orange' : 'text-neon-cyan'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-4 rounded-xl text-center text-xs font-black tracking-[0.2em] transition-all duration-300 ${tier.highlight
                                        ? 'bg-neon-orange text-black hover:shadow-[0_0_20px_#ff6b35]'
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                ОБСУДИТЬ ПРОЕКТ
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-neon-cyan">
                            <Layout className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">Нужен индивидуальный расчёт?</h4>
                            <p className="text-white/40 text-sm">Мы подготовим детализированную смету и ТЗ в течение 24 часов.</p>
                        </div>
                    </div>
                    <a href="#contact" className="btn-neon-cyan px-10 py-5 whitespace-nowrap">
                        ПОЛУЧИТЬ СМЕТУ
                    </a>
                </div>
            </div>
        </section>
    );
}
