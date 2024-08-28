import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Importez le fichier CSS pour des styles personnalisés
import logo from '/Users/loubnasghir/Documents/GitHub/gestion_abonnement_redal/frontend/gestion-abo-front/src/assets/téléchargement.png';
function NavbarC({ clientEmail }) {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
        <img
             src={logo}
             width="80"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#consult-info">Consulter Infos</Nav.Link>
            <Nav.Link href="#request">Faire Demande</Nav.Link>
            <Nav.Link href="#new-subscription">Nouveau Abonnement</Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Link disabled className="email-display">
              {clientEmail}
            </Nav.Link>
            <NavDropdown  id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#logout">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
