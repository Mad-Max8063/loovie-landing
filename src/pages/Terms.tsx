import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
                <h1 className="text-4xl font-bold mb-4">Términos y Condiciones de Uso</h1>
                <p className="text-gray-500 mb-12 font-mono text-sm italic">Loovie – Versión 1.0 (Etapa Fundadores) | Última actualización: Febrero 2026</p>

                <section className="space-y-8 text-gray-300 leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Identificación del Titular</h2>
                        <p>Loovie es una plataforma digital creada y administrada por Matías Maximiliano Bernal (“Max”), con domicilio en la República Argentina.</p>
                        <p>Consultas: <span className="text-red-400">partners@loovieapp.com</span> | <span className="text-red-400">support@loovieapp.com</span></p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Naturaleza del Servicio</h2>
                        <p>Loovie es una plataforma digital que permite a personas conectarse con el objetivo de compartir experiencias culturales presenciales, principalmente asistir al cine.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>No organiza eventos ni actúa como intermediario contractual.</li>
                            <li>No supervisa encuentros presenciales ni garantiza afinidad.</li>
                            <li>Los encuentros son responsabilidad exclusiva de las personas involucradas.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Requisitos para el Uso</h2>
                        <p>Para utilizar Loovie, el usuario declara ser mayor de 18 años, proveer información veraz y no utilizar la plataforma con fines ilícitos o identidades falsas.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Etapa de Validación</h2>
                        <p>Loovie se encuentra en etapa de validación (“Programa Fundadores”). El uso de la plataforma durante esta etapa implica el conocimiento de su carácter experimental.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Conducta del Usuario</h2>
                        <p>El usuario se compromete a mantener una comunicación respetuosa, no acosar ni intimidar, y no enviar contenido ofensivo o ilegal.</p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl mt-12">
                        <p className="text-sm text-gray-500">Para el texto legal completo y detallado, los usuarios pueden solicitar la versión extendida vía soporte.</p>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Terms;
