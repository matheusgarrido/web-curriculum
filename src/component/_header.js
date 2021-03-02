import React from 'react';
import '../css/header.css';

export default function _header() {
  return (
    <header>
      <nav class="navbar navbar-expand-sm">
        <a class="navbar-brand" href="#">
          Teste
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Resumo <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Formação
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cursos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
