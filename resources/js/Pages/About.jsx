import React from 'react'

export default function About() {
  return (
    <>
      <section className="fade-in py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">À propos d'Alvirex Co. Ltd</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre histoire, notre mission et notre engagement envers l'excellence et la satisfaction client.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="rounded-lg">
                        <img src="/storage/picture/logo.jpg" alt="" className="w-full h-full object-fill" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-primary mb-4">Notre Histoire</h3>
                        <p className="text-gray-600 mb-4">
                            Fondée en 2005, Alvirex Co. Ltd s'est rapidement imposée comme un leader sur le marché des véhicules de luxe. Notre passion pour l'automobile et notre engagement envers la qualité nous ont permis de développer une clientèle fidèle et exigeante.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Au fil des années, nous avons élargi notre gamme de services pour offrir une expérience complète et personnalisée à nos clients. Aujourd'hui, nous sommes fiers d'être reconnus comme un concessionnaire de confiance, offrant des véhicules d'exception et un service client irréprochable.
                        </p>
                        <p className="text-gray-600">
                            Notre équipe de professionnels passionnés s'engage chaque jour à dépasser vos attentes et à vous accompagner dans toutes les étapes de votre expérience automobile.
                        </p>
                    </div>
                </div>
                <div className="bg-primary rounded-lg overflow-hidden shadow-xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h3 className="text-3xl font-bold text-white mb-6">Notre Mission</h3>
                            <p className="text-white/80 mb-8">
                                Notre mission est de fournir à nos clients une expérience automobile exceptionnelle, en proposant des véhicules de qualité supérieure et un service personnalisé qui répond à leurs besoins et dépasse leurs attentes.
                            </p>
                            <h3 className="text-3xl font-bold text-white mb-6">Notre Vision</h3>
                            <p className="text-white/80">
                                Devenir la référence incontournable dans le secteur automobile de luxe, reconnue pour notre excellence, notre innovation et notre engagement envers la satisfaction client.
                            </p>
                        </div>
                        <div className="h-64 md:h-auto">
                            <img src="/storage/picture/mission.jpeg" alt="" className="w-full h-full object-fill" />
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary mb-8 text-center">Nos Valeurs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-award text-secondary text-2xl"></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">Excellence</h4>
                            <p className="text-gray-600">
                                Nous visons l'excellence dans tous les aspects de notre activité, de la sélection des véhicules à la qualité de notre service.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-handshake text-secondary text-2xl"></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">Intégrité</h4>
                            <p className="text-gray-600">
                                Nous agissons avec honnêteté, transparence et respect dans toutes nos interactions avec nos clients et partenaires.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-lightbulb text-secondary text-2xl"></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">Innovation</h4>
                            <p className="text-gray-600">
                                Nous embrassons le changement et recherchons continuellement de nouvelles façons d'améliorer nos produits et services.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-users text-secondary text-2xl"></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">Passion</h4>
                            <p className="text-gray-600">
                                Notre passion pour l'automobile guide chacune de nos actions et nous inspire à toujours aller plus loin.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-8 text-center">Nos Partenaires</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center"></div>
                        <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center"></div>
                        <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center"></div>
                        <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center"></div>
                        <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center"></div>
                        <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
