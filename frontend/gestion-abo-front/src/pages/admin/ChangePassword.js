import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState(''); // State to display success or error message

  // Handle input change
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPasswordData({ ...passwordData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    // Replace '1' with the actual admin ID
    axios.put(`http://localhost:8080/admins/1/change-password`, {
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
    })
      .then(response => {
        setMessage('Password updated successfully.');
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setMessage('Current password is incorrect.');
        } else {
          setMessage('There was an error updating the password.');
        }
      });
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <h1>Change Password</h1>
        {message && <div className="alert alert-info">{message}</div>} {/* Display the message */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              value={passwordData.currentPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={passwordData.newPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
