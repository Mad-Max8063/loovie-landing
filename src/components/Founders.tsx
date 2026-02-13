import { motion } from 'framer-motion';
import { Star, Shield, Zap, MessageCircle } from 'lucide-react';

const Founders = ({ referralCode }: { referralCode: string | null }) => {
    const appUrl = `https://app.loovieapp.com/auth${referralCode ? `?ref=${referralCode}` : ''}`;
    const benefits = [
        { icon: <Star className="w-5 h-5" />, text: "Premium de por vida" },
        { icon: <Shield className="w-5 h-5" />, text: "Insignia exclusiva" },
        { icon: <Zap className="w-5 h-5" />, text: "Acceso prioritario" },
        { icon: <MessageCircle className="w-5 h-5" />, text: "Línea directa con el equipo" }
    ];

    return (
        <section id="fundadores" className="py-24 md:py-32 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden glass-panel rounded-[2rem] p-8 md:p-16 text-center border-red-500/20"
                >
                    {/* Subtle Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-8"
                    >
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-red-400 text-xs font-bold tracking-wider uppercase">Cupos Limitados de Validación</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Comunidad de Fundadores</h2>

                    <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Estamos en etapa de validación cerrada. Unite a los primeros 500 fundadores y ayudá a dar forma al futuro del cine compartido.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4 transition-colors hover:border-white/20">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                    {b.icon}
                                </div>
                                <span className="text-white font-medium">{b.text}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href={appUrl}
                        className="inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-brand-red rounded-full hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(229,9,20,0.6)] text-lg"
                    >
                        Quiero ser parte
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Founders;
