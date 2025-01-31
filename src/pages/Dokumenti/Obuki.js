import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

const Obuki = () => {
    const { t } = useTranslation();
    const obuki = [
        {
            title: 'Obuka 1'
        },
        {
            title: 'Obuka 2'
        },
        {
            title: 'Obuka 3'
        },
        {
            title: 'Obuka 4'
        },
      ];

    return (
        <div className="obuki-page bg-gray-50">
            <Navbar />
            <section className="bg-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold">{t("Планови и програми")}</h1>
                </div>
            </section>

            {/* Obuki Grid Section */}
            <section className="py-12 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {obuki.map((program, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:bg-blue-800 transition-shadow duration-300 text-center"
                    >
                      
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
            <Footer />
        </div>
      );
}

export default Obuki