import { React, useState } from 'react';
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

function Main(props) {
  const [workCounter, setWorkCounter] = useState(1);
  const [educationCounter, setEducationCounter] = useState(1);
  const [otherCounter, setOtherCounter] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const addWorkForm = (e) => {
    if (workCounter === 3) return;
    setWorkCounter(workCounter + 1);
  };

  const removeWorkForm = (e) => {
    if (workCounter === 0) return;
    setWorkCounter(workCounter - 1);
  };

  const addEducationForm = (e) => {
    if (educationCounter === 3) return;
    setEducationCounter(educationCounter + 1);
  };

  const removeEducationForm = (e) => {
    if (educationCounter === 0) return;
    setEducationCounter(educationCounter - 1);
  };

  const addOtherForm = (e) => {
    if (otherCounter === 3) return;
    setOtherCounter(otherCounter + 1);
  };

  const removeOtherForm = (e) => {
    if (otherCounter === 0) return;
    setOtherCounter(otherCounter - 1);
  };

  const showHidePreviewModal = (e) => {
    setShowModal(!showModal);
  };

  const extractDocument = (e) => {
    return 'Please come back soon to use this feature!';
  };

  const exportDocument = (e) => {};

  return (
    <div>
      <form
        action=''
        method=''
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          showHidePreviewModal(e);
          const data = new FormData(e.target);
          setFormData(Object.fromEntries(data.entries()));
        }}
        noValidate
      >
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
              <WorkExperienceArea formCount={workCounter} />
              <div className='d-flex justify-content-evenly'>
                <AddFormBtn
                  addForm={(e) => {
                    addWorkForm(e);
                  }}
                />
                <RemoveFormBtn
                  removeForm={(e) => {
                    removeWorkForm(e);
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              <EducationArea formCount={educationCounter} />
              <div className='d-flex justify-content-evenly'>
                <AddFormBtn
                  addForm={(e) => {
                    addEducationForm(e);
                  }}
                />
                <RemoveFormBtn
                  removeForm={(e) => {
                    removeEducationForm(e);
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Other</Accordion.Header>
            <Accordion.Body>
              <OtherArea formCount={otherCounter} />
              <div className='d-flex justify-content-evenly'>
                <AddFormBtn
                  addForm={(e) => {
                    addOtherForm(e);
                  }}
                />
                <RemoveFormBtn
                  removeForm={(e) => {
                    removeOtherForm(e);
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Save</Accordion.Header>
            <Accordion.Body>
              <div className='d-flex justify-content-evenly'>
                <Button type='submit' className='btn-success'>
                  Preview Document
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <PreviewModal
          show={showModal}
          toggleModal={showHidePreviewModal}
          doc={formData}
        />
      </form>
    </div>
  );
}

export default Main;
