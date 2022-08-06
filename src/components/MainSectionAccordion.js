import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceArea from './WorkExperienceArea';
import EducationArea from './EducationArea';
import OtherArea from './OtherArea';
import AddFormBtn from './AddFormBtn';
import RemoveFormBtn from './RemoveFormBtn';
import { Button } from 'react-bootstrap';
import PreviewModal from './PreviewModal';
// import { Preview, print } from 'react-html2pdf';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workCounter: 1,
      educationCounter: 1,
      otherCounter: 1,
      showModal: false,
    };
  }

  addWorkForm = (e) => {
    if (this.state.workCounter === 3) return;
    this.setState({
      workCounter: this.state.workCounter + 1,
    });
  };

  removeWorkForm = (e) => {
    if (this.state.workCounter === 0) return;
    this.setState({
      workCounter: this.state.workCounter - 1,
    });
  };

  addEducationForm = (e) => {
    if (this.state.educationCounter === 3) return;
    this.setState({
      educationCounter: this.state.educationCounter + 1,
    });
  };

  removeEducationForm = (e) => {
    if (this.state.educationCounter === 0) return;
    this.setState({
      educationCounter: this.state.educationCounter - 1,
    });
  };

  addOtherForm = (e) => {
    if (this.state.otherCounter === 3) return;
    this.setState({
      otherCounter: this.state.otherCounter + 1,
    });
  };

  removeOtherForm = (e) => {
    if (this.state.otherCounter === 0) return;
    this.setState({
      otherCounter: this.state.otherCounter - 1,
    });
  };

  showHidePreviewModal = (e) => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  extractDocument = (e) => {
    return 'Please come back soon to use this feature!';
  };

  exportDocument = (e) => {};

  render() {
    return (
      <div>
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
              <div className='d-flex justify-content-evenly'>
                <AddFormBtn
                  addForm={(e) => {
                    this.addWorkForm(e);
                  }}
                />
                <RemoveFormBtn
                  removeForm={(e) => {
                    this.removeWorkForm(e);
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              <EducationArea formCount={this.state.educationCounter} />
              <div className='d-flex justify-content-evenly'>
                <AddFormBtn
                  addForm={(e) => {
                    this.addEducationForm(e);
                  }}
                />
                <RemoveFormBtn
                  removeForm={(e) => {
                    this.removeEducationForm(e);
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Other</Accordion.Header>
            <Accordion.Body>
              <OtherArea formCount={this.state.otherCounter} />
              <div className='d-flex justify-content-evenly'>
                <AddFormBtn
                  addForm={(e) => {
                    this.addOtherForm(e);
                  }}
                />
                <RemoveFormBtn
                  removeForm={(e) => {
                    this.removeOtherForm(e);
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Save</Accordion.Header>
            <Accordion.Body>
              <div className='d-flex justify-content-evenly'>
                <Button
                  className='btn-success'
                  onClick={(e) => {
                    this.showHidePreviewModal(e);
                  }}
                >
                  Preview Document
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <PreviewModal
          show={this.state.showModal}
          toggleModal={this.showHidePreviewModal}
          doc={this.extractDocument}
        />
      </div>
    );
  }
}

export default Main;
