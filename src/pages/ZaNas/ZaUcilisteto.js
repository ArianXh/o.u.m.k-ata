import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';

import { useTranslation } from 'react-i18next';
import { getSchoolInfo } from '../../helpers/StaffData';

const ZaUcilisteto = () => {
  const { t } = useTranslation();
  const schoolInfo = getSchoolInfo(t);

  return (
    <div className="about-page bg-neutral-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("За училиштето")}
          </h1>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16 bg-neutral-light text-center px-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mission Section */}
            <div className="md:w-1/2 p-8 bg-white shadow-md rounded-xl">
              <h2 className="text-3xl font-bold text-primary-dark border-b-2 border-primary pb-2">
                {t("Мисија")}
              </h2>
              <p className="mt-6 text-secondary-dark text-lg leading-relaxed">
                {t("ООУ„Мустафа Кемал Ататурк“ е ваш дом, катче на соживот, меѓуетничка толеранција и заемна почит, во овој простор, каде што се спојуваат воспитанието, образованието и хуманите вредности, со нашиот висококвалитетен кадар сигурно чекориме кон иднината.")}
              </p>
            </div>

            {/* Vision Section */}
            <div className="md:w-1/2 p-8 bg-white shadow-md rounded-xl">
              <h2 className="text-3xl font-bold text-primary-dark border-b-2 border-primary pb-2">
                {t("Визија")}
              </h2>
              <p className="mt-6 text-secondary-dark text-lg leading-relaxed">
                {t("Нашата визија е да бидеме водечко училиште кое обезбедува иновативно, инклузивно и инспиративно образование. Преку негување на љубопитноста, креативноста и критичкото размислување, ги подготвуваме учениците да станат самоуверени, одговорни и успешни граѓани на глобалната заедница.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary-dark border-b-2 border-primary pb-2">
            {t("Информации за училиштето")}
          </h2>
          <div className="mt-10 space-y-8">
            {schoolInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-neutral-light p-6 rounded-lg shadow-md"
              >
                <div className="text-primary text-lg md:w-1/2 text-center">
                  {info.typeOfData}
                </div>
                <p className="text-secondary-dark text-lg md:w-1/2 leading-relaxed text-center">
                  {info.data}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default ZaUcilisteto;
