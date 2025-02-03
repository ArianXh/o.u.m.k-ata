import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSubmenu = (index) => setSubmenuOpen(submenuOpen === index ? null : index);

  return (
    <nav className="bg-white shadow-lg sticky top-0 w-full z-50 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="School Logo" className="h-12 w-12" />
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition">
            {t("О.У Мустафа Кемал Ататурк")}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-black transition">{t("Почетна")}</Link></li>

          {/* Dropdown Menu */}
          {[
            { label: t("За Нас"), links: ["/za-ucilisteto", "/za-ucilisteto/vraboteni", "/za-ucilisteto/organi"] },
            { label: t("Настава"), links: ["/nastava/klasno-rakovodstvo", "/nastava/dodatna-nastava", "/nastava/ekskurzii", "/nastava/izborni-predmeti"] },
            { label: t("Документи"), links: ["/dokumenti/interni-akti", "/dokumenti/godisna-programa", "/dokumenti/razvoen-plan", "/dokumenti/samoevaluacija", "/dokumenti/finansii", "/dokumenti/drugi", "/dokumenti/obuki"] },
            { label: t("Активности"), links: ["/aktivnosti/vonnastavni-aktivnosti", "/aktivnosti/ucenicka-zaednica"] },
          ].map((menu, index) => (
            <li key={index} className="relative group">
              <button className="hover:text-black transition">{menu.label} ▼</button>
              <ul className="absolute left-0 bg-white text-gray-800 shadow-lg rounded-lg py-2 w-52 hidden group-hover:flex flex-col transition duration-300">
                {menu.links.map((link, subIndex) => (
                  <li key={subIndex}>
                    <Link to={link} className="block px-4 py-2 hover:bg-gray-100 transition">
                      {t(link.split("/").pop().replace("-", " "))}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li><Link to="/programi" className="hover:text-black transition">{t("Програми")}</Link></li>
          <li><Link to="/galerija" className="hover:text-black transition">{t("Галерија")}</Link></li>
          <li><Link to="/novosti" className="hover:text-black transition">{t("Новости")}</Link></li>
          <li><Link to="/kontakt" className="hover:text-black transition">{t("Контакт")}</Link></li>
        </ul>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-2">
          {["Почетна", "Програми", "Галерија", "Новости", "Контакт"].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`} className="block py-2 text-gray-700 hover:bg-gray-100">
              {t(item)}
            </Link>
          ))}

          {[
            { label: t("За Нас"), links: ["/za-ucilisteto", "/za-ucilisteto/vraboteni", "/za-ucilisteto/organi"] },
            { label: t("Настава"), links: ["/nastava/klasno-rakovodstvo", "/nastava/dodatna-nastava", "/nastava/ekskurzii", "/nastava/izborni-predmeti"] },
            { label: t("Документи"), links: ["/dokumenti/interni-akti", "/dokumenti/godisna-programa", "/dokumenti/razvoen-plan", "/dokumenti/samoevaluacija", "/dokumenti/finansii", "/dokumenti/drugi", "/dokumenti/obuki"] },
            { label: t("Активности"), links: ["/aktivnosti/vonnastavni-aktivnosti", "/aktivnosti/ucenicka-zaednica"] },
          ].map((menu, index) => (
            <div key={index}>
              <button onClick={() => toggleSubmenu(index)} className="w-full text-left py-2 font-medium text-gray-700">
                {menu.label} ▼
              </button>
              {submenuOpen === index && (
                <div className="pl-4 space-y-2">
                  {menu.links.map((link, subIndex) => (
                    <Link key={subIndex} to={link} className="block py-1 text-gray-700 hover:bg-gray-100">
                      {t(link.split("/").pop().replace("-", " "))}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
