import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import AdminNavbar from '../../layout/navbar';
import './DemandManagement.css'; // Assurez-vous d'importer le fichier CSS

const DemandManagement = () => {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fonction pour récupérer les demandes depuis l'API
  const fetchDemandes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/demande');
      setDemandes(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des demandes:', error);
    }
  };

  // Utilisez useEffect pour récupérer les demandes lorsque le composant est monté
  useEffect(() => {
    fetchDemandes();
  }, []);

  // Fonction pour mettre à jour l'état d'une demande dans la base de données
  const updateDemandeEtat = async (id_demande, newEtat) => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:8080/demande/${id_demande}`, {
        etat: newEtat,
      });

      // Mettre à jour l'état local après la mise à jour réussie
      setDemandes((prevDemandes) =>
        prevDemandes.map((demande) =>
          demande.id_demande === id_demande ? { ...demande, etat: newEtat } : demande
        )
      );

      console.log('Demande mise à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la demande:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEtatChange = (id_demande, newEtat) => {
    updateDemandeEtat(id_demande, newEtat);
  };

  const handleSelectChange = (id_demande, newEtat) => {
    // Utilisez handleEtatChange pour mettre à jour l'état sélectionné
    handleEtatChange(id_demande, newEtat);
  };

  return (
    <div>
      <AdminNavbar userEmail="admin@redal.com" />
      <div className="container mt-4">
        <h2>Gestion des Demandes</h2>
        {loading && <p>Chargement...</p>}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Client</th>
              <th>Type de demande</th>
              <th>Description</th>
              <th>État</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande) => (
              <tr key={demande.id_demande}>
                <td>{demande.client ? `${demande.client.nom} ${demande.client.prenom}` : 'Inconnu'}</td>
                <td>{demande.type}</td>
                <td>{demande.description}</td>
                <td>
                  <Form.Select
                    value={demande.etat}
                    onChange={(e) => handleSelectChange(demande.id_demande, e.target.value)}
                    disabled={demande.etat === 'Traitée' || demande.etat === 'Rejetée'}
                  >
                    <option value="En attente">En attente</option>
                    <option value="Traitée">Traitée</option>
                    <option value="Rejetée">Rejetée</option>
                  </Form.Select>
                </td>
                <td>
                  <Button
                    className={demande.etat === 'Rejetée' ? 'button-rejetee' : 'button-primary'}
                    variant={demande.etat === 'Rejetée' ? 'danger' : 'primary'}
                    disabled={demande.etat === 'Traitée' || demande.etat === 'Rejetée'}
                    onClick={() => handleSelectChange(demande.id_demande, demande.etat)}
                  >
                    Répondre
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DemandManagement;
