import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../config';
import Table from 'react-bootstrap/Table';
import User from './User';

function Users() {
  const [users, setUsers] = useState([]);
  const getAllUsers = () => {
    axios
      .get(baseURL)
      .then((res) => {
        const allUsers = res.data;
        setUsers(allUsers);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllUsers();
    console.log(users);
  }, []);

  return (
    <div className='constainer'>
      <h1 className='m-5'>Yodlr Admin Page</h1>
      <div className='container'>
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
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <User id={user.id} user={user} />
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
