import React from 'react';

function User({ id, user }) {
  return (
    <>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.state}</td>
      <td>{}</td>
      <td>{}</td>
    </>
  );
}

export default User;
