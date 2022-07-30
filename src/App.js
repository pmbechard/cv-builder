import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='card mt-2'>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
