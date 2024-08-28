import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../layout/navbar'; 
import { FaEdit, FaTrashAlt, FaPlusCircle, FaEye, FaEyeSlash, FaHistory } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

// Données simulées des clients
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
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientForm, setClientForm] = useState({
    nom: '',
    prenom: '',
    adresseMail: '',
    typeAbonnement: '',
    volume: '',
    prixAbonnement: '',
    motDePasse: ''
  });
  const navigate = useNavigate();

  const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd = () => {
    setClientForm({
      nom: '',
      prenom: '',
      adresseMail: '',
      typeAbonnement: '',
      volume: '',
      prixAbonnement: '',
      motDePasse: ''
    });
    setShowAddModal(false);
  };

  const handleShowEdit = (client) => {
    setSelectedClient(client);
    setClientForm(client);
    setShowEditModal(true);
  };

  const handleCloseEdit = () => {
    setSelectedClient(null);
    setClientForm({
      nom: '',
      prenom: '',
      adresseMail: '',
      typeAbonnement: '',
      volume: '',
      prixAbonnement: '',
      motDePasse: ''
    });
    setShowEditModal(false);
  };

  const togglePassword = () => setShowPassword(prevState => !prevState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddClient = () => {
    // Ajouter le client avec les données du formulaire
    // Vous pouvez ajouter une logique pour ajouter le client ici
    handleCloseAdd();
  };

  const handleEditClient = () => {
    // Modifier le client avec les données du formulaire
    // Vous pouvez ajouter une logique pour modifier le client ici
    handleCloseEdit();
  };

  const navigateToHistorique = (clientId) => {
    navigate('/historique', { state: { clientId, isClient: false } });
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
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleShowEdit(client)}>
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
            <Form>
              <Form.Group controlId="formNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  value={clientForm.nom}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="prenom"
                  value={clientForm.prenom}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAdresseMail">
                <Form.Label>Adresse Mail</Form.Label>
                <Form.Control
                  type="email"
                  name="adresseMail"
                  value={clientForm.adresseMail}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTypeAbonnement">
                <Form.Label>Type d'Abonnement</Form.Label>
                <Form.Control
                  type="text"
                  name="typeAbonnement"
                  value={clientForm.typeAbonnement}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formVolume">
                <Form.Label>Volume (m³)</Form.Label>
                <Form.Control
                  type="text"
                  name="volume"
                  value={clientForm.volume}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrixAbonnement">
                <Form.Label>Prix (MAD)</Form.Label>
                <Form.Control
                  type="text"
                  name="prixAbonnement"
                  value={clientForm.prixAbonnement}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMotDePasse">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control
                  type="password"
                  name="motDePasse"
                  value={clientForm.motDePasse}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
              Fermer
            </Button>
            <Button variant="primary" onClick={handleAddClient}>
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal Modifier Client */}
        <Modal show={showEditModal} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  value={clientForm.nom}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="prenom"
                  value={clientForm.prenom}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAdresseMail">
                <Form.Label>Adresse Mail</Form.Label>
                <Form.Control
                  type="email"
                  name="adresseMail"
                  value={clientForm.adresseMail}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTypeAbonnement">
                <Form.Label>Type d'Abonnement</Form.Label>
                <Form.Control
                  type="text"
                  name="typeAbonnement"
                  value={clientForm.typeAbonnement}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formVolume">
                <Form.Label>Volume (m³)</Form.Label>
                <Form.Control
                  type="text"
                  name="volume"
                  value={clientForm.volume}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrixAbonnement">
                <Form.Label>Prix (MAD)</Form.Label>
                <Form.Control
                  type="text"
                  name="prixAbonnement"
                  value={clientForm.prixAbonnement}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMotDePasse">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control
                  type="password"
                  name="motDePasse"
                  value={clientForm.motDePasse}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Fermer
            </Button>
            <Button variant="primary" onClick={handleEditClient}>
              Modifier
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ClientManagement;
