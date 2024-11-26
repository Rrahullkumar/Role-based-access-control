import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';

function App() {
  return (
    <Router>
      <div className="container my-5">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <nav className="mb-4">
          <Link className="btn btn-primary me-2" to="/users">Manage Users</Link>
          <Link className="btn btn-secondary" to="/roles">Manage Roles</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
