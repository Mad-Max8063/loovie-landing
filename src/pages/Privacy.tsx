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
                <p className="text-gray-500 mb-12 font-mono text-sm italic">Loovie – Política de Privacidad | Última actualización: Febrero 2026</p>

                <section className="space-y-10 text-gray-300 leading-relaxed">

                    {/* 1. Responsable */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Responsable del Tratamiento</h2>
                        <p>Loovie es una plataforma operada desde la República Argentina. Para consultas sobre privacidad, escribí a <span className="text-red-400">privacy@loovieapp.com</span>.</p>
                    </div>

                    {/* 2. Cumplimiento */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Cumplimiento Normativo</h2>
                        <p>Loovie cumple con la Ley 25.326 de Protección de Datos Personales de la República Argentina y su Decreto Reglamentario 1558/2001. La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control competente.</p>
                    </div>

                    {/* 3. Datos que recopilamos */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Datos que Recopilamos</h2>
                        <p>Recopilamos los siguientes datos personales con tu consentimiento:</p>

                        <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.1 Datos de Registro</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Nombre o nombre artístico</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Edad</li>
                            <li>Foto de perfil</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.2 Datos de Perfil</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Biografía personal</li>
                            <li>Géneros cinematográficos favoritos</li>
                            <li>Preferencias de disponibilidad</li>
                            <li>Fotos adicionales (opcional)</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.3 Datos de Verificación de Identidad</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Imagen de selfie para verificación (procesada por IA y no almacenada)</li>
                            <li>Número de teléfono (opcional, solo para verificación)</li>
                            <li>Perfiles de redes sociales vinculados (opcional)</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.4 Datos de Uso</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Interacciones dentro de la plataforma (likes, matches, mensajes)</li>
                            <li>Información de sesiones grupales</li>
                            <li>Datos de pago (comprobantes de transferencia para usuarios fundadores)</li>
                        </ul>
                    </div>

                    {/* 4. Finalidad */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Finalidad del Tratamiento</h2>
                        <p>Los datos personales serán utilizados exclusivamente para:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>Funcionamiento y prestación del servicio de la plataforma</li>
                            <li>Verificación de identidad para seguridad de la comunidad</li>
                            <li>Generación de compatibilidades y recomendaciones cinematográficas</li>
                            <li>Moderación de contenido y seguridad</li>
                            <li>Comunicación institucional y notificaciones del servicio</li>
                            <li>Mejora continua de la experiencia del usuario</li>
                            <li>Cumplimiento de obligaciones legales</li>
                        </ul>
                    </div>

                    {/* 5. Uso de IA */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Uso de Inteligencia Artificial</h2>
                        <p>Loovie utiliza servicios de inteligencia artificial de terceros para las siguientes funcionalidades:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li><strong>Recomendaciones de películas:</strong> basadas en tus géneros favoritos (Google Gemini)</li>
                            <li><strong>Icebreakers:</strong> sugerencias de inicio de conversación personalizadas (Google Gemini)</li>
                            <li><strong>Moderación de mensajes:</strong> análisis automatizado de contenido para seguridad (Google Gemini)</li>
                            <li><strong>Verificación de identidad:</strong> análisis de imagen para confirmar autenticidad (Anthropic Claude)</li>
                        </ul>
                        <p className="mt-4">Estos servicios procesan datos de forma transitoria y no almacenan información personal de los usuarios. Las imágenes de verificación son procesadas en tiempo real y no se conservan después del análisis.</p>
                    </div>

                    {/* 6. Compartición */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Compartición de Datos</h2>
                        <p>Tus datos personales <strong>no se venden ni se comparten con terceros</strong> con fines comerciales. Solo compartimos datos con:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li><strong>Google Firebase:</strong> infraestructura de almacenamiento, autenticación y funciones en la nube</li>
                            <li><strong>Google Gemini / Anthropic Claude:</strong> procesamiento de IA según lo detallado en la sección 5</li>
                            <li><strong>Vercel:</strong> hosting y distribución de la aplicación web</li>
                            <li><strong>Autoridades competentes:</strong> cuando sea requerido por ley o resolución judicial</li>
                        </ul>
                    </div>

                    {/* 7. Seguridad */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Medidas de Seguridad</h2>
                        <p>Implementamos las siguientes medidas para proteger tus datos:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>Cifrado en tránsito (HTTPS/TLS) para todas las comunicaciones</li>
                            <li>Autenticación segura con Google Sign-In y WebAuthn</li>
                            <li>Reglas de acceso granulares en la base de datos (Firestore Security Rules)</li>
                            <li>Funciones en la nube con validación de autenticación y rate limiting</li>
                            <li>Moderación automática de mensajes mediante IA</li>
                            <li>Sistema de reportes y bloqueo de usuarios</li>
                        </ul>
                    </div>

                    {/* 8. Retención */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Retención de Datos</h2>
                        <p>Tus datos se conservan mientras mantengas tu cuenta activa. Al solicitar la eliminación de tu cuenta:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>Tus datos de perfil se eliminan dentro de los 30 días</li>
                            <li>Los mensajes enviados se anonimizan</li>
                            <li>Los datos de pago se conservan según las obligaciones fiscales vigentes</li>
                        </ul>
                    </div>

                    {/* 9. Derechos */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Tus Derechos (ARCO)</h2>
                        <p>Según la Ley 25.326, tenés derecho a:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li><strong>Acceso:</strong> solicitar qué datos tenemos sobre vos</li>
                            <li><strong>Rectificación:</strong> corregir datos inexactos</li>
                            <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos</li>
                            <li><strong>Oposición:</strong> oponerte al tratamiento de ciertos datos</li>
                        </ul>
                        <p className="mt-4">Para ejercer estos derechos, escribí a <span className="text-red-400">privacy@loovieapp.com</span> con el asunto "Ejercicio de Derechos ARCO". Responderemos dentro de los 10 días hábiles.</p>
                        <p className="mt-4">La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control de la Ley Nº 25.326, donde podés presentar denuncias en caso de incumplimiento: <span className="text-red-400">www.argentina.gob.ar/aaip</span></p>
                    </div>

                    {/* 10. Menores */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Menores de Edad</h2>
                        <p>Loovie está dirigido exclusivamente a personas mayores de 18 años. No recopilamos intencionalmente datos de menores de edad. Si detectamos una cuenta de un menor, será eliminada inmediatamente.</p>
                    </div>

                    {/* 11. Cambios */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Cambios en esta Política</h2>
                        <p>Nos reservamos el derecho de actualizar esta política. Los cambios significativos serán notificados a través de la aplicación. El uso continuado de Loovie después de las modificaciones implica la aceptación de la política actualizada.</p>
                    </div>

                    {/* 12. Contacto */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Contacto</h2>
                        <p>Para consultas sobre privacidad y protección de datos:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>Email: <span className="text-red-400">privacy@loovieapp.com</span></li>
                            <li>Soporte general: <span className="text-red-400">support@loovieapp.com</span></li>
                        </ul>
                    </div>

                </section>
            </div>
        </motion.div>
    );
};

export default Privacy;
