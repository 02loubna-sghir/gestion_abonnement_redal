import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importation pour la navigation
import AdminNavbar from '../../layout/navbar'; // Importation correcte
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'; // Assurez-vous que ce fichier CSS est correctement configuré et dans le même répertoire
import profileImage from '../../assets/IMG_7370.jpg'; // Importation de l'image

const Profile = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour naviguer vers la page d'édition du profil
  const handleEditProfile = () => {
    navigate('/admin/edit-profile'); // Chemin vers la page d'édition du profil
  };

  // Fonction pour naviguer vers la page de changement de mot de passe
  const handleChangePassword = () => {
    navigate('/admin/change-password'); // Chemin vers la page de changement de mot de passe
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">Admin Profile</h4>
              </div>
              <div className="card-body text-center">
                <img
                  src={profileImage} // Utilisation de l'importation pour l'image
                  alt="Profile"
                  className="rounded-circle img-fluid"
                />
                <h5 className="my-3">Sghir Loubna</h5>
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
                  <div className="col-sm-9">admin@REDAL.com</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3"><strong>Phone:</strong></div>
                  <div className="col-sm-9">+123 456 7890</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3"><strong>Role:</strong></div>
                  <div className="col-sm-9">Administrator</div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary"
                      onClick={handleEditProfile} // Ajout du gestionnaire d'événements
                    >
                      Edit Profile
                    </button>
                    <button
                      className="btn btn-secondary ms-2"
                      onClick={handleChangePassword} // Ajout du gestionnaire d'événements
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
