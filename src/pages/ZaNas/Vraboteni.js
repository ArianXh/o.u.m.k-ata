import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';
import { useTranslation } from 'react-i18next';

import {  
  getAdministrativeStaff, 
  getTechnicalStaff,
  getEducationalStaff
} from '../../helpers/StaffData';

const Vraboteni = () => {
  const [activeTab, setActiveTab] = useState("administrative");
  const { t } = useTranslation();
  const administrativeStaff = getAdministrativeStaff(t);
  const technicalStaff = getTechnicalStaff(t);
  const educationalStaff = getEducationalStaff(t);

  return (
    <div className="about-page bg-neutral-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-32 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Вработени")}
          </h1>
        </div>
      </section>

      {/* Tabs Section */}
      <section id="teamSection" className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          {/* Tabs Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            {[
              { key: "administrative", label: t("Административен Кадар") },
              { key: "educational", label: t("Наставен Кадар") },
              { key: "technical", label: t("Технички Кадар") },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-2 px-6 rounded-lg font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-primary-dark text-white shadow-lg"
                    : "bg-primary-light text-neutral-light hover:bg-neutral-dark"
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
            {activeTab === "technical" && <TeamSection teamData={technicalStaff} />}
          </div>
        </div>
      </section>

      <KontaktirajteNe />
      <Footer />
    </div>
  );
}

// Reusable Component for Team Sections
const TeamSection = ({ teamData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamData.map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
      >
        {/* Uncomment if images are available */}
        <img src={member.image} alt={member.name} className="w-30 h-30 rounded-full mx-auto object-cover" />
        <h3 className="text-2xl font-semibold text-secondary-dark mt-4">{member.name}</h3>
        <p className="text-primary-dark font-medium">{member.position}</p>
      </div>
    ))}
  </div>
);

export default Vraboteni;
