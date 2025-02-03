import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const IzborniPredmeti = () => {
  const { t } = useTranslation();

  const classes = [
    { grade: t("IV и V одделение"), name: t("1.Танци и народни ора | 2.Сликарство и вајарство") },
    { grade: t("VI одделение"), name: t("1. Етика на религии | 2.Техничко цртање и дизајнирање") },
    { grade: t("VII одделение"), name: t("1. Основи на веб дизајн | 2.Музички жанрови") },
    { grade: t("VIII одделение"), name: t("1. Техничко образование") },
    { grade: t("IX одделение"), name: t("1. Програмирање") },
    
  ];

  return (
    <div className="raspored-page bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-200 to-red-300 text-white py-32 text-center">

      {/* Background Overlay for Depth */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 relative">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
        {t("Изборни предмети")}
        </h1>
      </div>
      </section>

      
      {/* Class List Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-700">{t(item.grade)}</h2>
              <p className="text-xl text-gray-900 mt-2">{t(item.name)}</p>
            </div>
          ))}
        </div>
      </section>

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default IzborniPredmeti;
