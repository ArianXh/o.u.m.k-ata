import React from 'react';
import { useTranslation } from 'react-i18next';

const NewsEvents = ({ nastani }) => {
  const { t } = useTranslation();
  return (
    <section className="news-events py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary-dark">{t("Вести & настани")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {nastani.map(item => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-2xl text-primary text-center font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-900 text-xl text-center">{item.excerpt}</p>
              <a href={`/news/${item.id}`} className="text-primary text-center text-xl hover:underline mt-2 inline-block">{t("Повеќе")}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
