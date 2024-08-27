import React, { useState } from 'react';
import AdminNavbar from '../../layout/navbar'; // Chemin corrigé
import { FaEdit, FaTrashAlt, FaPlusCircle, FaEye, FaEyeSlash, FaHistory } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const clientsData = [
  { id: 1, nom: 'sghir', prenom: 'loubna', adresseMail: 'loubna@gmail.com', typeAbonnement: 'Premium', volume: '50 m³', prixAbonnement: '500 MAD', motDePasse: 'monMotDePasse' },
  { id: 2, nom: 'ghazal', prenom: 'ikram', adresseMail: 'ikram@hotmail.com', typeAbonnement: 'Basic', volume: '30 m³', prixAbonnement: '300 MAD', motDePasse: 'monMotDePasse' },
  { id: 3, nom: 'elmrabti', prenom: 'mina', adresseMail: 'mina@live.com', typeAbonnement: 'Standard', volume: '40 m³', prixAbonnement: '200 MAD', motDePasse: 'monMotDePasse' },
  { id: 4, nom: 'brz', prenom: 'hajar', adresseMail: 'hajar@live.com', typeAbonnement: 'Standard', volume: '40 m³', prixAbonnement: '400 MAD', motDePasse: 'monMotDePasse' },
];

const ClientManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Utilisation de useNavigate

  const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd = () => setShowAddModal(false);
  const handleShowEdit = () => setShowEditModal(true);
  const handleCloseEdit = () => setShowEditModal(false);
  const togglePassword = () => setShowPassword(prevState => !prevState);

  const navigateToHistorique = (clientId) => {
    navigate('/historique', { state: { clientId } });
  };

  return (
    <div>
      <AdminNavbar userEmail="sghirLoubna@admin.com" />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Gestion des Clients</h2>
          <button className="btn btn-success" onClick={handleShowAdd}>
            <FaPlusCircle className="me-2" />
            Ajouter Client
          </button>
        </div>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Adresse Mail</th>
              <th>Mot de Passe</th>
              <th>Volume (m³)</th>
              <th>Prix (MAD)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map(client => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.nom}</td>
                <td>{client.prenom}</td>
                <td>{client.adresseMail}</td>
                <td>
                  {showPassword ? client.motDePasse : '******'}
                  <button className="btn btn-link" onClick={togglePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </td>
                <td>{client.volume}</td>
                <td>{client.prixAbonnement}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={handleShowEdit}>
                    <FaEdit /> 
                  </button>
                  <button className="btn btn-secondary btn-sm me-2" onClick={() => navigateToHistorique(client.id)}>
                    <FaHistory /> 
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <FaTrashAlt /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal Ajouter Client */}
        <Modal show={showAddModal} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" id="nom" placeholder="Nom du client" />
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="prenom" placeholder="Prénom du client" />
              </div>
              <div className="mb-3">
                <label htmlFor="adresseMail" className="form-label">Adresse Mail</label>
                <input type="email" className="form-control" id="adresseMail" placeholder="Adresse Mail" />
              </div>
              <div className="mb-3">
                <label htmlFor="motDePasse" className="form-label">Mot de Passe</label>
                <input type="password" className="form-control" id="motDePasse" placeholder="Mot de Passe" />
              </div>
              <div className="mb-3">
                <label htmlFor="volume" className="form-label">Volume (m³)</label>
                <input type="text" className="form-control" id="volume" placeholder="Volume" />
              </div>
              <div className="mb-3">
                <label htmlFor="prixAbonnement" className="form-label">Prix (MAD)</label>
                <input type="text" className="form-control" id="prixAbonnement" placeholder="Prix" />
              </div>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Annuler
              </Button>
              <Button variant="primary" type="submit">
                Ajouter
              </Button>
            </form>
          </Modal.Body>
        </Modal>

        {/* Modal Modifier Client */}
        <Modal show={showEditModal} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" id="nom" placeholder="Nom du client" />
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="prenom" placeholder="Prénom du client" />
              </div>
              <div className="mb-3">
                <label htmlFor="adresseMail" className="form-label">Adresse Mail</label>
                <input type="email" className="form-control" id="adresseMail" placeholder="Adresse Mail" />
              </div>
              <div className="mb-3">
                <label htmlFor="motDePasse" className="form-label">Mot de Passe</label>
                <input type="password" className="form-control" id="motDePasse" placeholder="Mot de Passe" />
              </div>
              <div className="mb-3">
                <label htmlFor="volume" className="form-label">Volume (m³)</label>
                <input type="text" className="form-control" id="volume" placeholder="Volume" />
              </div>
              <div className="mb-3">
                <label htmlFor="prixAbonnement" className="form-label">Prix (MAD)</label>
                <input type="text" className="form-control" id="prixAbonnement" placeholder="Prix" />
              </div>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Annuler
              </Button>
              <Button variant="primary" type="submit">
                Modifier
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ClientManagement;
