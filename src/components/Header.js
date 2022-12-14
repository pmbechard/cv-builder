import React from 'react';
import logo from '../logo.png';

function Header(props) {
  return (
    <header>
      <nav className='navbar'>
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

export default Header;
