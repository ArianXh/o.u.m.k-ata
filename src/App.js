import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Pocetna from "./pages/Other/Pocetna";
import Kontakt  from './pages/Other/Kontakt';
import Galerija from './pages/Other/Galerija';
import Programi from './pages/Other/Programi';
import Novosti from './pages/Other/Novosti';

import ZaNas from './pages/ZaNas/ZaNas';
import Aktivnosti from './pages/Aktivnosti/Aktivnosti';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={< Pocetna />} />
      <Route path='/kontakt' element={< Kontakt />} />
      <Route path='/galerija' element={< Galerija />} />
      <Route path='/novosti' element={< Novosti />} />
      <Route path='/programi' element={< Programi />} />

      <Route path='/za-ucilisteto' element={< ZaNas />} />
      <Route path='/aktivnosti' element={< Aktivnosti />} />
    </Routes>
  </Router>
  );
}

export default App;
