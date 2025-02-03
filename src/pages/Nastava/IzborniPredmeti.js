import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-36 text-center shadow-2xl">
        
        {/* Background Overlay for Depth */}
        <div className="absolute inset-0 bg-blue-400 opacity-70"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
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

export default IzborniPredmeti;
