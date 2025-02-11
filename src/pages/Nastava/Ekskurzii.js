import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';

import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const Ekskurzii = () => {
  const { t } = useTranslation();

  const excursions = [
    { title: t("Екскурзии"), file: "/pdf/ekskurzii.pdf" },
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
            {t("Екскурзии")}
          </h1>
        </div>
      </section>


      {/* Content Section */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-10">{t("Екскурзии, излети и настава во природа")}</h2>
        <p className="text-lg text-primary text-center mb-8">{t("Училишниот тим за организирање на екскурзиите го сочинуваат:")}</p>
        <ul className="text-lg text-gray-900 list-disc list-inside text-center">
          <li>{t("Зулбеар Ракиповски")}</li>
          <li>{t("Асан Мемедовски")}</li>
          <li>{t("Ајбакан Асан")}</li>
          <li>{t("Тирона Цами")}</li>
          <li>{t("Зихни Сејди")}</li>
          <li>{t("Арсим Исламовски - родител")}</li>
          <li>{t("Ермил Ракиповски - општина")}</li>
        </ul>

        <h3 className="text-4xl font-bold text-primary-dark mt-10">{t("Програма за организација и изведување на екскурзии во учебната 2024/2025 година")}</h3>
        <p className="text-xl text-primary mt-4">{t("Цели на училишните екскурзии:")}</p>
        <ul className="text-lg text-gray-900 list-disc list-inside">
          <li>{t("Проширување и совладување на знаењата")}</li>
          <li>{t("Примена на вештини и ставови преку непосредно запознавање на појавите, како и односи во природата и општествената средина")}</li>
          <li>{t("Запознавање со природните убавини, културно-историските знаменитости, индустриските и земјоделските капацитети во поблиската и пошироката околина, во согласност со воспитно-образовната работа на училиштето")}</li>
        </ul>
      </section>


      {/* Excursions Section */}
      <section className="py-16 px-6 container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {excursions.map((excursion, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">{excursion.title}</h3>
            <a
              href={`${excursion.file}`}
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

export default Ekskurzii;