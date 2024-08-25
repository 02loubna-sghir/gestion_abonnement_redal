import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import './App.css';
import SignUpPage from './pages/SIGNUP';
function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;