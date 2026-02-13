import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Industry = () => {
    return (
        <section className="py-24 md:py-32 px-4 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10"
            >
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6">Para la Industria</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Loovie está desarrollando programas piloto para conectar nuevas audiencias con experiencias presenciales en salas de cine.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div className="bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-3">
                            <Mail className="w-5 h-5 text-red-500" />
                            <span className="text-white font-medium font-mono text-sm">partners@loovieapp.com</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                    <p className="text-gray-500 text-sm max-w-[300px] leading-relaxed italic border-l-2 border-red-500/20 pl-6">
                        "Si gestionás una sala o distribuís contenidos, podemos explorar una colaboración estratégica."
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Industry;
