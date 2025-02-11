import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';
import { useTranslation } from 'react-i18next';

const UcenickaZaednica = () => {
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
            {t("Ученичка заедница")}
          </h1>
        </div>
      </section>

      
      {/* Content Section */}
      <div className="container mx-auto py-12 px-6">
      <section className="mb-12">
        <div>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Основна цел")}</h2>
          <p className="text-grey-900 text-lg leading-relaxed">
            {t("Основна цел на Ученичката заедница е вклучување на учениците во решавањето на проблеми и донесување на одлуки во сите сегменти од воспитно-образовната работа.")}
          </p>

          <h2 className="text-4xl font-bold text-primary-dark mt-8 mb-4">{t("Демократски принципи")}</h2>
          <p className="text-gray-900 text-lg leading-relaxed">
            {t("Втора цел е оспособување на учениците да ги запознаат и практикуваат начелата на демократијата-да избираат, да бидат избирани, да донесуваат одлуки, да ги спроведуваат и да бидат одговорни за своите постапки и одлуки.")}
          </p>

          <h2 className="text-4xl font-bold text-primary-dark mt-8 mb-4">{t("Нивоа на функционирање")}</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary">{t("1. Ученичка заедница на ниво на паралелка")}</h3>
              <p className="text-gray-900 text-lg leading-relaxed mt-2">
                {t("Формира одделенско раководство и изготвува програма за својата работа, во која се содржани активности за надминување на проблемите во одделението кои се однесуваат на успехот, поведението, изостаноците.")}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-primary">{t("2. Ученичка заедница на ниво на училиште")}</h3>
              <p className="text-gray-900 text-lg leading-relaxed mt-2">
                {t("Третира актуелни прашања поврзани со возраста, интересите и секојдневието на учениците. За таа цел се планираат трибини со стручни лица, со цел да се добијат комплетни и валидни информации за тематиката.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">{t("Ученичко организирање и учество")}</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 border">{t("Содржини")}</th>
                <th className="p-3 border">{t("Активности")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 border text-lg">{t("Организациски и административни работи")}</td>
                <td className="p-3 border text-lg">
                  - {t("Избор на претседателство и претседател")}<br/>
                  - {t("Донесување на програма за работа")}<br/>
                  - {t("Водење на записници за работа")}<br/>
                  - {t("Учество во анкети и формирање на заклучоци")}<br/>
                  - {t("Изработка на извештај за работата на Ученичката заедница")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border text-lg">{t("Учество на учениците во воспитно-образовната работа и постигнување на подобри резултати")}</td>
                <td className="p-3 border text-lg">
                  - {t("Следење и дискусии за успехот на учениците на квалификационите периоди")}<br/>
                  - {t("Соработка со наставниот кадар и стручните соработници")}<br/>
                  - {t("Трибина за техники за учење")}<br/>
                  - {t("Дебата на тема „Објективно оценување“")}<br/>
                  - {t("Запознавање со правилници за оценување, куќен ред, кодекси на оценување, пофалби и корективни мерки")}<br/>
                  - {t("Анкети за осознавање на потребите на учениците")}<br/>
                  - {t("Учество на натпревари и промовирање на постигнувањата")}<br/>
                  - {t("Предлагање на ученици и одделенија за пофалби")} <br />
                  - {t("Информирање на одделенски заедници за активностите на Ученичката заедница")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border text-lg">{t("Подобрување на условите за работа во училиштето")}</td>
                <td className="p-3 border text-lg">
                  - {t("Учество во проектот „Интеграција на еколошкото образование“")}<br/>
                  - {t("Запознавање со Конвенцијата за правата на децата и нејзината примена")}<br/>
                  - {t("Обработка на теми предложени од Ученичката заедница")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border text-lg">{t("Подигање на ученичкиот стандард")}</td>
                <td className="p-3 border text-lg">
                  - {t("Организирање собирни акции")}<br/>
                  - {t("Изработка на нагледни средства")}<br/>
                  - {t("Акција „Стара хартија“ - ноември")}<br/>
                  - {t("Изработка на честитки, подароци и украси за Нова година")}<br/>
                  - {t("„Цвеќе за жената“ - март")}<br/>
                  - {t("„Денар за другарче“ - по потреба")}<br/>
                  - {t("Билки и лековити растенија - цела година")}<br/>
                  - {t("Договор за полуматурска свеченост")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border text-lg">{t("Општествено корисна работа")}</td>
                <td className="p-3 border text-lg">
                  - {t("Одржување на училиштето и училишниот двор- цела година")}<br/>
                  - {t("Негување на зеленилото и цвеќето.")} <br/>
                  - {t("Изработка на нагледни средства")}<br/>
                  - {t("Изработка на украси за училниците и училиштето ")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border text-lg">{t("Културно-забавен живот и рекреативни активности")}</td>
                <td className="p-3 border text-lg">
                  - {t("Одбележување на Детската недела и Денот на учителот")}<br/>
                  - {t("Одбележување на Денот на училиштето")}<br/>
                  - {t("Посети на училишта по повод патронати")}<br/>
                  - {t("Учество во активности и натпревари")}<br/>
                  - {t("Посети на историски споменици (Гоце Делчев, Мустафа Ќемал Ататурк, Кале)")}<br/>
                  - {t("Посети на музеи (град Скопје, етнолошки, природнонаучен)")}<br/>
                  - {t("Организирање забави (Ден на училиштето, Нова година, Бајрам)")}<br/>
                  - {t("Посета на Саемот на книгата")}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        </div>

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default UcenickaZaednica;