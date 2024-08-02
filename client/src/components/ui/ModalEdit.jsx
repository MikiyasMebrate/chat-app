import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalEdit = ({ show, handleModalShow, title, formBody, handleOnSubmit, handleSubmit, isSubmitting }) => {
  return (
    <>
      <Modal size="lg" show={show} onHide={handleModalShow}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Modal.Body>{formBody}</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalShow}>
              Close
            </Button>
            <Button disabled={isSubmitting} variant="primary" type="submit">
              {isSubmitting ? 'Loading' : 'Save Changes'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalEdit;
