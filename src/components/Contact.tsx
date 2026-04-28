import { motion } from 'framer-motion';
import { Send, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        project: ''
    });

    const contactInfo = {
        telegram: "keml00",
        location: "Казань, Россия"
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `🚀 НОВАЯ ЗАЯВКА - NEUROSYSTEMS\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n📝 Описание: ${formData.project}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://t.me/${contactInfo.telegram}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="contact" className="section-padding bg-future-dusk relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-haze/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <div className="mb-12 text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter uppercase">ГОТОВЫ К <br /> <span className="text-amber-haze italic">РЫВКУ?</span></h2>
                            <p className="text-base md:text-xl text-white/40 leading-relaxed">
                                Оставьте заявку, и мы подготовим <span className="text-white">бесплатное ТЗ</span> вашего проекта в течение 24 часов.
                            </p>
                        </div>

                        <div className="space-y-10 max-w-md mx-auto lg:mx-0">
                            <div className="flex flex-col gap-6">

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 text-amber-haze transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Локация</div>
                                        <div className="text-2xl font-bold text-white uppercase">{contactInfo.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-3xl flex flex-col justify-center"
                    >
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 ml-2">Ваше имя</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-transformative-teal outline-none transition-all"
                                        placeholder="СУЛТАН"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 ml-2">Ваш телефон</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-transformative-teal outline-none transition-all"
                                        placeholder="+7 (___) ___-__-__"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-full btn-amber-glow flex items-center justify-center gap-3 py-6 text-lg tracking-widest">
                                ОТПРАВИТЬ ЗАЯВКУ
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-transformative-teal/20 to-transparent" />
            </div>
        </section>
    );
}
