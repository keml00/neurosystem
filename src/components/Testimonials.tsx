import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "ДМИТРИЙ В.",
        role: "CEO, E-COM LOGISTICS",
        content: "«Внедрение бота окупилось за 1.5 месяца. Мы сократили штат операторов на 30%, при этом скорость обработки заявок выросла в 4 раза. Невероятный результат для нашего сектора.»",
        date: "12.01.2026"
    },
    {
        name: "МАРИНА Ш.",
        role: "FOUNDER, TECHSTART",
        content: "«NeuroSystems создали не просто код, а полноценный цифровой актив. Теперь 80% рутины по сбору ТЗ проходит автоматически. Это освободило 40 часов в неделю для моих инженеров.»",
        date: "05.02.2026"
    },
    {
        name: "АРТЕМ К.",
        role: "OPERATIONS DIR",
        content: "«Лучшее вложение в инфраструктуру за прошлый год. Ребята понимают бизнес-задачи, а не просто пишут скрипты. Рекомендую тем, кому важен ROI, а не процесс.»",
        date: "28.02.2026"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-[#0a0a0a]">
            <div className="container mx-auto">
                <div className="max-w-3xl mb-16 md:mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">ЧТО ГОВОРЯТ <span className="text-transformative-teal italic">ПАРТНЕРЫ</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 relative group hover:border-[#00d9b8]/20 transition-all duration-500"
                        >
                            <Quote className="absolute top-8 right-10 w-16 h-16 text-[#00d9b8]/5 z-0" />
                            <div className="relative z-10">
                                <p className="text-xl text-white/70 italic mb-12 leading-relaxed font-serif">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="flex-1">
                                        <p className="font-bold text-white text-sm uppercase tracking-wider">{testimonial.name}</p>
                                        <p className="text-transformative-teal text-[10px] font-bold tracking-[0.2em]">{testimonial.role}</p>
                                    </div>
                                    <div className="text-white/20 text-[10px] font-bold tracking-widest">{testimonial.date}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
