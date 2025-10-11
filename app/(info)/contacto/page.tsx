import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
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
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-[Syne] leading-tight mb-6">
                        Contacto <span className="text-green-400">📧</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-green-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 font-[Syne]">
                        Conecta conmigo y charlemos sobre tecnología, desarrollo y innovación
                    </p>
                </div>

                {/* Grid principal: Información personal + Enlaces */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Columna izquierda: Información del creador */}
                    <div className="space-y-8">
                        {/* Card principal del perfil */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <div className="flex items-start gap-6">
                                {/* Avatar placeholder */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center">
                                        <Image src="/assets/Avatar.jpeg" alt="Avatar" className="rounded-2xl" width={80} height={80} />
                                    </div>
                                </div>
                                
                                {/* Información personal */}
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-white font-[Syne] mb-2">
                                        Gabriel Polack
                                    </h2>
                                    <p className="text-green-300 font-medium font-[Syne] mb-3">
                                        Creador de RecluiterGPT
                                    </p>
                                    <div className="space-y-2 text-gray-300 font-[Syne]">
                                        <div className="flex items-center gap-2">
                                            <i className="bi bi-briefcase text-blue-400"></i>
                                            <span>Consultor TI & Arquitecto de Software</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="bi bi-code-slash text-purple-400"></i>
                                            <span>Especialista en IA & Desarrollo Full Stack</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="bi bi-geo-alt text-green-400"></i>
                                            <span>Lima, Perú</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                                <p className="text-gray-300 font-[Syne] leading-relaxed">
                                    Apasionado por la tecnología e innovación, me especializo en crear soluciones 
                                    que combinan inteligencia artificial con experiencias de usuario excepcionales. 
                                    RecluiterGPT nace de mi visión de democratizar el acceso a herramientas 
                                    profesionales de generación de CVs optimizados.
                                </p>
                            </div>
                        </div>

                        {/* Skills y tecnologías */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white font-[Syne] mb-6 flex items-center gap-2">
                                <i className="bi bi-stack text-purple-400"></i>
                                Tecnologías & Expertise
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3 font-[Syne]">Frontend & UI/UX</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-green-500/10 border border-green-400/30 rounded-lg text-green-200 text-sm font-[Syne]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3 font-[Syne]">Backend & Cloud</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Go', 'Python', 'Firebase', 'Google Cloud', 'PostgreSQL'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-lg text-blue-200 text-sm font-[Syne]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3 font-[Syne]">AI & Machine Learning</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['OpenAI GPT', 'PyTorch', 'Google Cloud AI', 'Natural Language Processing'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-purple-500/10 border border-purple-400/30 rounded-lg text-purple-200 text-sm font-[Syne]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha: Enlaces de contacto */}
                    <div className="space-y-8">
                        {/* Contacto directo */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white font-[Syne] mb-6 flex items-center gap-2">
                                <i className="bi bi-envelope-at text-green-400"></i>
                                Contacto Directo
                            </h3>
                            
                            <div className="space-y-4">
                                {/* Email */}
                                <a 
                                    href="mailto:pcjhonny13@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-green-400/30 transition-all duration-200 group"
                                >
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-200">
                                        <i className="bi bi-envelope-fill text-green-400 text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white font-[Syne]">Email</div>
                                        <div className="text-green-300 text-sm">pcjhonny13@gmail.com</div>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-gray-400 group-hover:text-green-400 ml-auto transition-all duration-200"></i>
                                </a>

                                {/* LinkedIn */}
                                <a 
                                    href="https://www.linkedin.com/in/gabriel-polack-castillo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/30 transition-all duration-200 group"
                                >
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-200">
                                        <i className="bi bi-linkedin text-blue-400 text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white font-[Syne]">LinkedIn</div>
                                        <div className="text-blue-300 text-sm">gabriel-polack-castillo</div>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-gray-400 group-hover:text-blue-400 ml-auto transition-all duration-200"></i>
                                </a>

                                {/* GitHub */}
                                <a 
                                    href="https://github.com/ArcGabicho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/30 transition-all duration-200 group"
                                >
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-200">
                                        <i className="bi bi-github text-purple-400 text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white font-[Syne]">GitHub</div>
                                        <div className="text-purple-300 text-sm">@ArcGabicho</div>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-gray-400 group-hover:text-purple-400 ml-auto transition-all duration-200"></i>
                                </a>

                                {/* Twitter */}
                                <a 
                                    href="https://x.com/Gabicho_05"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/30 transition-all duration-200 group"
                                >
                                    <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-400/30 transition-all duration-200">
                                        <i className="bi bi-twitter-x text-blue-400 text-lg"></i>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white font-[Syne]">Twitter / X</div>
                                        <div className="text-blue-300 text-sm">@Gabicho_05</div>
                                    </div>
                                    <i className="bi bi-arrow-up-right text-gray-400 group-hover:text-blue-400 ml-auto transition-all duration-200"></i>
                                </a>
                            </div>
                        </div>

                        {/* Proyectos destacados */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white font-[Syne] mb-6 flex items-center gap-2">
                                <i className="bi bi-rocket text-orange-400"></i>
                                Proyectos Destacados
                            </h3>
                            
                            <div className="space-y-4">
                                {/* RecluiterGPT */}
                                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i className="bi bi-lightning-charge text-white"></i>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white font-[Syne] mb-1">RecluiterGPT</h4>
                                            <p className="text-gray-300 text-sm mb-2">
                                                Plataforma SaaS para generar CVs optimizados con IA que superan filtros ATS.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Next.js</span>
                                                <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">OpenAI</span>
                                                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Firebase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Otros proyectos placeholder */}
                                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i className="bi bi-code-square text-white"></i>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white font-[Syne] mb-1">Más Proyectos</h4>
                                            <p className="text-gray-300 text-sm mb-2">
                                                Explora más de mis proyectos en GitHub y descubre soluciones innovadoras.
                                            </p>
                                            <a 
                                                href="https://github.com/ArcGabicho?tab=repositories"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                                            >
                                                Ver repositorios →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Disponibilidad */}
                        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white font-[Syne] mb-4 flex items-center gap-2">
                                <i className="bi bi-calendar-check text-green-400"></i>
                                Disponibilidad para Proyectos
                            </h3>
                            <p className="text-gray-300 font-[Syne] text-sm mb-4">
                                Estoy abierto a colaboraciones, consultorias y proyectos interesantes. 
                                ¡Hablemos sobre cómo puedo ayudarte con tu próximo desafío tecnológico!
                            </p>
                            <div className="flex items-center gap-2 text-green-300 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="font-medium">Disponible para nuevos proyectos</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de FAQ */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
                    <h3 className="text-2xl font-bold text-white font-[Syne] mb-8 flex items-center gap-3 text-center justify-center">
                        <i className="bi bi-question-circle text-yellow-400"></i>
                        Preguntas Frecuentes
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h4 className="font-semibold text-white font-[Syne] mb-3 flex items-center gap-2">
                                    <i className="bi bi-lightbulb text-yellow-400"></i>
                                    ¿Cómo surgió la idea de RecluiterGPT?
                                </h4>
                                <p className="text-gray-300 font-[Syne] text-sm">
                                    La idea nació de mi experiencia ayudando a amigos y colegas a mejorar sus CVs. 
                                    Vi la necesidad de democratizar el acceso a herramientas profesionales de 
                                    generación de currículums optimizados para ATS.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h4 className="font-semibold text-white font-[Syne] mb-3 flex items-center gap-2">
                                    <i className="bi bi-gear text-blue-400"></i>
                                    ¿Qué tecnologías utilizas principalmente?
                                </h4>
                                <p className="text-gray-300 font-[Syne] text-sm">
                                    Me especializo en el stack moderno: React/Next.js para frontend, Go/Python 
                                    para backend, Firebase/Google Cloud para la infraestructura, y APIs de IA como OpenAI 
                                    para funcionalidades inteligentes.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h4 className="font-semibold text-white font-[Syne] mb-3 flex items-center gap-2">
                                    <i className="bi bi-people text-green-400"></i>
                                    ¿Ofreces servicios de consultoría?
                                </h4>
                                <p className="text-gray-300 font-[Syne] text-sm">
                                    Sí, ofrezco servicios de consultoría en arquitectura de software, desarrollo full-stack, 
                                    integración de IA, y transformación digital. Contáctame para discutir tu proyecto específico.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h4 className="font-semibold text-white font-[Syne] mb-3 flex items-center gap-2">
                                    <i className="bi bi-heart text-red-400"></i>
                                    ¿Por qué RecluiterGPT es open source?
                                </h4>
                                <p className="text-gray-300 font-[Syne] text-sm">
                                    Creo en el poder de la comunidad y el conocimiento compartido. Hacer RecluiterGPT 
                                    open source permite que otros aprendan, contribuyan y mejoren la herramienta para 
                                    beneficio de todos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to action final */}
                <div className="text-center bg-gradient-to-r from-purple-500/10 to-green-500/10 border border-purple-400/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white font-[Syne] mb-4">
                        ¿Tienes un proyecto en mente?
                    </h3>
                    <p className="text-gray-300 font-[Syne] mb-6 max-w-2xl mx-auto">
                        Me encanta trabajar en proyectos desafiantes que marquen la diferencia. 
                        Ya sea una consultoría, colaboración o simplemente una charla sobre tecnología, 
                        ¡no dudes en contactarme!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:pcjhonny13@gmail.com"
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-200 flex items-center justify-center gap-3 group font-[Syne]"
                        >
                            <i className="bi bi-envelope text-lg group-hover:scale-110 transition-transform duration-200"></i>
                            Enviar Email
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/gabriel-polack-castillo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-200 flex items-center justify-center gap-3 group font-[Syne]"
                        >
                            <i className="bi bi-linkedin text-lg group-hover:scale-110 transition-transform duration-200"></i>
                            Conectar en LinkedIn
                        </a>
                    </div>
                </div>

                {/* Footer con navegación */}
                <div className="mt-16 text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/terminos-y-condiciones" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
                            Términos y Condiciones
                        </Link>
                        <Link href="/politicas-de-privacidad" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
                            Políticas de Privacidad
                        </Link>
                        <Link href="/codigo-de-conducta" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
                            Código de Conducta
                        </Link>
                        <Link href="/" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-[Syne]">
                            Volver al inicio
                        </Link>
                    </div>
                    <p className="text-gray-500 text-sm font-[Syne]">
                        © 2025 Gabriel Polack. Creador de RecluiterGPT | Conectemos y construyamos el futuro juntos 🚀
                    </p>
                </div>
            </div>
        </main>
    );
}
