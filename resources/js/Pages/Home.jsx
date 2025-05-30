import { Link } from "@inertiajs/react";
import Car from "../components/Car";

export default function Home({voitures}) {
    console.log(voitures)
  return (
    <>
      <section className="fade-in">
        <div class="bg-primary text-white py-20 relative overflow-hidden">
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="container mx-auto px-4 relative z-10 flex flex-col items-center">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 text-center">VOTRE PARTENAIRE DE CONFIANCE</h2>
            <p class="text-xl md:text-2xl mb-8 text-center max-w-3xl">
              Découvrez notre collection exclusive de véhicules de luxe et d'exception
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <Link href="/cars" class="btn-secondary px-8 py-3 rounded-md font-bold">
                Découvrir nos véhicules
              </Link>
              <Link href="/contact"  class="bg-white text-primary px-8 py-3 rounded-md font-bold">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
        {/* Featured Cars */}
        <div class="container mx-auto px-4 py-16">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-primary mb-4">Véhicules en Vedette</h2>
    <p class="text-gray-600 max-w-2xl mx-auto">
      Découvrez notre sélection de véhicules premium pour une expérience de conduite exceptionnelle.
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {voitures.map(voiture => (
      <Car
        key={voiture.id}
        marque={voiture.modele.marque.name}
        price={voiture.price}
        description={voiture.description}
        annee={voiture.manufacture_year}
        energy={voiture.energy_class}
        carburant={voiture.type_carburant}
        kilometrage={voiture.mileage}
        photos={voiture.photos}
        url={voiture.id}
      />
    ))}
  </div>
  <div class="text-center mt-10">
    <Link href="/cars" class="btn-primary px-8 py-3 rounded-md font-bold inline-block">
      Voir tous les véhicules
    </Link>
  </div>
</div>
        {/* Services Overview */}
        <div class="bg-gray-100 py-16">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-primary mb-4">Nos Services</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            Découvrez la gamme complète des services que nous offrons pour répondre à tous vos besoins automobiles.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="service-card bg-white p-6 rounded-lg shadow-md">
                            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i class="fas fa-car text-secondary text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-primary text-center mb-3">Vente de Véhicules</h3>
                            <p class="text-gray-600 text-center">
                                Large gamme de véhicules neufs et d'occasion pour répondre à tous vos besoins et préférences.
                            </p>
                        </div>
                        <div class="service-card bg-white p-6 rounded-lg shadow-md">
                            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i class="fas fa-tools text-secondary text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-primary text-center mb-3">Maintenance & Réparation</h3>
                            <p class="text-gray-600 text-center">
                                Service complet de maintenance et de réparation par nos techniciens certifiés.
                            </p>
                        </div>
                        <div class="service-card bg-white p-6 rounded-lg shadow-md">
                            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i class="fas fa-coins text-secondary text-2xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-primary text-center mb-3">Financement</h3>
                            <p class="text-gray-600 text-center">
                                Solutions de financement personnalisées pour vous aider à acquérir le véhicule de vos rêves.
                            </p>
                        </div>
                    </div>

                    <div class="text-center mt-10">
                        <Link href="/services" class="btn-primary px-8 py-3 rounded-md font-bold inline-block">
                            Découvrir tous nos services
                        </Link>
                    </div>
                </div>
        </div>

        {/* Testimonials */}
        <div class="container mx-auto px-4 py-16">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-primary mb-4">Témoignages</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Découvrez ce que nos clients disent de leur expérience avec Alvirex Co. Ltd.
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-4">
                            <div class="text-secondary">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-600 italic mb-4">
                            "Service exceptionnel et professionnalisme remarquable. J'ai trouvé la voiture parfaite grâce aux conseils avisés de l'équipe d'Alvirex."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                            <div>
                                <h4 class="font-bold">Pierre Durand</h4>
                                <p class="text-sm text-gray-500">Client depuis 2022</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-4">
                            <div class="text-secondary">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-600 italic mb-4">
                            "Je recommande vivement Alvirex pour la qualité de leurs véhicules et leur service après-vente impeccable. Une expérience client remarquable."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                            <div>
                                <h4 class="font-bold">Marie Laurent</h4>
                                <p class="text-sm text-gray-500">Cliente depuis 2021</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-4">
                            <div class="text-secondary">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        <p class="text-gray-600 italic mb-4">
                            "Des solutions de financement adaptées à mes besoins et une équipe à l'écoute. Je ne pouvais pas espérer mieux pour l'achat de ma nouvelle voiture."
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                            <div>
                                <h4 class="font-bold">Jean Lefebvre</h4>
                                <p class="text-sm text-gray-500">Client depuis 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/* Call To Action */}
        <div class="bg-primary py-16">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold text-white mb-6">Prêt à trouver votre véhicule de rêve?</h2>
                    <p class="text-white text-xl mb-8 max-w-2xl mx-auto">
                        Contactez-nous dès aujourd'hui et laissez-nous vous guider vers le véhicule qui correspond parfaitement à vos attentes.
                    </p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact" class="btn-secondary px-8 py-3 rounded-md font-bold">
                            Nous contacter
                        </Link>
                        <Link href="/cars" class="bg-white text-primary px-8 py-3 rounded-md font-bold">
                            Voir nos véhicules
                        </Link>
                    </div>
                </div>
        </div>
      </section>
    </>
  )
}
