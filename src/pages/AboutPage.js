import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

  const { t } = useTranslation();

  const timelineEvents = [
    { year: '2010', event: t("Година на верификација.") },
    { year: '2011', event: t("Година на изградба.") },
    { year: '2014', event: 'Recognized as the best regional high school in the country.' },
    { year: '2017', event: 'Launched online learning platforms and integrated technology into teaching.' },
  ];

  const administrativeStaff = [
    {
      name: t('Сабри Асан'),
      position: t('Директор'),
      image: 'https://via.placeholder.com/150',
      bio: 'With 20 years of experience in education, Jane leads the school with a passion for excellence.',
    },
    {
      name: t('Шпреза Илјазовска'),
      position: t('Претседател на училишен одбор'),
      image: 'https://via.placeholder.com/150',
      bio: 'John oversees academic programs and ensures every student reaches their full potential.',
    },
    {
      name: t('Сиба Дурмиш Ј.'),
      position: t('Секретар'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Шпреза Илјазовска'),
      position: t('Социолог'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ];

  const technicalStaff = [
    {
      name: t('Скендер Скендеровски'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Назмије Усеини'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Редифа Асановска'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ];

  const educationalStaff = [
    {
      name: t('Џанер Сезаир'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Орхан Зекир'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мухрем Шакировски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Кефсер Ф.Аџиоска'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Букурије Д.Коџаџику'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Узеир Илјаз'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Бенази Шемовска'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Албин Скендеровски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Елма Зекир'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Адмир Мустафоски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Лејла Ајдин'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Хакан Емро'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Зејнеп Ахмед'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мевлуде Ибраимовска'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Неџметин Асан'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мукерим Асан'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мунтас Муслиоски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ]

  return (
    <div className="about-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">{t('За О.У Мустафа Кемал Ататурк')}</h1>
          <p className="mt-4 text-lg">
          {t('Почитувај за да бидеш почитуван.')}
          </p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">{t('Визија и мисија')}</h2>
          <p className="mt-6 text-gray-600">
            {t('Нашето училиште е средина која го поддржува и поттикнува индивидуалниот развој на учениците, ги почитува родовите, етничките и другите различности, го поддржува професионалниот развој на наставниците и ќе креира задоволство на сите вклучени во воспитно образовниот процес.')}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">{t('Историјат')}</h2>
          <div className="mt-8 space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-blue-600 font-bold text-2xl">{event.year}</div>
                <p className="text-gray-700">{event.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Team Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">{t('Административен Кадар')}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrativeStaff.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {
                  /* 
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                  */
                }
                
                <h3 className="text-2xl font-semibold text-gray-700 mt-4">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Educational Staff Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">{t('Наставен Кадар')}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalStaff.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {
                  /*
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                /> 
                  */
                }
                
                <h3 className="text-2xl font-semibold text-gray-700 mt-4">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Technical Staff Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">{t('Технички Кадар')}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalStaff.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {
                /*
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                */
                }
                <h3 className="text-2xl font-semibold text-gray-700 mt-4">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default AboutPage;
