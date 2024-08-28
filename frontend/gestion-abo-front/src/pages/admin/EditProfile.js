import React from 'react';
import AdminNavbar from '../../layout/navbar'; // Importation correcte
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProfile = () => {
  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <h1>Edit Profile</h1>
        <form>
          {/* Ajoutez les champs de formulaire ici pour l'édition du profil */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
