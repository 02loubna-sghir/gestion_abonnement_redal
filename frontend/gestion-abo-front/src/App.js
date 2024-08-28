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
import FaireDemande from './pages/client/demande';
import DemandManagement from './pages/admin/DemandManagement';
import Profile from './pages/admin/profile'; 
import EditProfile from './pages/admin/EditProfile';
import ChangePassword from './pages/admin/ChangePassword';
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
            <Route path="/faire-demande" element={<FaireDemande />} />
            <Route path="/gestion-demandes" element={<DemandManagement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/edit-profile" element={<EditProfile />} />
            <Route path="/admin/change-password" element={<ChangePassword />} />
            </Routes>
        </div>
      </Router>
  );
}
export default App;