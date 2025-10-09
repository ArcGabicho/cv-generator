const Actividad = () => {
    const repoStats = {
        stars: 42,
        forks: 8,
        commits: 127,
        contributors: 3,
        issues: 4,
        pullRequests: 12
    };

    const recentActivity = [
        {
            type: "commit",
            title: "Mejoras en el diseño del Hero component",
            author: "ArcGabicho",
            time: "hace 2 horas",
            icon: "bi-git"
        },
        {
            type: "commit", 
            title: "Implementación de navegación dinámica con React",
            author: "ArcGabicho",
            time: "hace 5 horas",
            icon: "bi-git"
        },
        {
            type: "issue",
            title: "Optimizar rendimiento de componentes",
            author: "contributor1",
            time: "hace 1 día",
            icon: "bi-exclamation-circle"
        },
        {
            type: "pr",
            title: "Añadir sección de precios con cards",
            author: "ArcGabicho",
            time: "hace 2 días",
            icon: "bi-arrow-up-circle"
        },
        {
            type: "commit",
            title: "Configuración inicial de Astro + React",
            author: "ArcGabicho", 
            time: "hace 3 días",
            icon: "bi-git"
        },
        {
            type: "issue",
            title: "Implementar glassmorphism en componentes",
            author: "contributor2",
            time: "hace 4 días",
            icon: "bi-exclamation-circle"
        }
    ];

    const techStack = [
        { name: "Astro", color: "text-orange-400" },
        { name: "React", color: "text-blue-400" },
        { name: "Tailwind CSS", color: "text-cyan-400" },
        { name: "Bootstrap Icons", color: "text-purple-400" },
        { name: "JavaScript", color: "text-yellow-400" }
    ];

    return (
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-16 w-full">
            <div className="flex flex-col gap-8 w-full max-w-[600px]">
                <div className="space-y-6 w-full">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-[Syne] leading-tight">
                        Actividad del Proyecto <span className="text-purple-400">⚡</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-purple-400 to-transparent"></div>
                    <p className="text-lg md:text-xl text-gray-300 font-normal font-[Syne] leading-relaxed">
                        Desarrollo activo en el repositorio <span className="text-green-400 font-medium">cv-generator</span>.<br/>
                        Síguenos en GitHub para las últimas actualizaciones.
                    </p>
                </div>

                {/* Estadísticas del repositorio */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">{repoStats.stars}</div>
                        <div className="text-sm text-gray-400 font-[Syne]">Stars</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">{repoStats.commits}</div>
                        <div className="text-sm text-gray-400 font-[Syne]">Commits</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">{repoStats.contributors}</div>
                        <div className="text-sm text-gray-400 font-[Syne]">Contribuidores</div>
                    </div>
                </div>

                {/* Stack tecnológico */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white font-[Syne]">Stack Tecnológico</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <span 
                                key={index}
                                className={`px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-medium font-[Syne] ${tech.color}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actividad reciente */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white font-[Syne]">Actividad Reciente</h3>
                    <div className="space-y-3 max-h-55 overflow-y-auto">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <i className={`${activity.icon} text-lg ${
                                    activity.type === 'commit' ? 'text-green-400' : 
                                    activity.type === 'issue' ? 'text-yellow-400' : 
                                    'text-blue-400'
                                } mt-0.5`}></i>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-medium font-[Syne] truncate">
                                        {activity.title}
                                    </p>
                                    <p className="text-gray-400 text-xs font-[Syne]">
                                        por <span className="text-purple-300">{activity.author}</span> • {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actividad;