import { Component } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import SectionCard from './SectionCard';

class Main extends Component {
  render() {
    // FIXME: remove height after contents in place
    return (
      <div className='container-lg'>
        <SectionCard title='Personal Information' />
        <SectionCard title='Work Experience' />
        <SectionCard title='Education' />
        <SectionCard title='Other' />
      </div>
    );
    // TODO: Add components here
  }
}

export default Main;
