import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar';
import ClientNavbar from '../../layout/navbarClient';

const InfosClient = ({ isAdmin }) => {
  // Récupère les informations de l'utilisateur depuis le localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const clientId = user?.id_client; // Assurez-vous que l'ID est stocké sous 'id_client'
  const navigate = useNavigate();

  const [clientInfo, setClientInfo] = useState({
    id: clientId,
    nom: '',
    prenom: '',
    email: ''
  });

  useEffect(() => {

    if (clientId) {
      // Effectue une requête GET pour récupérer les informations du client
      axios.get(`http://localhost:8080/api/clients/${clientId}`)
      .then(response => {
          const data = response.data;
          setClientInfo({
            id: data.id,
            nom: data.nom,
            prenom: data.prenom,
            email: data.email
          });
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des informations du client:', error);
        });
    }
  }, [clientId]);

  const handleViewHistory = () => {
    navigate('/historique', { state: { clientId: clientInfo.id, isClient: !isAdmin } });
  };

  return (
    <div>
      {isAdmin ? <AdminNavbar userEmail="admin@example.com" /> : <ClientNavbar userEmail={clientInfo.email} />}
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
