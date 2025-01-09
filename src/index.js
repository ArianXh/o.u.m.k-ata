import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
//import UnderConstruction from './components/UnderConstruction';
//import App from './App';
import UnderConstruction from './components/UnderConstruction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UnderConstruction />
  </React.StrictMode>
);

