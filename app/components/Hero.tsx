const Hero = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-16 w-full">
            <div className="flex flex-col gap-8 max-w-[600px] w-full items-start">
                <div className="space-y-6 w-full">
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-[Syne] leading-tight">
                        Alcanza tu próximo trabajo <span className="text-purple-400">⇋</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-purple-400 to-transparent"></div>
                </div>
                
                <div className="space-y-6 w-full">
                    <p className="text-xl md:text-2xl text-gray-300 font-normal font-[Syne] leading-relaxed">
                        Recuerda aceptar los <span className="text-green-400 font-medium">términos y condiciones</span>.<br/>
                        y nuestras <span className="text-green-400 font-medium">políticas de privacidad</span> antes de usar la aplicación.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="group px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white text-lg font-medium font-[Syne] flex flex-row items-center justify-center gap-3 hover:bg-white/10 hover:border-white/30 transition-all duration-200">
                            Términos y condiciones
                            <i className="bi bi-arrow-right text-base group-hover:translate-x-1 transition-transform duration-200"></i>
                        </button>

                        <button className="flex items-center justify-center gap-3 group px-8 py-4 rounded-xl bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 text-lg font-medium font-[Syne] hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-200">
                            Políticas de privacidad
                            <i className="bi bi-arrow-right text-base group-hover:translate-x-1 transition-transform duration-200"></i>
                        </button>
                    </div>
                </div>
                
                <div className="pt-8 mt-auto">
                    <a className="text-gray-500 text-base underline underline-offset-2 hover:text-gray-300 transition-colors duration-200 font-[Syne]" href="/libro-reclamaciones">
                        Libro de Reclamaciones
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero