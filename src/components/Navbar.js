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
          <li>
            <Link to="/about" className="hover:text-blue-300">{t('За Нас')}</Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-blue-300">{t('Новости')}</Link>
          </li>
          <li>
            <Link to="/programs" className="hover:text-blue-300">{t('Програми')}</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-300">{t('Галерија')}</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300">{t('Контакт')}</Link>
          </li>
        </ul>
        <LanguageSwitcher />

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => console.log('Toggle menu')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
