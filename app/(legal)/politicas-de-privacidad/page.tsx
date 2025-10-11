import Link from 'next/link';

export default function PoliticasDePrivacidad() {
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
                        Políticas de Privacidad <span className="text-green-400">🔒</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-green-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 font-[Syne]">
                        Última actualización: 10 de octubre de 2025
                    </p>
                </div>

                {/* Contenido legal en formato de tarjetas */}
                <div className="space-y-8">
                    {/* Sección 1: Introducción */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-info-circle text-green-400"></i>
                            1. Introducción
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                En RecluiterGPT, valoramos y respetamos su privacidad. Esta Política de Privacidad describe 
                                cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza 
                                nuestro servicio de generación de currículums vitae impulsado por inteligencia artificial.
                            </p>
                            <p>
                                Al utilizar RecluiterGPT, usted acepta las prácticas descritas en esta política. Si no está 
                                de acuerdo con estas prácticas, le recomendamos que no utilice nuestro servicio.
                            </p>
                        </div>
                    </div>

                    {/* Sección 2: Información que recopilamos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-collection text-blue-400"></i>
                            2. Información que Recopilamos
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <i className="bi bi-person-circle text-green-400"></i>
                                    Información Personal Directa
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Información de registro:</strong> Nombre, apellido, dirección de email, contraseña</li>
                                    <li><strong>Información de contacto:</strong> Número de teléfono (opcional)</li>
                                    <li><strong>Información de pago:</strong> Datos de facturación (procesados por Stripe)</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <i className="bi bi-linkedin text-blue-500"></i>
                                    Información de LinkedIn
                                </h3>
                                <p className="mb-3">
                                    Cuando proporciona una URL de perfil de LinkedIn, extraemos únicamente información <strong>pública</strong>:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Nombre y título profesional</li>
                                    <li>Experiencia laboral y educación</li>
                                    <li>Habilidades y certificaciones</li>
                                    <li>Resumen profesional público</li>
                                    <li>Idiomas e intereses (si están públicos)</li>
                                </ul>
                                <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4 mt-4">
                                    <p className="text-yellow-300 text-sm">
                                        <i className="bi bi-exclamation-triangle mr-2"></i>
                                        <strong>Importante:</strong> NO accedemos a información privada, mensajes, conexiones 
                                        o datos que no sean públicamente visibles en su perfil de LinkedIn.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <i className="bi bi-graph-up text-purple-400"></i>
                                    Información de Uso y Técnica
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Dirección IP y ubicación geográfica aproximada</li>
                                    <li>Información del navegador y dispositivo</li>
                                    <li>Páginas visitadas y tiempo de permanencia</li>
                                    <li>Patrones de uso del servicio</li>
                                    <li>Logs de errores y rendimiento</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sección 3: Cómo utilizamos su información */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-gear-wide-connected text-purple-400"></i>
                            3. Cómo Utilizamos su Información
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <i className="bi bi-file-earmark-person text-green-400"></i>
                                        Servicios Principales
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>Generar currículums personalizados</li>
                                        <li>Optimizar contenido para sistemas ATS</li>
                                        <li>Proporcionar plantillas y formatos</li>
                                        <li>Exportar documentos en múltiples formatos</li>
                                        <li>Gestionar su cuenta y suscripción</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <i className="bi bi-headset text-blue-400"></i>
                                        Soporte y Comunicación
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>Proporcionar soporte técnico</li>
                                        <li>Responder a consultas y comentarios</li>
                                        <li>Enviar notificaciones importantes</li>
                                        <li>Comunicar actualizaciones del servicio</li>
                                        <li>Procesar pagos y facturación</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600/10 to-green-600/10 border border-purple-400/30 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <i className="bi bi-cpu-fill text-purple-400"></i>
                                    Mejora de la Inteligencia Artificial
                                </h3>
                                <div className="space-y-4">
                                    <p>
                                        Utilizamos datos <strong>anonimizados</strong> para mejorar continuamente nuestros 
                                        algoritmos de IA:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-green-300 mb-2">Datos que SÍ utilizamos (anonimizados):</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm">
                                                <li>Patrones de estructura de CV</li>
                                                <li>Tipos de habilidades más demandadas</li>
                                                <li>Formatos que mejoran compatibilidad ATS</li>
                                                <li>Tendencias del mercado laboral</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-300 mb-2">Datos que NO utilizamos:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm">
                                                <li>Nombres e información personal</li>
                                                <li>Direcciones o contactos específicos</li>
                                                <li>Empresas o lugares de trabajo</li>
                                                <li>Cualquier dato identificable</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 4: Base legal para el tratamiento */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-scale text-yellow-400"></i>
                            4. Base Legal para el Tratamiento de Datos
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-green-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-check-circle text-green-400"></i>
                                            Consentimiento
                                        </h3>
                                        <p className="text-sm">
                                            Al crear su cuenta y proporcionar su información, usted nos otorga consentimiento 
                                            explícito para procesar sus datos según se describe en esta política.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 border border-blue-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-file-contract text-blue-400"></i>
                                            Ejecución de Contrato
                                        </h3>
                                        <p className="text-sm">
                                            Necesitamos procesar sus datos para cumplir con nuestros términos de servicio 
                                            y proporcionar el servicio solicitado.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-purple-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-building text-purple-400"></i>
                                            Interés Legítimo
                                        </h3>
                                        <p className="text-sm">
                                            Para mejorar nuestro servicio, prevenir fraudes y garantizar la seguridad 
                                            de la plataforma.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 border border-orange-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-shield-check text-orange-400"></i>
                                            Cumplimiento Legal
                                        </h3>
                                        <p className="text-sm">
                                            Para cumplir con obligaciones legales aplicables, como regulaciones 
                                            fiscales y de protección de datos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 5: Compartir información */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-share text-blue-400"></i>
                            5. Compartir Información con Terceros
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                                <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                                    <i className="bi bi-x-circle"></i>
                                    NO Vendemos ni Alquilamos sus Datos
                                </h3>
                                <p>
                                    RecluiterGPT <strong>NUNCA</strong> vende, alquila o comparte sus datos personales 
                                    con fines comerciales o de marketing con terceros.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-white font-semibold mb-3">Compartimos información limitada únicamente con:</h3>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-credit-card text-green-400"></i>
                                            Procesadores de Pago
                                        </h4>
                                        <p className="text-sm">
                                            <strong>Stripe:</strong> Para procesar pagos de forma segura. 
                                            Stripe tiene sus propias políticas de privacidad certificadas.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-cloud text-blue-400"></i>
                                            Proveedores de Infraestructura
                                        </h4>
                                        <p className="text-sm">
                                            <strong>Firebase/Google Cloud:</strong> Para almacenamiento seguro de datos 
                                            y servicios de backend con certificaciones SOC 2 y ISO 27001.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-bar-chart text-purple-400"></i>
                                            Herramientas de Analytics
                                        </h4>
                                        <p className="text-sm">
                                            <strong>Google Analytics:</strong> Para entender el uso del sitio web 
                                            (datos anonimizados y agregados únicamente).
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-shield-exclamation text-yellow-400"></i>
                                            Requerimientos Legales
                                        </h4>
                                        <p className="text-sm">
                                            Solo cuando sea legalmente requerido por autoridades competentes 
                                            con órdenes judiciales válidas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 6: Seguridad de los datos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-shield-lock text-green-400"></i>
                            6. Seguridad y Protección de Datos
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Implementamos múltiples capas de seguridad para proteger su información:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-green-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-lock text-green-400"></i>
                                            Encriptación
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                                            <li>HTTPS/TLS 1.3 para transmisión</li>
                                            <li>AES-256 para almacenamiento</li>
                                            <li>Hashing seguro de contraseñas</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 border border-blue-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-key text-blue-400"></i>
                                            Acceso y Autenticación
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                                            <li>Autenticación multifactor (MFA)</li>
                                            <li>Principio de menor privilegio</li>
                                            <li>Tokens de sesión seguros</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-purple-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-eye text-purple-400"></i>
                                            Monitoreo y Auditoría
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                                            <li>Logs detallados de acceso</li>
                                            <li>Detección de anomalías</li>
                                            <li>Auditorías de seguridad regulares</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 border border-orange-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-people text-orange-400"></i>
                                            Entrenamiento del Personal
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                                            <li>Formación en privacidad de datos</li>
                                            <li>Acceso basado en roles</li>
                                            <li>Acuerdos de confidencialidad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                                <p className="text-yellow-300 text-sm">
                                    <i className="bi bi-exclamation-triangle mr-2"></i>
                                    <strong>Importante:</strong> A pesar de nuestras medidas de seguridad, ningún sistema es 100% seguro. 
                                    Le recomendamos usar contraseñas fuertes y únicas para su cuenta.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sección 7: Retención de datos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-clock-history text-blue-400"></i>
                            7. Retención y Eliminación de Datos
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-person-check text-green-400"></i>
                                        Cuentas Activas
                                    </h3>
                                    <ul className="text-sm space-y-2 list-disc list-inside">
                                        <li>Mantenemos sus datos mientras su cuenta esté activa</li>
                                        <li>Los CVs generados se conservan según su plan</li>
                                        <li>Puede eliminar CVs individuales en cualquier momento</li>
                                        <li>Backup automático por 30 días para recuperación</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-person-x text-red-400"></i>
                                        Cuentas Inactivas/Eliminadas
                                    </h3>
                                    <ul className="text-sm space-y-2 list-disc list-inside">
                                        <li><strong>Eliminación voluntaria:</strong> 30 días para recuperación</li>
                                        <li><strong>Inactividad:</strong> Eliminación después de 3 años</li>
                                        <li><strong>Datos anonimizados:</strong> Se mantienen para mejora de IA</li>
                                        <li><strong>Datos de pago:</strong> Según regulaciones fiscales</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                                <h3 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                                    <i className="bi bi-info-circle"></i>
                                    Proceso de Eliminación Segura
                                </h3>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-1-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Marcado para eliminación</strong></p>
                                        <p>Los datos se marcan como eliminados</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-2-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Período de gracia</strong></p>
                                        <p>30 días para recuperación si es necesario</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-3-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Eliminación permanente</strong></p>
                                        <p>Sobrescritura segura de todos los sistemas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 8: Sus derechos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-person-raised-hand text-purple-400"></i>
                            8. Sus Derechos sobre los Datos
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Usted tiene los siguientes derechos sobre sus datos personales:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-green-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-eye text-green-400"></i>
                                            Acceso
                                        </h3>
                                        <p className="text-sm">
                                            Puede solicitar una copia de todos los datos personales que tenemos sobre usted.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-blue-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-pencil text-blue-400"></i>
                                            Rectificación
                                        </h3>
                                        <p className="text-sm">
                                            Puede solicitar la corrección de datos inexactos o incompletos.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-red-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-trash text-red-400"></i>
                                            Eliminación
                                        </h3>
                                        <p className="text-sm">
                                            Puede solicitar la eliminación de sus datos personales (&ldquo;derecho al olvido&rdquo;).
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-yellow-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-pause text-yellow-400"></i>
                                            Limitación
                                        </h3>
                                        <p className="text-sm">
                                            Puede solicitar la limitación del procesamiento de sus datos en ciertos casos.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-purple-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-arrow-right text-purple-400"></i>
                                            Portabilidad
                                        </h3>
                                        <p className="text-sm">
                                            Puede solicitar sus datos en un formato estructurado y portable.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-orange-400/30 rounded-lg p-4">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-x-octagon text-orange-400"></i>
                                            Oposición
                                        </h3>
                                        <p className="text-sm">
                                            Puede oponerse al procesamiento basado en interés legítimo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
                                <h3 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                                    <i className="bi bi-chat-dots"></i>
                                    Cómo Ejercer sus Derechos
                                </h3>
                                <p className="mb-3">
                                    Para ejercer cualquiera de estos derechos, puede:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                                    <li>Enviar un email a <strong>privacidad@recluitergpt.com</strong></li>
                                    <li>Usar las opciones de su panel de control</li>
                                    <li>Contactar nuestro equipo de soporte</li>
                                </ul>
                                <p className="text-sm mt-3 text-green-200">
                                    <i className="bi bi-clock mr-2"></i>
                                    Responderemos a su solicitud dentro de 30 días.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sección 9: Cookies y tecnologías de seguimiento */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-cookie text-yellow-400"></i>
                            9. Cookies y Tecnologías de Seguimiento
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white/5 border border-green-400/30 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <i className="bi bi-check-circle text-green-400"></i>
                                        Esenciales
                                    </h3>
                                    <p className="text-sm mb-2">
                                        <strong>Siempre activas</strong> - Necesarias para el funcionamiento básico:
                                    </p>
                                    <ul className="text-xs space-y-1 list-disc list-inside">
                                        <li>Autenticación de sesión</li>
                                        <li>Seguridad y CSRF</li>
                                        <li>Configuraciones del usuario</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-blue-400/30 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <i className="bi bi-graph-up text-blue-400"></i>
                                        Analíticas
                                    </h3>
                                    <p className="text-sm mb-2">
                                        <strong>Opcionales</strong> - Para mejorar la experiencia:
                                    </p>
                                    <ul className="text-xs space-y-1 list-disc list-inside">
                                        <li>Google Analytics</li>
                                        <li>Métricas de uso</li>
                                        <li>Rendimiento del sitio</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-purple-400/30 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <i className="bi bi-gear text-purple-400"></i>
                                        Funcionales
                                    </h3>
                                    <p className="text-sm mb-2">
                                        <strong>Opcionales</strong> - Para funciones avanzadas:
                                    </p>
                                    <ul className="text-xs space-y-1 list-disc list-inside">
                                        <li>Preferencias de idioma</li>
                                        <li>Tema dark/light</li>
                                        <li>Configuraciones guardadas</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                                <p className="text-blue-300 text-sm">
                                    <i className="bi bi-info-circle mr-2"></i>
                                    Puede gestionar sus preferencias de cookies en cualquier momento desde la configuración 
                                    de su navegador o nuestro panel de cookies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sección 10: Transferencias internacionales */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-globe text-blue-400"></i>
                            10. Transferencias Internacionales de Datos
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Perú. 
                                Cuando transferimos datos internacionalmente, implementamos las siguientes salvaguardas:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <i className="bi bi-shield-check text-green-400"></i>
                                        Medidas de Protección
                                    </h3>
                                    <ul className="text-sm space-y-1 list-disc list-inside">
                                        <li>Cláusulas contractuales estándar</li>
                                        <li>Certificaciones de adequabilidad</li>
                                        <li>Encriptación durante la transferencia</li>
                                        <li>Auditorías regulares de seguridad</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <i className="bi bi-building text-blue-400"></i>
                                        Proveedores Certificados
                                    </h3>
                                    <ul className="text-sm space-y-1 list-disc list-inside">
                                        <li>Google Cloud Platform (Estados Unidos)</li>
                                        <li>Stripe (Estados Unidos/Europa)</li>
                                        <li>Todos cumplen con GDPR y SOC 2</li>
                                        <li>Contratos de procesamiento de datos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 11: Cambios en la política */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-arrow-repeat text-purple-400"></i>
                            11. Cambios en esta Política
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios 
                                en nuestras prácticas o por otras razones operativas, legales o regulatorias.
                            </p>
                            
                            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-6">
                                <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                                    <i className="bi bi-bell"></i>
                                    Notificación de Cambios
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li><strong>Cambios menores:</strong> Actualización de fecha y notificación en el sitio web</li>
                                    <li><strong>Cambios importantes:</strong> Email de notificación con 30 días de anticipación</li>
                                    <li><strong>Cambios en derechos fundamentales:</strong> Solicitud de nuevo consentimiento</li>
                                </ul>
                                <p className="text-sm mt-3">
                                    Le recomendamos revisar esta política periódicamente para mantenerse informado.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sección 12: Contacto */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-envelope-at text-green-400"></i>
                            12. Contacto y Datos de Protección
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-person-badge text-green-400"></i>
                                        Responsable de Protección de Datos
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Email:</strong> privacidad@recluitergpt.com</p>
                                        <p><strong>Respuesta:</strong> Dentro de 72 horas</p>
                                        <p><strong>Resolución:</strong> Máximo 30 días</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-headset text-blue-400"></i>
                                        Soporte General
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Email:</strong> soporte@recluitergpt.com</p>
                                        <p><strong>Horario:</strong> Lunes a Viernes, 9AM - 6PM (PET)</p>
                                        <p><strong>Ubicación:</strong> Lima, Perú</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                                <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                                    <i className="bi bi-exclamation-triangle"></i>
                                    Violaciones de Datos
                                </h3>
                                <p className="text-sm">
                                    Si sospecha que sus datos han sido comprometidos, contacte inmediatamente a 
                                    <strong> seguridad@recluitergpt.com</strong>. Investigaremos cualquier incidente 
                                    y tomaremos las medidas correctivas necesarias según nuestro protocolo de respuesta a incidentes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer con navegación */}
                <div className="mt-16 text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/terminos-y-condiciones" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
                            Términos y Condiciones
                        </Link>
                        <Link href="/libro-de-reclamaciones" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
                            Libro de Reclamaciones
                        </Link>
                        <Link href="/" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
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
