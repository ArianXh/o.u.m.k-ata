import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

const VonnastavniAktivnosti = () => {
  const { t } = useTranslation();


  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold tracking-wide">{t("Воннаставни Активности")}</h1>
        </div>
      </section>

      <div className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Училиштни спортски клубови</h2>
          <p className="text-gray-900 text-2xl">
            Училишниот спортски клуб е во тек на формирање. Подетални информации ќе следат по
            официјалното формирање.
          </p>
          <p className="text-gray-500 text-lg">
          (Се наведува кога е основан училиштен спортски клуб, име и презиме на одговорните наставници, се 
потенцираат општите но и конкретните цели, видовите спорт, се наведува конкретизираниот план на 
активностите, времето на реализација, опфатеноста на ученици, предвидените настапи, турнири итн., 
се образложува процедурата како и кога ќе им биде понудена оваа воннаставна активност на 
учениците, начинот на финансирање, тимот за следење на реализацијата и начинот на евалуација). 
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Секции / Клубови</h2>
          <ul className="list-disc list-inside text-gray-900 text-2xl">
            <li>Фолклорно играорна група - наставник Рамазан Асан</li>
            <li>Ликовна секција - наставник Зејнеп Ракиповска</li>
            <li>Литературна секција - наставник Нагије Емро</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Акции</h2>
          <p className="text-gray-500 text-lg">
          (Се изработува план за организирање на базари, хепенинзи, хуманитарни настани, еколошки акции 
и сл., со јасно дефинирани содржини, време на реализација, име и презиме на лицата задолжени за 
реализацијата на акциите, од кои паралелки ќе бидат активно вклучени учениците, потребни 
средства и материјали и извори од кои ќе се добијат, тим за следење на акциите (во кој треба да има 
и претставници од советот на родители).  
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Ученичко организирање и учество</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-2 border">Членови на ученичкиот парламент</th>
              </tr>
            </thead>
            <tbody>
              {["Есра Бастри", "Беглија Вејселовска", "Сефит Максудовски", "Един Незировски", "Хамзе Кадриовска", "Адиса Исламовска", "Ајше Ризвановска", "Ќамиле Џаферовска", "Алма Муаремовска"].map((name, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 border text-lg">{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 font-bold text-lg">Претседател: Сефит Максудовски</p>
          <p className="mt-2 font-bold text-lg">Ученички правобранител: Един Незировски</p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Претставници од редот на ученици во наставничкиот совет</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Хамзе Кадриовска</li>
            <li>Ќамиле Џаферовска</li>
          </ul>
        </section>
      </div>
      

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

export default VonnastavniAktivnosti;