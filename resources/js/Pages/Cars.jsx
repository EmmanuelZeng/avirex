import React, { useEffect } from 'react'
import Input from '../components/Input'
import Car from "../components/Car";
import { Link, useForm } from '@inertiajs/react';

export default function Cars({vehicules}) {
    console.log(vehicules);
    const { data, setData, get } = useForm({
        availability: "",
        type_vehicule: "",
        marque: "",
        modele: "",
        price: "",
        mileage: "",
        type_carburant: "",
        page: vehicules.current_page
    });

    const handleFilterChange = (e) => setData(e.target.name, e.target.value)
    useEffect(() => {
        const timeoutId = setTimeout(() =>{
            get('cars', {
                preserveState: true,
                availability: data.availability,
                type_vehicule: data.type_vehicule,
                marque: data.marque,
                modele: data.modele,
                price: data.price,
                mileage: data.mileage,
                type_carburant: data.type_carburant,
                page: data.page
            })
        }, 300);
        return () => clearTimeout(timeoutId)
    }, [data]);
  return (
    <>
      <section className="fade-in py-12">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-primary mb-4">Nos Véhicules</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre vaste sélection de véhicules premium pour une expérience de conduite exceptionnelle.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    {/* <div class="md:col-span-1">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold text-primary mb-6">Filtres</h3>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Disponibilité</label>
                                <select name="availability" value={data.availability} onChange={handleFilterChange} class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option value="sold">Soldé</option>
                                    <option value="availability">Disponible</option>
                                </select>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Type de véhicule</label>
                                <Input type="text" name="type_vehicule" value={data.type_vehicule} onChange={handleFilterChange} placeholder="Type de véhicule" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Marque</label>
                                 <Input type="text" name="marque" value={data.marque} onChange={handleFilterChange} placeholder="Marque" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Modèle</label>
                                 <Input type="text" name="modele" value={data.modele} onChange={handleFilterChange} placeholder="Modèle" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Prix</label>
                                <div class="flex">
                                    <Input type="text" name="price" value={data.price} onChange={handleFilterChange} placeholder="Prix" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Kilométrage</label>
                                <Input type="text" name="mileage" value={data.mileage} onChange={handleFilterChange} placeholder="Kilométrage" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-medium mb-2">Carburant</label>
                                <select type="text" name="type_carburant" value={data.type_carburant} onChange={handleFilterChange} class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Essence</option>
                                    <option>Diesel</option>
                                    <option>Électrique</option>
                                    <option>Hybride</option>
                                </select>
                            </div>
                        </div>
                    </div> */}

                    {/* Vehicle Grid */}
                    <div class="md:col-span-3">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {vehicules.data.map(vehicule => (
                                <Car
                                    key={vehicule.id}
                                    marque={vehicule.modele.marque.name}
                                    price={vehicule.price}
                                    description={vehicule.description}
                                    annee={vehicule.manufacture_year}
                                    energy={vehicule.energy_class}
                                    carburant={vehicule.type_carburant}
                                    kilometrage={vehicule.mileage}
                                    photos={vehicule.photos}
                                    url={vehicule.id}
                                  />
                                ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-10">
                            <div className="inline-flex space-x-1">
                                {vehicules.links.map(link=> (
                                <Link
                                    key={link.url || link.label}
                                    href={link.url || '#'}
                                    className={`
                                    px-4 py-2 border rounded
                                    text-sm transition
                                    ${link.active
                                        ? 'bg-secondary text-primary font-bold'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'}
                                    ${!link.url ? 'pointer-events-none opacity-50' : ''}
                                    `}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                                ))}
                            </div>
                            </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}
