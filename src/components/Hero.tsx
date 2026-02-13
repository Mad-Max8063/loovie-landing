import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = ({ referralCode }: { referralCode: string | null }) => {
    const appUrl = `https://app.loovieapp.com/auth${referralCode ? `?ref=${referralCode}` : ''}`;
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20 pb-16 overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-soft"></div>

            <div className="z-10 text-center max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-red-500/80 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
                >
                    ¿No tenés con quién ir?
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                >
                    El cine se vive <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        mejor acompañado
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Loovie conecta personas que comparten tu pasión por las películas.
                    Encontrá con quién compartir la próxima experiencia en pantalla grande.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-5 items-center justify-center"
                >
                    <a
                        href={appUrl}
                        className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-brand-red rounded-full hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(229,9,20,0.6)] focus:outline-none ring-offset-2 focus:ring-2 ring-red-500 text-lg"
                    >
                        <span>Explorar Cartelera</span>
                        <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#fundadores"
                        className="inline-flex items-center justify-center px-8 py-5 font-semibold text-gray-300 transition-all duration-300 border border-white/10 rounded-full hover:border-white/30 hover:text-white text-base hover:bg-white/[0.02]"
                    >
                        Programa Fundadores
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-xs text-gray-600 font-medium"
                >
                    Más que ver películas. Compartir la experiencia.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-2 bg-white/40 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
