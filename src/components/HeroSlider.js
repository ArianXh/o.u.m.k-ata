import React from 'react';
import { useTranslation } from 'react-i18next';

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
      <section className="relative">
        <div className="w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">{t("О.У М.К. Ататурк")}</h1>
            <p className="mt-4 text-lg md:text-2xl">{t("Знаеме и можеме да работиме за доброто на сите")}</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlider;