import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

import { 
  getSovetRoditeli,
  getUcilisenOdbor,
  getInkluzivenTim,
  getUcenickiParlament,
  getPravobranitel,
  getUceniciNastavenSovet
  
} from '../../helpers/BoardData';

const UcilisniOrgani = () => {
  const [activeTab, setActiveTab] = useState("ucilisen-odbor");
  const { t } = useTranslation();

  const ucilisenOdbor = getUcilisenOdbor(t);
  const sovetRoditeli = getSovetRoditeli(t);
  const inkluzivenTim = getInkluzivenTim(t);
  const ucenickiParlament = getUcenickiParlament(t);
  const pravobranitel = getPravobranitel(t);
  const uceniciNastavenSovet = getUceniciNastavenSovet(t);



  return (
    <div className="about-page bg-gray-50">
      <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-36 text-center shadow-2xl">
          
          {/* Background Overlay for Depth */}
          <div className="absolute inset-0 bg-blue-400 opacity-70"></div>

          <div className="container mx-auto px-6 relative">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
              {t("Училишни органи")}
            </h1>
            
          </div>
        </section>


        {/* Tabs Section */}
        <section id="boardSection" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">

            {/* Tabs Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              {[
                { key: "ucilisen-odbor", label: t("Училишен одбор") },
                { key: "sovet-roditeli", label: t("Совет на родители") },
                { key: "inkluziven-tim", label: t("Инклузивен тим") },
                { key: "ucenicki-parlament", label: t("Ученички парламент") },
                { key: "ucenicki-pravobranitel", label: t("Ученички правобранител") },
                { key: "ucenici-nastavnicki-sovet", label: t("Ученици во наставничкиот совет") },
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
              {activeTab === "ucilisen-odbor" && <BoardSection teamData={ucilisenOdbor} />}
              {activeTab === "sovet-roditeli" && <BoardSection teamData={sovetRoditeli} />}
              {activeTab === "inkluziven-tim" && <BoardSection teamData={inkluzivenTim} />}
              {activeTab === "ucenicki-parlament" && <BoardSection teamData={ucenickiParlament} />}
              {activeTab === "ucenicki-pravobranitel" && <BoardSection teamData={pravobranitel} />}
              {activeTab === "ucenici-nastavnicki-sovet" && <BoardSection teamData={uceniciNastavenSovet} />}
            </div>
          </div>
        </section>
        <Footer />
      </div>
  )
}

// Reusable Component for Team Sections
const BoardSection = ({ teamData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamData.map((member, index) => (
      <div
        key={index}
        className="bg-gray-300 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
      >
        {/* Uncomment if images are available */}
        <img src={member.image} alt={member.name} className="w-200 h-200 rounded-full mx-auto object-cover" />
        <h3 className="text-2xl font-semibold text-gray-900 mt-4">{member.name}</h3>
        <p className="text-blue-700 font-medium">{member.role}</p>
        
      </div>
    ))}
  </div>
);

export default UcilisniOrgani;