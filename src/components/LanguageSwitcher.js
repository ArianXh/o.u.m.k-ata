import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4 flex space-x-2">
         <button onClick={() => changeLanguage('mk')} className="flex items-center bg-white px-4 py-2 rounded hover:bg-primary">
            <img src="https://flagcdn.com/w40/mk.png" alt="Macedonian Flag" className="w-6 h-4" />
        </button>
        <button onClick={() => changeLanguage('tr')} className="flex items-center bg-white px-4 py-2 rounded hover:bg-primary">
            <img src="https://flagcdn.com/w40/tr.png" alt="Turkish Flag" className="w-6 h-4" />
        </button>
        <button onClick={() => changeLanguage('al')} className="flex items-center bg-white px-4 py-2 rounded hover:bg-primary">
            <img src="https://flagcdn.com/w40/al.png" alt="Albanian Flag" className="w-6 h-4" />
        </button>
    </div>
  );
};

export default LanguageSwitcher;
