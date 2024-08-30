import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import leftLogo from '../assets/téléchargement.png';
import rightLogo from '../assets/veolia-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('client'); // 'client' or 'admin'
  
  const navigate = useNavigate(); // Initialiser useNavigate
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = userType === 'admin'
        ? 'http://localhost:8080/admins/login'
        : 'http://localhost:8080/clients/login';

      const response = await axios.get(url, {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // Rediriger vers la page appropriée
        navigate(userType === 'admin' ? '/admin/accueil' : '/accueilC');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%', backgroundColor: '#f0f0f0' }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <img src={leftLogo} alt="Left Logo" style={{ height: '50px', marginRight: '10px' }} />
          <img src={rightLogo} alt="Right Logo" style={{ height: '120px', marginLeft: '50px' }} />
        </div>

        <h2 className="text-center mb-4" style={{ color: '#b22222' }}>Authentification</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-3">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-group mb-3">
            <label className="form-label">Type d'utilisateur</label>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="client"
                  value="client"
                  checked={userType === 'client'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="client">
                  Client
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="admin"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="admin">
                  Admin
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-danger w-100">Se connecter</button>
        </form>
        
        <div className="text-center mt-4 p-3">
          <a href="/signup" className="text-decoration-none" style={{ color: '#b22222' }}>
            Vous n'êtes pas membre ? inscrivez-vous maintenant
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
