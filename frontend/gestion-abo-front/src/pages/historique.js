import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../layout/navbar';
import ClientNavbar from '../layout/navbarClient';
import { Table } from 'react-bootstrap';

const Historique = () => {
  // KIFACH TJIBI L ID
  const location = useLocation();
  const { id_client: locationIdClient, isClient } = location.state || {};
    const user = JSON.parse(localStorage.getItem('user'));
  const id_client = locationIdClient || user?.id_client;

  const [historiqueData, setHistoriqueData] = useState([]);

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/abonnements/client/${id_client}`);
        setHistoriqueData(response.data);
        console.log(response);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'historique:', error);
      }
    };

    if (id_client) {
      fetchHistorique();
    }
  }, [id_client]);

  const isAdmin = !isClient;

  return (
    <div>
      {isAdmin ? <AdminNavbar userEmail="admin@example.com" /> : <ClientNavbar userEmail={user?.email} />}
      <div className="container mt-5">
        <h2>Historique des Abonnements</h2>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID Abonnement</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Date Début</th>
                  <th>Solde</th>
                  <th>Volume</th>
                  <th>ID Client</th>
                </tr>
              </thead>
              <tbody>
                {historiqueData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id_abonnement}</td>
                    <td>{item.client.nom}</td>
                    <td>{item.client.prenom}</td>
                    <td>{item.date_debut}</td>
                    <td>{item.solde}</td>
                    <td>{item.volume}</td>
                    <td>{item.client.id_client}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historique;
