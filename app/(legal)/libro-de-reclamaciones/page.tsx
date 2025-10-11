'use client';

import React, { useState } from "react";
import Link from 'next/link';

export default function LibroDeReclamaciones() {
    const [formData, setFormData] = useState({
        // Datos del consumidor
        tipoDocumento: '',
        numeroDocumento: '',
        nombres: '',
        apellidos: '',
        domicilio: '',
        telefono: '',
        email: '',
        
        // Datos de la reclamación
        tipoReclamo: '', // queja o reclamo
        fechaIncidente: '',
        montoReclamado: '',
        descripcionBien: '',
        tipoContratacion: '', // presencial, telefónica, internet, etc.
        
        // Detalle de la reclamación
        detalleReclamo: '',
        pedidoConsumidor: '',
        
        // Documentos adjuntos
        tieneDocumentos: false,
        documentosAdjuntos: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para procesar la reclamación
        // Generar número de reclamo, enviar email, guardar en base de datos
        console.log('Reclamación enviada:', formData);
        
        // Mostrar confirmación al usuario
        alert('Su reclamación ha sido registrada. Recibirá un número de seguimiento por email.');
    };

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
                        Libro de Reclamaciones <span className="text-orange-400">📋</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-orange-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 font-[Syne]">
                        Registre su queja o reclamo de acuerdo al Código de Protección y Defensa del Consumidor
                    </p>
                </div>

                {/* Información importante */}
                <div className="bg-orange-500/10 border border-orange-400/30 rounded-2xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-orange-300 font-[Syne] mb-4 flex items-center gap-3">
                        <i className="bi bi-info-circle"></i>
                        Información Importante
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300 font-[Syne]">
                        <div>
                            <h3 className="font-semibold text-white mb-2">¿Qué es una QUEJA?</h3>
                            <p>
                                Expresión de insatisfacción no relacionada con los productos o servicios, 
                                sino con la atención al público en general.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2">¿Qué es un RECLAMO?</h3>
                            <p>
                                Expresión de insatisfacción relacionada con los productos o servicios, 
                                o con el proceso mismo de atención de quejas del consumidor.
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                        <p className="text-yellow-300 text-sm">
                            <i className="bi bi-clock mr-2"></i>
                            <strong>Plazo de respuesta:</strong> RecluiterGPT responderá su reclamo en un plazo máximo de 30 días calendarios.
                        </p>
                    </div>
                </div>

                {/* Formulario de reclamación */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Sección 1: Datos del consumidor */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-6 flex items-center gap-3">
                            <i className="bi bi-person text-blue-400"></i>
                            1. Identificación del Consumidor Reclamante
                        </h2>
                        
                        <div className="space-y-6">
                            {/* Tipo y número de documento */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Tipo de Documento <span className="text-red-400">*</span>
                                    </label>
                                    <select
                                        id="tipoDocumento"
                                        name="tipoDocumento"
                                        value={formData.tipoDocumento}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                    >
                                        <option value="" className="bg-gray-900">Seleccione</option>
                                        <option value="dni" className="bg-gray-900">DNI</option>
                                        <option value="ce" className="bg-gray-900">Carné de Extranjería</option>
                                        <option value="pasaporte" className="bg-gray-900">Pasaporte</option>
                                        <option value="otro" className="bg-gray-900">Otro</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="numeroDocumento" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Número de Documento <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="numeroDocumento"
                                        name="numeroDocumento"
                                        value={formData.numeroDocumento}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                        placeholder="12345678"
                                    />
                                </div>
                            </div>

                            {/* Nombres y apellidos */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Nombres <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombres"
                                        name="nombres"
                                        value={formData.nombres}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                        placeholder="Juan Carlos"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="apellidos" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Apellidos <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="apellidos"
                                        name="apellidos"
                                        value={formData.apellidos}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                        placeholder="Pérez García"
                                    />
                                </div>
                            </div>

                            {/* Domicilio */}
                            <div className="space-y-2">
                                <label htmlFor="domicilio" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    Domicilio <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="domicilio"
                                    name="domicilio"
                                    value={formData.domicilio}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                    placeholder="Av. Principal 123, Distrito, Provincia, Región"
                                />
                            </div>

                            {/* Teléfono y email */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                        placeholder="987654321"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Correo Electrónico <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                                        placeholder="juan@email.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección 2: Datos de la reclamación */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-6 flex items-center gap-3">
                            <i className="bi bi-exclamation-triangle text-orange-400"></i>
                            2. Identificación del Bien Contratado
                        </h2>

                        <div className="space-y-6">
                            {/* Tipo de reclamo */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    Tipo <span className="text-red-400">*</span>
                                </label>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <label className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200">
                                        <input
                                            type="radio"
                                            name="tipoReclamo"
                                            value="queja"
                                            checked={formData.tipoReclamo === 'queja'}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-orange-400 focus:ring-orange-400"
                                        />
                                        <div>
                                            <div className="font-semibold text-white">QUEJA</div>
                                            <div className="text-sm text-gray-300">Insatisfacción con la atención al cliente</div>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200">
                                        <input
                                            type="radio"
                                            name="tipoReclamo"
                                            value="reclamo"
                                            checked={formData.tipoReclamo === 'reclamo'}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-orange-400 focus:ring-orange-400"
                                        />
                                        <div>
                                            <div className="font-semibold text-white">RECLAMO</div>
                                            <div className="text-sm text-gray-300">Insatisfacción con el producto/servicio</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Información del servicio */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="fechaIncidente" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Fecha del Incidente
                                    </label>
                                    <input
                                        type="date"
                                        id="fechaIncidente"
                                        name="fechaIncidente"
                                        value={formData.fechaIncidente}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white font-[Syne] focus:outline-none focus:border-orange-400/50 focus:bg-white/10 transition-all duration-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="montoReclamado" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                        Monto Reclamado (S/)
                                    </label>
                                    <input
                                        type="number"
                                        id="montoReclamado"
                                        name="montoReclamado"
                                        value={formData.montoReclamado}
                                        onChange={handleInputChange}
                                        step="0.01"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-orange-400/50 focus:bg-white/10 transition-all duration-200"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            {/* Descripción del bien/servicio */}
                            <div className="space-y-2">
                                <label htmlFor="descripcionBien" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    Descripción del Producto o Servicio <span className="text-red-400">*</span>
                                </label>
                                <select
                                    id="descripcionBien"
                                    name="descripcionBien"
                                    value={formData.descripcionBien}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white font-[Syne] focus:outline-none focus:border-orange-400/50 focus:bg-white/10 transition-all duration-200"
                                >
                                    <option value="" className="bg-gray-900">Seleccione el servicio</option>
                                    <option value="plan-gratuito" className="bg-gray-900">Plan Gratuito - Generación de CVs</option>
                                    <option value="plan-lite" className="bg-gray-900">Plan Lite - $15/mes</option>
                                    <option value="plan-premium" className="bg-gray-900">Plan Premium - $25/mes</option>
                                    <option value="soporte-tecnico" className="bg-gray-900">Soporte Técnico</option>
                                    <option value="atencion-cliente" className="bg-gray-900">Atención al Cliente</option>
                                    <option value="facturacion" className="bg-gray-900">Facturación y Pagos</option>
                                    <option value="otro" className="bg-gray-900">Otro</option>
                                </select>
                            </div>

                            {/* Tipo de contratación */}
                            <div className="space-y-2">
                                <label htmlFor="tipoContratacion" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    Tipo de Contratación <span className="text-red-400">*</span>
                                </label>
                                <select
                                    id="tipoContratacion"
                                    name="tipoContratacion"
                                    value={formData.tipoContratacion}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white font-[Syne] focus:outline-none focus:border-orange-400/50 focus:bg-white/10 transition-all duration-200"
                                >
                                    <option value="" className="bg-gray-900">Seleccione</option>
                                    <option value="internet" className="bg-gray-900">Por Internet (Plataforma Web)</option>
                                    <option value="email" className="bg-gray-900">Por Correo Electrónico</option>
                                    <option value="chat" className="bg-gray-900">Por Chat/Soporte Online</option>
                                    <option value="otro" className="bg-gray-900">Otro</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Sección 3: Detalle del reclamo */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-6 flex items-center gap-3">
                            <i className="bi bi-chat-square-text text-green-400"></i>
                            3. Detalle de la Reclamación y Pedido del Consumidor
                        </h2>

                        <div className="space-y-6">
                            {/* Detalle del reclamo */}
                            <div className="space-y-2">
                                <label htmlFor="detalleReclamo" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    Detalle de la Reclamación/Queja <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    id="detalleReclamo"
                                    name="detalleReclamo"
                                    value={formData.detalleReclamo}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200 resize-vertical"
                                    placeholder="Describa detalladamente los hechos que motivan su reclamación o queja..."
                                />
                                <p className="text-xs text-gray-400 font-[Syne]">
                                    Incluya fechas, horarios, nombres de personas involucradas y cualquier detalle relevante.
                                </p>
                            </div>

                            {/* Pedido del consumidor */}
                            <div className="space-y-2">
                                <label htmlFor="pedidoConsumidor" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                    Pedido del Consumidor <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    id="pedidoConsumidor"
                                    name="pedidoConsumidor"
                                    value={formData.pedidoConsumidor}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-200 resize-vertical"
                                    placeholder="Indique qué solicita como solución a su reclamación (reembolso, reparación, disculpas, etc.)..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sección 4: Documentos adjuntos */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white font-[Syne] mb-6 flex items-center gap-3">
                            <i className="bi bi-paperclip text-purple-400"></i>
                            4. Documentos Adjuntos (Opcional)
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="tieneDocumentos"
                                    name="tieneDocumentos"
                                    checked={formData.tieneDocumentos}
                                    onChange={handleInputChange}
                                    className="mt-1 w-4 h-4 rounded border-2 border-white/20 bg-white/5 text-purple-400 focus:ring-purple-400 focus:ring-2"
                                />
                                <label htmlFor="tieneDocumentos" className="text-sm text-gray-300 font-[Syne]">
                                    Tengo documentos que respaldan mi reclamación
                                </label>
                            </div>

                            {formData.tieneDocumentos && (
                                <div className="space-y-4">
                                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                                        <h3 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                                            <i className="bi bi-info-circle"></i>
                                            Documentos Sugeridos
                                        </h3>
                                        <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside ml-4">
                                            <li>Comprobante de pago o factura</li>
                                            <li>Capturas de pantalla del problema</li>
                                            <li>Correos electrónicos intercambiados</li>
                                            <li>Contratos o términos de servicio</li>
                                            <li>Cualquier evidencia relevante</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="documentosAdjuntos" className="block text-sm font-medium text-gray-300 font-[Syne]">
                                            Descripción de Documentos Adjuntos
                                        </label>
                                        <textarea
                                            id="documentosAdjuntos"
                                            name="documentosAdjuntos"
                                            value={formData.documentosAdjuntos}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 font-[Syne] focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-200 resize-vertical"
                                            placeholder="Liste los documentos que adjuntará por correo electrónico..."
                                        />
                                        <p className="text-xs text-gray-400 font-[Syne]">
                                            Los documentos pueden ser enviados posteriormente al email: reclamaciones@recluitergpt.com indicando su número de reclamo.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Botón de envío */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <div className="text-center space-y-6">
                            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                                <p className="text-yellow-300 text-sm font-[Syne]">
                                    <i className="bi bi-exclamation-triangle mr-2"></i>
                                    Al enviar este formulario, declaro que la información proporcionada es veraz y completa. 
                                    RecluiterGPT responderá en un plazo máximo de 30 días calendarios.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-700 text-white text-lg font-medium font-[Syne] hover:from-orange-500 hover:to-red-600 transition-all duration-200 flex items-center justify-center gap-3 group mx-auto"
                            >
                                <i className="bi bi-send text-lg group-hover:translate-x-1 transition-transform duration-200"></i>
                                Enviar Reclamación
                            </button>

                            <p className="text-sm text-gray-400 font-[Syne] max-w-2xl mx-auto">
                                Una vez enviada su reclamación, recibirá un número de seguimiento en su correo electrónico. 
                                Conserve este número para futuras consultas sobre el estado de su reclamo.
                            </p>
                        </div>
                    </div>
                </form>

                {/* Footer con navegación */}
                <div className="mt-16 text-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/terminos-y-condiciones" className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-[Syne]">
                            Términos y Condiciones
                        </Link>
                        <Link href="/politicas-de-privacidad" className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-[Syne]">
                            Políticas de Privacidad
                        </Link>
                        <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-[Syne]">
                            Volver al inicio
                        </Link>
                    </div>
                    <p className="text-gray-500 text-sm font-[Syne]">
                        © 2025 RecluiterGPT. Todos los derechos reservados. | Código de Protección y Defensa del Consumidor
                    </p>
                </div>
            </div>
        </main>
    );
}
