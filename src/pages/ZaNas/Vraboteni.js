import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
    <div className="about-page bg-gray-50">
      <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center shadow-md">
          <div className="container mx-auto px-6">
            <h1 className="text-6xl font-extrabold tracking-wide">{t("Вработени")}</h1>
          </div>
        </section>


        {/* Tabs Section */}
        <section id="teamSection" className="py-12 bg-gray-100">
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
              {activeTab === "technical" && <TeamSection teamData={technicalStaff} />}
            </div>
          </div>
        </section>
        <Footer />
      </div>
  )
}

// Reusable Component for Team Sections
const TeamSection = ({ teamData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamData.map((member, index) => (
      <div
        key={index}
        className="bg-gray-300 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
      >
        {/* Uncomment if images are available */}
        <img src={member.image} alt={member.name} className="w-200 h-200 rounded-full mx-auto object-cover" />
        <h3 className="text-2xl font-semibold text-gray-900 mt-4">{member.name}</h3>
        <p className="text-blue-700 font-medium">{member.position}</p>
        
      </div>
    ))}
  </div>
);

export default Vraboteni