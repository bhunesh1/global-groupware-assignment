import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import EditUser from './components/EditUser';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/edit-user" element={<EditUser />} />
    </Routes>
  </Router>
);

export default App;

