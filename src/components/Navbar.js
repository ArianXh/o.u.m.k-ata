import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-10 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-blue-300">{t('О.У Мустафа Кемал Ататурк')}</Link>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-300">{t('Почетна')}</Link>
          </li>

          {/* "За Нас" with Submenu */}
          <li className="relative group">
            {t('За Нас')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
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
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
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

          {/* "Програми" with Submenu */}
          <li className="relative group">
            {t('Документи')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
              <li>
                <Link to="/dokumenti/oglasi" className="block px-4 py-2 hover:bg-gray-300">{t('Огласи')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/interni-akti" className="block px-4 py-2 hover:bg-gray-300">{t('Интерни акти')}</Link>
              </li>
              <li>
                <Link to="/dokumenti/upis-prvacinja" className="block px-4 py-2 hover:bg-gray-300">{t('Упис првачиња')}</Link>
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

        <LanguageSwitcher />

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => console.log('Toggle menu')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
