import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function User({ id, user, handleEdit, handleDelete }) {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    state: user.state,
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <td>{user.id}</td>
      <td>
        <Form.Control
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={onChange}
        />
      </td>
      <td>
        <Form.Control
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={onChange}
        />
      </td>
      <td>
        <Form.Control
          type='email'
          name='email'
          value={formData.email}
          onChange={onChange}
        />
      </td>
      <td>
        <Form.Select name='state' value={formData.state} onChange={onChange}>
          <option value='active' name='active'>
            Active
          </option>
          <option value='pending' name='pending'>
            Pending
          </option>
        </Form.Select>
      </td>
      <td>
        <i
          className='fas fa-edit'
          onClick={() => handleEdit(formData, user.id)}
        ></i>
      </td>
      <td>
        <i
          className='fas fa-trash-alt'
          onClick={() => handleDelete(user.id)}
        ></i>
      </td>
    </>
  );
}

export default User;
