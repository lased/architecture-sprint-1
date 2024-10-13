import React from 'react';

import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

import './blocks/app/app.css';

const App = () => {
  return (
    <div className="app">
      <Login />
      <Logout />
      <Register />
    </div>
  );
};

export default App;
