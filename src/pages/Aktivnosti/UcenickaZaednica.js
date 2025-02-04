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
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-32 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Ученичка заедница")}
          </h1>
        </div>
      </section>

      
      {/* Content Section */}
      <section className="py-16 px-6 container mx-auto max-w-4xl">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">{t("Основна цел")}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("Основна цел на Ученичката заедница е вклучување на учениците во решавањето на проблеми и донесување на одлуки во сите сегменти од воспитно-образовната работа.")}
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8 mb-4">{t("Демократски принципи")}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("Втора цел е оспособување на учениците да ги запознаат и практикуваат начелата на демократијата-да избираат, да бидат избирани, да донесуваат одлуки, да ги спроведуваат и да бидат одговорни за своите постапки и одлуки.")}
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8 mb-4">{t("Нивоа на функционирање")}</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-700">{t("1. Ученичка заедница на ниво на паралелка")}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-2">
                {t("Формира одделенско раководство и изготвува програма за својата работа, во која се содржани активности за надминување на проблемите во одделението кои се однесуваат на успехот, поведението, изостаноците.")}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-700">{t("2. Ученичка заедница на ниво на училиште")}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-2">
                {t("Третира актуелни прашања поврзани со возраста, интересите и секојдневието на учениците. За таа цел се планираат трибини со стручни лица, со цел да се добијат комплетни и валидни информации за тематиката.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Ученичко организирање и учество</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-3 border">Содржини</th>
                <th className="p-3 border">Активности</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 border">Организациски и административни работи</td>
                <td className="p-3 border">
                  - Избор на претседателство и претседател<br/>
                  - Донесување на програма за работа<br/>
                  - Водење на записници за работа<br/>
                  - Учество во анкети и формирање на заклучоци<br/>
                  - Изработка на извештај за работата на Ученичката заедница
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border">Учество на учениците во воспитно-образовната работа и постигнување на подобри резултати</td>
                <td className="p-3 border">
                  - Следење и дискусии за успехот на учениците на квалификационите периоди<br/>
                  - Соработка со наставниот кадар и стручните соработници<br/>
                  - Трибина за техники за учење<br/>
                  - Дебата на тема <b>„Објективно оценување“</b><br/>
                  - Запознавање со правилници за оценување, куќен ред, кодекси на оценување, пофалби и корективни мерки<br/>
                  - Анкети за осознавање на потребите на учениците<br/>
                  - Учество на натпревари и промовирање на постигнувањата<br/>
                  - Предлагање на ученици и одделенија за пофалби <br />
                  - Информирање на одд. заедници за активностите на 
Ученичката заедница   
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border">Подобрување на условите за работа во училиштето</td>
                <td className="p-3 border">
                  - Учество во проектот <b>„Интеграција на еколошкото образование“</b><br/>
                  - Запознавање со Конвенцијата за правата на децата и нејзината примена<br/>
                  - Обработка на теми предложени од Ученичката заедница
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border">Подигање на ученичкиот стандард</td>
                <td className="p-3 border">
                  - Организирање собирни акции<br/>
                  - Изработка на нагледни средства<br/>
                  - Акција <b>„Стара хартија“</b> - ноември<br/>
                  - Изработка на честитки, подароци и украси за Нова година<br/>
                  - <b>„Цвеќе за жената“</b> - март<br/>
                  - <b>„Денар за другарче“</b> - по потреба<br/>
                  - Билки и лековити растенија - цела година<br/>
                  - Договор за полуматурска свеченост
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border">Општествено корисна работа</td>
                <td className="p-3 border">
                  - Одржување на училиштето и училишниот двор- цела година<br/>
                  - Негување на зеленилото и цвеќето. <br/>
                  - Изработка на нагледни средства<br/>
                  - Изработка на украси за училниците и училиштето 
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border">Културно-забавен живот и рекреативни активности</td>
                <td className="p-3 border">
                  - Одбележување на Детската недела и Денот на учителот<br/>
                  - Одбележување на Денот на училиштето<br/>
                  - Посети на училишта по повод патронати<br/>
                  - Учество во активности и натпревари<br/>
                  - Посети на историски споменици (Гоце Делчев, Мустафа Ќемал Ататурк, Кале)<br/>
                  - Посети на музеи (град Скопје, етнолошки, природнонаучен)<br/>
                  - Организирање забави (Ден на училиштето, Нова година, Бајрам)<br/>
                  - Посета на Саемот на книгата
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      

      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default UcenickaZaednica;