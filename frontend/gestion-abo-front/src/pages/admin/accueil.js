// src/pages/admin/AdminHome.js
import React from 'react';
import AdminNavbar from '../../layout/navbar';
import SubscriptionChart from '../../components/SubscriptionChart'; // Assurez-vous d'importer ce composant
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminHome.css'; // Assurez-vous que ce fichier CSS est correctement configuré

const AdminHome = () => {
  // Exemple de données pour le graphique, vous pouvez les remplacer par vos propres données
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [30, 40, 35, 50, 60, 70, 80, 90, 100, 110, 120, 130]
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        {/* Section de bienvenue */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="jumbotron text-center bg-primary text-white">
              <h1 className="display-4">Bienvenue, Administrateur !</h1>
              <p className="lead">Voici un aperçu de vos statistiques et alertes les plus récentes.</p>
            </div>
          </div>
        </div>

        {/* Cartes d'information */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Total Abonnements</h5>
                <p className="card-text">1,234</p>
                <p className="card-text text-muted">Nombre total d'abonnements actuels.</p>
              </div>
              <div className="card-footer text-end">
                <a href="/admin/subscriptions" className="btn btn-light">Voir plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Consommation Totale</h5>
                <p className="card-text">5678 m³</p>
                <p className="card-text text-muted">Consommation totale d'eau jusqu'à présent.</p>
              </div>
              <div className="card-footer text-end">
                <a href="/admin/consumption" className="btn btn-light">Voir plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Alertes</h5>
                <p className="card-text">2</p>
                <p className="card-text text-muted">Nombre d'alertes importantes.</p>
              </div>
              <div className="card-footer text-end">
                <a href="/admin/alerts" className="btn btn-light">Voir plus</a>
              </div>
            </div>
          </div>
        </div>

        {/* Graphique des abonnements */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tendances des Abonnements</h4>
              </div>
              <div className="card-body">
                <SubscriptionChart data={chartData} />
              </div>
            </div>
          </div>
        </div>

        {/* Section d'alertes récentes */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Alertes Récentes</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <h6 className="mb-1">Alerte 1</h6>
                    <p className="mb-1">Détails de l'alerte 1.</p>
                    <small className="text-muted">Date : 01/01/2024</small>
                  </li>
                  <li className="list-group-item">
                    <h6 className="mb-1">Alerte 2</h6>
                    <p className="mb-1">Détails de l'alerte 2.</p>
                    <small className="text-muted">Date : 02/01/2024</small>
                  </li>
                  {/* Ajoutez plus d'alertes ici */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
