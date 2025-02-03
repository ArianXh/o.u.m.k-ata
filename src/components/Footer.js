import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-red-100 text-neutral-900 py-16">
      <div className="container mx-auto text-center">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {/* Column 1: Site Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("За Нас")}</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/" className="hover:underline hover:text-red-600">{t("Историјат")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">{t("Планови и програми")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">{t("Активности")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">{t("Кабинети и училници")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">{t("Завршни сметки")}</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Настава */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("Настава")}</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/" className="hover:underline hover:text-red-600" rel="noopener noreferrer">{t("Кадар")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600" rel="noopener noreferrer">{t("Распоред на часови")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600" rel="noopener noreferrer">{t("Видови настава")}</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600" rel="noopener noreferrer">{t("Мултикултурализам")}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("Брзи Линкови")}</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/" className="hover:underline hover:text-red-600">Privacy Policy</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">Terms of Service</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">FAQ</a>
              </li>
              <li>
                <a href="/" className="hover:underline hover:text-red-600">Help</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("Контакт Информации")}</h3>
            <ul className="space-y-2 text-lg">
              <li>📍 {t("Центар Жупа б,б Центар Жупа")}</li>
              <li>📧 Email: <a href="mailto:info@ouataturk@yahoo.com" className="hover:underline hover:text-red-600">ouataturk@yahoo.com</a></li>
              <li>📧 Email: <a href="mailto:ou-mustafakemalataturk-centarzhupa@schools.mk" className="hover:underline hover:text-red-600">ou-mustafakemalataturk-centarzhupa@schools.mk</a></li>
              <li>📞 Telefon: 046 840 117</li>
              <li>📞 Faks: 046 840 117</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 border-t border-neutral-300 pt-6">
          <p className="text-base text-neutral-700">
            &copy; {new Date().getFullYear()} О.У Мустафа Кемал Ататурк. {t("Сите Права Задржани")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
