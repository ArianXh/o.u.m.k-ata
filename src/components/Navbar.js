import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-blue-300">{t('О.У Мустафа Кемал Ататурк')}</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-300">{t('Почетна')}</Link>
          </li>
          <li className="relative group">
            {t('За Нас')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 hidden group-hover:flex flex-col transition duration-300">
              <li>
                <Link to="/za-ucilisteto" className="block px-4 py-2 hover:bg-gray-300">{t('За училиштето')}</Link>
              </li>
              <li>
                <Link to="/za-ucilisteto/vraboteni" className="block px-4 py-2 hover:bg-gray-300">{t('Вработени')}</Link>
              </li>
              <li>
                <Link to="/za-ucilisteto/organi" className="block px-4 py-2 hover:bg-gray-300">{t('Училишни органи')}</Link>
              </li>
            </ul>
          </li>

          {/* "Програми" with Submenu */}
          <li className="relative group">
            {t('Настава')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
              <li>
                <Link to="/nastava/klasno-rakovodstvo" className="block px-4 py-2 hover:bg-gray-300">{t('Класно раководство')}</Link>
              </li>
              <li>
                <Link to="/nastava/dodatna-nastava" className="block px-4 py-2 hover:bg-gray-300">{t('Додатна настава')}</Link>
              </li>
              <li>
                <Link to="/nastava/ekskurzii" className="block px-4 py-2 hover:bg-gray-300">{t('Екскурзии')}</Link>
              </li>
              <li>
                <Link to="/nastava/izborni-predmeti" className="block px-4 py-2 hover:bg-gray-300">{t('Изборни предмети')}</Link>
              </li>
            </ul>
          </li>

          {/* "Документи" with Submenu */}
          <li className="relative group">
            {t('Документи')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
              <li>
                <Link to="/dokumenti/interni-akti" className="block px-4 py-2 hover:bg-gray-300">{t('Интерни акти')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/godisna-programa" className="block px-4 py-2 hover:bg-gray-300">{t('Годишна програма')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/razvoen-plan" className="block px-4 py-2 hover:bg-gray-300">{t('Развоен план')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/samoevaluacija" className="block px-4 py-2 hover:bg-gray-300">{t('Самоевалуација на училиште')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/finansii" className="block px-4 py-2 hover:bg-gray-300">{t('Финансии')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/drugi" className="block px-4 py-2 hover:bg-gray-300">{t('Други документи')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/obuki" className="block px-4 py-2 hover:bg-gray-300">{t('Обуки')}</Link>
              </li>


            </ul>
          </li>

          <li className="relative group">
            {t('Активности')} ▼
              <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
                hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
                <li>
                  <Link to="/aktivnosti/vonnastavni-aktivnosti" className="block px-4 py-2 hover:bg-gray-300">{t('Воннаставни активности')}</Link>
                </li>
                <li>
                  <Link to="/aktivnosti/ucenicka-zaednica" className="block px-4 py-2 hover:bg-gray-300">{t('Ученичка заедница')}</Link>
                </li>
                <li>
                  <Link to="/aktivnosti/vonucilisni-aktivnosti" className="block px-4 py-2 hover:bg-gray-300">{t('Вонучилишни активности')}</Link>
                </li>
              </ul>
          </li>

          <li>
            <Link to="/programi" className="hover:text-blue-300">{t('Програми')}</Link>
          </li>

          <li>
            <Link to="/galerija" className="hover:text-blue-300">{t('Галерија')}</Link>
          </li>
          <li>
            <Link to="/novosti" className="hover:text-blue-300">{t('Новости')}</Link>
          </li>
          <li>
            <Link to="/kontakt" className="hover:text-blue-300">{t('Контакт')}</Link>
          </li>
        </ul>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 space-y-2">
          <Link to="/" className="block hover:text-blue-300">{t('Почетна')}</Link>

          {/* Mobile Submenu for "За Нас" */}
          <div>
            <button onClick={() => toggleSubmenu(0)} className="w-full text-left">
              {t('За Нас')} ▼
            </button>
            {submenuOpen === 0 && (
              <div className="pl-4 space-y-2">
                <Link to="/za-ucilisteto" className="block hover:text-blue-300">{t('За училиштето')}</Link>
                <Link to="/za-ucilisteto/vraboteni" className="block hover:text-blue-300">{t('Вработени')}</Link>
                <Link to="/za-ucilisteto/organi" className="block hover:text-blue-300">{t('Училишни органи')}</Link>
              </div>
            )}
          </div>

          {/* Mobile Submenu for "Настава" */}
          <div>
            <button onClick={() => toggleSubmenu(1)} className="w-full text-left">
              {t('Настава')} ▼
            </button>
            {submenuOpen === 1 && (
              <div className="pl-4 space-y-2">
                <Link to="/nastava/klasno-rakovodstvo" className="block hover:text-blue-300">{t('Класно раководство')}</Link>
                <Link to="/nastava/dodatna-nastava" className="block hover:text-blue-300">{t('Додатна настава')}</Link>
                <Link to="/nastava/ekskurzii" className="block hover:text-blue-300">{t('Екскурзии')}</Link>
                <Link to="/nastava/izborni-predmeti" className="block hover:text-blue-300">{t('Изборни предмети')}</Link>
              </div>
            )}
          </div>

          {/* Mobile Submenu for "Документи" */}
          <div>
            <button onClick={() => toggleSubmenu(2)} className="w-full text-left">
              {t('Документи')} ▼
            </button>
            {submenuOpen === 2 && (
              <div className="pl-4 space-y-2">        
                  <Link to="/dokumenti/interni-akti" className="block hover:text-blue-300">{t('Интерни акти')}</Link>    
                  <Link to="/dokumenti/godisna-programa" className="block hover:text-blue-300">{t('Годишна програма')}</Link>            
                  <Link to="/dokumenti/razvoen-plan" className="block hover:text-blue-300">{t('Развоен план')}</Link>
                  <Link to="/dokumenti/samoevaluacija" className="block hover:text-blue-300">{t('Самоевалуација на училиште')}</Link>
                  <Link to="/dokumenti/finansii" className="block hover:text-blue-300">{t('Финансии')}</Link>        
                  <Link to="/dokumenti/drugi" className="block hover:text-blue-300">{t('Други документи')}</Link> 
                  <Link to="/dokumenti/obuki" className="block hover:text-blue-300">{t('Обуки')}</Link>
              </div>
            )}

            {/* Mobile Submenu for "Активности" */}
            <div>
              <button onClick={() => toggleSubmenu(3)} className="w-full text-left">
                {t('Активности')} ▼
              </button>
              {submenuOpen === 3 && (
                <div className="pl-4 space-y-2">
                  <Link to="/aktivnosti/vonnastavni-aktivnosti" className="block hover:text-blue-300">{t('Воннаставни активности')}</Link>
                  <Link to="/aktivnosti/ucenicka-zaednica" className="block hover:text-blue-300">{t('Ученичка заедница')}</Link>
                  <Link to="/aktivnosti/vonucilisni-aktivnosti" className="block hover:text-blue-300">{t('Вонучилишни активности')}</Link>
                </div>
              )}
          </div>
          </div>
          <Link to="/programi" className="block hover:text-blue-300">{t('Програми')}</Link>
          <Link to="/galerija" className="block hover:text-blue-300">{t('Галерија')}</Link>
          <Link to="/novosti" className="block hover:text-blue-300">{t('Новости')}</Link>
          <Link to="/kontakt" className="block hover:text-blue-300">{t('Контакт')}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
