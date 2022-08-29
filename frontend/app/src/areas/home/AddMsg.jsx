import React, { useCallback, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { postMsg } from '../../api/msg';
import FormMsg from './FormMsg';

const MsgFormId = 'msgForm';

const AddMsg = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAddMsg = useCallback((data) => {
    postMsg(data)
      .then(() => {
        window.location.reload();
      });
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add message
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormMsg onAddMsg={onAddMsg} formId={MsgFormId} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form={MsgFormId}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMsg;
