import React from 'react';
import AdminNavbar from '../layout/navbar';
 


const Historique = ({ location }) => {
  const { clientId } = location.state || {};

  // Simuler les données de l'historique
  const historiqueData = [
    { date: '2024-01-01', abonnement: 'Premium', volume: '50 m³', prix: '500 MAD' },
    { date: '2024-02-01', abonnement: 'Premium', volume: '50 m³', prix: '500 MAD' },
    // Ajoutez d'autres entrées d'historique ici
  ];

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <h2>Historique des Abonnements - Client ID: {clientId}</h2>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type d'Abonnement</th>
              <th>Volume (m³)</th>
              <th>Prix (MAD)</th>
            </tr>
          </thead>
          <tbody>
            {historiqueData.map((historique, index) => (
              <tr key={index}>
                <td>{historique.date}</td>
                <td>{historique.abonnement}</td>
                <td>{historique.volume}</td>
                <td>{historique.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historique;
