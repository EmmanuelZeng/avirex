import React from 'react'

export default function Car() {
  return (
    <>
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
    </>
  )
}
