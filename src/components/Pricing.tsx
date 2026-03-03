import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    Globe, Cpu, Search, Terminal, Layers,
    LifeBuoy, Download,
    Code2, Clock, Zap
} from 'lucide-react';

const serviceCategories = [
    {
        id: 'web',
        name: 'Сайты и приложения',
        icon: <Globe className="w-5 h-5" />,
        services: [
            { title: "Лендинг (одностраничный)", included: "Дизайн, адаптивная вёрстка на коде, формы обратной связи, базовая SEO-оптимизация, интеграция с Метрикой и GA, деплой.", timeline: "1–2 недели", support: "30 дней бесплатно", price: "от 45 000 ₽" },
            { title: "Многостраничный сайт", included: "Главная, О компании, Услуги, Портфолио, Контакты. Дизайн, вёрстка, формы, базовая SEO, аналитика, деплой.", timeline: "2–3 недели", support: "30 дней бесплатно", price: "от 110 000 ₽" },
            { title: "Корпоративный сайт", included: "10–20 страниц, дизайн, вёрстка, CMS, формы, каталог услуг, блог, SEO, аналитика, деплой.", timeline: "3–4 недели", support: "30 дней бесплатно", price: "от 180 000 ₽" },
            { title: "Интернет-магазин", included: "Каталог, фильтры, корзина, платежи (ЮKassa), личный кабинет, админ-панель, CRM, SEO.", timeline: "4–6 недель", support: "30 дней бесплатно", price: "от 220 000 ₽" },
            { title: "Веб-приложение (SPA/PWA)", included: "Архитектура, UI/UX, React/Next.js, API, аутентификация, админ-панель, CI/CD, документация.", timeline: "4–8 недель", support: "60 дней бесплатно", price: "от 350 000 ₽" },
            { title: "Telegram-бот", included: "Сценарии, интеграция с CRM, платежи, БД, тестирование, деплой, инструкция.", timeline: "2–3 недели", support: "30 дней бесплатно", price: "от 65 000 ₽" },
            { title: "AI-бот с GPT", included: "GPT-4/Claude, база знаний (RAG), интеграция с CRM, обучение на корпоративных данных.", timeline: "3–4 недели", support: "30 дней бесплатно", price: "от 150 000 ₽" },
            { title: "Telegram Mini App", included: "Веб-приложение внутри TG, платежи, данные пользователя, интеграция с бэкендом.", timeline: "3–4 недели", support: "30 дней бесплатно", price: "от 160 000 ₽" },
            { title: "Мобильное приложение", included: "iOS/Android (Flutter/Native), API, пуш, аналитика, публикация в сторы.", timeline: "8–12 недель", support: "60 дней бесплатно", price: "от 450 000 ₽" },
            { title: "Стартап под ключ (MVP)", included: "От идеи до запуска. Бриф, ТЗ, дизайн, разработка, тесты, деплой, передача кода.", timeline: "4–8 недель", support: "60 дней бесплатно", price: "от 300 000 ₽" },
        ]
    },
    {
        id: 'automation',
        name: 'Автоматизация',
        icon: <Cpu className="w-5 h-5" />,
        services: [
            { title: "Интеграция с CRM", included: "Подключение форм к AmoCRM/Битрикс24, настройка лидов, передача данных, документация.", timeline: "3–5 дней", support: "14 дней бесплатно", price: "от 25 000 ₽" },
            { title: "Автоматизация процессов", included: "Анализ, сценарии, интеграции (Сайт/CRM/Телефония), воронки, уведомления, отчёты.", timeline: "2–4 недели", support: "30 дней бесплатно", price: "от 95 000 ₽" },
            { title: "AI-агент для бизнеса", included: "Анализ документов, работа с тендерами, парсинг, аналитика, GPT-4, веб-интерфейс.", timeline: "3–6 недель", support: "30 дней бесплатно", price: "от 180 000 ₽" },
            { title: "Цифровая инфраструктура", included: "Сайт + боты + админ-панель + CRM + платежи + аналитика + обучение + документация.", timeline: "8–16 недель", support: "90 дней бесплатно", price: "от 550 000 ₽" },
        ]
    },
    {
        id: 'design',
        name: 'Дизайн и SEO',
        icon: <Search className="w-5 h-5" />,
        services: [
            { title: "UI/UX Дизайн", included: "Проектирование сценариев, макеты в Figma, дизайн-система, адаптив, прототип.", timeline: "2–3 недели", support: "—", price: "от 55 000 ₽" },
            { title: "SEO (разовая)", included: "Аудит, ядро (100–200 запросов), мета-теги, контент, скорость загрузки.", timeline: "1–2 недели", support: "—", price: "от 35 000 ₽" },
            { title: "SEO (абонемент)", included: "Ежемесячно: контент-план, статьи, оптимизация, линкбилдинг, отчёты.", timeline: "от 3 месяцев", support: "Ежемесячные отчёты", price: "от 25 000 ₽/мес" },
        ]
    },
    {
        id: 'desktop',
        name: 'Десктоп',
        icon: <Terminal className="w-5 h-5" />,
        services: [
            { title: "Обёртка готового веба", included: "Упаковка веба в Electron/Tauri под 1 платформу, установщик, автообновления.", timeline: "1–2 недели", support: "30 дней", price: "от 45 000 ₽" },
            { title: "Разработка с нуля", included: "Нативное приложение: UI, логика, интеграции, сборки (Win/Mac/Linux).", timeline: "4–6 недель", support: "30 дней", price: "от 280 000 ₽" },
        ]
    },
    {
        id: 'web3',
        name: 'Web3 и Блокчейн',
        icon: <Layers className="w-5 h-5" />,
        services: [
            { title: "Интеграция кошелька", included: "MetaMask/WalletConnect, чтение/запись в сеть, балансы и транзакции.", timeline: "2–4 недели", support: "30 дней бесплатно", price: "от 120 000 ₽" },
            { title: "dApp или криптокошелёк", included: "Децентрализованное приложение (фронт), интеграция с нодой, базовые операции.", timeline: "4–8 недель", support: "30 дней бесплатно", price: "от 350 000 ₽" },
            { title: "Биржа или сложный dApp", included: "Обменник, мультисетевой кошелёк, смарт-контракты. Аудит, тесты, документация.", timeline: "2–4 месяца", support: "60 дней бесплатно", price: "от 650 000 ₽" },
        ]
    },
    {
        id: 'support',
        name: 'Поддержка',
        icon: <LifeBuoy className="w-5 h-5" />,
        services: [
            { title: "Техническая поддержка", included: "Мониторинг, фикс ошибок, обновления безопасности, консультации, бэкапы.", timeline: "Абонемент", support: "Включена", price: "от 20 000 ₽/мес" },
            { title: "Развитие проекта", included: "Новый функционал, интеграции, оптимизация производительности, редизайн.", timeline: "По запросу", support: "По договору", price: "от 40 000 ₽/мес" },
        ]
    }
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('web');

    const downloadPriceList = () => {
        let content = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Прайс-лист NeuroSystems</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                h1 { color: #00f2ff; text-transform: uppercase; border-bottom: 2px solid #00f2ff; }
                h2 { color: #ff6b35; margin-top: 30px; border-bottom: 1px solid #eee; }
                .service { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #ccc; }
                .price { font-weight: bold; color: #333; }
                .label { color: #666; font-size: 0.9em; }
            </style>
            </head>
            <body>
                <h1>NeuroSystems - ПРАЙС-ЛИСТ 2026 (Март)</h1>
        `;

        serviceCategories.forEach(cat => {
            content += `<h2>${cat.name.toUpperCase()}</h2>`;
            cat.services.forEach(s => {
                content += `
                    <div class="service">
                        <strong>${s.title}</strong><br/>
                        <span class="price">Цена: ${s.price}</span><br/>
                        <span class="label">Что входит:</span> ${s.included}<br/>
                        <span class="label">Срок:</span> ${s.timeline}<br/>
                        <span class="label">Поддержка:</span> ${s.support}
                    </div>
                `;
            });
        });

        content += "</body></html>";

        const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'NeuroSystems_PriceList_2026.doc';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <section id="pricing" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-cyan/5 rounded-full blur-[250px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
                        ИНВЕСТИРУЙТЕ В <span className="text-neon-cyan italic">РОСТ</span>
                    </h2>
                    <p className="text-xl text-white/40 leading-relaxed uppercase tracking-widest text-sm">
                        Прозрачная стоимость без скрытых платежей. Актуально на 2026 год.
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={downloadPriceList}
                            className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-neon-cyan hover:border-neon-cyan transition-all text-sm uppercase tracking-widest font-bold"
                        >
                            <Download className="w-4 h-4" />
                            Скачать прайс (TXT)
                        </button>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                    {serviceCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeTab === cat.id
                                ? 'bg-neon-orange border-neon-orange text-black shadow-neon-orange'
                                : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {cat.icon}
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 gap-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-6 md:p-12"
                        >
                            <div className="space-y-4">
                                {serviceCategories.find(c => c.id === activeTab)?.services.map((service, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-neon-cyan/30 hover:bg-white/[0.08] transition-all duration-500 flex flex-col lg:flex-row lg:items-center gap-8"
                                    >
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-neon-cyan transition-colors group-hover:bg-neon-cyan group-hover:text-[#0a0b1e]">
                                                    <Code2 className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                                            </div>
                                            <p className="text-white/40 text-sm leading-relaxed mb-6">{service.included}</p>

                                            <div className="flex flex-wrap gap-4 md:gap-8">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-neon-orange" />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{service.timeline}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-4 h-4 text-neon-cyan" />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{service.support}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:w-64 flex flex-col items-center lg:items-end gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-8">
                                            <div className="text-center lg:text-right">
                                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-1">СТОИМОСТЬ</div>
                                                <div className="text-3xl font-black text-white">{service.price}</div>
                                            </div>
                                            <a
                                                href="#contact"
                                                className="w-full lg:w-auto btn-neon-orange py-4 px-10 !text-[10px] !tracking-[0.2em]"
                                            >
                                                ОБСУДИТЬ ПРОЕКТ
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-neon-cyan/10 to-transparent border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
                        <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 text-neon-cyan group-hover:scale-110 transition-transform duration-500">
                            <Layers className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">Нужен индивидуальный расчёт?</h4>
                            <p className="text-white/40 text-lg">Мы подготовим детализированную смету и ТЗ в течение 24 часов.</p>
                        </div>
                    </div>
                    <a href="#contact" className="btn-neon-orange px-12 py-6 whitespace-nowrap relative z-10 shadow-neon-orange text-[10px] tracking-[0.3em]">
                        ПОЛУЧИТЬ СМЕТУ
                    </a>
                </div>
            </div>
        </section>
    );
}
