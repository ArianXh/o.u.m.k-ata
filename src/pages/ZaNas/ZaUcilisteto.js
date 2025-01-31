import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTimelineEvents } from '../../helpers/StaffData';

const ZaUcilisteto = () => {
  const { t } = useTranslation();
  const timelineEvents = getTimelineEvents(t);

  return (
    <div className="about-page bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold tracking-wide">{t("За О.У Мустафа Кемал Ататурк")}</h1>
          <p className="mt-4 text-lg opacity-90">{t("Знаеме и можеме да работиме за доброто на сите")}</p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mission Section */}
            <div className="md:w-1/2 p-8 bg-white shadow-lg rounded-xl">
              <h2 className="text-4xl font-bold text-blue-700 border-b-2 border-blue-500 pb-2">{t("Мисија")}</h2>
              <p className="mt-6 text-gray-700 text-xl leading-relaxed">
                {t("ООУ„Мустафа Кемал Ататурк“ е ваш дом, катче на соживот, меѓуетничка толеранција и заемна почит, во овој простор, каде што се спојуваат воспитанието, образованието и хуманите вредности, со нашиот висококвалитетен кадар сигурно чекориме кон иднината.")}
              </p>
            </div>

            {/* Vision Section */}
            <div className="md:w-1/2 p-8 bg-white shadow-lg rounded-xl">
              <h2 className="text-4xl font-bold text-blue-700 border-b-2 border-blue-500 pb-2">{t("Визија")}</h2>
              <p className="mt-6 text-gray-700 text-xl leading-relaxed">
                {t("Нашата визија е да бидеме водечко училиште кое обезбедува иновативно, инклузивно и инспиративно образование. Преку негување на љубопитноста, креативноста и критичкото размислување, ги подготвуваме учениците да станат самоуверени, одговорни и успешни граѓани на глобалната заедница.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 border-b-2 border-blue-500 pb-2">{t("Историјат")}</h2>
          <div className="mt-10 space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-blue-600 font-bold text-3xl md:w-1/5 text-center">{event.year}</div>
                <p className="text-gray-800 text-xl md:w-4/5 leading-relaxed">{event.event}</p>
              </div>
            ))}
          </div>
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

export default ZaUcilisteto;
