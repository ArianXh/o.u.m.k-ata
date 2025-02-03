import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  /*const slides = [
    { id: 1, image: '/images/slide1.jpg', caption: 'Welcome to ATA School' },
    { id: 2, image: '/images/slide2.jpg', caption: 'Excellence in Education' },
    { id: 3, image: '/images/slide3.jpg', caption: 'Join Our Community' },
  ];*/
  
  const { t } = useTranslation();

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-100 to-white py-40 text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-60"></div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative">
          
          {/* Headline */}
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight drop-shadow-md">
            {t("О.У Мустафа Кемал Ататурк")}
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg text-gray-700">
          Знаеме и можеме да работиме за доброто на сите 
          </p>

          {/* Call-to-Actions */}
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/za-ucilisteto"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
            >
              {t("Повеќе")}
            </a>
            <a
              href="/kontakt"
              className="border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 font-semibold py-3 px-8 rounded-lg shadow-md transition-all"
            >
              {t("Контактирајте нè")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlider;