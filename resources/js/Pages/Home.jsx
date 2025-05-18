import { Link } from "@inertiajs/react";

export default function Home() {
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
            <div class="car-card bg-white rounded-lg overflow-hidden shadow-lg">
              <div class="h-56 bg-gray-200"></div>
              <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-bold text-primary">BMW M2</h3>
                  <p class="text-secondary font-bold">€89,900</p>
                </div>
                <p class="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.
                </p>
                <div class="flex justify-between text-sm text-gray-500 mb-4">
                  <span>2023</span>
                  <span>305 kW</span>
                  <span>Essence</span>
                  <span>3000 km</span>
                </div>
                <button class="w-full bg-secondary text-primary py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Voir les détails
                </button>
              </div>
            </div>
            <div class="car-card bg-white rounded-lg overflow-hidden shadow-lg">
              <div class="h-56 bg-gray-200"></div>
              <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-bold text-primary">Mercedes SLK</h3>
                  <p class="text-secondary font-bold">€77,500</p>
                </div>
                <p class="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.
                </p>
                <div class="flex justify-between text-sm text-gray-500 mb-4">
                  <span>2022</span>
                  <span>250 kW</span>
                  <span>Essence</span>
                  <span>1500 km</span>
                </div>
                <button class="w-full bg-secondary text-primary py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Voir les détails
                </button>
              </div>
            </div>
            <div class="car-card bg-white rounded-lg overflow-hidden shadow-lg">
              <div class="h-56 bg-gray-200"></div>
              <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-bold text-primary">Audi A3 S-Line</h3>
                    <p class="text-secondary font-bold">€52,900</p>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.
                  </p>
                  <div class="flex justify-between text-sm text-gray-500 mb-4">
                    <span>2023</span>
                    <span>180 kW</span>
                    <span>Diesel</span>
                    <span>500 km</span>
                  </div>
                  <button class="w-full bg-secondary text-primary py-2 rounded font-medium hover:bg-opacity-90 transition">
                    Voir les détails
                  </button>
                </div>
              </div>
            </div>
            <div class="text-center mt-10">
              <Link href="/cars" class="btn-primary px-8 py-3 rounded-md font-bold inline-block">
                Voir tous les véhicules
              </Link>
            </div>
          </div>
      </section>
    </>
  )
}
