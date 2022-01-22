import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../config';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

function RegisterForm() {
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, formData)
      .then((res) => {
        setFormData(initialState);
        navigate('/admin');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container'>
      <h1 className='m-5'>Yodlr Register Portal</h1>
      <div className='container w-50 border rounded p-5 shadow-lg bg-body'>
        <Form onSubmit={onSubmit}>
          <Row className='mb-3' xs={1} md={2}>
            <Form.Group as={Col} controlId='formGridFirstName'>
              <FloatingLabel
                controlId='floatingFirstName'
                label='First Name'
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  value={firstName}
                  onChange={onChange}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridLastName'>
              <FloatingLabel
                controlId='floatingLastName'
                label='Last Name'
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  value={lastName}
                  onChange={onChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <FloatingLabel
              controlId='floatingEmail'
              label=' Email Address'
              className='mb-3'
            >
              <Form.Control
                type='email'
                placeholder='name@example.com'
                name='email'
                value={email}
                onChange={onChange}
                required
              />
            </FloatingLabel>
          </Row>
          <Row className='mb-3'>
            <Button variant='secondary' type='submit' size='lg'>
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
