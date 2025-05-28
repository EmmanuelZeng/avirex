import { Link } from '@inertiajs/react'
import React from 'react'

export default function Service() {
  return (
    <>
        <section className="fade-in py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Nos Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Découvrez la gamme complète des services que nous offrons pour répondre à tous vos besoins automobiles.
                    </p>
                </div>
                <div className="bg-primary rounded-lg overflow-hidden shadow-xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <span className="inline-block text-secondary font-semibold mb-3">Service Premium</span>
                            <h3 className="text-3xl font-bold text-white mb-4">Programme d'Entretien Exclusif</h3>
                            <p className="text-white/80 mb-6">
                                Notre programme d'entretien exclusif offre à votre véhicule les soins qu'il mérite. Nous utilisons les dernières technologies et des pièces d'origine pour garantir les performances optimales de votre véhicule.
                            </p>
                            <ul className="text-white/80 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-secondary mr-2"></i>
                                    Service complet par des techniciens certifiés
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-secondary mr-2"></i>
                                    Utilisation exclusive de pièces d'origine
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-secondary mr-2"></i>
                                    Véhicule de remplacement gratuit
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check-circle text-secondary mr-2"></i>
                                    Inspection complète multi-points
                                </li>
                            </ul>
                        </div>
                        <div className="h-64 md:h-auto">
                            <img src="/storage/picture/car.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Vente de Véhicules</h3>
                            <p className="text-gray-600 mb-6">
                                Notre sélection rigoureuse de véhicules neufs et d'occasion répond aux plus hauts standards de qualité et de performance.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Véhicules neufs et occasions certifiées
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Historique complet des véhicules
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Garantie extensive
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Financement & Leasing</h3>
                            <p className="text-gray-600 mb-6">
                                Nos solutions financières personnalisées vous permettent d'acquérir le véhicule de vos rêves dans les meilleures conditions.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Taux compétitifs
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Options flexibles
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Processus d'approbation rapide
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Service & Maintenance</h3>
                            <p className="text-gray-600 mb-6">
                                Notre équipe de techniciens qualifiés assure l'entretien et la réparation de votre véhicule avec précision et expertise.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Maintenance préventive
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Diagnostic avancé
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Réparations garanties
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Pièces & Accessoires</h3>
                            <p className="text-gray-600 mb-6">
                                Nous proposons une large gamme de pièces d'origine et d'accessoires pour personnaliser et optimiser votre véhicule.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Pièces d'origine certifiées
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Accessoires exclusifs
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Installation professionnelle
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Véhicules sur Mesure</h3>
                            <p className="text-gray-600 mb-6">
                                Notre service de personnalisation vous permet de configurer votre véhicule selon vos préférences et besoins spécifiques.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Options de personnalisation complètes
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Conseils d'experts
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Finitions de haute qualité
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Assistance Routière</h3>
                            <p className="text-gray-600 mb-6">
                                Notre service d'assistance routière est disponible 24/7 pour vous offrir une tranquillité d'esprit totale lors de vos déplacements.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Disponibilité 24/7
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Interventions rapides
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-secondary mr-2"></i>
                                    Couverture européenne
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 bg-gray-100 p-8 md:p-12 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Besoin d'un service personnalisé?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Notre équipe d'experts est à votre disposition pour répondre à vos questions et vous accompagner dans votre projet automobile.
                    </p>
                    <Link href="/contact" className="btn-primary px-8 py-3 rounded-md font-bold inline-block">
                        Contactez-nous
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}
