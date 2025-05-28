import { Link } from '@inertiajs/react'
import React from 'react'

export default function Car(props) {
  return (
    <>
        <div class="car-card bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="h-56">
                <img src={`/storage/${props.photos?.[0]?.url}`}
                     alt={`${props.marque} - ${props.modele}`}
                     class="w-full h-full object-cover rounded mb-2" />
            </div>
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-bold text-primary">{props.marque}</h3>
                  <p class="text-secondary font-bold">{props.price} $</p>
                </div>
                <p class="text-gray-600 mb-4">
                  {props.description}
                </p>
                <div class="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{props.annee}</span>
                  <span>{props.energy} kW</span>
                  <span>{props.carburant}</span>
                  <span>{props.kilometrage} Km</span>
                </div>
                <Link href={`/cars/${props.url}`} class="w-full bg-secondary text-primary py-2 px-4 rounded font-medium hover:bg-opacity-90 transition">
                  Voir les détails
                </Link>
            </div>
        </div>
    </>
  )
}
