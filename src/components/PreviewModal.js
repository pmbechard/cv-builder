import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Preview } from 'react-html2pdf';
import uniqid from 'uniqid';

// FIXME: Make modal responsive for mobile devices
// FIXME: Fix formatting in exported PDF

function PreviewModal(props) {
  const getFormattingClasses = (key) => {
    if (key === 'name') return 'col-12 h4';
    if (key === 'phone') return 'col-12';
    if (key.split('-').length === 3 && key.split('-')[0] === 'position')
      return 'col-12';
    if (key.split('-').length === 3 && key.split('-')[1] === 'role')
      return 'col-12 mb-3';
    if (key.split('-').length === 2 && key.split('-')[0] === 'institution')
      return 'col-12';
    if (key.split('-')[0] === 'other') return 'col-12';
    if (key.split('-')[0] === 'degree' || key.split('-')[2] === 'completed')
      return 'col-6 mb-3';
    return 'col-6';
  };

  const formattedDocument = (
    <div style={{ fontSize: '8px', padding: '20px' }} className='row'>
      {Object.entries(props.doc).map((value) => {
        if (value[0].split('-')[1] === 'heading') {
          return (
            <div key={uniqid()} className={getFormattingClasses(value[0])}>
              <div>
                <hr />
                <h6>{value[1]}</h6>
                <br />
              </div>
            </div>
          );
        }
        return (
          <div key={uniqid()} className={getFormattingClasses(value[0])}>
            {value[0] === 'position-company-1' && (
              <div>
                <hr />
                <h6>Work Experience</h6>
                <br />
              </div>
            )}
            {value[0] === 'institution-0' && value[0].split('-').length === 2 && (
              <div>
                <hr className='my-3' />
                <h6>Education</h6>
                <br />
              </div>
            )}
            {value[0].split('-')[1] === 'from' && 'From: '}
            {value[0].split('-')[1] === 'to' && 'To: '}
            {value[1]}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Modal show={props.show} onHide={props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Preview id='preview'>{formattedDocument}</Preview>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.toggleModal}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              props.export(formattedDocument);
              props.toggleModal();
            }}
          >
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PreviewModal;
