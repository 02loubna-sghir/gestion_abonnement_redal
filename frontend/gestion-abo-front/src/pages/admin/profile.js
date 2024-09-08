import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import profileImage from '../../assets/IMG_7351.jpg';

const Profile = () => {
  const [adminData, setAdminData] = useState({ nom: '', prenom: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch admin data by ID or email (modify the URL accordingly)
    axios.get('http://localhost:8080/admins/1')  // Replace '1' with the actual admin ID or use the /email endpoint
      .then(response => {
        setAdminData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the admin data!', error);
      });
  }, []);

  const handleEditProfile = () => {
    navigate('/admin/edit-profile');
  };

  const handleChangePassword = () => {
    navigate('/admin/change-password');
  };

  return (
    <div>
      <AdminNavbar userEmail={adminData.email} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">Admin Profile</h4>
              </div>
              <div className="card-body text-center">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-circle img-fluid"
                />
                <h5 className="my-3">{adminData.nom} {adminData.prenom}</h5>
                <p className="text-muted">Administrator</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Details</h4>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3"><strong>Email:</strong></div>
                  <div className="col-sm-9">{adminData.email}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3"><strong>Phone:</strong></div>
                  <div className="col-sm-9">+212 7 55 66 88 99</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3"><strong>Role:</strong></div>
                  <div className="col-sm-9">Administrator</div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary"
                      onClick={handleEditProfile}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="btn btn-secondary ms-2"
                      onClick={handleChangePassword}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
