import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function Views() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default Views;
