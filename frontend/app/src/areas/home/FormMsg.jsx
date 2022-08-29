import React, {
  useCallback, useRef, useState,
} from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormMsg = ({ onAddMsg, formId }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({});

  const submitMsg = useCallback((event) => {
    event.preventDefault();
    onAddMsg(formData);
  }, [formData, onAddMsg]);

  const handleChange = useCallback((event) => {
    setFormData(((data) => ({ ...data, [event.target.id]: event.target.value })));
  }, []);

  return (
    <Form id={formId} onSubmit={submitMsg} ref={formRef}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required placeholder="Title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" required placeholder="Message" onChange={handleChange} />
      </Form.Group>
    </Form>
  );
};

FormMsg.propTypes = {
  onAddMsg: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
};

export default FormMsg;
