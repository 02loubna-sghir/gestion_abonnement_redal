import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import './App.css';
import SignUpPage from './pages/SIGNUP';
//import SubscriptionHistory from './components/SubscriptionHistory'; // Assurez-vous de créer ce composant
import AdminHome from './pages/admin/accueil';
import ClientManagement from './pages/admin/gestionClients';
import Historique from './pages/historique';
import AccueilC from './pages/client/accueilC';
import InfosClient from './pages/client/infosC';
function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin/accueil" element={<AdminHome />} />
            <Route path="/admin/gestionC" element={<ClientManagement  />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/accueilC" element={<AccueilC />} />
            <Route path="/infos-client" element={<InfosClient/>} />
            </Routes>
        </div>
      </Router>
  );
}
export default App;