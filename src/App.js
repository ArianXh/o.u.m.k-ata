import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Pocetna from "./pages/Other/Pocetna";
import Kontakt  from './pages/Other/Kontakt';
import Galerija from './pages/Other/Galerija';
import Programi from './pages/Other/Programi';
import Novosti from './pages/Other/Novosti';

// ZA NAS
import ZaUcilisteto from './pages/ZaNas/ZaUcilisteto';
import Vraboteni from './pages/ZaNas/Vraboteni';
import UcilisniOrgani from './pages/ZaNas/UcilisniOrgani';


// NASTAVA
import KlasnoRakovodstvo from './pages/Nastava/KlasnoRakovodstvo';
import DodatnaNastava from './pages/Nastava/DodatnaNastava';
import Ekskurzii from './pages/Nastava/Ekskurzii';
import IzborniPredmeti from './pages/Nastava/IzborniPredmeti';

// DOKUMENTI
import InterniAkti from './pages/Dokumenti/InterniAkti';
import GodisnaPrograma from './pages/Dokumenti/GodisnaPrograma';
import RazvoenPlan from './pages/Dokumenti/RazvoenPlan';
import Samoevaluacija from './pages/Dokumenti/Samoevaluacija';
import Finansii from './pages/Dokumenti/Finansii';
import Drugi from './pages/Dokumenti/Drugi';
import Obuki from './pages/Dokumenti/Obuki';

// AKTIVNOSTI
import Aktivnosti from './pages/Aktivnosti/Aktivnosti';
import UcenickaZaednica from './pages/Aktivnosti/UcenickaZaednica';
import VonnastavniAktivnosti from './pages/Aktivnosti/VonnastavniAktivnosti';
import VonucilisniAktivnosti from './pages/Aktivnosti/VonucilisniAktivnosti';











function App() {
  return (
    <Router>
    <Routes>

      {/* ---------OTHER--------- */}
      <Route path='/' element={< Pocetna />} />
      <Route path='/kontakt' element={< Kontakt />} />
      <Route path='/galerija' element={< Galerija />} />
      <Route path='/novosti' element={< Novosti />} />
      <Route path='/programi' element={< Programi />} />

      {/* ---------ZA NAS--------- */}
      <Route path='/za-ucilisteto' element={< ZaUcilisteto />} />
      <Route path='/za-ucilisteto/vraboteni' element={< Vraboteni />} />
      <Route path='/za-ucilisteto/organi' element={< UcilisniOrgani />} />


      {/* ---------NASTAVA--------- */}
      <Route path='/nastava/klasno-rakovodstvo' element={< KlasnoRakovodstvo />} />
      <Route path='/nastava/dodatna-nastava' element={< DodatnaNastava />} />
      <Route path='/nastava/ekskurzii' element={< Ekskurzii />} />
      <Route path='/nastava/izborni-predmeti' element={< IzborniPredmeti />} />
      

      {/* ---------DOKUMENTI--------- */}
      <Route path='/dokumenti/interni-akti' element={< InterniAkti />} />
      <Route path='/dokumenti/godisna-programa' element={< GodisnaPrograma />} />
      <Route path='/dokumenti/razvoen-plan' element={< RazvoenPlan />} />
      <Route path='/dokumenti/samoevaluacija' element={< Samoevaluacija />} />
      <Route path='/dokumenti/finansii' element={< Finansii />} />
      <Route path='/dokumenti/drugi' element={< Drugi />} />
      <Route path='/dokumenti/obuki' element={< Obuki />} />


      {/* ---------AKTIVNOSTI--------- */}
      <Route path='/aktivnosti' element={< Aktivnosti />} />
      <Route path='/aktivnosti/vonnastavni-aktivnosti' element={< VonnastavniAktivnosti />} />
      <Route path='/aktivnosti/ucenicka-zaednica' element={< UcenickaZaednica />} />
      <Route path='/aktivnosti/vonucilisni-aktivnosti' element={< VonucilisniAktivnosti />} />
        
    </Routes>
  </Router>
  );
}

export default App;
