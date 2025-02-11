import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';

import { useTranslation } from 'react-i18next';

const VonnastavniAktivnosti = () => {
  const { t } = useTranslation();


  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Воннаставни активности")}
          </h1>
        </div>
      </section>





      <div className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Училиштни спортски клубови")}</h2>
          <p className="text-primary text-lg">
            {t("Училишниот спортски клуб е во тек на формирање. Подетални информации ќе следат по официјалното формирање.")}
          </p>
          <p className="text-gray-600 text-md">
          {t("* Се наведува кога е основан училиштен спортски клуб, име и презиме на одговорните наставници, се потенцираат општите но и конкретните цели, видовите спорт, се наведува конкретизираниот план на активностите, времето на реализација, опфатеноста на ученици, предвидените настапи, турнири итн., се образложува процедурата како и кога ќе им биде понудена оваа воннаставна активност на учениците, начинот на финансирање, тимот за следење на реализацијата и начинот на евалуација.")} 
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Секции / Клубови")}</h2>
          <ul className="list-disc list-inside text-gray-900 text-lg">
            <li>{t("Фолклорно играорна група - наставник Рамазан Асан")}</li>
            <li>{t("Ликовна секција - наставник Зејнеп Ракиповска")}</li>
            <li>{t("Литературна секција - наставник Нагије Емро")}</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Акции")}</h2>
          <p className="text-gray-600 text-md">
          {t("* Се изработува план за организирање на базари, хепенинзи, хуманитарни настани, еколошки акции и сл., со јасно дефинирани содржини, време на реализација, име и презиме на лицата задолжени за реализацијата на акциите, од кои паралелки ќе бидат активно вклучени учениците, потребни средства и материјали и извори од кои ќе се добијат, тим за следење на акциите (во кој треба да има и претставници од советот на родители)")}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Членови на ученичкиот парламент")}</h2>
          <p className="mt-4 font-bold text-xl text-primary">{t("Претседател: ")}</p><p className="text-lg text-grey-900">{t("Сефит Максудовски")}</p>
          <p className="mt-2 font-bold text-xl text-primary">{t("Ученички правобранител:")} </p> <p className="text-lg text-grey-900">{t("Един Незировски")}</p>
          <br></br>
          <ul className="w-full list-disc pl-5">
            <li className="font-bold text-xl text-primary">{t("Членови: ")}</li>
            {["Есра Бастри", "Беглија Вејселовска", "Сефит Максудовски", "Един Незировски", "Хамзе Кадриовска", "Адиса Исламовска", "Ајше Ризвановска", "Ќамиле Џаферовска", "Алма Муаремовска"].map((name, index) => (
              <li key={index} className="text-lg">{t(name)}</li>
            ))}
          </ul>

          
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Претставници од редот на ученици во наставничкиот совет")}</h2>
          <ul className="list-disc list-inside text-gray-900 text-lg">
            <li className="p-2 text-lg text-grey-900">{t("Хамзе Кадриовска")}</li>
            <li className="p-2 text-lg text-grey-900">{t("Ќамиле Џаферовска")}</li>
          </ul>
        </section>
      </div>
      

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default VonnastavniAktivnosti;