import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar';
import SubscriptionChart from '../../components/SubscriptionChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminHome.css';

const AdminHome = () => {
  const [totalAbonnements, setTotalAbonnements] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [totalDemandes, setTotalDemandes] = useState(0);
  const [monthlyVolumeData, setMonthlyVolumeData] = useState([]);

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
        setTotalVolume(response.data);
      } catch (error) {
        console.error('Error fetching total volume:', error);
      }
    };

    const fetchTotalDemandes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/demande/count');
        setTotalDemandes(response.data);
      } catch (error) {
        console.error('Error fetching total demandes:', error);
      }
    };

    const fetchMonthlyVolume = async () => {
      try {
        const response = await axios.get('http://localhost:8080/abonnements/volume-by-month');
        console.log('Response from backend:', response.data); 
        
        const monthsOrder = [
          'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
          'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
        ];
    
        const formattedData = Object.keys(response.data)
          .map(month => ({
            month,
            volume: response.data[month],
            monthIndex: monthsOrder.indexOf(month) // Utiliser l'index du mois
          }))
          .sort((a, b) => a.monthIndex - b.monthIndex); // Trier les mois par leur index
    
        setMonthlyVolumeData(formattedData);
      } catch (error) {
        console.error('Error fetching monthly volume data:', error);
      }
    };
    
    
    

    fetchTotalAbonnements();
    fetchTotalVolume();
    fetchTotalDemandes();
    fetchMonthlyVolume();
  }, []);

  const chartData = {
    labels: monthlyVolumeData.map(data => data.month),
    values: monthlyVolumeData.map(data => data.volume)
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="jumbotron text-center bg-primary text-white">
              <h1 className="display-4">Bienvenue, Administrateur !</h1>
              <p className="lead">Voici un aperçu de vos dernières statistiques et alertes.</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Total des abonnements</h5>
                <p className="card-text">{totalAbonnements}</p>
                <p className="card-text text-muted">Nombre total d'abonnements en cours.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Consommation totale</h5>
                <p className="card-text">{totalVolume} m³</p>
                <p className="card-text text-muted">Consommation totale d'eau jusqu'à présent.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-info">
              <div className="card-body">
                <h5 className="card-title">Demandes Reçues</h5>
                <p className="card-text">{totalDemandes}</p>
                <p className="card-text text-muted">Nombre de demandes reçues.</p>
              </div>
              <div className="card-footer text-end">
                <Link to="/gestion-demandes" className="btn btn-light">Voir plus</Link>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default AdminHome;
