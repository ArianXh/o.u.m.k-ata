import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsPage = () => {
  const featuredNews = {
    title: "ATA School Wins Regional Innovation Award!",
    description:
      "We are thrilled to announce that ATA School has been recognized for its exceptional contributions to innovative education methods.",
    image: "https://via.placeholder.com/800x400",
    link: "/news/innovation-award",
  };

  const recentNews = [
    {
      title: "New Science Lab Inauguration",
      date: "December 10, 2024",
      description:
        "ATA School unveils its state-of-the-art science lab, fostering hands-on learning experiences.",
      image: "https://via.placeholder.com/400x300",
      link: "/news/science-lab",
    },
    {
      title: "Annual Sports Day Highlights",
      date: "December 5, 2024",
      description:
        "A day filled with excitement, teamwork, and victories! Check out the highlights from this year’s Sports Day.",
      image: "https://via.placeholder.com/400x300",
      link: "/news/sports-day",
    },
    {
      title: "Student Art Exhibition",
      date: "November 30, 2024",
      description:
        "Explore the creativity of our students showcased in this year’s art exhibition.",
      image: "https://via.placeholder.com/400x300",
      link: "/news/art-exhibition",
    },
  ];

  return (
    <div className="news-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-8">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <h1 className="text-4xl font-bold">{featuredNews.title}</h1>
            <p className="mt-4 text-lg">{featuredNews.description}</p>
            <a
              href={featuredNews.link}
              className="inline-block mt-6 bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Recent News</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{news.title}</h3>
                  <p className="text-gray-500 text-sm">{news.date}</p>
                  <p className="mt-4 text-gray-600">{news.description}</p>
                  <a
                    href={news.link}
                    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Subscribe Section 
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="mt-4 text-lg">
            Subscribe to our newsletter to receive the latest news and updates from ATA School.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded bg-gray-100 text-gray-800 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      */}
      <Footer />
    </div>
  );
};

export default NewsPage;
