import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Events", "Achievements", "Campus Life", "Workshops"];
  const galleryImages = [
    { src: "https://via.placeholder.com/400x300", category: "Events", caption: "Annual Science Fair 2023" },
    { src: "https://via.placeholder.com/400x300", category: "Achievements", caption: "Students Receiving Awards" },
    { src: "https://via.placeholder.com/400x300", category: "Campus Life", caption: "Beautiful Campus Gardens" },
    { src: "https://via.placeholder.com/400x300", category: "Workshops", caption: "Coding Workshop for Beginners" },
    { src: "https://via.placeholder.com/400x300", category: "Events", caption: "Cultural Festivities" },
    { src: "https://via.placeholder.com/400x300", category: "Campus Life", caption: "Students Relaxing in the Library" },
    { src: "https://via.placeholder.com/400x300", category: "Achievements", caption: "Sports Team Victories" },
    { src: "https://via.placeholder.com/400x300", category: "Workshops", caption: "Art and Creativity Session" },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <div className="gallery-page bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mt-4 text-lg">
            Explore memories and moments captured in our school’s vibrant activities.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-2 px-4 rounded-full font-medium ${
                  activeCategory === category
                    ? "bg-blue-800 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-800 hover:text-white transition`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="rounded-lg shadow-md w-full h-48 object-cover group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
