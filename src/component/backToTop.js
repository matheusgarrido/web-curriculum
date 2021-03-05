import React, { useEffect } from 'react';
import '../css/backToTop.css';

export default function BackToTop() {
  function returnToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div id="btnBackToTop" onClick={returnToTop}>
      <p id="tooltipButton">Voltar para o topo</p>
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </div>
  );
}
