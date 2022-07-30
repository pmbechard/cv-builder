import { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <nav className='d-flex align-item-center justify-content-center navbar navbar-light bg-light'>
        <img
          src={logo}
          width='50'
          height='50'
          className='d-inline-block align-top'
          alt=''
        />
        <h1 className='display-4'>CV Builder</h1>
      </nav>
    );
  }
}

export default Header;
