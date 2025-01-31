import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DodatnaNastava = () => {
  const { t } = useTranslation();
  const phases = [
    {
      phase: "Фаза I",
      activities: [
        "Едукација на наставниот кадар за препознавање и работа со надарените ученици",
        "Формирање на Училишен тим за работа со надарени ученици",
        "Запознавање со бројот и видот на надарените ученици",
        "Работилница со наставниот кадар за препознавање и работа со надарените ученици",
        "Формирање на Училишен тим за работа со надарени ученици",
        "Евидентирање на надарените ученици.",
        "Разговори со одд. раковод. и родители",
      ],
      goal: "Формирање на тим за работа со надарени ученици и запознавање со потребите на учениците",
      responsible: "Тим, Стручна служба, Наставници",
      period: "IX",
    },
    {
      phase: "Фаза II",
      activities: [
        "Индивидуализирање на наставата, прилагодување на методите на предавање-оценување кон надареноста на ученикот",
        "СКР на стручниот работник со предметните наставници за секој ученик поединечно",
        "Примена на современи наставни форми, избор на задачи, давање на проект на или есејска работа",
        "Реализација на додатна настава и воннаставни активности",
      ],
      goal: "Подобрување на наставата и следење на напредокот на учениците",
      responsible: "Тим, Стручна служба, Наставници",
      period: "X",
    },
    {
      phase: "Фаза III",
      activities: [
        "Планирање, организација на поучувањето",
        "Проширени извори на податоци",
        "Прилагодување на содржините кон потребите на учениците",
      ],
      goal: "Утврдување на индивидуалните постигања на надарените ученици",
      responsible: "Тим, Стручна служба, Наставници",
      period: "XI",
    },
    {
      phase: "Фаза IV",
      activities: [
        "Реална проценка на постигнувањата",
        "Измени, дополнувања на индивидуалниот план за работа со ученикот",
        "Определување на форми/методи за работа со ученикот",
      ],
      goal: "Подобрување на постигањата на надарените ученици",
      responsible: "Тим, Стручна служба, Наставници",
      period: "XII",
    },
  ];

  return (
    <div className="raspored-page bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold tracking-wide">{t("Додатна настава")}</h1>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Етапа</th>
              <th className="border border-gray-300 px-4 py-2">Активности</th>
              <th className="border border-gray-300 px-4 py-2">Цел</th>
              <th className="border border-gray-300 px-4 py-2">Одговорни лица</th>
              <th className="border border-gray-300 px-4 py-2">Период</th>
            </tr>
          </thead>
          <tbody>
            {phases.map((phase, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-bold">{phase.phase}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc pl-4">
                    {phase.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">{phase.goal}</td>
                <td className="border border-gray-300 px-4 py-2">{phase.responsible}</td>
                <td className="border border-gray-300 px-4 py-2">{phase.period}</td>
              </tr>
            ))}
          </tbody>
          </table>
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

export default DodatnaNastava;
