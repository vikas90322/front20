import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form2 = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error.message);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>${employee.salary}</td>
              <td>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form2;
