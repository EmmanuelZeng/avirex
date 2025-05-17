import { useState, useEffect } from 'react';
import { Link } from "@inertiajs/react";

const navigations = [
    {name: "Accueil", href: "/"},
    {name: "Véhicules", href:"/cars"},
    {name: "Services", href: "/services"},
    {name: "A propos", href: "/about"},
    {name: "Contact", href: "/contact"}
]

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState(window.location.pathname);

    // Empêche le défilement de la page quand le menu mobile est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <header className="bg-primary text-white shadow-md fixed w-full z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/" onClick={closeMenu}>
                        <div className="flex items-center">
                            <img 
                                src="/logos/logo-alvirex.svg" 
                                alt="alvirex Logo" 
                                width={150} 
                                height={50} 
                                className="h-auto" 
                            />
                        </div>
                    </Link>
                    
                    {/* Bouton menu mobile */}
                    <button 
                        className="md:hidden p-2 focus:outline-none"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-label="Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    
                    {/* Navigation desktop */}
                    <nav className="hidden md:flex space-x-6">
                        {navigations.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className={`px-4 py-2 font-medium ${
                                    activePage === item.href ? "text-secondary font-bold" : "hover:text-secondary"
                                }`}
                                onClick={() => setActivePage(item.href)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                
                {/* Navigation mobile (full screen) */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 bg-primary mx-auto px-4 z-40 mt-16 overflow-y-auto">
                        <nav className="flex flex-col items-start pt-8 h-full space-y-8">
                            {navigations.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className={`text-xl px-4 font-medium ${
                                        activePage === item.href ? "text-secondary font-bold" : "hover:text-secondary"
                                    }`}
                                    onClick={() => {
                                        setActivePage(item.href);
                                        closeMenu();
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
            
            {/* Contenu principal avec marge pour le header fixe */}
            <main className="pt-20 md:pt-20">
                {children}
            </main>
        </>
    );
}