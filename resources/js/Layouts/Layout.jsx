import { useState } from 'react';
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
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="bg-primary text-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                        <Link href="/">
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
                        
                        {/* Bouton menu mobile (seulement visible sur mobile) */}
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
                    </div>
                    
                    {/* Navigation principale */}
                    <nav className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto`}>
                        {navigations.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className={`nav-link px-4 py-2 font-medium text-center md:text-left ${
                                    activePage === item.href ? "text-secondary font-bold" : "hover:text-secondary"
                                }`}
                                onClick={() => setActivePage(item.href)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
            
            <main>
                {children}
            </main>
        </>
    );
}