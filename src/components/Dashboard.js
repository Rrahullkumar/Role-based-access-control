import React, { useEffect, useState } from "react";
import axios from "axios";

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [roles, setRoles] = useState([]);

//   // Fetch Users and Roles
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersResponse = await axios.get("http://localhost:5000/api/users");
//         const rolesResponse = await axios.get("http://localhost:5000/api/roles");
//         setUsers(usersResponse.data);
//         setRoles(rolesResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       <h2>Manage Users</h2>
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user._id}>
//               {user.name} - {user.email} - Role: {user.role?.name || "No Role"}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found</p>
//       )}

//       <h2>Manage Roles</h2>
//       {roles.length > 0 ? (
//         <ul>
//           {roles.map((role) => (
//             <li key={role._id}>
//               {role.name} - Permissions: {role.permissions.join(", ")}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No roles found</p>
//       )}
//     </div>
//   );
// };

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const usersResponse = await axios.get("http://localhost:5000/api/users");
          const rolesResponse = await axios.get("http://localhost:5000/api/roles");
          setUsers(usersResponse.data);
          setRoles(rolesResponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleAddUser = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/users", newUser);
        setUsers([...users, response.data]);
        setNewUser({ name: "", email: "", role: "" });
      } catch (error) {
        console.error("Error adding user:", error);
      }
    };
  
    return (
      <div>
        <h1>Admin Dashboard</h1>
  
        {/* Add User Form */}
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role._id} value={role._id}>
              {role.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddUser}>Add User</button>
  
        <h2>Manage Users</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.name} - {user.email} - Role: {user.role?.name || "No Role"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    );
  };  

export default Dashboard;


