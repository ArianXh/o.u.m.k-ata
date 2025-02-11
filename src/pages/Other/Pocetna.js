import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSlider from '../../components/HeroSlider';
import ZaNasSection from '../../components/ZaNasSection';
//import ListaNovosti from '../../components/ListaNovosti';
import Footer from '../../components/Footer';
//import ListaProgrami from '../../components/ListaProgrami';
//import GalleryPreview from '../../components/GalleryPreview';
import KontaktirajteNe from '../../components/KontaktirajteNe';

// import { useTranslation } from 'react-i18next';
//import { getNewsEvents } from '../../helpers/NewsEventsData';
//import { getGalleryImages } from '../../helpers/GalleryImages';


const Pocetna = () => {
  //const { t } = useTranslation();
  //const nastani = getNewsEvents(t);
  //const sliki = getGalleryImages(t);
  


  return (
    <div className="font-sans">
      <Navbar />

      <HeroSlider />
      
      <ZaNasSection />
      
      {/* <ListaProgrami /> */}

      {/* <ListaNovosti nastani={nastani} /> */}
      
      {/* <GalleryPreview images={sliki} /> */}

      <KontaktirajteNe />
      
      <Footer />
    </div>
  )
}

export default Pocetna;