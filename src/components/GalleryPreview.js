import React from "react";
import { useTranslation } from 'react-i18next';

const GalleryPreview = ({ images }) => {
  const { t } = useTranslation();
  return (
    <div className="gallery-preview bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t("Галерија")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.slice(0, 8).map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-lg">
                <span className="text-white font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
        {images.length > 8 && (
          <div className="text-center mt-8">
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-red-500 transition duration-300"
              onClick={() => window.location.href = "/galerija"}
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPreview;
