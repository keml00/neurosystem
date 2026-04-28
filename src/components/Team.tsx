import { motion } from 'framer-motion';
import { Cpu, Network, Database } from 'lucide-react';

const team = [
    {
        name: "КАМИЛЬ",
        role: "HEAD OF ENGINEERING",
        bio: "Архитектор распределенных систем и AI-решений с 12-летним опытом. Курирует разработку ядра автоматизации.",
        icon: <Cpu className="w-16 h-16" />,
        color: "from-transformative-teal"
    },
    {
        name: "ДМИТРИЙ",
        role: "AI ARCHITECT",
        bio: "Специалист по нейронным сетям и интеграции LLM в бизнес-процессы. Отвечает за интеллектуальную логику систем.",
        icon: <Network className="w-16 h-16" />,
        color: "from-amber-haze"
    },
    {
        name: "МАКСИМ",
        role: "SYSTEMS ENGINEER",
        bio: "Эксперт по высоконагруженным базам данных и API-интеграциям. Обеспечивает отказоустойчивость 99.9%.",
        icon: <Database className="w-16 h-16" />,
        color: "from-blue-500"
    }
];

export default function Team() {
    return (
        <section id="team" className="section-padding bg-future-dusk">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">КОМАНДА <span className="text-transformative-teal italic">ИНЖЕНЕРОВ</span></h2>
                    <p className="text-base md:text-xl text-white/40 leading-relaxed uppercase tracking-widest text-xs md:text-sm">ОПЫТ. ИНТЕЛЛЕКТ. ТЕХНОЛОГИИ.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center group p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            <div className="relative inline-flex items-center justify-center w-32 h-32 mb-10 mx-auto">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${member.color} to-transparent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-500 scale-125">
                                    {member.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">{member.name}</h3>
                            <p className="text-transformative-teal font-bold text-xs tracking-widest mb-6 uppercase">{member.role}</p>
                            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
