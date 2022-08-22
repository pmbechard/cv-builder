import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import uniqid from 'uniqid';

function PreviewModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.values(props.doc).map((value) => {
            return <div key={uniqid()}>{value}</div>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.toggleModal}>
            Close
          </Button>
          <Button variant='primary' onClick={props.toggleModal}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PreviewModal;
