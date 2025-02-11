import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';

import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const GodisnaPrograma = () => {
  const { t } = useTranslation();

  const godisniProgrami = [
    { title: t("Годишна програма 2024-2025"), file: "/pdf/godisna_programa_24-25.pdf" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Годишни програми")}
          </h1>
        </div>
      </section>


      {/* Прогарами section */}
      <section className="py-16 px-6 container mx-auto grid grid-rows-1 sm:grid-rows-1 lg:grid-rows-1 gap-6">
        {godisniProgrami.map((programi, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">{t(programi.title)}</h3>
            <a
              href={`${programi.file}`}
              download
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:hover:bg-red-500 transition-all"
            >
              <FaDownload />
              <span>{t("Преземи")}</span>
            </a>
          </div>
        ))}
      </section>

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default GodisnaPrograma;