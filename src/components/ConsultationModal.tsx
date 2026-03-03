import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, MessageSquare, Tag, FileText, Wallet } from 'lucide-react';
import { useState } from 'react';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        telegram: '',
        topic: '',
        comment: '',
        budget: '',
        agree: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.name) newErrors.name = 'Поле обязательно для заполнения';
        if (!formData.phone) newErrors.phone = 'Поле обязательно для заполнения';
        if (!formData.topic) newErrors.topic = 'Поле обязательно для заполнения';
        if (!formData.agree) newErrors.agree = 'Необходимо ваше согласие';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const message = `🔥 КОНСУЛЬТАЦИЯ - NEUROSYSTEMS\n\n👤 Имя: ${formData.name}\n📞 Тел: ${formData.phone}\n✈️ TG: ${formData.telegram}\n📌 Тема: ${formData.topic}\n💬 Коммент: ${formData.comment}\n💰 Бюджет: ${formData.budget}`;
        window.open(`https://t.me/keml00?text=${encodeURIComponent(message)}`, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-[#121212] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between shrink-0">
                            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Бесплатная консультация</h2>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <X className="w-6 h-6 text-white/40" />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 ml-1">
                                        <User className="w-3 h-3" /> Имя <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Введите ваше имя"
                                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/10`}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] mt-2 ml-1">{errors.name}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 ml-1">
                                        <Phone className="w-3 h-3" /> Номер телефона <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="79991234567"
                                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/10`}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    {errors.phone && <p className="text-red-500 text-[10px] mt-2 ml-1">{errors.phone}</p>}
                                </div>

                                {/* Telegram */}
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 ml-1">
                                        <MessageSquare className="w-3 h-3" /> Телеграм (по желанию)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="@username"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/10"
                                        value={formData.telegram}
                                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                                    />
                                </div>

                                {/* Topic */}
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 ml-1">
                                        <Tag className="w-3 h-3" /> Тема заявки <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Опишите тему вашей заявки"
                                        className={`w-full bg-white/5 border ${errors.topic ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/10`}
                                        value={formData.topic}
                                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                    />
                                    {errors.topic && <p className="text-red-500 text-[10px] mt-2 ml-1">{errors.topic}</p>}
                                </div>

                                {/* Comment */}
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 ml-1">
                                        <FileText className="w-3 h-3" /> Комментарий
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Дополнительная информация о вашем запросе"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/10 resize-none"
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    />
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 ml-1">
                                        <Wallet className="w-3 h-3" /> Бюджет (по желанию)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Например: до 300 тыс., 500k, не определился"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/10"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                    />
                                </div>

                                {/* Agreement */}
                                <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl group cursor-pointer" onClick={() => setFormData({ ...formData, agree: !formData.agree })}>
                                    <div className={`mt-1 w-5 h-5 flex shrink-0 items-center justify-center rounded border transition-all ${formData.agree ? 'bg-neon-cyan border-neon-cyan' : 'border-white/20'}`}>
                                        {formData.agree && <Send className="w-3 h-3 text-black" />}
                                    </div>
                                    <div className="text-[10px] leading-relaxed text-white/30">
                                        Я согласен(а) на <span className="text-neon-cyan underline decoration-white/20 underline-offset-2">обработку персональных данных</span> и принимаю условия <span className="text-neon-cyan underline decoration-white/20 underline-offset-2">политики конфиденциальности</span> <span className="text-red-500">*</span>
                                    </div>
                                </div>
                                {errors.agree && <p className="text-red-500 text-[10px] ml-1">{errors.agree}</p>}

                                {/* Footer Actions */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 shrink-0">
                                    <button
                                        type="submit"
                                        className="w-full sm:flex-1 py-5 bg-neon-cyan text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_#00f2ff] transition-all"
                                    >
                                        Отправить заявку
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="w-full sm:w-auto px-8 py-5 text-white/40 font-bold text-xs uppercase hover:text-white transition-colors"
                                    >
                                        Отмена
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
