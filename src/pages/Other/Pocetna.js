import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSlider from '../../components/HeroSlider';
import ZaNasSection from '../../components/ZaNasSection';
import ListaNovosti from '../../components/ListaNovosti';
import Footer from '../../components/Footer';
import ListaProgrami from '../../components/ListaProgrami';
import GalleryPreview from '../../components/GalleryPreview';
import KontaktirajteNe from '../../components/KontaktirajteNe';



const Pocetna = () => {

  const news = [
    { id: 1, title: "Open Enrollment", excerpt: "Enroll for the 2024 academic year today!" },
    { id: 2, title: "School Festival", excerpt: "Join us for a day of fun and excitement." },
  ];

  const sampleImages = [
    { src: "https://via.placeholder.com/300", alt: "Image 1" },
    { src: "https://via.placeholder.com/300", alt: "Image 2" },
    { src: "https://via.placeholder.com/300", alt: "Image 3" },
    { src: "https://via.placeholder.com/300", alt: "Image 4" },
    { src: "https://via.placeholder.com/300", alt: "Image 5" },
    { src: "https://via.placeholder.com/300", alt: "Image 6" },
    { src: "https://via.placeholder.com/300", alt: "Image 7" },
    { src: "https://via.placeholder.com/300", alt: "Image 8" },
    { src: "https://via.placeholder.com/300", alt: "Image 9" },
  ];


  return (
    <div className="font-sans">
      <Navbar />

      <HeroSlider />
      <ZaNasSection />
      <ListaNovosti news={news} />
      <ListaProgrami />
      <GalleryPreview images={sampleImages} title="Gallery Highlights" />

      <KontaktirajteNe />
      <Footer />
    </div>
  )
}

export default Pocetna;