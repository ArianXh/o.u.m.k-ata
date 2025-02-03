import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const GodisnaPrograma = () => {
  const { t } = useTranslation();

  const godisniProgrami = [
    { title: t("Годишна програма 2024-2025"), file: "autumn-excursion.pdf" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-200 to-red-300 text-white py-32 text-center">

      {/* Background Overlay for Depth */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 relative">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
        {t("Годишни програми")}
        </h1>
      </div>
      </section>


      {/* Excursions Section */}
      <section className="py-16 px-6 container mx-auto grid grid-rows-1 sm:grid-rows-1 lg:grid-rows-1 gap-6">
        {godisniProgrami.map((programi, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-700 mb-4">{programi.title}</h3>
            <a
              href={`/downloads/${programi.file}`}
              download
              className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-800 transition-all"
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