import React from 'react'

export default function Contact() {
  return (
    <>
        <section className="fade-in py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Contactez-nous</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Informations</h3>

                            <div className="flex items-start mb-6">
                                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                                    <i className="fas fa-map-marker-alt text-secondary"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Adresse</h4>
                                    <p className="text-gray-600">
                                        123 Avenue des Champs-Élysées<br/>
                                        75008 Paris, France
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                                    <i className="fas fa-phone text-secondary"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Téléphone</h4>
                                    <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                                    <i className="fas fa-envelope text-secondary"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                                    <p className="text-gray-600">contact@alvirex.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                                    <i className="fas fa-clock text-secondary"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Heures d'ouverture</h4>
                                    <p className="text-gray-600">
                                        Lun - Ven : 9h00 - 19h00<br/>
                                        Samedi : 10h00 - 18h00<br/>
                                        Dimanche : Fermé
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-bold text-gray-800 mb-3">Suivez-nous</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-opacity-90 transition">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-opacity-90 transition">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-opacity-90 transition">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-opacity-90 transition">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h3>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
                                        <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Votre nom" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                        <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Votre email" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                                        <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Votre téléphone" />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                                        <select id="subject" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                            <option>Informations sur un véhicule</option>
                                            <option>Demande de rendez-vous</option>
                                            <option>Service après-vente</option>
                                            <option>Financement</option>
                                            <option>Autre</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea id="message" rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Votre message"></textarea>
                                </div>

                                <div className="mb-6 flex items-start">
                                    <input type="checkbox" id="terms" className="mt-1 mr-2" />
                                    <label htmlFor="terms" className="text-gray-600 text-sm">
                                        J'accepte que mes données soient traitées conformément à la politique de confidentialité d'Alvirex Co. Ltd.
                                    </label>
                                </div>

                                <button type="submit" className="btn-primary px-8 py-3 rounded-md font-bold">
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-primary mb-4">Questions Fréquentes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Consultez les réponses aux questions les plus fréquemment posées par nos clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-bold text-primary mb-3">Comment prendre rendez-vous pour un essai?</h4>
                            <p className="text-gray-600">
                                Vous pouvez prendre rendez-vous pour un essai en nous contactant par téléphone, par email ou en utilisant notre formulaire de contact. Notre équipe vous répondra dans les plus brefs délais pour confirmer votre rendez-vous.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-bold text-primary mb-3">Quelles sont les options de financement disponibles?</h4>
                            <p className="text-gray-600">
                                Nous offrons diverses options de financement adaptées à vos besoins, y compris le crédit classique, le leasing et la location avec option d'achat. Nos conseillers financiers sont à votre disposition pour vous aider à choisir la solution la plus avantageuse pour vous.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-bold text-primary mb-3">Quelles garanties sont offertes sur les véhicules d'occasion?</h4>
                            <p className="text-gray-600">
                                Tous nos véhicules d'occasion bénéficient d'une garantie minimale de 12 mois. Nous proposons également des extensions de garantie allant jusqu'à 36 mois pour une tranquillité d'esprit totale.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-bold text-primary mb-3">Comment planifier un entretien pour mon véhicule?</h4>
                            <p className="text-gray-600">
                                Vous pouvez planifier un entretien en contactant notre service après-vente par téléphone ou en utilisant notre formulaire de contact en ligne. Nous vous proposerons un créneau horaire qui vous convient et vous rappellerons pour confirmer votre rendez-vous.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
