import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './components/Header';
import MainSectionAccordion from './components/MainSectionAccordion';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='min-vh-100'>
        <Header />
        <MainSectionAccordion />
        <Footer />
      </div>
    );
  }
}

export default App;
