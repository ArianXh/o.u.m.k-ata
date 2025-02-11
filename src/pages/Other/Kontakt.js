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
      <section className="relative bg-gradient-to-r from-primary-light to-primary text-white py-20 text-center">

        {/* Background Overlay for Depth */}
        <div className="absolute inset-3 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            {t("Контакт")}
          </h1>
        </div>
      </section>

      {/* Contact Section with Form and Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form Section */}
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
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-red-500 transition duration-300"
                >
                  {t('Прати порака')}
                </button>
              </form>
            </div>

            {/* Contact Details Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
              <div className="grid grid-rows-1 md:grid-rows-3 gap-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">{t('Локација')}</h3>
                  <p className="text-lg mt-2 text-gray-900">Центар Жупа б,б Центар Жупа</p>
                  <a target="_new" href="https://www.google.com/maps/place/Elementary+School+%22Mustafa+Kemal+Ataturk%22/@41.1725202,20.3675642,10z/data=!4m10!1m2!2m1!1z0KHQntCjINCQ0KLQkNCi0KPQoNCaINCW0KPQn9CQ!3m6!1s0x1351105aea3862e3:0xe9c8045ec4e4beae!8m2!3d41.4797529!4d20.5589182!15sCh7QodCe0KMg0JDQotCQ0KLQo9Cg0Jog0JbQo9Cf0JCSAQ5wcmltYXJ5X3NjaG9vbOABAA!16s%2Fg%2F11c2k9pmtr?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"><button className="w-40 mt-4 bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-red-500 transition duration-300">{t('Map')} </button> </a>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">{t('Јави се')}</h3>
                  <p className="text-lg mt-2 text-gray-900">{t('Телефон')}: 046 840 117</p>
                  <p className="text-lg mt-1 text-gray-900">{t('Факс')}: 046 840 117</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">{t('Прати емаил')}</h3>
                  <p className="text-lg mt-2 text-gray-900">ouataturk@yahoo.com</p>
                  <p className="text-lg mt-1 text-gray-900">ou-mustafakemalataturk-centarzhupa@schools.mk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Kontakt;
