import { motion } from 'framer-motion';
import { Smartphone, Bell } from 'lucide-react';

const PlayStoreBanner = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8"
                    >
                        <Smartphone className="w-4 h-4" />
                        <span>Nuevo</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                        Próximamente en{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                            Google Play
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Loovie llega a la Play Store. Instalá la app directamente
                        en tu Android y llevá la experiencia cinéfila al siguiente nivel.
                    </p>

                    {/* Google Play Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="relative group cursor-default">
                            {/* Play Store styled button */}
                            <div className="flex items-center gap-4 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm group-hover:border-green-500/30 transition-all duration-500">
                                {/* Google Play triangle icon */}
                                <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3L5.864 2.658z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Próximamente en</p>
                                    <p className="text-xl font-bold text-white -mt-0.5">Google Play</p>
                                </div>
                            </div>

                            {/* Coming Soon overlay shimmer */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer pointer-events-none"></div>
                        </div>

                        <p className="text-gray-600 text-xs flex items-center gap-1.5">
                            <Bell className="w-3 h-3" />
                            Mientras tanto, usá Loovie desde tu navegador
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PlayStoreBanner;
