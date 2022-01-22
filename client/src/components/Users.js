import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../config';
import Table from 'react-bootstrap/Table';
import User from './User';
import Alert from 'react-bootstrap/Alert';

function Users() {
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);

  const getAllUsers = () => {
    axios
      .get(baseURL)
      .then((res) => {
        const allUsers = res.data;
        setUsers(allUsers);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${baseURL}/${id}`)
      .then((res) => {
        const user = res.data;
        console.log(user);
        setUsers(users.filter((user) => user.id !== id));
        setDeleted(true);
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (formData, id) => {
    const userData = { ...formData, id };
    axios
      .put(`${baseURL}/${id}`, userData)
      .then((res) => {
        setUsers((users) =>
          users.map((user) => (user.id === id ? res.data : user))
        );
        setEdited(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
    console.log(users);
  }, []);

  useEffect(() => {
    if (deleted) {
      let resetDeletedTimer = setTimeout(() => {
        setDeleted(false);
      }, 2000);

      return () => {
        clearTimeout(resetDeletedTimer);
      };
    }

    if (edited) {
      let resetEditedTimer = setTimeout(() => {
        setEdited(false);
      }, 2000);

      return () => {
        clearTimeout(resetEditedTimer);
      };
    }
  }, [deleted, edited]);

  return (
    <div className='constainer'>
      <h1 className='m-5'>Yodlr Admin Page</h1>
      <div className='container alert'>
        {deleted && <Alert variant='success'>User has been deleted!</Alert>}
        {edited && <Alert variant='success'>User has been updated!</Alert>}
      </div>
      <div className='container shadow-lg'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>last Name</th>
              <th>Email</th>
              <th>State</th>
              <th>Save?</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <User
                    id={index}
                    user={user}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Users;
