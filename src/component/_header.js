import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

export default function _header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="#">
          Teste
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formacao" className="nav-link">
                Formação
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cursos" className="nav-link">
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
