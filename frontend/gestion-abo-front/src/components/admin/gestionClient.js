import React, { useState } from 'react';
import AdminNavbar from '../../layout/navbar';


import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

const clientsData = [
  { id: 1, nom: 'Dupont', prenom: 'Jean', adresse: '123 Rue de Paris', typeAbonnement: 'Premium', prixAbonnement: '50€' },
  { id: 2, nom: 'Martin', prenom: 'Marie', adresse: '456 Avenue des Champs', typeAbonnement: 'Basic', prixAbonnement: '30€' },
  { id: 3, nom: 'Bernard', prenom: 'Pierre', adresse: '789 Boulevard Saint-Michel', typeAbonnement: 'Standard', prixAbonnement: '40€' },
  // Ajoutez d'autres clients ici
];

const ClientManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = (client) => {
    setCurrentClient(client);
    setShowEditModal(true);
  };

  const handleAddClient = () => {
    // Logic to add a client
    handleAddClose();
  };

  const handleEditClient = () => {
    // Logic to edit a client
    handleEditClose();
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@example.com" />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Gestion des Clients</h2>
          <button className="btn btn-success" onClick={handleAddShow}>
            <FaPlusCircle className="me-2" />
            Ajouter Client
          </button>
        </div>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Adresse</th>
              <th>Type d'Abonnement</th>
              <th>Prix d'Abonnement</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map(client => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.nom}</td>
                <td>{client.prenom}</td>
                <td>{client.adresse}</td>
                <td>{client.typeAbonnement}</td>
                <td>{client.prixAbonnement}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditShow(client)}>
                    <FaEdit /> 
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <FaTrashAlt /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal pour Ajouter un Client */}
      <Modal show={showAddModal} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom" />
            </Form.Group>
            <Form.Group controlId="formPrenom" className="mt-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrez le prénom" />
            </Form.Group>
            <Form.Group controlId="formAdresse" className="mt-3">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Entrez l'adresse" />
            </Form.Group>
            <Form.Group controlId="formTypeAbonnement" className="mt-3">
              <Form.Label>Type d'Abonnement</Form.Label>
              <Form.Control type="text" placeholder="Entrez le type d'abonnement" />
            </Form.Group>
            <Form.Group controlId="formPrixAbonnement" className="mt-3">
              <Form.Label>Prix d'Abonnement</Form.Label>
              <Form.Control type="text" placeholder="Entrez le prix d'abonnement" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleAddClient}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal pour Modifier un Client */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" defaultValue={currentClient?.nom} />
            </Form.Group>
            <Form.Group controlId="formPrenom" className="mt-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" defaultValue={currentClient?.prenom} />
            </Form.Group>
            <Form.Group controlId="formAdresse" className="mt-3">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" defaultValue={currentClient?.adresse} />
            </Form.Group>
            <Form.Group controlId="formTypeAbonnement" className="mt-3">
              <Form.Label>Type d'Abonnement</Form.Label>
              <Form.Control type="text" defaultValue={currentClient?.typeAbonnement} />
            </Form.Group>
            <Form.Group controlId="formPrixAbonnement" className="mt-3">
              <Form.Label>Prix d'Abonnement</Form.Label>
              <Form.Control type="text" defaultValue={currentClient?.prixAbonnement} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleEditClient}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ClientManagement;
