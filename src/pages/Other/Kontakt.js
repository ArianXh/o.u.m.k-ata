import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

const Kontakt = () => {

  const { t } = useTranslation();

  return (
    <div className="contact-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-200 to-red-300 text-white py-32 text-center">

      {/* Background Overlay for Depth */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 relative">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
        {t("Контакт")}
        </h1>
      </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">{t('Прати некоја порака')}</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('Име и презиме')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('Ваше име и презиме')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('Емаил')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('Ваш емаил')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('Порака')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t('Ваша порака')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300"
              >
                {t('Прати порака')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">{t('Локација')}</h3>
              <p className="text-lg mt-2 text-gray-700">Центар Жупа б,б Центар Жупа</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">{t('Јави се')}</h3>
              <p className="text-lg mt-2 text-gray-700">{t('Телефон')}: 046 840 117</p>
              <p className="text-lg mt-1 text-gray-700">{t('Факс')}: 046 840 117</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">{t('Прати емаил')}</h3>
              <p className="text-lg mt-2 text-gray-700">ouataturk@yahoo.com</p>
              <p className="text-lg mt-1 text-gray-700">ou-mustafakemalataturk-centarzhupa@schools.mk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="School Location Map"
              className="w-full h-full rounded-lg shadow-lg border-0"
              loading="lazy" 
              allowfullscreen 
              src="https://www.google.com/maps/embed/v1/place?key=&q=High%20School%20%22ATA%22&zoom=15&maptype=roadmap">
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Kontakt;
