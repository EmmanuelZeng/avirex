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
      </section>
    </>
  )
}
