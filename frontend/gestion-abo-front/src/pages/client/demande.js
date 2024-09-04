import React, { useState } from 'react';
import { Form, Button, Alert, Table } from 'react-bootstrap';
import NavbarC from '../../layout/navbarClient';
import { useLocation } from 'react-router-dom';

const initialDemandes = [
  { id: 1, type: 'Nouvel Abonnement', description: 'Demande pour un nouvel abonnement Premium.', etat: 'Traitée' },
  { id: 2, type: 'Résiliation', description: 'Demande pour résilier un abonnement.', etat: 'En attente' },
];

const FaireDemande = () => {
  const location = useLocation();
  const { id_client: locationIdClient } = location.state || {};
  const user = JSON.parse(localStorage.getItem('user'));
  const id_client = locationIdClient || user?.id_client;

  const [typeDemande, setTypeDemande] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [demandes, setDemandes] = useState(initialDemandes);

  const fetchClientDetails = async (id_client) => {
    try {
      const response = await fetch(`http://localhost:8080/api/clients/${id_client}`)

      if (response.ok) {
        return await response.json();
      } else {
        console.error('Erreur lors de la récupération des détails du client.');
        return null;
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du client :', error);
      return null;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientDetails = await fetchClientDetails(id_client);

    const newDemande = {
      type: typeDemande,
      description,
      client: clientDetails,  
      etat: 'En attente'
    };
console.log(newDemande);
    try {
      const response = await fetch('http://localhost:8080/demande', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDemande),
      });

      if (response.ok) {
        const savedDemande = await response.json();
        setDemandes([...demandes, savedDemande]);
        setMessage('Votre demande a été soumise avec succès.');
        setShowAlert(true);
      } else {
        setMessage('Erreur lors de la soumission de la demande.');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Erreur :', error);
      setMessage('Erreur lors de la soumission de la demande.');
      setShowAlert(true);
    }

    setTypeDemande('');
    setDescription('');
  };

  return (
    <div>
      <NavbarC userEmail="client@exemple.com" />
      <div className="container mt-4">
        <h2>Faire une demande</h2>
        {showAlert && <Alert variant={message.includes('Erreur') ? 'danger' : 'success'}>{message}</Alert>}
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
