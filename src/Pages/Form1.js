// Form1.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'
const Form1 = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingEmployeeId) {
        // Update existing employee
        await axios.put(`http://localhost:5000/api/employees/${editingEmployeeId}`, formData);
      } else {
        // Add new employee
        await axios.post('http://localhost:5000/api/employees', formData);
      }

      fetchEmployees(); // Refresh the employee list after adding/updating
      setFormData({ name: '', position: '', department: '', salary: '' });
      setEditingEmployeeId(null);
    } catch (error) {
      console.error('Error adding/updating employee:', error);
    }
  };

  const handleEdit = (id) => {
    const employeeToEdit = employees.find((employee) => employee._id === id);
    setFormData({ ...employeeToEdit });
    setEditingEmployeeId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      fetchEmployees(); // Refresh the employee list after deleting an employee
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', position: '', department: '', salary: '' });
    setEditingEmployeeId(null);
  };

  return (
    <div>
      <h2>Employee Management</h2>

      {/* Employee Form */}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

        <label>Position:</label>
        <input type="text" name="position" value={formData.position} onChange={handleInputChange} required />

        <label>Department:</label>
        <input type="text" name="department" value={formData.department} onChange={handleInputChange} required />

        <label>Salary:</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleInputChange} required />

        {editingEmployeeId ? (
          <>
            <button type="submit">Update</button>
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <button type="submit">Add Employee</button>
        )}
      </form>

      {/* Employee List */}
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
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => handleEdit(employee._id)}>Edit</button>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form1;
