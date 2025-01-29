import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {/* Column 1: Site Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("За Нас")}</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="#" className="hover:underline">{t("Историјат")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("Планови и програми")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("Активности")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("Кабинети и училници")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("Завршни сметки")}</a>
              </li>
            </ul>
          </div>

          

          {/* Column 2: Настава */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("Настава")}</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/about#teamSection" className="hover:underline" rel="noopener noreferrer">{t("Кадар")}</a>
              </li>
              <li>
                <a href="" className="hover:underline" rel="noopener noreferrer">{t("Распоред на часови")}</a>
              </li>
              
              <li>
                <a href="" className="hover:underline" rel="noopener noreferrer">{t("Видови настава")}</a>
              </li>
              <li>
                <a href="" className="hover:underline" rel="noopener noreferrer">{t("Мултикултурализам")}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-of-service" className="hover:underline">Terms of Service</a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">FAQ</a>
              </li>
              <li>
                <a href="#help" className="hover:underline">Help</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("Контакт Информации")}</h3>
            <ul className="space-y-2 text-lg">
              <li>📍 {t("Центар Жупа б,б Центар Жупа")}</li>
              <li>📧 Email: <a href="mailto:info@ouataturk@yahoo.com" className="hover:underline">ouataturk@yahoo.com</a></li>
              <li>📧 Email: <a href="mailto:ou-mustafakemalataturk-centarzhupa@schools.mk" className="hover:underline">ou-mustafakemalataturk-centarzhupa@schools.mk</a></li>
              <li>📞 Telefon: 046 840 117</li>
              <li>📞 Faks: 046 840 117</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12">
          <p className="text-xl">&copy; {new Date().getFullYear()} О.У Мустафа Кемал Ататурк. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
