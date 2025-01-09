import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProgramsPage = () => {
  const programHighlights = [
    {
      title: "STEM Program",
      description:
        "Our STEM program combines Science, Technology, Engineering, and Mathematics to prepare students for the future.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Arts and Culture",
      description:
        "Explore your creative side with our arts and culture program, fostering creativity and expression.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Sports and Fitness",
      description:
        "Stay active and healthy with our comprehensive sports and fitness curriculum.",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  const programs = [
    {
      title: "Computer Science",
      duration: "4 Years",
      description:
        "Learn the foundations of programming, AI, and software development.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Business Management",
      duration: "3 Years",
      description:
        "Gain insights into the corporate world with our business management program.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Graphic Design",
      duration: "3 Years",
      description:
        "Master the art of design with hands-on projects and industry insights.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Environmental Science",
      duration: "4 Years",
      description:
        "Dive into the study of our planet and how we can protect it for the future.",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <div className="programs-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Our Programs</h1>
          <p className="mt-4 text-lg">
            Explore the diverse programs we offer, tailored to nurture talent and achieve excellence.
          </p>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Program Highlights</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{highlight.title}</h3>
                  <p className="mt-4 text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Explore Our Programs</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                  <p className="text-sm text-gray-500">{program.duration}</p>
                  <p className="mt-4 text-gray-600">{program.description}</p>
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

export default ProgramsPage;
