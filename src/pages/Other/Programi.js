import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import KontaktirajteNe from '../../components/KontaktirajteNe';

import { FaBook } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { getPrograms } from '../../helpers/ProgramsData';

const Programi = () => {
  const { t } = useTranslation();
  const programi = getPrograms(t);


  return (
    <div className="programs-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Програми")}
          </h1>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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


      {
        /* Call-to-Action Section
        
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Interested in Joining?</h2>
          <p className="mt-4 text-lg">
            Contact us today to learn more about our programs and start your journey with us.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
        */
      }
      
      <KontaktirajteNe />
      <Footer />
    </div>
  );
};

export default Programi;
