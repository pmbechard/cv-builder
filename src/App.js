import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainSectionAccordion from './components/MainSectionAccordion';
import Footer from './components/Footer';

import React from 'react';

function App() {
  return (
    <div className='min-vh-100'>
      <Header />
      <MainSectionAccordion />
      <Footer />
    </div>
  );
}
export default App;
