import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto px-6 py-24 md:py-32"
        >
            <Link to="/" className="inline-flex items-center gap-2 text-red-500 mb-12 hover:gap-3 transition-all">
                <ChevronLeft className="w-5 h-5" />
                <span>Volver a la landing</span>
            </Link>

            <div className="prose prose-invert prose-red max-w-none">
                <h1 className="text-4xl font-bold mb-4">Protección de Datos Personales</h1>
                <p className="text-gray-500 mb-12 font-mono text-sm italic">Loovie – Política de Privacidad | Cumplimiento Ley 25.326</p>

                <section className="space-y-8 text-gray-300 leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Cumplimiento Normativo</h2>
                        <p>Loovie cumple con la Ley 25.326 de Protección de Datos Personales de la República Argentina.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Finalidad de los Datos</h2>
                        <p>Los datos personales serán utilizados exclusivamente para:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>Funcionamiento y seguridad de la plataforma.</li>
                            <li>Moderación de la comunidad.</li>
                            <li>Mejora del servicio y comunicación institucional.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Tus Derechos</h2>
                        <p>El usuario podrá solicitar acceso, rectificación o eliminación de sus datos escribiendo a <span className="text-red-400">support@loovieapp.com</span>.</p>
                        <p className="mt-4">La Agencia de Acceso a la Información Pública es el órgano de control de la Ley 25.326.</p>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Privacy;
