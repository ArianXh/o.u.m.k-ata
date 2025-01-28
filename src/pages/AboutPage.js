import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

  const { t } = useTranslation();

  const timelineEvents = [
    { year: '1998', event: t("Година на изградба.") },
    { year: '2010', event: t("Година на верификација.") },
    { year: '2014', event: 'Recognized as the best regional high school in the country.' },
    { year: '2017', event: 'Launched online learning platforms and integrated technology into teaching.' },
  ];

  const administrativeStaff = [
    {
      name: t('Бенази Шемовска'),
      position: t('Директор'),
      image: 'https://via.placeholder.com/150',
      bio: 'With 20 years of experience in education, Jane leads the school with a passion for excellence.',
    },
    {
      name: t('Зеќир Исовски'),
      position: t('Помошен Директор'),
      image: 'https://via.placeholder.com/150',
      bio: 'John oversees academic programs and ensures every student reaches their full potential.',
    },
    {
      name: t('Семина Ракиповска'),
      position: t('Педагог'),
      image: 'https://via.placeholder.com/150',
      bio: 'John oversees academic programs and ensures every student reaches their full potential.',
    },
    {
      name: t('Халиме Сулејман'),
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
    {
      name: t('Наџир Шемовски'),
      position: t('Социолог'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Ајтен Мала'),
      position: t('Психолог'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Реулета Ракиповска'),
      position: t('Библиотекар'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Лумтарије Бастри'),
      position: t('Сметководител'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ];

  const schoolBoard = [
    {
      name: t('Џошкун Зеќир'),
      position: t('Од редот на наставниците - Член'),
      image: 'https://via.placeholder.com/150',
      bio: 'With 20 years of experience in education, Jane leads the school with a passion for excellence.',
    },
    {
      name: t('Асан Мемедовски'),
      position: t('Од редот на наставниците - Член'),
      image: 'https://via.placeholder.com/150',
      bio: 'John oversees academic programs and ensures every student reaches their full potential.',
    },
    {
      name: t('Арта Папранику'),
      position: t('Од редот на наставниците - Член'),
      image: 'https://via.placeholder.com/150',
      bio: 'John oversees academic programs and ensures every student reaches their full potential.',
    },
    {
      name: t('Белур Џаферовски'),
      position: t('Од редот на родителите - Претседател'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Зенун Шаќир'),
      position: t('Од редот на родителите - Заменик Претседател'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Арсим Исламовски'),
      position: t('Од редот на родителите - Член'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Суад Скендер'),
      position: t('Од Локална Самоуправа - Центар Жупа'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Беглија Вејселовска'),
      position: t('Од редот на учениците'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Бастри Есра'),
      position: t('Од редот на учениците'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ];

  const technicalStaff = [
    {
      name: t('Цено Вејселовски'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Азем Алили'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Алахудин Шемовски'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Муќизе Камберовска'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Зухра Амети'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Руждија Дурмишоска'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мефмед Лимановски'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Велија Сеферовски'),
      position: t('Технички персонал'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ];

  const educationalStaff = [
    {
      name: t('Дилавер Сулемановски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Нузи Ризвановски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Асан Мемедовски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Буран Селмановски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Бјехула Веледин'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Ќаусер Јани'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Тирона Цами'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Џошкун Зеќир'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Aџи Зеќир'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Тајре Асан'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Зини Скендер'),
      position: t('Наставник и воспитувач'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Џансу Рахман'),
      position: t('Психолог'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Ќани Сеадиновски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Зулбеар Ракиповски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Ќаил Ракиповски'),
      position: t('Наставник'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мефаил Исовски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мунтас Муслиовски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Барда Ракиповска'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Ајрис Беќировски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Нахида Беќировска'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Неџмија Мерсимовска'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Зихни Сејди'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Рамазан Асан'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мерилда Шакир'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Ајбакан Асан'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Нагије Емро'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Дамаил Муратоски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Илза Карамети'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Лејла Шаиновска'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Севинч Шеху'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Лиридона Мала'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Арта Папранику'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Кефсер Ф.Аџиевска'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Џошкун Ариф'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Мимоза Лиман'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Адмир Мустафоски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Бенјамин Аџиоски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Сонер Незировски'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
    {
      name: t('Неџметин Асан'),
      position: t('Професор'),
      image: 'https://via.placeholder.com/150',
      bio: 'Emily brings innovation and hands-on learning to the science curriculum.',
    },
  ];
  

  return (
    <div className="about-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">{t('За О.У Мустафа Кемал Ататурк')}</h1>
          <p className="mt-4 text-lg">
          {t('Знаеме и можеме да работиме за доброто на сите')}
          </p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">{t('Мисија')}</h2>
          <p className="mt-6 text-gray-600">
            {t('ООУ„Мустафа Кемал Ататурк“ е ваш дом, катче на соживот, меѓуетничка толеранција и заемна почит, во овој простор, каде што се спојуваат воспитанието, образованието и хуманите вредности, со нашиот висококвалитетен кадар сигурно чекориме кон иднината. ')}
          </p>

          <h2 className="mt-8 text-4xl font-bold text-gray-800">{t('Визија')}</h2>
          <p className="mt-6 text-gray-600">
            {t('Нашата визија е да бидеме водечко училиште кое обезбедува иновативно, инклузивно и инспиративно образование. Преку негување на љубопитноста, креативноста и критичкото размислување, ги подготвуваме учениците да станат самоуверени, одговорни и успешни граѓани на глобалната заедница. ')}
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


      {/* School Board Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">{t('Училишен Одбор')}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolBoard.map((member, index) => (
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
