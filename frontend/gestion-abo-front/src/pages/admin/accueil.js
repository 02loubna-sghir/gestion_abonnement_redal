import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importer axios
import { Link } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar';
import SubscriptionChart from '../../components/SubscriptionChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminHome.css';

const AdminHome = () => {
  const [totalAbonnements, setTotalAbonnements] = useState(0); // État pour stocker le nombre total d'abonnements

  // Utiliser useEffect pour effectuer la requête GET lors du montage du composant
  useEffect(() => {
    const fetchTotalAbonnements = async () => {
      try {
        const response = await axios.get('http://localhost:8080/abonnements') ; // Remplacez par votre URL API
        console.log('Response data:', response.data); // Ajouter un log pour vérifier les données
        setTotalAbonnements(response.data.length); // Mettre à jour le nombre total d'abonnements
      } catch (error) {
        console.error('Erreur lors de la récupération des abonnements:', error);
      }
    };

    fetchTotalAbonnements();
  }, []); // Le tableau vide [] signifie que l'effet se déclenche uniquement au montage

  // Exemple de données pour le graphique
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [30, 40, 35, 50, 60, 70, 80, 90, 100, 110, 120, 130]
  };

  // Exemple de données pour les demandes non traitées
  const pendingRequests = [
    { id: 1, title: 'Demande de mise à jour du profil', date: '01/08/2024' },
    { id: 2, title: 'Demande de modification du plan d’abonnement', date: '02/08/2024' }
  ];

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
                <p className="card-text">{totalAbonnements}</p> {/* Affichage du nombre total d'abonnements */}
                <p className="card-text text-muted">Nombre total d'abonnements actuels.</p>
              </div>
            </div>
          </div>
          {/* Autres cartes */}
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Consommation Totale</h5>
                <p className="card-text">5678 m³</p>
                <p className="card-text text-muted">Consommation totale d'eau jusqu'à présent.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Demandes Reçues</h5>
                <p className="card-text">2</p>
                <p className="card-text text-muted">Nombre de demandes Reçues.</p>
              </div>
              <div className="card-footer text-end">
                <Link to="/gestion-demandes" className="btn btn-light">Voir plus</Link>
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

        {/* Section des demandes non traitées */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Demandes Non Traitée</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {pendingRequests.map(request => (
                    <li key={request.id} className="list-group-item">
                      <h6 className="mb-1">{request.title}</h6>
                      <p className="mb-1">Date : {request.date}</p>
                      <Link to={`/gestion-demandes`} className="btn btn-sm btn-primary">Voir les détails</Link>
                    </li>
                  ))}
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
