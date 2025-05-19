import React from 'react'
import Input from '../components/Input'

export default function Cars() {
  return (
    <>
      <section class="fade-in py-12">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-primary mb-4">Nos Véhicules</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre vaste sélection de véhicules premium pour une expérience de conduite exceptionnelle.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div class="md:col-span-1">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold text-primary mb-6">Filtres</h3>

                            {/* Filter: New/Used */}
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">État</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Tous</option>
                                    <option>Neuf</option>
                                    <option>Occasion</option>
                                </select>
                            </div>

                            {/* Filter: Vehicle Type */}
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Type de véhicule</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Tous</option>
                                    <option>Berline</option>
                                    <option>SUV</option>
                                    <option>Coupé</option>
                                    <option>Cabriolet</option>
                                    <option>Break</option>
                                </select>
                            </div>

                            {/* Filter: Make */}
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Marque</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Toutes</option>
                                    <option>Audi</option>
                                    <option>BMW</option>
                                    <option>Mercedes</option>
                                    <option>Porsche</option>
                                    <option>Tesla</option>
                                </select>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Modèle</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Tous</option>
                                </select>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Prix</label>
                                <div class="flex items-center gap-2">
                                    <Input type="text" placeholder="Min" class="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                                    <span>-</span>
                                    <Input type="text" placeholder="Max" />
                                </div>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Kilométrage</label>
                                <div class="flex items-center gap-2">
                                    <Input type="text" placeholder="Min" class="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                                    <span>-</span>
                                    <Input type="text" placeholder="Max" class="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Carburant</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Tous</option>
                                    <option>Essence</option>
                                    <option>Diesel</option>
                                    <option>Électrique</option>
                                    <option>Hybride</option>
                                </select>
                            </div>

                            <button class="w-full bg-secondary text-primary py-3 rounded font-bold hover:bg-opacity-90 transition">
                                Appliquer les filtres
                            </button>
                        </div>
                    </div>

                    {/* Vehicle Grid */}
                    <div class="md:col-span-3">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                            <div class="car-card bg-white rounded-lg overflow-hidden shadow-lg">
                                <div class="h-56 bg-gray-200"></div>
                                <div class="p-6">
                                    <div class="flex justify-between items-center mb-4">
                                        <h3 class="text-xl font-bold text-primary">Tesla Model 3</h3>
                                        <p class="text-secondary font-bold">€49,900</p>
                                    </div>
                                    <p class="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.
                                    </p>
                                    <div class="flex justify-between text-sm text-gray-500 mb-4">
                                        <span>2022</span>
                                        <span>350 kW</span>
                                        <span>Électrique</span>
                                        <span>1200 km</span>
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
                                        <h3 class="text-xl font-bold text-primary">Porsche Cayman</h3>
                                        <p class="text-secondary font-bold">€88,700</p>
                                    </div>
                                    <p class="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.
                                    </p>
                                    <div class="flex justify-between text-sm text-gray-500 mb-4">
                                        <span>2022</span>
                                        <span>275 kW</span>
                                        <span>Essence</span>
                                        <span>500 km</span>
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
                                        <h3 class="text-xl font-bold text-primary">Range Rover Evoque</h3>
                                        <p class="text-secondary font-bold">€67,200</p>
                                    </div>
                                    <p class="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.
                                    </p>
                                    <div class="flex justify-between text-sm text-gray-500 mb-4">
                                        <span>2023</span>
                                        <span>220 kW</span>
                                        <span>Diesel</span>
                                        <span>100 km</span>
                                    </div>
                                    <button class="w-full bg-secondary text-primary py-2 rounded font-medium hover:bg-opacity-90 transition">
                                        Voir les détails
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pagination */}
                        <div class="flex justify-center mt-10">
                            <div class="inline-flex">
                                <button class="bg-primary text-white w-10 h-10 rounded-l flex items-center justify-center">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="bg-secondary text-primary w-10 h-10 flex items-center justify-center font-bold">1</button>
                                <button class="bg-white text-gray-700 w-10 h-10 flex items-center justify-center">2</button>
                                <button class="bg-white text-gray-700 w-10 h-10 flex items-center justify-center">3</button>
                                <button class="bg-white text-gray-700 w-10 h-10 rounded-r flex items-center justify-center">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}
