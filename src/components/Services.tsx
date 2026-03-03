import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Box, CheckCircle2 } from 'lucide-react';

const services = [
    {
        id: 'chatbots',
        title: 'Умные чат-боты',
        pain: 'Менеджеры пропускают заявки в нерабочее время, а клиенты уходят к конкурентам.',
        result: 'Бот квалифицирует лид, принимает оплату и записывает клиента в CRM за 3 секунды в режиме 24/7.',
        icon: <MessageSquare className="w-8 h-8" />,
        features: ['Интеграция с Telegram/WhatsApp', 'Подключение платежных систем', 'Авто-запись в CRM']
    },
    {
        id: 'infrastructure',
        title: 'Цифровая инфраструктура',
        pain: 'Хаос в Excel-таблицах, потеря данных и невозможность отследить эффективность рекламы.',
        result: 'Единая экосистема (Сайт + CRM + Склад), где вы видите путь каждого рубля от клика до чистой прибыли.',
        icon: <Box className="w-8 h-8" />,
        features: ['Автоматизация складов', 'Сквозная аналитика', 'Кастомные CRM-решения']
    },
    {
        id: 'ai-agents',
        title: 'ИИ-агенты для бизнеса',
        pain: 'Огромные затраты на содержание штата техподдержки, который ошибается из-за человеческого фактора.',
        result: 'Нейросеть, обученная на вашей базе знаний, отвечает точнее эксперта и заменяет отдел из 5 сотрудников.',
        icon: <Cpu className="w-8 h-8" />,
        features: ['Обучение на данных компании', 'Техподдержка 24/7', 'Мультиязычность']
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-[#333b42] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="container mx-auto">
                <div className="max-w-3xl mb-16 md:mb-24 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 uppercase">НАШИ <span className="text-neon-cyan italic">СЕРВИСЫ</span></h2>
                    <p className="text-base md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Мы не просто пишем код — мы создаем экосистему, которая работает на ваш результат.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:border-neon-cyan/30 transition-all duration-500 group relative overflow-hidden shadow-neon-cyan hover:shadow-neon-cyan-hover"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-2xl text-[#00f2ff] mb-8 border border-white/10 group-hover:bg-[#00f2ff] group-hover:text-[#0a0b1e] transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,242,255,0.3)]">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">{service.title}</h3>

                            <div className="space-y-6">
                                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b35] mb-2 block">Проблема клиента</span>
                                    <p className="text-white/40 text-sm leading-relaxed">{service.pain}</p>
                                </div>

                                <div className="p-2">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00f2ff] mb-2 block">Финальный результат</span>
                                    <p className="text-white font-medium leading-relaxed">{service.result}</p>
                                </div>

                                <ul className="pt-6 border-t border-white/10 space-y-3">
                                    {service.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-[#00f2ff]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
