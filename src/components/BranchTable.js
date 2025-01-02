import React, { useState } from "react";
import "../BranchTable.css";

function BranchTable() {
  const [branches, setBranches] = useState([
    { id: 1, name: "Branch A", location: "City A" },
    { id: 2, name: "Branch B", location: "City B" },
  ]);

  return (
    <div className="branch-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.id}</td>
              <td>{branch.name}</td>
              <td>{branch.location}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BranchTable;
