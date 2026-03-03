import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Code, HelpCircle, AlertCircle } from 'lucide-react';

const conditions = [
    {
        title: "ПОДДЕРЖКА",
        icon: <HelpCircle className="w-8 h-8 text-neon-cyan" />,
        items: [
            "Бесплатная поддержка до 90 дней после сдачи",
            "Консультации по работе системы в подарок",
            "Оперативное исправление минорных правок"
        ]
    },
    {
        title: "ГАРАНТИЯ КАЧЕСТВА",
        icon: <ShieldCheck className="w-8 h-8 text-neon-orange" />,
        items: [
            "Гарантия на отсутствие багов по ТЗ — бессрочно",
            "Критические ошибки исправляем за 24 часа",
            "Чистый, масштабируемый код без 'костылей'"
        ]
    },
    {
        title: "ПРОЗРАЧНАЯ ОПЛАТА",
        icon: <CreditCard className="w-8 h-8 text-white" />,
        items: [
            "Аванс 50/50 для проектов до 300 000 ₽",
            "Поэтапная оплата (30/40/30) для крупных чеков",
            "Официальный договор и закрывающие документы"
        ]
    },
    {
        title: "ВАША ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ",
        icon: <Code className="w-8 h-8 text-neon-cyan" />,
        items: [
            "Полная передача прав на исходный код",
            "Доступы ко всем репозиториям и серверам",
            "Развернутая техническая документация"
        ]
    }
];

export default function TrustConditions() {
    return (
        <section className="section-padding bg-[#0d0d0d] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        ЧЕСТНЫЕ <span className="text-neon-cyan italic">УСЛОВИЯ</span>
                    </h2>
                    <p className="text-xl text-white/40 leading-relaxed uppercase tracking-widest text-sm">
                        Работаем так, чтобы вы не беспокоились о результате.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] hover:bg-white/[0.08] transition-all duration-500 group"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="shrink-0 p-4 rounded-3xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                    {condition.icon}
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white tracking-tight uppercase">{condition.title}</h3>
                                    <ul className="space-y-4">
                                        {condition.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <AlertCircle className="w-4 h-4 mt-1 text-white/20 shrink-0" />
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
