import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import BranchManagement from './components/BranchManagement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/branch-management" element={<BranchManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
