import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'legal';
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
    const content = {
        privacy: {
            title: "Политика конфиденциальности (ФЗ-152)",
            body: `
        Политика в отношении обработки персональных данных.
        
        1. Общие положения
        Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных».
        
        2. Оператор обрабатывает следующие персональные данные:
        - Имя пользователя;
        - Номер телефона;
        - Данные о проекте, предоставленные пользователем.
        
        3. Цели обработки
        Цель обработки персональных данных — предоставление доступа Пользователю к сервисам и информации, содержащейся на веб-сайте, а также связь для составления ТЗ.
        
        4. Правовые основания
        Оператор обрабатывает персональные данные только в случае их заполнения Пользователем самостоятельно через формы на сайте.
        
        5. Порядок сбора и хранения
        Безопасность персональных данных обеспечивается путем реализации правовых, организационных и технических мер.
      `
        },
        legal: {
            title: "Правовая информация",
            body: `
        Наименование проекта: NEUROSYSTEMS (БотСайтПро)
        
        Деятельность: Разработка программного обеспечения и автоматизация бизнес-процессов на базе ИИ.
        
        Контакты для юридических запросов:
        Email: keml00@icloud.com
        Телефон: +79656000635
        
        Все права на контент и программный код, представленные на данном сайте, защищены. Копирование материалов без согласия правообладателя запрещено.
        
        Информация на сайте не является публичной офертой.
      `
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-2xl bg-ral-grey border border-white/10 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <h2 className="text-3xl font-bold text-white mb-8 pr-12">{content[type].title}</h2>
                        <div className="text-white/60 leading-relaxed whitespace-pre-line text-sm md:text-base italic">
                            {content[type].body}
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
