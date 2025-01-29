import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-blue-300">{t('О.У Мустафа Кемал Ататурк')}</Link>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-300">{t('Почетна')}</Link>
          </li>

          {/* "За Нас" with Submenu */}
          <li>
            <Link to="/about" className="hover:text-blue-300">{t('За Нас')}</Link>
          </li>

          {/* "Програми" with Submenu */}
          <li className="relative group">
            {t('Настава')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
              <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Распоред на часови')}</Link>
              </li>
              <li>
                <Link to="/teaching/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Дополнителна настава')}</Link>
              </li>
              <li>
                <Link to="/programs/secondary" className="block px-4 py-2 hover:bg-gray-200">{t('Додатна настава')}</Link>
              </li>
              <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Приемни денови')}</Link>
              </li>
              <li>
                <Link to="/teaching/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Распоред на ѕвонење')}</Link>
              </li>
              <li>
                <Link to="/programs/secondary" className="block px-4 py-2 hover:bg-gray-200">{t('Додатна настава')}</Link>
              </li>
              <li>
                <Link to="/programs/secondary" className="block px-4 py-2 hover:bg-gray-200">{t('Екскурзии')}</Link>
              </li>
              <li>
                <Link to="/programs/secondary" className="block px-4 py-2 hover:bg-gray-200">{t('Изборни предмети')}</Link>
              </li>
            </ul>
          </li>

          {/* "Програми" with Submenu */}
          <li className="relative group">
            {t('Документи')} ▼
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
              <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Огласи')}</Link>
              </li>
              <li>
                <Link to="/teaching/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Интерни акти')}</Link>
              </li>
              <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Упис првачиња')}</Link>
              </li>
              <li>
                <Link to="/teaching/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Годишна програма')}</Link>
              </li>
              <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Развоен план')}</Link>
              </li>
              <li>
                <Link to="/teaching/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Самоевалуација на училиште')}</Link>
              </li>
              <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Финансии')}</Link>
              </li>
              <li>
                <Link to="/teaching/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Други документи')}</Link>
                <li>
                <Link to="/teaching/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Обуки')}</Link>
              </li>

              </li>
            </ul>
          </li>

          {/* "Програми" with Submenu */}
          <li className="relative group">
            <Link to="/programs" className="hover:text-blue-300">{t('Програми')} ▼</Link>
            <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
              hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
              <li>
                <Link to="/programs/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Градинка')}</Link>
              </li>
              <li>
                <Link to="/programs/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Основно')}</Link>
              </li>
              <li>
                <Link to="/programs/secondary" className="block px-4 py-2 hover:bg-gray-200">{t('Средно')}</Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <Link to="/activities" className="hover:text-blue-300">{t('Активности')} ▼</Link>
              <ul className="absolute left-0 bg-white text-black shadow-lg rounded-lg py-2 w-48 
                hidden group-hover:flex flex-col group-hover:pointer-events-auto pointer-events-none transition duration-300">
                <li>
                  <Link to="/activities/kindergarten" className="block px-4 py-2 hover:bg-gray-200">{t('Воннаставни активности')}</Link>
                </li>
                <li>
                  <Link to="/activities/primary" className="block px-4 py-2 hover:bg-gray-200">{t('Ученичка заедница')}</Link>
                </li>
                <li>
                  <Link to="/activities/secondary" className="block px-4 py-2 hover:bg-gray-200">{t('Вонучилишни активности')}</Link>
                </li>
              </ul>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-300">{t('Галерија')}</Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-blue-300">{t('Новости')}</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300">{t('Контакт')}</Link>
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
