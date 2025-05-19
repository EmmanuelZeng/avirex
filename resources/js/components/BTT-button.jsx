import React, { useEffect, useState } from 'react';

export default function BTTbutton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction de scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Affiche ou cache le bouton en fonction du scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Nettoyage de l'écouteur lors du démontage
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition focus:outline-none"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
