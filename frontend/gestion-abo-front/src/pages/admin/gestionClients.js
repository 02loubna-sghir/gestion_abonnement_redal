import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../../layout/navbar'; 
import { FaEdit, FaTrashAlt, FaPlusCircle, FaEye, FaEyeSlash, FaHistory } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

const ClientManagement = () => {
  const [clientsData, setClientsData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPassword, setShowPassword] = useState({});
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientForm, setClientForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/clients');
        setClientsData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des clients:', error);
      }
    };

    fetchClients();
  }, []);

  const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd = () => {
    setClientForm({
      nom: '',
      prenom: '',
      email: '',
      password: ''
    });
    setShowAddModal(false);
  };

  const handleShowEdit = (client) => {
    setSelectedClient(client);
    setClientForm({
      nom: client.nom,
      prenom: client.prenom,
      email: client.email,
      password: client.password
    });
    setShowEditModal(true);
  };

  const handleCloseEdit = () => {
    setSelectedClient(null);
    setClientForm({
      nom: '',
      prenom: '',
      email: '',
      password: ''
    });
    setShowEditModal(false);
  };

  const togglePassword = (clientId) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [clientId]: !prevState[clientId],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddClient = async () => {
    try {
      const response = await axios.post('http://localhost:8080/clients', clientForm);
      console.log('Client ajouté:', response.data);

      // Met à jour la liste des clients
      setClientsData([...clientsData, response.data]);

      handleCloseAdd();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du client:', error);
    }
  };

  const handleEditClient = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/clients/${selectedClient.id_client}`, clientForm);
      console.log('Client mis à jour:', response.data);

      // Met à jour la liste des clients
      setClientsData((prevClients) =>
        prevClients.map((client) =>
          client.id_client === selectedClient.id_client ? response.data : client
        )
      );

      handleCloseEdit();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du client:', error);
    }
  };

  const handleDeleteClient = async (clientId) => {
    try {
      await axios.delete(`http://localhost:8080/clients/${clientId}`);
      console.log('Client supprimé');

      // Met à jour la liste des clients
      setClientsData(clientsData.filter(client => client.id_client !== clientId));
    } catch (error) {
      console.error('Erreur lors de la suppression du client:', error);
    }
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map(client => (
              <tr key={client.id_client}>
                <td>{client.id_client}</td>
                <td>{client.nom}</td>
                <td>{client.prenom}</td>
                <td>{client.email}</td>
                <td>
                  {showPassword[client.id_client] ? client.password : '******'}
                  <button className="btn btn-link" onClick={() => togglePassword(client.id_client)}>
                    {showPassword[client.id_client] ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleShowEdit(client)}>
                    <FaEdit /> 
                  </button>
                  <button className="btn btn-secondary btn-sm me-2" onClick={() => navigateToHistorique(client.id_client)}>
                    <FaHistory />
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClient(client.id_client)}>
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
                  name="email"
                  value={clientForm.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMotDePasse">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={clientForm.password}
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
                  name="email"
                  value={clientForm.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMotDePasse">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={clientForm.password}
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
