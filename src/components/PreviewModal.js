import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export class PreviewModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.doc()}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.toggleModal}>
              Close
            </Button>
            <Button variant='primary' onClick={this.props.toggleModal}>
              Download PDF
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PreviewModal;
