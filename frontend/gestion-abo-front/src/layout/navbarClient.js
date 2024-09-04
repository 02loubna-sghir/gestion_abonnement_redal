import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../assets/téléchargement.png';

function NavbarC() {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data
    const clientEmail = user?.email;
    const clientId = user?.id_client; 
  
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/accueilC">
                    <img
                        src={logo}
                        width="80"
                        height="40"
                        className="d-inline-block align-text-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/accueilC">Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/infos-client">Consulter Infos</Nav.Link>
                        <Nav.Link as={Link} to="/faire-demande">Faire Demande</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link disabled className="email-display">
                            {clientEmail}
                        </Nav.Link>
                        <NavDropdown align="end">
                            <NavDropdown.Item as={Link} to="/">Déconnexion</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarC;
