import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import AdminNavbar from '../../layout/navbar';

const initialDemandes = [
  { id: 1, client: 'Loubna Sghir', type: 'Nouvel Abonnement', description: 'Demande pour un nouvel abonnement Premium.', etat: 'En attente', reponseAdmin: '' },
  { id: 2, client: 'Ikram Ghazal', type: 'Résiliation', description: 'Demande pour résilier un abonnement.', etat: 'En attente', reponseAdmin: '' },
];

const DemandManagement = () => {
  const [demandes, setDemandes] = useState(initialDemandes);
  const [selectedDemande, setSelectedDemande] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reponseAdmin, setReponseAdmin] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (demande) => {
    setSelectedDemande(demande);
    setReponseAdmin(demande.reponseAdmin || '');
    setShowModal(true);
  };

  const handleSubmitResponse = () => {
    const updatedDemandes = demandes.map((d) =>
      d.id === selectedDemande.id ? { ...d, etat: 'Traitée', reponseAdmin } : d
    );
    setDemandes(updatedDemandes);
    setShowModal(false);
  };

  const handleEtatChange = (id, newEtat) => {
    const updatedDemandes = demandes.map((demande) =>
      demande.id === id ? { ...demande, etat: newEtat } : demande
    );
    setDemandes(updatedDemandes);
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@redal.com" />
      <div className="container mt-4">
        <h2>Gestion des Demandes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Type de demande</th>
              <th>Description</th>
              <th>État</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande) => (
              <tr key={demande.id}>
                <td>{demande.id}</td>
                <td>{demande.client}</td>
                <td>{demande.type}</td>
                <td>{demande.description}</td>
                <td>
                  <Form.Select
                    value={demande.etat}
                    onChange={(e) => handleEtatChange(demande.id, e.target.value)}
                    disabled={demande.etat === 'Traitée'}
                  >
                    <option value="En attente">En attente</option>
                    <option value="traitée">traitée</option>
                    <option value="rejetée">rejetée</option>
                  </Form.Select>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(demande)}
                    disabled={demande.etat === 'Traitée'}
                  >
                    Répondre
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Modal pour répondre à la demande */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Répondre à la demande</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="reponseAdmin">
              <Form.Label>Réponse de l'admin</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reponseAdmin}
                onChange={(e) => setReponseAdmin(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fermer
            </Button>
            <Button variant="primary" onClick={handleSubmitResponse}>
              Envoyer Réponse
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DemandManagement;
