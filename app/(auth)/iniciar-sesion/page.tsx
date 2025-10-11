'use client';

import { useState } from "react";

export default function IniciarSesion() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        console.log('Datos del formulario:', formData);
    };

    return (
        <main
            className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1A0C2A 50%, #0F0A1A 100%)" }}
        >
            {/* Subtle background effects */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[300px] h-[150px] bg-gradient-to-r from-purple-500/30 to-transparent opacity-30 blur-2xl rounded-full z-0"></div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 w-[200px] h-[100px] bg-gradient-to-r from-green-400/20 to-transparent opacity-25 blur-2xl rounded-full z-0"></div>
            <div className="pointer-events-none absolute bottom-0 right-0 w-[250px] h-[120px] bg-gradient-to-l from-purple-400/25 to-transparent opacity-30 blur-2xl rounded-full z-0"></div>

            {/* Formulario de login - Lado izquierdo */}
            <section className="relative z-10 w-full md:w-[50%] flex flex-col justify-center items-center px-6 md:px-12 py-16 bg-black/20 backdrop-blur-lg">
                <div className="flex flex-col gap-8 max-w-[400px] w-full">
                    {/* Header */}
                    <div className="space-y-6 w-full text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-[Syne] leading-tight">
                            Iniciar sesión <span className="text-purple-400">⚡</span>
                        </h1>
                        <div className="w-32 h-[2px] bg-gradient-to-r from-purple-400 to-transparent mx-auto md:mx-0"></div>
                        <p className="text-lg text-gray-300 font-normal font-[Syne] leading-relaxed">
                            Accede a tu cuenta y continúa creando <span className="text-green-400 font-medium">currículums profesionales</span> con inteligencia artificial.
                        </p>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                <i className="bi bi-envelope mr-2 text-purple-400"></i>
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-200"
                                placeholder="tu@email.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                <i className="bi bi-lock mr-2 text-purple-400"></i>
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-200"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <a 
                                href="/recuperar-password" 
                                className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200 font-[Syne]"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white text-lg font-medium font-[Syne] hover:from-purple-500 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-3 group"
                        >
                            <i className="bi bi-arrow-right-circle text-lg group-hover:rotate-90 transition-transform duration-200"></i>
                            Iniciar sesión
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <span className="text-sm text-gray-400 font-[Syne]">o continúa con</span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm font-medium font-[Syne] hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <i className="bi bi-google text-lg"></i>
                                Google
                            </button>
                            <button
                                type="button"
                                className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm font-medium font-[Syne] hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <i className="bi bi-github text-lg"></i>
                                GitHub
                            </button>
                        </div>
                    </form>

                    {/* Register Link */}
                    <div className="text-center pt-4">
                        <p className="text-gray-400 font-[Syne]">
                            ¿No tienes cuenta?{' '}
                            <a 
                                href="/crear-cuenta" 
                                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                            >
                                Regístrate aquí
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Imagen/Contenido visual - Lado derecho */}
            <section className="relative z-10 w-full md:w-[50%] flex items-center justify-center p-8 bg-black/10 backdrop-blur-sm border-l border-white/5">
                <div className="max-w-md w-full text-center space-y-8">
                    {/* Icono principal */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-700/30 border border-purple-400/30">
                            <i className="bi bi-person-check text-4xl text-purple-300"></i>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white font-[Syne]">
                            Bienvenido de vuelta
                        </h2>
                        <p className="text-lg text-gray-300 font-[Syne] leading-relaxed">
                            Accede a tu panel y continúa optimizando tus currículums con la potencia de la inteligencia artificial.
                        </p>
                    </div>

                    {/* Features destacadas */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-600/20 border border-green-400/30 flex items-center justify-center">
                                <i className="bi bi-check2 text-green-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Currículums optimizados para ATS</span>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-600/20 border border-green-400/30 flex items-center justify-center">
                                <i className="bi bi-check2 text-green-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Plantillas profesionales</span>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-600/20 border border-green-400/30 flex items-center justify-center">
                                <i className="bi bi-check2 text-green-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Exportación en múltiples formatos</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
