import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import RegisterForm from './RegisterForm';

function Views() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<RegisterForm />} />
        <Route path='/admin' element={<Users />} />
      </Routes>
    </main>
  );
}

export default Views;
