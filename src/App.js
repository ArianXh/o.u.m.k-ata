import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ProgramsPage from './pages/ProgramsPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/about' element={< AboutPage />} />
      <Route path='/contact' element={< ContactPage />} />
      <Route path='/gallery' element={< GalleryPage />} />
      <Route path='/news' element={< NewsPage />} />
      <Route path='/programs' element={< ProgramsPage />} />
    </Routes>
  </Router>
  );
}

export default App;
