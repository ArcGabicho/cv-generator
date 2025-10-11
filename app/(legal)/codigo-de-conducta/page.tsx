import Link from 'next/link';

export default function CodigoDeConducta() {
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
                        Código de Conducta <span className="text-blue-400">🤝</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-blue-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 font-[Syne]">
                        Nuestro compromiso con una comunidad inclusiva, respetuosa y colaborativa
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
                        <a 
                            href="https://github.com/ArcGabicho/cv-generator" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                            <i className="bi bi-github"></i>
                            github.com/ArcGabicho/cv-generator
                        </a>
                        <span>•</span>
                        <span>Proyecto Open Source</span>
                    </div>
                </div>

                {/* Contenido del código de conducta */}
                <div className="space-y-8">
                    {/* Sección 1: Nuestro compromiso */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-heart text-red-400"></i>
                            Nuestro Compromiso
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Como miembros, contribuyentes y administradores del proyecto <strong>RecluiterGPT</strong>, 
                                nos comprometemos a hacer de la participación en nuestro proyecto y nuestra comunidad 
                                una experiencia libre de acoso para todos, independientemente de:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <ul className="space-y-2 text-sm list-disc list-inside">
                                        <li>Edad</li>
                                        <li>Dimensión corporal</li>
                                        <li>Discapacidad visible o invisible</li>
                                        <li>Etnicidad</li>
                                        <li>Características sexuales</li>
                                        <li>Identidad y expresión de género</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <ul className="space-y-2 text-sm list-disc list-inside">
                                        <li>Nivel de experiencia</li>
                                        <li>Educación</li>
                                        <li>Estatus socioeconómico</li>
                                        <li>Nacionalidad</li>
                                        <li>Apariencia personal</li>
                                        <li>Religión u orientación sexual</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-green-300 font-medium">
                                Nos comprometemos a actuar e interactuar de maneras que contribuyan a una comunidad 
                                abierta, acogedora, diversa, inclusiva y saludable.
                            </p>
                        </div>
                    </div>

                    {/* Sección 2: Nuestros estándares */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-star text-yellow-400"></i>
                            Nuestros Estándares
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
                                    <h3 className="text-green-300 font-semibold mb-4 flex items-center gap-2">
                                        <i className="bi bi-check-circle"></i>
                                        Comportamientos que Fomentamos
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-arrow-right text-green-400 mt-1 flex-shrink-0"></i>
                                            <span>Demostrar empatía y amabilidad ante otras personas</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-arrow-right text-green-400 mt-1 flex-shrink-0"></i>
                                            <span>Respetar las opiniones, puntos de vista y experiencias diferentes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-arrow-right text-green-400 mt-1 flex-shrink-0"></i>
                                            <span>Dar y aceptar adecuadamente retroalimentación constructiva</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-arrow-right text-green-400 mt-1 flex-shrink-0"></i>
                                            <span>Aceptar la responsabilidad y disculparse ante quienes se vean afectados por nuestros errores</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-arrow-right text-green-400 mt-1 flex-shrink-0"></i>
                                            <span>Centrarse en lo que sea mejor no sólo para nosotros como individuos, sino para la comunidad en general</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                                    <h3 className="text-red-300 font-semibold mb-4 flex items-center gap-2">
                                        <i className="bi bi-x-circle"></i>
                                        Comportamientos Inaceptables
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-x text-red-400 mt-1 flex-shrink-0"></i>
                                            <span>Uso de lenguaje o imágenes sexualizadas, y aproximaciones o atenciones sexuales de cualquier tipo</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-x text-red-400 mt-1 flex-shrink-0"></i>
                                            <span>Comentarios despectivos (trolling), insultantes o derogatorios, y ataques personales o políticos</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-x text-red-400 mt-1 flex-shrink-0"></i>
                                            <span>Acoso público o privado</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-x text-red-400 mt-1 flex-shrink-0"></i>
                                            <span>Publicar información privada de otras personas sin su permiso explícito</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="bi bi-x text-red-400 mt-1 flex-shrink-0"></i>
                                            <span>Otras conductas que puedan ser razonablemente consideradas como inapropiadas en un entorno profesional</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 3: Responsabilidades de aplicación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-shield-check text-blue-400"></i>
                            Responsabilidades de Aplicación
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Los administradores de la comunidad son responsables de aclarar y hacer cumplir nuestros 
                                estándares de comportamiento aceptable y tomarán acciones apropiadas y justas de 
                                corrección en respuesta a cualquier comportamiento que consideren inapropiado, 
                                amenazante, ofensivo o dañino.
                            </p>
                            
                            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                                <h3 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                                    <i className="bi bi-gear"></i>
                                    Facultades de los Administradores
                                </h3>
                                <ul className="space-y-2 text-sm list-disc list-inside ml-4">
                                    <li>Eliminar, editar o rechazar comentarios, commits, código, ediciones de páginas wiki, issues y otras contribuciones</li>
                                    <li>Prohibir temporal o permanentemente a cualquier colaborador por otros comportamientos que juzguen inapropiados, amenazantes, ofensivos o dañinos</li>
                                    <li>Comunicar las razones de sus decisiones de moderación cuando sea apropiado</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sección 4: Alcance */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-globe text-green-400"></i>
                            Alcance
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Este código de conducta aplica tanto a espacios del proyecto como a espacios públicos 
                                donde un individuo esté en representación del proyecto o comunidad.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <i className="bi bi-github text-purple-400"></i>
                                        Espacios del Proyecto
                                    </h3>
                                    <ul className="text-sm space-y-2 list-disc list-inside">
                                        <li>Repositorio de GitHub</li>
                                        <li>Issues y Pull Requests</li>
                                        <li>Discusiones del proyecto</li>
                                        <li>Documentación y Wiki</li>
                                        <li>Releases y comentarios</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <i className="bi bi-people text-green-400"></i>
                                        Espacios Públicos
                                    </h3>
                                    <ul className="text-sm space-y-2 list-disc list-inside">
                                        <li>Redes sociales oficiales</li>
                                        <li>Eventos y conferencias</li>
                                        <li>Foros de la comunidad</li>
                                        <li>Comunicaciones por email</li>
                                        <li>Representación pública del proyecto</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 5: Aplicación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-exclamation-triangle text-orange-400"></i>
                            Proceso de Aplicación
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Instancias de comportamiento abusivo, acosador o inaceptable de otro modo podrán ser 
                                reportadas a los administradores de la comunidad responsables del cumplimiento.
                            </p>

                            <div className="bg-orange-500/10 border border-orange-400/30 rounded-lg p-6">
                                <h3 className="text-orange-300 font-semibold mb-4 flex items-center gap-2">
                                    <i className="bi bi-envelope-at"></i>
                                    Cómo Reportar Violaciones
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-white mb-2">Contacto Principal:</h4>
                                            <p className="text-sm">
                                                <strong>Email:</strong> conduct@recluitergpt.com<br/>
                                                <strong>GitHub:</strong> @ArcGabicho<br/>
                                                <strong>Respuesta:</strong> Dentro de 48 horas
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white mb-2">Información a Incluir:</h4>
                                            <ul className="text-sm space-y-1 list-disc list-inside">
                                                <li>Descripción detallada del incidente</li>
                                                <li>Enlaces o capturas relevantes</li>
                                                <li>Personas involucradas</li>
                                                <li>Fecha y hora del incidente</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <p className="text-sm text-blue-300">
                                            <i className="bi bi-shield-lock mr-2"></i>
                                            Todas las quejas serán revisadas e investigadas de manera confidencial. 
                                            Los administradores están obligados a mantener la privacidad del reportante.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                    <i className="bi bi-list-ol text-blue-400"></i>
                                    Proceso de Revisión
                                </h3>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-1-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Recepción</strong></p>
                                        <p>Confirmación dentro de 48h</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-2-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Investigación</strong></p>
                                        <p>Revisión completa del caso</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-3-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Decisión</strong></p>
                                        <p>Determinación de acciones</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <i className="bi bi-4-circle text-blue-400"></i>
                                        </div>
                                        <p><strong>Comunicación</strong></p>
                                        <p>Notificación de resultado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 6: Directrices de aplicación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-ladder text-purple-400"></i>
                            Directrices de Aplicación
                        </h2>
                        <div className="space-y-6 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Los administradores de la comunidad seguirán estas Directrices de Impacto en la Comunidad 
                                para determinar las consecuencias de cualquier acción que juzguen como violación de este Código de Conducta:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-6">
                                    <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-1-square"></i>
                                        1. Corrección
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-medium text-white mb-2">Impacto en la Comunidad:</p>
                                            <p>Uso de lenguaje inapropiado u otro comportamiento considerado no profesional o no acogedor en la comunidad.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white mb-2">Consecuencia:</p>
                                            <p>Una advertencia privada por escrito de los administradores, proporcionando claridad alrededor de la naturaleza de este incidente y una explicación de por qué el comportamiento es inaceptable.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-500/10 border border-orange-400/30 rounded-lg p-6">
                                    <h3 className="text-orange-300 font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-2-square"></i>
                                        2. Aviso
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-medium text-white mb-2">Impacto en la Comunidad:</p>
                                            <p>Una violación causada por un único incidente o por una cadena de acciones.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white mb-2">Consecuencia:</p>
                                            <p>Un aviso con consecuencias por comportamiento prolongado. No se interactúa con las personas involucradas, incluyendo interacción no solicitada con quienes se encuentran aplicando el Código de Conducta, por un período especificado de tiempo.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                                    <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-3-square"></i>
                                        3. Expulsión Temporal
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-medium text-white mb-2">Impacto en la Comunidad:</p>
                                            <p>Una violación seria de los estándares de la comunidad, incluyendo comportamiento inapropiado continuo.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white mb-2">Consecuencia:</p>
                                            <p>Una prohibición temporal de cualquier tipo de interacción o comunicación pública con la comunidad durante un período especificado de tiempo. No se permite interacción pública o privada con las personas involucradas.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-500/10 border border-gray-400/30 rounded-lg p-6">
                                    <h3 className="text-gray-300 font-semibold mb-3 flex items-center gap-2">
                                        <i className="bi bi-4-square"></i>
                                        4. Expulsión Permanente
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-medium text-white mb-2">Impacto en la Comunidad:</p>
                                            <p>Demostrar un patrón sistemático de violación de los estándares de la comunidad, incluyendo comportamiento inapropiado continuo, acoso de individuos, o agresiones hacia o menosprecio de grupos de individuos.</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white mb-2">Consecuencia:</p>
                                            <p>Una prohibición permanente de cualquier tipo de interacción pública con la comunidad del proyecto.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 7: Atribución */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-4 flex items-center gap-3">
                            <i className="bi bi-cc-circle text-green-400"></i>
                            Atribución y Recursos
                        </h2>
                        <div className="space-y-4 text-gray-300 font-[Syne] leading-relaxed">
                            <p>
                                Este Código de Conducta es una adaptación del{' '}
                                <a 
                                    href="https://www.contributor-covenant.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 transition-colors duration-200"
                                >
                                    Contributor Covenant
                                </a>
                                , versión 2.0, disponible en{' '}
                                <a 
                                    href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 transition-colors duration-200"
                                >
                                    https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
                                </a>
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <i className="bi bi-question-circle text-blue-400"></i>
                                        Recursos Adicionales
                                    </h3>
                                    <ul className="text-sm space-y-2">
                                        <li>
                                            <a 
                                                href="https://www.contributor-covenant.org/faq" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                            >
                                                FAQ del Contributor Covenant
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.contributor-covenant.org/translations" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                            >
                                                Traducciones disponibles
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/terminos-y-condiciones" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                                Términos y Condiciones de RecluiterGPT
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <i className="bi bi-github text-purple-400"></i>
                                        Contribuir al Proyecto
                                    </h3>
                                    <div className="text-sm space-y-2">
                                        <p>¿Interesado en contribuir? ¡Te damos la bienvenida!</p>
                                        <ul className="space-y-1 list-disc list-inside ml-4">
                                            <li>Revisa nuestros issues abiertos</li>
                                            <li>Lee la documentación de contribución</li>
                                            <li>Únete a las discusiones de la comunidad</li>
                                            <li>Reporta bugs o propón mejoras</li>
                                        </ul>
                                        <a 
                                            href="https://github.com/ArcGabicho/cv-generator/blob/master/CONTRIBUTING.md" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200 mt-2"
                                        >
                                            Ver guía de contribución →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer con navegación */}
                <div className="mt-16 text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/terminos-y-condiciones" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-[Syne]">
                            Términos y Condiciones
                        </Link>
                        <Link href="/politicas-de-privacidad" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-[Syne]">
                            Políticas de Privacidad
                        </Link>
                        <Link href="/libro-de-reclamaciones" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-[Syne]">
                            Libro de Reclamaciones
                        </Link>
                        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-[Syne]">
                            Volver al inicio
                        </Link>
                    </div>
                    <p className="text-gray-500 text-sm font-[Syne]">
                        © 2025 RecluiterGPT. Todos los derechos reservados. | Contributor Covenant v2.0
                    </p>
                </div>
            </div>
        </main>
    );
}
