import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {

  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">{t("Основно Училиште 'Мустафа Кемал Ататурк'")}</h2>
          <p className="mt-4 text-gray-600">
          {t("Нашето училиште е средина која го поддржува и поттикнува индивидуалниот развој на учениците, ги почитува родовите, етничките и другите различности, го поддржува професионалниот развој на наставниците и ќе креира задоволство на сите вклучени во воспитно образовниот процес.")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Our History</h3>
            <p className="mt-4 text-gray-600">
              Founded in 1985, ATA School has been shaping young minds for nearly four decades.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To provide students with the tools and confidence to achieve their dreams and excel
              in life.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, respect, and innovation are the cornerstones of everything we do at ATA
              School.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
