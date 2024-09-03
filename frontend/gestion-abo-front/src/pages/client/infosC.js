import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar';
import ClientNavbar from '../../layout/navbarClient';

const InfosClient = ({ isAdmin }) => {
  const navigate = useNavigate();

  // Simuler les informations du client
  const clientInfo = {
    id: 1, // Ajoutez un ID pour identifier le client
    nom: 'Doe',
    prenom: 'John',
    email: 'john.doe@example.com',
  };

  const handleViewHistory = () => {
    navigate('/historique', { state: { clientId: clientInfo.id, isClient: !isAdmin } });
  };

  return (
    <div>
      {isAdmin ? <AdminNavbar userEmail="admin@example.com" /> : <ClientNavbar userEmail="client@example.com" />}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div 
              className="card shadow-lg p-3 mb-5 bg-white rounded"
              style={{ border: 'none', borderRadius: '15px' }}
            >
              <div className="card-body">
                <h3 className="card-title text-center mb-4" style={{ color: '#4A90E2' }}>
                  Informations du Client
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="text-muted">Nom:</h5>
                    <p className="font-weight-bold">{clientInfo.nom}</p>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-muted">Prénom:</h5>
                    <p className="font-weight-bold">{clientInfo.prenom}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="text-muted">Adresse Email:</h5>
                    <p className="font-weight-bold">{clientInfo.email}</p>
                  </div>
                </div>
                
                <hr />
                <div className="d-flex justify-content-center">
                  <button 
                    className="btn btn-primary mt-3 px-5" 
                    style={{ borderRadius: '25px' }}
                    onClick={handleViewHistory}
                  >
                    Consulter l'historique de mes abonnements
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfosClient;
