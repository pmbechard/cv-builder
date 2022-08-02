import { Component } from 'react';
import SectionCard from './SectionCard';

class Main extends Component {
  render() {
    return (
      <div className='container-lg'>
        <SectionCard title='Personal Information' />
        <SectionCard title='Work Experience' />
        <SectionCard title='Education' />
        <SectionCard title='Other' />
      </div>
    );
  }
}

export default Main;
