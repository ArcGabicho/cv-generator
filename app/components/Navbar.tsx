'use client';

import { useState } from "react";

const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Precios", href: "/precios" },
    { label: "Actividad", href: "/actividad" },
    { label: "Comunidad", href: "/comunidad" },
];

interface NavbarProps {
    onNavClick: (href: string) => void;
    activeRoute: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeRoute }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-lg border-b border-white/5 shadow-sm">
        <div className="flex items-center gap-3">
            {/* Minimal professional logo */}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200">
                <i className="bi bi-lightning-charge text-lg text-purple-300"></i>
            </span>
            <span className="text-lg font-bold text-white font-[Syne] select-none tracking-wide">RecluiterGPT</span>
        </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row gap-6 text-sm font-[Syne]">
                {navItems.map((item) => (
                    <button
                        key={item.href}
                        onClick={() => onNavClick(item.href)}
                        className={`text-white/80 hover:text-white transition-colors duration-200 font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 ${
                            activeRoute === item.href ? "bg-white/10 text-white" : ""
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-lg text-white`}></i>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/5 md:hidden">
                    <div className="flex flex-col gap-2 px-6 py-4">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => {
                                    onNavClick(item.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`text-left text-white/80 hover:text-white transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-white/5 font-[Syne] ${
                                    activeRoute === item.href ? "bg-white/10 text-white" : ""
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
