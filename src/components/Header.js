import { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className='navbar bg-dark navbar-dark'>
          <div className='container-fluid'>
            <div className='navbar-brand ' href='#'>
              <img
                src={logo}
                alt=''
                width='90'
                height='72'
                className='d-inline-block'
              ></img>
              <h1 className='display-5 d-inline-block px-3 align-bottom'>
                CV Builder
              </h1>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
