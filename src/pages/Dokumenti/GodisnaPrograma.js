import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold tracking-wide">{t("Годишна Програма")}</h1>
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

      {/* Contact Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold">{t("Ако имате било какви прашања, слободно контактирајте нè")}</h2>
          <p className="mt-4 text-lg opacity-90">{t("Нашиот тим е секогаш тука за вас!")}</p>
          <Link to="/kontakt">
            <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-300 transition-all">
              {t("Контактирајте нè")}
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GodisnaPrograma;