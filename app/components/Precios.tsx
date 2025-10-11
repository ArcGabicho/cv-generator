const Precios = () => {
    const plans = [
        {
            name: "Gratis",
            price: "0",
            period: "Siempre",
            description: "Perfecto para empezar",
            features: [
                "1 CV por mes",
                "Plantillas básicas", 
                "Exportación PDF",
                "Soporte por email"
            ],
            buttonText: "Comenzar Gratis",
            popular: false,
            bgColor: "bg-white/5"
        },
        {
            name: "Lite",
            price: "15",
            period: "mes",
            description: "Para profesionales activos",
            features: [
                "5 CVs por mes",
                "Todas las plantillas",
                "Optimización ATS",
                "Exportación múltiple",
                "Soporte prioritario"
            ],
            buttonText: "Elegir Lite",
            popular: true,
            bgColor: "bg-gradient-to-br from-purple-600/20 to-purple-700/20"
        },
        {
            name: "Premium",
            price: "25",
            period: "mes", 
            description: "Para usuarios avanzados",
            features: [
                "CVs ilimitados",
                "Plantillas premium",
                "Optimización avanzada ATS",
                "Sincronización con LinkedIn",
                "Soporte 24/7"
            ],
            buttonText: "Elegir Premium",
            popular: false,
            bgColor: "bg-gradient-to-br from-green-600/20 to-emerald-600/20"
        }
    ];

    return (
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-16 w-full">
            <div className="flex flex-col gap-8 w-full">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-[Syne] leading-tight">
                        Planes y Precios
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-purple-400 to-transparent mx-auto"></div>
                    <p className="text-lg text-gray-300 font-normal font-[Syne] leading-relaxed max-w-2xl mx-auto">
                        Elige el plan perfecto para potenciar tu búsqueda de empleo con <span className="text-green-400 font-medium">RecluiterGPT</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {plans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`relative ${plan.bgColor} backdrop-blur-sm border ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/20' : 'border-white/10'} rounded-2xl p-6 hover:border-white/20 transition-all duration-200`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                                        Más Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="text-center space-y-4">
                                <h3 className="text-xl font-bold text-white font-[Syne]">{plan.name}</h3>
                                
                                <div className="space-y-1">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-3xl font-bold text-white">$</span>
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-gray-400">/ {plan.period}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-[Syne]">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 text-left">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <i className="bi bi-check-circle-fill text-green-400 text-sm mt-0.5"></i>
                                            <span className="text-gray-300 text-sm font-[Syne]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    className={`w-full px-6 py-3 rounded-xl font-medium font-[Syne] transition-all duration-200 ${
                                        plan.popular 
                                        ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-500 hover:to-fuchsia-500 shadow-lg hover:shadow-purple-500/25' 
                                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
                                    }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm font-[Syne]">
                        ¿Necesitas un plan empresarial? <a href="/contacto" className="text-purple-400 hover:text-purple-300 underline">Contáctame</a>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Precios;