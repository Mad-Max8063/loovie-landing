import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    return (
        <footer className="border-t border-white/5 pt-20 pb-12 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="space-y-4">
                        <button
                            onClick={() => setShowEasterEgg(!showEasterEgg)}
                            className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 hover:scale-105 transition-transform cursor-pointer"
                        >
                            LOOVIE
                        </button>
                        <p className="text-gray-500 max-w-xs text-sm">
                            Reinventando la experiencia de ir al cine, un encuentro a la vez.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Plataforma</h4>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li><a href="https://app.loovieapp.com" className="hover:text-red-500 transition-colors">Entrar a la App</a></li>
                                <li><a href="#fundadores" className="hover:text-red-500 transition-colors">Fundadores</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Legales</h4>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li><Link to="/terminos" className="hover:text-red-500 transition-colors">Términos</Link></li>
                                <li><Link to="/privacidad" className="hover:text-red-500 transition-colors">Privacidad</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Contacto</h4>
                            <ul className="space-y-2 text-sm text-gray-500 font-mono text-xs">
                                <li><a href="mailto:support@loovieapp.com" className="hover:text-white transition-colors">support@loovieapp.com</a></li>
                                <li><a href="mailto:partners@loovieapp.com" className="hover:text-white transition-colors">partners@loovieapp.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.02] text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                        <span>Creado por</span>
                        <span className="text-gray-400 font-medium">Matías "Max" Bernal</span>
                    </div>
                    <p>© 2026 Loovie. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Easter Egg Content */}
            <AnimatePresence>
                {showEasterEgg && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-brand-dark/95 backdrop-blur-xl"
                        onClick={() => setShowEasterEgg(false)}
                    >
                        <div className="max-w-2xl text-center space-y-8" onClick={e => e.stopPropagation()}>
                            <motion.div
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed italic font-light"
                            >
                                <p>Muchas personas se privan de ir al cine porque no tienen con quién hacerlo.</p>
                                <p>Al mismo tiempo, cada vez más salas se sienten vacías.</p>
                                <p>Para quienes aman la experiencia de la pantalla grande, esa sensación duele.</p>
                                <p className="text-white not-italic font-semibold pt-4">
                                    Loovie nace como una forma simple de conectar personas y mantener viva la experiencia en sala.
                                </p>
                            </motion.div>
                            <button
                                onClick={() => setShowEasterEgg(false)}
                                className="text-red-500 text-sm font-bold tracking-widest uppercase border-b border-red-500/20 pb-1"
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
