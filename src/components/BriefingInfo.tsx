import { motion } from 'framer-motion';
import {
    Users, Settings, Palette, FileText,
    Cpu, Clock, PlusCircle, Info
} from 'lucide-react';

const briefSteps = [
    { step: "01", title: "ОСНОВЫ", desc: "Общая концепция, цели бизнеса и ожидания от продукта.", icon: <Info className="w-5 h-5" /> },
    { step: "02", stepTitle: "АУДИТОРИЯ", title: "ЦЕЛЕВОЙ ПОРТРЕТ", desc: "Кто ваш клиент? Его боли, привычки и основные сценарии поведения.", icon: <Users className="w-5 h-5" /> },
    { step: "03", stepTitle: "ЛОГИКА", title: "ФУНКЦИОНАЛ", desc: "Что должен уметь продукт? Интеграции, личные кабинеты, платежи.", icon: <Settings className="w-5 h-5" /> },
    { step: "04", stepTitle: "СТИЛЬ", title: "ДИЗАЙН", desc: "Визуальные предпочтения, брендбук, референсы и UX-вертикали.", icon: <Palette className="w-5 h-5" /> },
    { step: "05", stepTitle: "НАПОЛНЕНИЕ", title: "КОНТЕНТ", desc: "Тексты, изображения, видео. Материалы, которые уже есть в наличии.", icon: <FileText className="w-5 h-5" /> },
    { step: "06", stepTitle: "БАЗА", title: "ТЕХ-ТРЕБОВАНИЯ", desc: "Стек технологий, домены, хостинги, требования к безопасности.", icon: <Cpu className="w-5 h-5" /> },
    { step: "07", stepTitle: "ГРАНИЦЫ", title: "СРОКИ И БЮДЖЕТ", desc: "Желаемые даты запуска и финансовые рамки для разработки.", icon: <Clock className="w-5 h-5" /> },
    { step: "08", stepTitle: "БОНУС", title: "ДОПОЛНИТЕЛЬНО", desc: "Любые пожелания вне стандартных рамок, которые сделают проект лучше.", icon: <PlusCircle className="w-5 h-5" /> }
];

export default function BriefingInfo() {
    return (
        <section className="section-padding bg-future-dusk relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-transformative-teal/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight">
                        ПУТЬ К <span className="text-amber-haze italic">ТОЧНОЙ ЦЕНЕ</span>
                    </h2>
                    <p className="text-xl text-cloud-dancer/60 leading-relaxed">
                        Мы не гадаем на кофейной гуще. Наш структурированный бриф помогает за 8 шагов составить идеальное ТЗ и рассчитать стоимость с точностью до рубля.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mask-fade">
                    {briefSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-transformative-teal/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-amber-haze font-black text-3xl opacity-40 group-hover:opacity-100 transition-opacity tracking-tighter">
                                    {step.step}
                                </span>
                                <div className="p-3 rounded-xl bg-white/5 text-neon-cyan border border-white/10 group-hover:bg-neon-cyan group-hover:text-black transition-all">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">{step.stepTitle || "АНАЛИЗ"}</div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-neon-cyan transition-colors">{step.title}</h3>
                            <p className="text-cloud-dancer/60 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <div className="p-1 px-4 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neon-cyan">Готовы обсудить детали?</span>
                    </div>
                    <a href="#contact" className="btn-neon-orange px-12 py-6 text-[10px] tracking-[0.3em] uppercase">
                        Заполнить БРИФ сейчас
                    </a>
                </div>
            </div>
        </section>
    );
}
