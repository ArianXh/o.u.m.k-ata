import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

import { 
  getTimelineEvents, 
  getAdministrativeStaff, 
  getSchoolBoard,
  getTechnicalStaff,
  getEducationalStaff
} from '../helpers/StaffData';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("administrative");
  const { t } = useTranslation();

  const timelineEvents = getTimelineEvents(t);
  const administrativeStaff = getAdministrativeStaff(t);
  const schoolBoard = getSchoolBoard(t);
  const technicalStaff = getTechnicalStaff(t);
  const educationalStaff = getEducationalStaff(t);

  return (
    <div className="about-page bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">{t("За О.У Мустафа Кемал Ататурк")}</h1>
          <p className="mt-4 text-lg">{t("Знаеме и можеме да работиме за доброто на сите")}</p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800">{t("Мисија")}</h2>
          <p className="mt-6 text-gray-600">
            {t(
              "ООУ„Мустафа Кемал Ататурк“ е ваш дом, катче на соживот, меѓуетничка толеранција и заемна почит, во овој простор, каде што се спојуваат воспитанието, образованието и хуманите вредности, со нашиот висококвалитетен кадар сигурно чекориме кон иднината."
            )}
          </p>

          <h2 className="mt-8 text-4xl font-bold text-gray-800">{t("Визија")}</h2>
          <p className="mt-6 text-gray-600">
            {t(
              "Нашата визија е да бидеме водечко училиште кое обезбедува иновативно, инклузивно и инспиративно образование. Преку негување на љубопитноста, креативноста и критичкото размислување, ги подготвуваме учениците да станат самоуверени, одговорни и успешни граѓани на глобалната заедница."
            )}
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">{t("Нашиот Тим")}</h2>

          {/* Tabs Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            {[
              { key: "administrative", label: t("Административен Кадар") },
              { key: "educational", label: t("Наставен Кадар") },
              { key: "schoolBoard", label: t("Училишен Одбор") },
              { key: "technical", label: t("Технички Кадар") },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="mt-10">
            {activeTab === "administrative" && <TeamSection teamData={administrativeStaff} />}
            {activeTab === "educational" && <TeamSection teamData={educationalStaff} />}
            {activeTab === "schoolBoard" && <TeamSection teamData={schoolBoard} />}
            {activeTab === "technical" && <TeamSection teamData={technicalStaff} />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


// Reusable Component for Team Sections
const TeamSection = ({ teamData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamData.map((member, index) => (
      <div
        key={index}
        className="bg-gray-300 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
      >
        {/* Uncomment if images are available */}
        {/* <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover" /> */}
        <h3 className="text-2xl font-semibold text-gray-900 mt-4">{member.name}</h3>
        <p className="text-blue-700 font-medium">{member.position}</p>
        
      </div>
    ))}
  </div>
);


export default AboutPage;
