import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProfile = () => {
  const [adminData, setAdminData] = useState({ nom: '', prenom: '', email: '' });
  const [message, setMessage] = useState(''); // State for success/error message

  // Handle form input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setAdminData({ ...adminData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace '1' with the actual admin ID
    axios.put(`http://localhost:8080/admins/1`, adminData)
      .then(response => {
        setMessage('Changes saved successfully!');
      })
      .catch(error => {
        setMessage('There was an error updating the admin.');
      });
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <h1>Edit Profile</h1>
        {message && <div className="alert alert-info">{message}</div>} {/* Display the message */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={adminData.nom}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prenom</label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              value={adminData.prenom}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={adminData.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
