import React from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './horoscopo.css';

function Horoscopo({ signo, fecha, imagen, descripcion }) {
  return (
    <div className="horoscopo-card">
      <img src={imagen} alt={signo} />
      <h2>{signo}</h2>
      <p style={{color:'white'}}>Fecha: {fecha}</p>
      <p>{descripcion}</p>
    </div>
  );
}

Horoscopo.propTypes = {
  signo: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default Horoscopo;

