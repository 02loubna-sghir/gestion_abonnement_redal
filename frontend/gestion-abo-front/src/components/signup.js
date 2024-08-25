import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// Corrected the import paths
import leftLogo from '../assets/téléchargement.png';
import rightLogo from '../assets/veolia-logo.png';

const Registration = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%', backgroundColor: '#f0f0f0' }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <img src={leftLogo} alt="Left Logo" style={{ height: '50px', marginRight: '10px' }} />
          <img src={rightLogo} alt="Right Logo" style={{ height: '120px', transform: '100px' }} />
        </div>
    
        <h2 className="text-center mb-4" style={{ color: '#b22222' }}>Inscription</h2>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="firstName" className="form-label visually-hidden">Prénom</label>
            <div className="input-group">
              <span className="input-group-text" id="firstName-addon" style={{ backgroundColor: '#b22222', color: '#fff' }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Entrez votre prénom"
                required
                aria-describedby="firstName-addon"
              />
            </div>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="lastName" className="form-label visually-hidden">Nom</label>
            <div className="input-group">
              <span className="input-group-text" id="lastName-addon" style={{ backgroundColor: '#b22222', color: '#fff' }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Entrez votre nom"
                required
                aria-describedby="lastName-addon"
              />
            </div>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email" className="form-label visually-hidden">Email</label>
            <div className="input-group">
              <span className="input-group-text" id="email-addon" style={{ backgroundColor: '#b22222', color: '#fff' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Entrez votre email"
                required
                aria-describedby="email-addon"
              />
            </div>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="form-label visually-hidden">Mot de passe</label>
            <div className="input-group">
              <span className="input-group-text" id="password-addon" style={{ backgroundColor: '#b22222', color: '#fff' }}>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Entrez votre mot de passe"
                required
                aria-describedby="password-addon"
              />
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="form-label visually-hidden">Confirmer mot de passe</label>
            <div className="input-group">
              <span className="input-group-text" id="confirmPassword-addon" style={{ backgroundColor: '#b22222', color: '#fff' }}>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirmez votre mot de passe"
                required
                aria-describedby="confirmPassword-addon"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-danger w-100 mb-3">S'inscrire</button>
        </form>
        <div className="text-center mt-3">
          <a href="/" className="text-decoration-none" style={{ color: '#b22222' }}>Déjà membre? Connectez-vous</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
