import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';

import { useTranslation } from 'react-i18next';

const KlasnoRakovodstvo = () => {
  const { t } = useTranslation();
  
  const classes = [
    { grade: "I-т", teacher: "Синем Салчевска" },
    { grade: "I –мак- броштица", teacher: "Зини Скендер" },
    { grade: "II-т", teacher: "Онур Зубер" },
    { grade: "II-мак- брош.", teacher: "Буран Селмановски" },
    { grade: "III-т", teacher: "Аџи Зекир" },
    { grade: "III- мак - брош.", teacher: "Асан Мемедовски" },
    { grade: "IV-т", teacher: "Тајре Асан" },
    { grade: "IV-мак - брош.", teacher: "Ејран Саитовски" },
    { grade: "V-т", teacher: "Џошкун Зекир" },
    { grade: "V-мак - брош.", teacher: "Нузи Ризвановски" },
    { grade: "III ком", teacher: "Мимоза Лиман" },
    { grade: "VI-мак - брош.", teacher: "Селим Мерсимовски" },
    { grade: "II", teacher: "Ќаусер Јани" },
    { grade: "VII- мак - брош.", teacher: "Дамаил Муратовски" },
    { grade: "IV - V ком", teacher: "Дилавер Сулејмановски" },
    { grade: "VIII- мак  брош.", teacher: "Вејхан Исоски" },
    { grade: "III-V ком", teacher: "Тирона Цами" },
    { grade: "IX- мак  брош.", teacher: "Ханис Абески" },
    { grade: "VI-македонски", teacher: "Ќани Сеадиноски" },
    { grade: "I-V комб-Горенци", teacher: "Бјехула Веледин" },
    { grade: "VI-турски", teacher: "Ајбакан Асан" },
    { grade: "IX-албански", teacher: "Лејла Шаиновски" },
    { grade: "VI-албански", teacher: "Илза Карамети" },
    { grade: "IX-турски", teacher: "Нагие Емро" },
    { grade: "VII-македонски", teacher: "Мефаил Исоски" },
    { grade: "VIII-албански", teacher: "Арта Папранику" },
    { grade: "VII-турски", teacher: "Мерилда Шаќир" },
    { grade: "VIII-турски", teacher: "Зихни Сејди" },
    { grade: "VII-албански", teacher: "Севинч Шеху" },
    { grade: "VIII-македонски", teacher: "Нахида Беќировски" },
    { grade: "IX-мак", teacher: "Мунтас Муслиовски" },
  ];

  return (
    <div className="raspored-page bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>
        
        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Класно раководство")}
          </h1>
        </div>
      </section>

      {/* Работа во смени Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary-dark">{t("Работа во смени")}</h2>
          <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-800 font-semibold space-y-4 bg-white shadow-lg p-6 rounded-lg border border-gray-300">
            <p>{t("- Во централното основно училиште се работи во една смена, а часовите започнуват во 8:00ч, а завршуваат во 13:25 ч.")}</p>
            <p>{t("- Во подрачното училиште во С.Броштица наставата се одвива во 2 смени, а часовите започнуваат во 8 ч и завршуваат во 17 ч.")}</p>
            <p>{t("- Во с. Горенци се работи во една смена, а часовите започнуват во 8:00ч ,а завршуваат во 12 ч.")}</p>
          </div>
        </div>
      </section>
      
      {/* Class List Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-primary-dark mb-8">{t("Класно раководство")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-dark">{t(item.grade)}</h2>
              <p className="text-xl text-gray-900 mt-2">{t(item.teacher)}</p>
            </div>
          ))}
        </div>
      </section>

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default KlasnoRakovodstvo;
