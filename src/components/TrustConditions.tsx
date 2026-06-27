import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Code, HelpCircle } from 'lucide-react';

const conditions = [
    {
        title: "ПОДДЕРЖКА",
        icon: <HelpCircle className="w-8 h-8 text-[#30D5C8]" />,
        gradient: "from-[#30D5C8]/5",
        borderGlow: "hover:border-[#30D5C8]/30",
        items: [
            "Бесплатная поддержка до 90 дней после сдачи",
            "Консультации по работе системы в подарок",
            "Оперативное исправление минорных правок"
        ]
    },
    {
        title: "ГАРАНТИЯ КАЧЕСТВА",
        icon: <ShieldCheck className="w-8 h-8 text-[#FFB347]" />,
        gradient: "from-[#FFB347]/5",
        borderGlow: "hover:border-[#FFB347]/30",
        items: [
            "Гарантия на отсутствие багов по ТЗ — бессрочно",
            "Критические ошибки исправляем за 24 часа",
            "Чистый, масштабируемый код без 'костылей'"
        ]
    },
    {
        title: "ПРОЗРАЧНАЯ ОПЛАТА",
        icon: <CreditCard className="w-8 h-8 text-white" />,
        gradient: "from-white/5",
        borderGlow: "hover:border-white/30",
        items: [
            "Аванс 50/50 для проектов до 300 000 ₽",
            "Поэтапная оплата (30/40/30) для крупных чеков",
            "Официальный договор и закрывающие документы"
        ]
    },
    {
        title: "ВАША ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ",
        icon: <Code className="w-8 h-8 text-[#30D5C8]" />,
        gradient: "from-[#30D5C8]/5",
        borderGlow: "hover:border-[#30D5C8]/30",
        items: [
            "Полная передача прав на исходный код",
            "Доступы ко всем репозиториям и серверам",
            "Развернутая техническая документация"
        ]
    }
];

export default function TrustConditions() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="glow-orb bottom-0 -right-32 w-[500px] h-[500px] bg-[#30D5C8]" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        ЧЕСТНЫЕ <span className="gradient-text italic">УСЛОВИЯ</span>
                    </h2>
                    <p className="text-sm text-white/40 uppercase tracking-[0.3em] font-bold">
                        Работаем так, чтобы вы не беспокоились о результате.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-10 ${condition.borderGlow} transition-all duration-500`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${condition.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                <div className="shrink-0 p-4 rounded-3xl bg-white/[0.04] border border-white/[0.07] group-hover:scale-110 transition-transform duration-500">
                                    {condition.icon}
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white tracking-tight uppercase">{condition.title}</h3>
                                    <ul className="space-y-4">
                                        {condition.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                                                <span className="text-white/50 text-base leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
