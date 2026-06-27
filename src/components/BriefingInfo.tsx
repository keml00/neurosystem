import { motion } from 'framer-motion';
import {
    Users, Settings, Palette, FileText,
    Cpu, Clock, PlusCircle, Info
} from 'lucide-react';

const briefSteps = [
    { step: "01", title: "ОСНОВЫ", desc: "Общая концепция, цели бизнеса и ожидания от продукта.", icon: <Info className="w-5 h-5" /> },
    { step: "02", title: "ЦЕЛЕВОЙ ПОРТРЕТ", desc: "Кто ваш клиент? Его боли, привычки и основные сценарии поведения.", icon: <Users className="w-5 h-5" /> },
    { step: "03", title: "ФУНКЦИОНАЛ", desc: "Что должен уметь продукт? Интеграции, личные кабинеты, платежи.", icon: <Settings className="w-5 h-5" /> },
    { step: "04", title: "ДИЗАЙН", desc: "Визуальные предпочтения, брендбук, референсы и UX-вертикали.", icon: <Palette className="w-5 h-5" /> },
    { step: "05", title: "КОНТЕНТ", desc: "Тексты, изображения, видео. Материалы, которые уже есть в наличии.", icon: <FileText className="w-5 h-5" /> },
    { step: "06", title: "ТЕХ-ТРЕБОВАНИЯ", desc: "Стек технологий, домены, хостинги, требования к безопасности.", icon: <Cpu className="w-5 h-5" /> },
    { step: "07", title: "СРОКИ И БЮДЖЕТ", desc: "Желаемые даты запуска и финансовые рамки для разработки.", icon: <Clock className="w-5 h-5" /> },
    { step: "08", title: "ДОПОЛНИТЕЛЬНО", desc: "Любые пожелания вне стандартных рамок, которые сделают проект лучше.", icon: <PlusCircle className="w-5 h-5" /> }
];

export default function BriefingInfo() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="glow-orb top-0 right-0 w-[500px] h-[500px] bg-[#30D5C8]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        ПУТЬ К <span className="gradient-text italic">ТОЧНОЙ ЦЕНЕ</span>
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed">
                        Мы не гадаем на кофейной гуще. Наш структурированный бриф помогает за 8 шагов составить идеальное ТЗ и рассчитать стоимость с точностью до рубля.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {briefSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="glass-card p-8 group hover:border-[#30D5C8]/30 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[#FFB347] font-black text-3xl opacity-30 group-hover:opacity-80 transition-opacity tracking-tighter">
                                    {step.step}
                                </span>
                                <div className="p-3 rounded-xl bg-white/[0.04] text-[#30D5C8] border border-white/[0.07] group-hover:bg-[#30D5C8]/10 group-hover:text-[#30D5C8] transition-all">
                                    {step.icon}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-4 tracking-tight uppercase group-hover:text-[#30D5C8] transition-colors">{step.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center"
                >
                    <div className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#30D5C8]">Готовы обсудить детали?</span>
                    </div>
                    <a href="#contact" className="btn-neon-orange px-12 py-6">
                        Заполнить БРИФ сейчас
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
