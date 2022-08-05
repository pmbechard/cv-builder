import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceArea from './WorkExperienceArea';
import EducationArea from './EducationArea';
import OtherArea from './OtherArea';
import AddFormBtn from './AddFormBtn';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workCounter: 1,
      educationCounter: 1,
      otherCounter: 1,
    };
  }

  addWorkForm = (e) => {
    this.setState({
      workCounter: this.state.workCounter + 1,
    });
  };

  addEducationForm = (e) => {
    this.setState({
      educationCounter: this.state.educationCounter + 1,
    });
  };

  addOtherForm = (e) => {
    this.setState({
      otherCounter: this.state.otherCounter + 1,
    });
  };

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
            <WorkExperienceArea formCount={this.state.workCounter} />
            <AddFormBtn
              addForm={(e) => {
                this.addWorkForm(e);
              }}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            <EducationArea formCount={this.state.educationCounter} />
            <AddFormBtn
              addForm={(e) => {
                this.addEducationForm(e);
              }}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3'>
          <Accordion.Header>Other</Accordion.Header>
          <Accordion.Body>
            <OtherArea formCount={this.state.otherCounter} />
            <AddFormBtn
              addForm={(e) => {
                this.addOtherForm(e);
              }}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default Main;
