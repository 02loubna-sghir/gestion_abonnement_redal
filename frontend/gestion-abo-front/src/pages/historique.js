import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminNavbar from '../layout/navbar';
import ClientNavbar from '../layout/navbarClient';
import { Table } from 'react-bootstrap'; // Assurez-vous d'importer Bootstrap

const Historique = () => {
  const location = useLocation();
  const { clientId, isClient } = location.state || {}; // Récupération des données passées

  // Déterminez la navbar à afficher en fonction de la source
  const isAdmin = !isClient; // Si ce n'est pas un client, alors c'est un admin

  // Exemple de données historiques (vous pouvez conserver la clé 'type' si elle est utilisée ailleurs)
  const historiqueData = [
    { date: '2024-01-15', type: 'Abonnement', volume: '50 m³', prix: '500 MAD' },
    { date: '2024-02-20', type: 'Modification', volume: '30 m³', prix: '300 MAD' },
    { date: '2024-03-10', type: 'Abonnement', volume: '40 m³', prix: '400 MAD' },
    { date: '2024-04-05', type: 'Annulation', volume: '20 m³', prix: '200 MAD' }
  ];

  return (
    <div>
      {isAdmin ? <AdminNavbar userEmail="admin@example.com" /> : <ClientNavbar userEmail="client@example.com" />}
      <div className="container mt-5">
        <h2>Historique des Abonnements</h2>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Volume (m³)</th>
                  <th>Prix (MAD)</th>
                </tr>
              </thead>
              <tbody>
                {historiqueData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.volume}</td>
                    <td>{item.prix}</td>
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
