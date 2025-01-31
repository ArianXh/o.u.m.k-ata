import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaBook } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const ActivitiesPage = () => {
  const { t } = useTranslation();

  const activities = [
    {
      title: t("Календар за организација и работата во основното училиште"),
    },
    {
      title: t("Поделба на класно раководство, поделба на часовите на наставниот кадар, распоред на часовите"),
    },
    {
      title: t("Работа во смени"),
    },
    {
      title: "Јазик /јазици на кој/и се изведува наставата",
    },
    {
      title: "Комбинирани паралелки",
    },
    {
      title: "Странски јазици што се изучуваат во основното училиште",
    },
    {
      title: "Реализација на физичко и здравствено образование со учениците од прво до петто одделение",
    },
    {
      title: "Изборна настава",
    },
    {
      title: "Додатна настава",
    },
    {
      title: "Работа со надарени ученици",
    },
    {
      title: "Работа со ученици со посебни образовни потреби",
    },
  ];

  return (
    <div className="programs-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">{t("Активности")}</h1>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:bg-blue-800 transition-shadow duration-300 text-center"
              >
                <FaBook size={50} color='blue' />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.duration}</p>
                  <p className="mt-4 text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {
        /* Call-to-Action Section
        
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Interested in Joining?</h2>
          <p className="mt-4 text-lg">
            Contact us today to learn more about our programs and start your journey with us.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
        */
      }
      
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
