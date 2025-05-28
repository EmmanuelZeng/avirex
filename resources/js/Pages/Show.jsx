import React, { useEffect, useRef, useState } from 'react';

export default function Show({ vehicule }) {
    const images = vehicule.photos || [];
    console.log(images);

    const totalSlides = images.length;
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
  if (totalSlides === 0) return;

  let interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, 5000);

  const carousel = carouselRef.current;
  let newInterval;

  const clearAndRestart = () => {
    clearInterval(interval);
    newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', clearAndRestart);
  }

  return () => {
    clearInterval(interval);
    clearInterval(newInterval);
  };
}, [totalSlides]);

  useEffect(() => {
    const carouselInner = document.getElementById('carouselInner');
    if (carouselInner) {
      carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        {vehicule.modele.marque.name}
      </h1>

      <div
        ref={carouselRef}
        className="carousel mb-8 rounded-lg shadow-lg overflow-hidden relative"
        style={{ height: '500px' }}
      >
        <div className="carousel-inner flex transition-transform duration-700 ease-in-out h-full" id="carouselInner">
          {images.map((img, index) => (
            <div className="carousel-item w-full flex-shrink-0 h-full" key={index}>
                <img
                src={`/storage/${img.url}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                />
            </div>
            ))}
        </div>
        {totalSlides > 1 && (
        <>
        <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
            onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)}
        >
            <i className="fas fa-chevron-left"></i>
        </button>
        <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
            onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
        >
            <i className="fas fa-chevron-right"></i>
        </button>
        </>)}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-secondary pb-2">Aperçu du Véhicule</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                <i className="fas fa-calendar-alt text-3xl text-secondary mb-2"></i>
                                <span className="text-sm text-gray-500">Année</span>
                                <span className="font-semibold">{vehicule.manufacture_year}</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                <i className="fas fa-tachometer-alt text-3xl text-secondary mb-2"></i>
                                <span className="text-sm text-gray-500">Kilométrage</span>
                                <span className="font-semibold">{vehicule.mileage} km</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                <i className="fas fa-gas-pump text-3xl text-secondary mb-2"></i>
                                <span className="text-sm text-gray-500">Carburant</span>
                                <span className="font-semibold">{vehicule.type_carburant}</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                <i className="fas fa-cogs text-3xl text-secondary mb-2"></i>
                                <span className="text-sm text-gray-500">Transmission</span>
                                <span className="font-semibold">{vehicule.transmission}</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                <i className="fas fa-horse-head text-3xl text-secondary mb-2"></i>
                                <span className="text-sm text-gray-500">Puissance</span>
                                <span className="font-semibold">{vehicule.engine_power} ch</span>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                <i className="fas fa-palette text-3xl text-secondary mb-2"></i>
                                <span className="text-sm text-gray-500">Couleur</span>
                                <span className="font-semibold">{vehicule.color}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-secondary pb-2">Caractéristiques Techniques</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-secondary">Moteur & Performance</h3>
                                <div className="spec-item">
                                    <span className="font-semibold">Moteur:</span> {vehicule.engine_cc}
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">Puissance:</span> {vehicule.engine_power}
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">0-100 km/h:</span> {vehicule.acceleration}
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">Vitesse max:</span> {vehicule.max_speed}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-secondary">Consommation & Émissions</h3>
                                <div className="spec-item">
                                    <span className="font-semibold">Consommation mixte:</span> {vehicule.consumption_urban} L/100km
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">Émissions CO2:</span> {vehicule.co2_emissions} g/km
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">Capacité réservoir:</span> {vehicule.fuel_tank_volume} litres
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-secondary">Dimensions & Capacités</h3>
                                <div className="spec-item">
                                    <span className="font-semibold">Longueur:</span> {vehicule.longueur} mm
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">Poids:</span> {vehicule.weight} Tonnes
                                </div>
                                <div className="spec-item">
                                    <span className="font-semibold">Volume coffre:</span> {vehicule.trunk_volume} litres
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-secondary">Transmission & Châssis</h3>
                                <div className="spec-item">
                                    <span className="font-semibold">Type traction:</span> {vehicule.drivetrain}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-4">
                        <div className="text-center mb-6">
                            <span className="text-gray-500 text-xl">Prix</span>
                            <div className="text-3xl font-bold text-primary">{vehicule.price} $</div>
                            <div className="text-sm text-gray-500">TVA récupérable incluse</div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  );
}
