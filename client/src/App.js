import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Views from './components/Views';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Views />
      </BrowserRouter>
    </div>
  );
}

export default App;
