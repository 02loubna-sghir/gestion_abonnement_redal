import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar';
import SubscriptionChart from '../../components/SubscriptionChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminHome.css';

const AdminHome = () => {
  const [totalAbonnements, setTotalAbonnements] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0); // State to store the total volume

  useEffect(() => {
    const fetchTotalAbonnements = async () => {
      try {
        const response = await axios.get('http://localhost:8080/abonnements/count');
        setTotalAbonnements(response.data);
      } catch (error) {
        console.error('Error fetching abonnement count:', error);
      }
    };

    const fetchTotalVolume = async () => {
      try {
        const response = await axios.get('http://localhost:8080/abonnements/sum-volume');
        setTotalVolume(response.data); // Update the total volume
      } catch (error) {
        console.error('Error fetching total volume:', error);
      }
    };

    fetchTotalAbonnements();
    fetchTotalVolume(); // Fetch the total volume when the component mounts
  }, []);

  // Example data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [30, 40, 35, 50, 60, 70, 80, 90, 100, 110, 120, 130]
  };

  // Example data for pending requests
  const pendingRequests = [
    { id: 1, title: 'Profile update request', date: '01/08/2024' },
    { id: 2, title: 'Subscription plan modification request', date: '02/08/2024' }
  ];

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        {/* Welcome section */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="jumbotron text-center bg-primary text-white">
              <h1 className="display-4">Bienvenue, Administrateur !</h1>
              <p className="lead">Voici un aperçu de vos dernières statistiques et alertes.</p>
            </div>
          </div>
        </div>

        {/* Information cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Total des abonnements</h5>
                <p className="card-text">{totalAbonnements}</p> {/* Display total abonnements */}
                <p className="card-text text-muted">Nombre total d'abonnements en cours.</p>
              </div>
            </div>
          </div>
          {/* Other cards */}
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Consommation totale</h5>
                <p className="card-text">{totalVolume} m³</p> {/* Display total volume */}
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

        {/* Subscription chart */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tendances des abonnements</h4>
              </div>
              <div className="card-body">
                <SubscriptionChart data={chartData} />
              </div>
            </div>
          </div>
        </div>

        {/* Pending requests section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Demandes Non Traitées</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {pendingRequests.map(request => (
                    <li key={request.id} className="list-group-item">
                      <h6 className="mb-1">{request.title}</h6>
                      <p className="mb-1">Date: {request.date}</p>
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
