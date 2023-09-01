import React from 'react';
import './css/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div>
        <nav>
          
            <button><Link to={"/charity"}>Caridad</Link></button>
            <button><Link to={"/donation"} >Donar</Link></button>
          
        </nav>
      </div>
      <h1>Bienvenido al Sistema de Donaciones</h1>

      {/* Aquí muestra la lista de organizaciones de caridad registradas */}
    </div>
  );
}

export default HomePage;
