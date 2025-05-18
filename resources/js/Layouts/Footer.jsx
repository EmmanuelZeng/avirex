import { Link } from '@inertiajs/react'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="bg-primary text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div>
                    <Link href="/">
                      <div className="flex items-center">
                        <img 
                          src="/logos/logo-alvirex.svg" 
                          alt="alvirex Logo" 
                          width={150} 
                          height={50} 
                          className="h-auto" 
                        />
                      </div>
                    </Link>
                    <p class="text-white/70 mb-4">
                        Votre partenaire de confiance pour tous vos besoins automobiles. Nous offrons une gamme complète de services pour vous accompagner dans chaque étape de votre expérience automobile.
                    </p>
                    <div class="flex space-x-4">
                        <Link href="#" class="text-white hover:text-secondary">
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" class="text-white hover:text-secondary">
                            <i class="fab fa-instagram"></i>
                        </Link>
                        <Link href="#" class="text-white hover:text-secondary">
                            <i class="fab fa-linkedin-in"></i>
                        </Link>
                        <Link href="#" class="text-white hover:text-secondary">
                            <i class="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Liens Rapides</h3>
                    <ul class="space-y-2">
                        <li>
                            <button class="text-white/70 hover:text-secondary transition">
                                Accueil
                            </button>
                        </li>
                        <li>
                            <button class="text-white/70 hover:text-secondary transition">
                                Véhicules
                            </button>
                        </li>
                        <li>
                            <button class="text-white/70 hover:text-secondary transition">
                                Services
                            </button>
                        </li>
                        <li>
                            <button class="text-white/70 hover:text-secondary transition">
                                À propos
                            </button>
                        </li>
                        <li>
                            <button class="text-white/70 hover:text-secondary transition">
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Contact</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt text-secondary mr-3 mt-1"></i>
                            <span class="text-white/70">123 Avenue des Champs-Élysées<br/>75008 Paris, France</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone text-secondary mr-3"></i>
                            <span class="text-white/70">+33 (0)1 23 45 67 89</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope text-secondary mr-3"></i>
                            <span class="text-white/70">contact@alvirex.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="pt-8 mt-8 border-t border-white/20 text-center text-white/50 text-sm">
                <p>&copy; 2023 Alvirex Co. Ltd. Tous droits réservés.</p>
                <div class="flex justify-center space-x-4 mt-2">
                    <a href="#" class="hover:text-secondary">Politique de confidentialité</a>
                    <a href="#" class="hover:text-secondary">Conditions générales</a>
                    <a href="#" class="hover:text-secondary">Mentions légales</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
