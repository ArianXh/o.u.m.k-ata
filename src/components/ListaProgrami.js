import React from 'react';

import { getPrograms } from '../helpers/ProgramsData';
import { useTranslation } from 'react-i18next';
import { FaBook } from "react-icons/fa6";

const ProgramsList = () => {
  const { t } = useTranslation();
  const programi = getPrograms(t);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary-dark">{t("Наши Програми")}</h2>
          <p className="mt-4 text-gray-900 text-lg">
          {t("О.У 'Мустафа Кемал Ататурк' нуди различни програми кои одговараат на интересите и аспирациите на секој ученик.")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programi.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:bg-primary-light transition-shadow duration-300 text-center"
            >
              <FaBook size={50} color='#B91C1C' />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                <p className="text-sm text-gray-500">{program.duration}</p>
                <p className="mt-4 text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;
