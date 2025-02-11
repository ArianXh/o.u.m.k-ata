import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';
import { useTranslation } from 'react-i18next';

const Obuki = () => {
    const { t } = useTranslation();
    const obuki = [
        {
            title: t('Obuka 1')
        },
        {
            title: t('Obuka 2')
        },
        {
            title: t('Obuka 3')
        },
        {
            title: t('Obuka 4')
        },
      ];

    return (
        <div className="obuki-page bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

            {/* Background Overlay for Depth */}
              <div className="absolute inset-3 bg-black opacity-30"></div>

              <div className="container mx-auto px-6 relative">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
                  {t("Обуки")}
                </h1>
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
            <KontaktirajteNe />
            <Footer />
        </div>
      );
}

export default Obuki