import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Box, CheckCircle2, Globe, Phone, TrendingUp, ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: 'chatbots',
        title: 'Умные чат-боты',
        pain: 'Менеджеры пропускают заявки в нерабочее время, а клиенты уходят к конкурентам.',
        result: 'Бот квалифицирует лид, принимает оплату и записывает клиента в CRM за 3 секунды в режиме 24/7.',
        icon: <MessageSquare className="w-8 h-8" />,
        features: ['Интеграция с Telegram/WhatsApp', 'Подключение платежных систем', 'Авто-запись в CRM'],
        gradient: 'from-[#30D5C8]/10 to-transparent',
        borderGlow: 'group-hover:border-[#30D5C8]/40',
        accentColor: 'text-[#30D5C8]'
    },
    {
        id: 'voice-ai',
        title: 'AI Voice Agents',
        pain: 'Колл-центр не справляется с потоком звонков, высокая текучка операторов, дорогое содержание штата.',
        result: 'AI-ассистент принимает входящие звонки, квалифицирует лиды, записывает на услуги. Звучит как живой человек.',
        icon: <Phone className="w-8 h-8" />,
        features: ['Прием звонков 24/7', 'Исходящие звонки', 'Интеграция с телефонией', 'Распознавание эмоций'],
        gradient: 'from-[#FFB347]/10 to-transparent',
        borderGlow: 'group-hover:border-[#FFB347]/40',
        accentColor: 'text-[#FFB347]'
    },
    {
        id: 'ai-marketing',
        title: 'AI-маркетинг',
        pain: 'Нет времени/денег на SMM-менеджера, контент выходит нерегулярно, охваты падают.',
        result: 'AI генерирует посты для соцсетей, создает изображения, пишет тексты для рассылок, анализирует конкурентов.',
        icon: <TrendingUp className="w-8 h-8" />,
        features: ['Генерация постов и изображений', 'Автопостинг по расписанию', 'Анализ конкурентов', 'A/B тестирование'],
        gradient: 'from-[#FF6B35]/10 to-transparent',
        borderGlow: 'group-hover:border-[#FF6B35]/40',
        accentColor: 'text-[#FF6B35]'
    },
    {
        id: 'infrastructure',
        title: 'Цифровая инфраструктура',
        pain: 'Хаос в Excel-таблицах, потеря данных и невозможность отследить эффективность рекламы.',
        result: 'Единая экосистема (Сайт + CRM + Склад), где вы видите путь каждого рубля от клика до чистой прибыли.',
        icon: <Box className="w-8 h-8" />,
        features: ['Автоматизация складов', 'Сквозная аналитика', 'Кастомные CRM-решения'],
        gradient: 'from-[#30D5C8]/10 to-transparent',
        borderGlow: 'group-hover:border-[#30D5C8]/40',
        accentColor: 'text-[#30D5C8]'
    },
    {
        id: 'ai-agents',
        title: 'ИИ-агенты для бизнеса',
        pain: 'Огромные затраты на содержание штата техподдержки, который ошибается из-за человеческого фактора.',
        result: 'Нейросеть, обученная на вашей базе знаний, отвечает точнее эксперта и заменяет отдел из 5 сотрудников.',
        icon: <Cpu className="w-8 h-8" />,
        features: ['Обучение на данных компании', 'Техподдержка 24/7', 'Мультиязычность'],
        gradient: 'from-[#FFB347]/10 to-transparent',
        borderGlow: 'group-hover:border-[#FFB347]/40',
        accentColor: 'text-[#FFB347]'
    },
    {
        id: 'websites',
        title: 'Сайты под ключ',
        pain: 'Старые сайты с низким SEO и отсутствием конверсии в заявки.',
        result: 'Современный, быстрый сайт с дизайном в Figma, адаптивом и SEO-оптимизацией, готовый продавать.',
        icon: <Globe className="w-8 h-8" />,
        features: ['Дизайн и верстка на коде', 'SEO и Аналитика', 'Подключение к CRM'],
        gradient: 'from-[#FF6B35]/10 to-transparent',
        borderGlow: 'group-hover:border-[#FF6B35]/40',
        accentColor: 'text-[#FF6B35]'
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding relative overflow-hidden">
            <div className="glow-orb top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#30D5C8]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 uppercase">НАШИ <span className="gradient-text italic">СЕРВИСЫ</span></h2>
                    <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Мы не просто пишем код — мы создаем экосистему, которая работает на ваш результат.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-8 relative overflow-hidden group ${service.borderGlow}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`w-14 h-14 bg-white/[0.04] flex items-center justify-center rounded-2xl border border-white/[0.07] ${service.accentColor} group-hover:scale-110 transition-transform duration-500`}>
                                        {service.icon}
                                    </div>
                                    <ArrowUpRight className={`w-5 h-5 text-white/20 group-hover:${service.accentColor} group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">{service.title}</h3>

                                <div className="space-y-6">
                                    <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/[0.05]">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFB347] mb-2 block">Проблема клиента</span>
                                        <p className="text-white/50 text-sm leading-relaxed">{service.pain}</p>
                                    </div>

                                    <div className="p-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#30D5C8] mb-2 block">Финальный результат</span>
                                        <p className="text-white font-medium leading-relaxed">{service.result}</p>
                                    </div>

                                    <ul className="pt-6 border-t border-white/[0.07] space-y-3">
                                        {service.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                                <CheckCircle2 className={`w-4 h-4 ${service.accentColor}`} />
                                                {feature}
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
