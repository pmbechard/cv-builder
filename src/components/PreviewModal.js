import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Preview } from 'react-html2pdf';
import uniqid from 'uniqid';

// FIXME: Make modal responsive for mobile devices

function PreviewModal(props) {
  const formattedDocument = (
    // TODO: Add styling and parsing here for export formatting
    <div style={{ fontSize: '12px', padding: '20px' }} className='row'>
      {Object.entries(props.doc).map((value) => {
        return (
          <div
            key={uniqid()}
            className={
              value[0].split('-')[1] === 'completed' ? 'col-12' : 'col-6'
            }
          >
            {value[0].split('-')[0] === 'position' && <hr />}
            {value[0].split('-')[0] === 'company' &&
              value[0].split('-').length === 2 && <hr />}
            {value[0].split('-')[0] === 'institution' &&
              value[0].split('-').length === 2 && <hr />}
            {value[0].split('-')[0] === 'degree' && <hr />}
            {value[0].split('-')[0] === 'other' && <hr />}
            {value[0].toUpperCase()}: {value[1]}
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
