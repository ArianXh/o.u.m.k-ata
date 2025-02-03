import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const Ekskurzii = () => {
  const { t } = useTranslation();

  const excursions = [
    { title: t("Есенска еднодневна екскурзија"), file: "autumn-excursion.pdf" },
    { title: t("Пролетна еднодневна екскурзија надвор од градот"), file: "winter-excursion.pdf" },
    { title: t("Пролетна еднодневна екскурзија"), file: "spring-excursion.pdf" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-36 text-center shadow-2xl">
        
        {/* Background Overlay for Depth */}
        <div className="absolute inset-0 bg-blue-400 opacity-70"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
            {t("Екскурзии")}
          </h1>
          
        </div>
      </section>


      {/* Content Section */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">{t("Екскурзии, излети и настава во природа")}</h2>
        <p className="text-lg text-gray-700 text-center mb-8">{t("Училишниот тим за организирање на екскурзиите го сочинуваат:")}</p>
        <ul className="text-lg text-gray-700 list-disc list-inside text-center">
          <li>Зулбеар Ракиповски</li>
          <li>Асан Мемедовски</li>
          <li>Ајбакан Асан</li>
          <li>Тирона Цами</li>
          <li>Зихни Сејди</li>
          <li>Арсим Исламовски - родител</li>
          <li>Ермил Ракиповски - општина</li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-700 mt-10">{t("Програма за организација и изведување на екскурзии во учебната 2024/2025 година")}</h3>
        <p className="text-lg text-gray-700 mt-4">{t("Цели на училишните екскурзии:")}</p>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li>{t("Проширување и совладување на знаењата")}</li>
          <li>{t("Примена на вештини и ставови преку непосредно запознавање на појавите, како и односи во природата и општествената средина")}</li>
          <li>{t("Запознавање со природните убавини, културно-историските знаменитости, индустриските и земјоделските капацитети во поблиската и пошироката околина, во согласност со воспитно-образовната работа на училиштето")}</li>
        </ul>
      </section>


      {/* Excursions Section */}
      <section className="py-16 px-6 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {excursions.map((excursion, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-700 mb-4">{excursion.title}</h3>
            <a
              href={`/downloads/${excursion.file}`}
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

export default Ekskurzii;