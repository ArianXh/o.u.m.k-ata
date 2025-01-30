import React from 'react';
import { useTranslation } from 'react-i18next';

const ZaNasSection = () => {

  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">{t("Основно Училиште 'Мустафа Кемал Ататурк'")}</h2>
          <p className="mt-4 text-gray-600">
          {t("Нашето училиште е средина која го поддржува и поттикнува индивидуалниот развој на учениците, ги почитува родовите, етничките и другите различности, го поддржува професионалниот развој на наставниците и ќе креира задоволство на сите вклучени во воспитно образовниот процес.")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">{t("Наша Мисија")}</h3>
            <p className="mt-4 text-gray-600">
            {t("ООУ„Мустафа Кемал Ататурк“ е ваш дом, катче на соживот, меѓуетничка толеранција и заемна почит, во овој простор, каде што се спојуваат воспитанието, образованието и хуманите вредности, со нашиот висококвалитетен кадар сигурно чекориме кон иднината.")} 
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">{t("Наша Визија")}</h3>
            <p className="mt-4 text-gray-600">
            {t("Нашата визија е да бидеме водечко училиште кое обезбедува иновативно, инклузивно и инспиративно образование. Преку негување на љубопитноста, креативноста и критичкото размислување, ги подготвуваме учениците да станат самоуверени, одговорни и успешни граѓани на глобалната заедница.")} 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZaNasSection;