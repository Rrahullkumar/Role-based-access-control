import React, { useState } from 'react';

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, role: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, role: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  return (
    <div>
      <h2>Manage Roles</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.role}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Add Role</button>
    </div>
  );
};

export default Roles;

