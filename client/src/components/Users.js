import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { baseURL } from '../config';
import axios from 'axios';

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
              <th>Edit?</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.state}</td>
                  <td>{}</td>
                  <td>{}</td>
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
