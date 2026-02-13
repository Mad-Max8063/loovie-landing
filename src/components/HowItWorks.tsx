import { motion } from 'framer-motion';
import { Film, MessageSquare, Ticket } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Film className="w-8 h-8 text-red-500" />,
            title: "Explorá",
            desc: "Navegá la cartelera de los mejores cines y descubrí qué se estrena esta semana."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-red-500" />,
            title: "Conversá",
            desc: "Conectá con personas interesadas en la misma película. Primero la charla, después la salida."
        },
        {
            icon: <Ticket className="w-8 h-8 text-red-500" />,
            title: "Compartí",
            desc: "Coordiná la función y viví la experiencia cultural presencial. El cine es mejor acompañado."
        }
    ];

    return (
        <section className="py-24 md:py-32 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Cómo funciona Loovie</h2>
                <div className="w-20 h-1 bg-brand-red mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-white/[0.03] border border-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform hover:scale-110 duration-500">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-balance">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
