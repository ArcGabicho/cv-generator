'use client';

import { useState } from "react";

export default function CrearCuenta() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica de registro con Firebase
        // Incluirá creación de tenant/organización
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

            {/* Imagen/Contenido visual - Lado izquierdo */}
            <section className="relative z-10 w-full md:w-[50%] flex items-center justify-center p-8 bg-black/10 backdrop-blur-sm border-r border-white/5">
                <div className="max-w-md w-full text-center space-y-8">
                    {/* Icono principal */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-green-600/30 to-emerald-700/30 border border-green-400/30">
                            <i className="bi bi-person-plus text-4xl text-green-300"></i>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white font-[Syne]">
                            Únete a RecluiterGPT
                        </h2>
                        <p className="text-lg text-gray-300 font-[Syne] leading-relaxed">
                            Crea tu cuenta y comienza a generar currículums profesionales que superen los filtros ATS con inteligencia artificial.
                        </p>
                    </div>

                    {/* Beneficios */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                                <i className="bi bi-lightning text-purple-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Generación instantánea con IA</span>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                                <i className="bi bi-shield-check text-purple-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Optimización automática ATS</span>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                                <i className="bi bi-people text-purple-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Sincronización con LinkedIn</span>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                                <i className="bi bi-graph-up text-purple-400"></i>
                            </div>
                            <span className="text-gray-300 font-[Syne]">Análisis y métricas avanzadas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulario de registro - Lado derecho */}
            <section className="relative z-10 w-full md:w-[50%] flex flex-col justify-center items-center px-6 md:px-12 py-16 bg-black/20 backdrop-blur-lg">
                <div className="flex flex-col gap-8 max-w-[450px] w-full">
                    {/* Header */}
                    <div className="space-y-6 w-full text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-[Syne] leading-tight">
                            Crear cuenta <span className="text-green-400">✨</span>
                        </h1>
                        <div className="w-32 h-[2px] bg-gradient-to-r from-green-400 to-transparent mx-auto md:mx-0"></div>
                        <p className="text-lg text-gray-300 font-normal font-[Syne] leading-relaxed">
                            Regístrate y comienza a crear <span className="text-purple-400 font-medium">currículums optimizados</span> para tu organización.
                        </p>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        {/* Información personal */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* First Name */}
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    <i className="bi bi-person mr-2 text-green-400"></i>
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200"
                                    placeholder="Juan"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    <i className="bi bi-person mr-2 text-green-400"></i>
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200"
                                    placeholder="Pérez"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                <i className="bi bi-envelope mr-2 text-green-400"></i>
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200"
                                placeholder="juan@empresa.com"
                            />
                        </div>

                        {/* Passwords */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Password */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    <i className="bi bi-lock mr-2 text-green-400"></i>
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    <i className="bi bi-lock-fill mr-2 text-green-400"></i>
                                    Confirmar
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleInputChange}
                                required
                                className="mt-1 w-4 h-4 rounded border-2 border-white/20 bg-white/5 text-green-400 focus:ring-green-400 focus:ring-2"
                            />
                            <label htmlFor="acceptTerms" className="text-sm text-gray-300 font-[Syne]">
                                Acepto los{' '}
                                <a href="/terminos-y-condiciones" className="text-green-400 hover:text-green-300 transition-colors duration-200">
                                    términos y condiciones
                                </a>
                                {' '}y las{' '}
                                <a href="/politicas-de-privacidad" className="text-green-400 hover:text-green-300 transition-colors duration-200">
                                    políticas de privacidad
                                </a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!formData.acceptTerms}
                            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white text-lg font-medium font-[Syne] hover:from-green-500 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3 group"
                        >
                            <i className="bi bi-person-plus-fill text-lg group-hover:scale-110 transition-transform duration-200"></i>
                            Crear mi cuenta
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <span className="text-sm text-gray-400 font-[Syne]">o regístrate con</span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>

                        {/* Social Register Buttons */}
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

                    {/* Login Link */}
                    <div className="text-center pt-4">
                        <p className="text-gray-400 font-[Syne]">
                            ¿Ya tienes cuenta?{' '}
                            <a 
                                href="/iniciar-sesion" 
                                className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                            >
                                Inicia sesión aquí
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
