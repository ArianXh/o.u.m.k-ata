import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const KontaktirajteNe = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Contact Us Section */}
      <section className="relative bg-gradient-to-r from-red-100 to-red-200 text-neutral-800 py-24 text-center rounded-lg shadow-md overflow-hidden">
        {/* Background Overlay for Depth */}
        <div className="absolute inset-0 bg-red-800 opacity-10"></div>

        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 drop-shadow-sm">
            {t("Ако имате било какви прашања, слободно контактирајте нè")}
          </h2>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            {t("Нашиот тим е секогаш тука за вас!")}
          </p>
          <Link to="/kontakt">
            <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-red-500 focus:ring-2 focus:ring-red-300 focus:outline-none transition-all">
              {t("Контактирајте нè")}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default KontaktirajteNe;
