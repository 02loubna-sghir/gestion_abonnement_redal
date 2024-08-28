import React, { useState } from 'react';
import { Form, Button, Alert, Table } from 'react-bootstrap';
import NavbarC from '../../layout/navbarClient';

const initialDemandes = [
  { id: 1, type: 'Nouvel Abonnement', description: 'Demande pour un nouvel abonnement Premium.', etat: 'Traitée' },
  { id: 2, type: 'Résiliation', description: 'Demande pour résilier un abonnement.', etat: 'En attente' },
];

const FaireDemande = () => {
  const [typeDemande, setTypeDemande] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [demandes, setDemandes] = useState(initialDemandes);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulation d'envoi de demande
    console.log('Demande soumise :', { typeDemande, description });

    // Ajouter la nouvelle demande à l'historique
    const newDemande = {
      id: demandes.length + 1,
      type: typeDemande,
      description,
      etat: 'En attente',
    };
    setDemandes([...demandes, newDemande]);

    setShowAlert(true);
    setMessage('Votre demande a été soumise avec succès.');

    // Réinitialiser le formulaire
    setTypeDemande('');
    setDescription('');
  };

  return (
    <div>
      <NavbarC userEmail="client@exemple.com" />
      <div className="container mt-4">
        <h2>Faire une demande</h2>
        {showAlert && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="typeDemande" className="mb-3">
            <Form.Label>Type de demande</Form.Label>
            <Form.Control
              as="select"
              value={typeDemande}
              onChange={(e) => setTypeDemande(e.target.value)}
            >
              <option value="">Sélectionnez un type de demande</option>
              <option value="Nouvel Abonnement">Nouvel Abonnement</option>
              <option value="Résiliation">Résiliation</option>
              <option value="Modification d'Abonnement">Modification d'Abonnement</option>
              <option value="Demande de Rechargement">Demande de Rechargement</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Entrez la description de la demande"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Soumettre
          </Button>
        </Form>

        <h3 className="mt-5">Historique des Demandes</h3>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type de demande</th>
              <th>Description</th>
              <th>État</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande) => (
              <tr key={demande.id}>
                <td>{demande.id}</td>
                <td>{demande.type}</td>
                <td>{demande.description}</td>
                <td>{demande.etat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FaireDemande;
