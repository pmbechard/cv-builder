import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceArea from './WorkExperienceArea';
import EducationArea from './EducationArea';
import OtherArea from './OtherArea';

class Main extends Component {
  render() {
    return (
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Personal Information</Accordion.Header>
          <Accordion.Body>
            <PersonalInfoForm />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Work Experience</Accordion.Header>
          <Accordion.Body>
            <WorkExperienceArea />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            <EducationArea />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Other</Accordion.Header>
          <Accordion.Body>
            <OtherArea />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default Main;
