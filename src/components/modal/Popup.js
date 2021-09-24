import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Modal } from 'react-bootstrap';

const Popup = (props) => {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure to delete this ?</h4>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.handleDeleteTrue} className="btn btn-danger">
          Confirm
        </button>
        <Button onClick={props.onHide} className="btn btn-secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup
