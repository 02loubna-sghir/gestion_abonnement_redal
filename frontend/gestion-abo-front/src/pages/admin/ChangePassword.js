import React from 'react';
import AdminNavbar from '../../layout/navbar'; // Importation correcte
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangePassword = () => {
  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <h1>Change Password</h1>
        <form>
          {/* Ajoutez les champs de formulaire ici pour le changement de mot de passe */}
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">Current Password</label>
            <input type="password" className="form-control" id="currentPassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input type="password" className="form-control" id="newPassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
            <input type="password" className="form-control" id="confirmPassword" />
          </div>
          <button type="submit" className="btn btn-primary">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
