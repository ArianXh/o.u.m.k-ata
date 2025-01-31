import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold tracking-wide">{t("Распоред на часови")}</h1>
        </div>
      </section>
      
      {/* Class List Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-700">{t(item.grade)}</h2>
              <p className="text-xl text-gray-900 mt-2">{t(item.teacher)}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KlasnoRakovodstvo;
