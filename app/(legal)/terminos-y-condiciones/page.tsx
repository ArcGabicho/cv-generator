import Link from 'next/link';

export default function TerminosYCondiciones() {
    return (
        <main
            className="relative min-h-screen w-full overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1A0C2A 50%, #0F0A1A 100%)" }}
        >
            {/* Subtle background effects */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[300px] h-[150px] bg-gradient-to-r from-purple-500/30 to-transparent opacity-30 blur-2xl rounded-full z-0"></div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 w-[200px] h-[100px] bg-gradient-to-r from-green-400/20 to-transparent opacity-25 blur-2xl rounded-full z-0"></div>
            <div className="pointer-events-none absolute bottom-0 right-0 w-[250px] h-[120px] bg-gradient-to-l from-purple-400/25 to-transparent opacity-30 blur-2xl rounded-full z-0"></div>

            {/* Contenido principal */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-[Syne] leading-tight mb-6">
                        Términos y Condiciones <span className="text-purple-400">📋</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-purple-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 font-[Syne]">
                        Última actualización: 10 de octubre de 2025
                    </p>
                </div>

                {/* Contenido legal en formato de tarjetas */}
                <div className="space-y-8">
                    {/* Sección 1: Aceptación de términos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-check-circle text-green-400"></i>
                            1. Aceptación de los Términos
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Al acceder y utilizar RecluiterGPT, usted acepta estar sujeto a estos Términos y Condiciones de uso, 
                                todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier 
                                ley local aplicable.
                            </p>
                            <p>
                                Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio y servicio.
                            </p>
                        </div>
                    </div>

                    {/* Sección 2: Descripción del servicio */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-robot text-purple-400"></i>
                            2. Descripción del Servicio
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                RecluiterGPT es una plataforma SaaS que utiliza inteligencia artificial para generar currículums 
                                vitae (CVs) optimizados para superar filtros de Sistemas de Seguimiento de Candidatos (ATS).
                            </p>
                            <p>
                                <strong className="text-white">Funcionalidades principales:</strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Extracción de información de perfiles de LinkedIn mediante URL proporcionada por el usuario</li>
                                <li>Generación automatizada de CVs usando inteligencia artificial</li>
                                <li>Optimización para compatibilidad con sistemas ATS</li>
                                <li>Plantillas profesionales personalizables</li>
                                <li>Exportación en múltiples formatos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sección 3: Uso de datos de LinkedIn */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-linkedin text-blue-400"></i>
                            3. Extracción de Datos de LinkedIn
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Al proporcionar una URL de perfil de LinkedIn, usted declara y garantiza que:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Es el propietario legítimo del perfil de LinkedIn proporcionado</li>
                                <li>Tiene derecho a autorizar la extracción de información de dicho perfil</li>
                                <li>La información del perfil es verídica y actualizada</li>
                                <li>No viola los términos de servicio de LinkedIn</li>
                            </ul>
                            <p>
                                <strong className="text-yellow-400">Importante:</strong> Solo extraemos información pública 
                                disponible en su perfil de LinkedIn. No accedemos a información privada o confidencial.
                            </p>
                        </div>
                    </div>

                    {/* Sección 4: Uso de IA y datos anonimizados */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-cpu text-green-400"></i>
                            4. Inteligencia Artificial y Datos Anonimizados
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Para mejorar nuestro servicio de inteligencia artificial, utilizamos datos anonimizados de la siguiente manera:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 my-4">
                                <h3 className="text-lg font-semibold text-white mb-3">Anonimización de datos:</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Removemos toda información personal identificable (nombres, direcciones, teléfonos, emails)</li>
                                    <li>Conservamos solo patrones de estructura, formato y contenido general</li>
                                    <li>Los datos se procesan de forma agregada y estadística</li>
                                    <li>No es posible vincular los datos anonimizados con usuarios específicos</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 my-4">
                                <h3 className="text-lg font-semibold text-white mb-3">Uso para entrenamiento de IA:</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Mejora de algoritmos de generación de CVs</li>
                                    <li>Optimización de compatibilidad con sistemas ATS</li>
                                    <li>Desarrollo de nuevas plantillas y formatos</li>
                                    <li>Análisis de tendencias del mercado laboral</li>
                                </ul>
                            </div>
                            <p className="text-sm text-yellow-300">
                                <i className="bi bi-info-circle mr-2"></i>
                                Puede optar por no participar en el programa de mejora de IA contactando nuestro soporte.
                            </p>
                        </div>
                    </div>

                    {/* Sección 5: Cuenta de usuario y responsabilidades */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-person-gear text-blue-400"></i>
                            5. Cuenta de Usuario y Responsabilidades
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                <strong className="text-white">Responsabilidades del usuario:</strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                                <li>Proporcionar información veraz y actualizada</li>
                                <li>Utilizar el servicio únicamente para fines legales y profesionales</li>
                                <li>No compartir su cuenta con terceros</li>
                                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                            </ul>
                            <p>
                                <strong className="text-white">Organizaciones y equipos:</strong> Para cuentas organizacionales, 
                                el administrador es responsable de la gestión de usuarios y del cumplimiento de estos términos 
                                por parte de todos los miembros de la organización.
                            </p>
                        </div>
                    </div>

                    {/* Sección 6: Planes y facturación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-credit-card text-green-400"></i>
                            6. Planes y Facturación
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2">Plan Gratuito</h3>
                                    <ul className="text-sm space-y-1">
                                        <li>• 1 CV por mes</li>
                                        <li>• Plantillas básicas</li>
                                        <li>• Exportación PDF</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-purple-400/30 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2">Plan Lite ($15/mes)</h3>
                                    <ul className="text-sm space-y-1">
                                        <li>• 5 CVs por mes</li>
                                        <li>• Todas las plantillas</li>
                                        <li>• Optimización ATS</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-green-400/30 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2">Plan Premium ($25/mes)</h3>
                                    <ul className="text-sm space-y-1">
                                        <li>• CVs ilimitados</li>
                                        <li>• Plantillas premium</li>
                                        <li>• Soporte 24/7</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4">
                                Los precios están sujetos a cambios con previo aviso de 30 días. Las suscripciones se renuevan 
                                automáticamente hasta que sean canceladas.
                            </p>
                        </div>
                    </div>

                    {/* Sección 7: Limitaciones y responsabilidades */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-exclamation-triangle text-yellow-400"></i>
                            7. Limitaciones y Descargos de Responsabilidad
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                <strong className="text-white">RecluiterGPT no garantiza:</strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Que el CV generado garantice la obtención de empleo</li>
                                <li>Compatibilidad 100% con todos los sistemas ATS existentes</li>
                                <li>Disponibilidad ininterrumpida del servicio</li>
                                <li>Resultados específicos en procesos de selección</li>
                            </ul>
                            <p className="text-yellow-300 text-sm mt-4">
                                <i className="bi bi-shield-exclamation mr-2"></i>
                                El usuario es responsable de revisar y validar toda la información incluida en los CVs generados 
                                antes de utilizarlos en procesos de selección.
                            </p>
                        </div>
                    </div>

                    {/* Sección 8: Propiedad intelectual */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-c-circle text-purple-400"></i>
                            8. Propiedad Intelectual
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Los CVs generados pertenecen al usuario. RecluiterGPT retiene los derechos sobre:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>La plataforma y su código fuente</li>
                                <li>Los algoritmos de inteligencia artificial</li>
                                <li>Las plantillas y diseños</li>
                                <li>La marca RecluiterGPT y sus elementos gráficos</li>
                            </ul>
                            <p>
                                El uso del servicio no otorga ninguna licencia sobre la propiedad intelectual de RecluiterGPT.
                            </p>
                        </div>
                    </div>

                    {/* Sección 9: Terminación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-x-circle text-red-400"></i>
                            9. Terminación del Servicio
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                RecluiterGPT se reserva el derecho de terminar o suspender cuentas que:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Violen estos términos y condiciones</li>
                                <li>Utilicen el servicio para fines ilegales</li>
                                <li>Intenten comprometer la seguridad del sistema</li>
                                <li>Proporcionen información falsa o engañosa</li>
                            </ul>
                            <p>
                                Los usuarios pueden cancelar su suscripción en cualquier momento desde su panel de control.
                            </p>
                        </div>
                    </div>

                    {/* Sección 10: Contacto y jurisdicción */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-envelope-at text-blue-400"></i>
                            10. Contacto y Jurisdicción
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Para consultas sobre estos términos y condiciones, puede contactarnos en:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <p><strong className="text-white">Email:</strong> legal@recluitergpt.com</p>
                                <p><strong className="text-white">Soporte:</strong> soporte@recluitergpt.com</p>
                                <p><strong className="text-white">Dirección:</strong> Lima, Perú</p>
                            </div>
                            <p className="text-sm">
                                Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa será resuelta 
                                en los tribunales competentes de Lima, Perú.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer con navegación */}
                <div className="mt-16 text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/politicas-de-privacidad" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-[Syne]">
                            Políticas de Privacidad
                        </Link>
                        <Link href="/libro-de-reclamaciones" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-[Syne]">
                            Libro de Reclamaciones
                        </Link>
                        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-[Syne]">
                            Volver al inicio
                        </Link>
                    </div>
                    <p className="text-gray-500 text-sm font-[Syne]">
                        © 2025 RecluiterGPT. Todos los derechos reservados. | Elastic License 2.0
                    </p>
                </div>
            </div>
        </main>
    );
}
