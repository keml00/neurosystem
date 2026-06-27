import { motion } from 'framer-motion';
import { Cpu, Network, Database, ArrowUpRight } from 'lucide-react';

const team = [
    {
        name: "КАМИЛЬ",
        role: "HEAD OF ENGINEERING",
        bio: "Архитектор распределенных систем и AI-решений с 12-летним опытом. Курирует разработку ядра автоматизации.",
        icon: <Cpu className="w-14 h-14" />,
        gradient: "from-[#30D5C8] to-[#FFB347]",
        borderGlow: "group-hover:border-[#30D5C8]/40"
    },
    {
        name: "ДМИТРИЙ",
        role: "AI ARCHITECT",
        bio: "Специалист по нейронным сетям и интеграции LLM в бизнес-процессы. Отвечает за интеллектуальную логику систем.",
        icon: <Network className="w-14 h-14" />,
        gradient: "from-[#FFB347] to-[#FF6B35]",
        borderGlow: "group-hover:border-[#FFB347]/40"
    },
    {
        name: "МАКСИМ",
        role: "SYSTEMS ENGINEER",
        bio: "Эксперт по высоконагруженным базам данных и API-интеграциям. Обеспечивает отказоустойчивость 99.9%.",
        icon: <Database className="w-14 h-14" />,
        gradient: "from-[#30D5C8] to-[#FF6B35]",
        borderGlow: "group-hover:border-[#30D5C8]/40"
    }
];

export default function Team() {
    return (
        <section id="team" className="section-padding relative overflow-hidden">
            <div className="glow-orb bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#30D5C8]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">КОМАНДА <span className="gradient-text italic">ИНЖЕНЕРОВ</span></h2>
                    <p className="text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] font-bold">ОПЫТ. ИНТЕЛЛЕКТ. ТЕХНОЛОГИИ.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`text-center group p-8 glass-card ${member.borderGlow}`}
                        >
                            <div className="relative inline-flex items-center justify-center w-28 h-28 mb-10 mx-auto">
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-500`} />
                                <div className="relative z-10 text-white/70 group-hover:text-white transition-colors duration-500">
                                    {member.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">{member.name}</h3>
                            <p className="text-[#30D5C8] font-bold text-xs tracking-widest mb-6 uppercase">{member.role}</p>
                            <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                            <div className="mt-8 pt-6 border-t border-white/[0.05] flex justify-center">
                                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#30D5C8] transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
