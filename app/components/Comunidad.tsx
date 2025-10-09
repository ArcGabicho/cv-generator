const Comunidad = () => {
    const communityStats = {
        members: 1247,
        posts: 89,
        discussions: 23,
        experts: 8
    };

    const expertTips = [
        {
            tip: "Personaliza tu CV para cada aplicación usando palabras clave del puesto",
            author: "Laura Martínez",
            role: "HR Expert"
        },
        {
            tip: "Mantén tu perfil de LinkedIn actualizado y activo con contenido relevante",
            author: "Roberto Silva",
            role: "Career Coach"
        }
    ];

    return (
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-16 w-full">
            <div className="flex flex-col gap-8 w-full max-w-[600px]">
                <div className="space-y-6 w-full">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-[Syne] leading-tight">
                        Comunidad RecluiterGPT <span className="text-purple-400">👥</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-purple-400 to-transparent"></div>
                    <p className="text-lg md:text-xl text-gray-300 font-normal font-[Syne] leading-relaxed">
                        Únete a nuestra <span className="text-green-400 font-medium">comunidad activa</span> de profesionales.<br/>
                        Comparte experiencias, obtén consejos y crece profesionalmente.
                    </p>
                </div>

                {/* Estadísticas de la comunidad */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">{communityStats.members.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 font-[Syne]">Miembros</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">{communityStats.posts}</div>
                        <div className="text-xs text-gray-400 font-[Syne]">Posts</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">{communityStats.discussions}</div>
                        <div className="text-xs text-gray-400 font-[Syne]">Discusiones</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-white">{communityStats.experts}</div>
                        <div className="text-xs text-gray-400 font-[Syne]">Expertos</div>
                    </div>
                </div>

                {/* Consejos de expertos */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white font-[Syne]">Consejos de Expertos</h3>
                    <div className="space-y-3">
                        {expertTips.map((tip, index) => (
                            <div key={index} className="p-3 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 border border-purple-400/20 rounded-lg">
                                <p className="text-white text-sm font-[Syne] mb-2">💡 &quot;{tip.tip}&quot;</p>
                                <p className="text-gray-400 text-xs font-[Syne]">
                                    - <span className="text-purple-300">{tip.author}</span>, {tip.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="group px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white text-lg font-medium font-[Syne] flex flex-row items-center justify-center gap-3 hover:bg-white/10 hover:border-white/30 transition-all duration-200">
                        Unirse a Discord
                        <i className="bi bi-discord text-base group-hover:scale-110 transition-transform duration-200"></i>
                    </button>
                    
                    <button className="px-8 py-4 rounded-xl bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 text-lg font-medium font-[Syne] hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-200">
                        Ver Foro
                    </button>
                </div>
                
                <div className="pt-8 mt-auto">
                    <a className="text-gray-500 text-base underline underline-offset-2 hover:text-gray-300 transition-colors duration-200 font-[Syne]" href="/codigo-de-conducta">
                        Código de conducta
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Comunidad;