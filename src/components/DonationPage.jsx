import React, { useState } from 'react';
import './css/DonationPage.css';
import { Link } from 'react-router-dom';

const DonationPage = () => {
  const [selectedCharity, setSelectedCharity] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = () => {
    // Aquí debes implementar la lógica para procesar la donación
  };

  return (
    <div className='DonationPage'>
      <div>
        <nav>
          <button><Link to={"/"} >Home</Link></button>
          <button><Link to={"/charity"}>Caridad</Link></button>
        </nav>
      </div>
      <h2>Página de Donación</h2>
      <form>
        <div>
          <label htmlFor="selectedCharity">Selecciona una Organización:</label>
          {/* Aquí debes crear un campo para seleccionar una organización de caridad */}
        </div>
        <div>
          <label htmlFor="donationAmount">Cantidad de Ether:</label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleDonation}>
          Donar
        </button>
      </form>
    </div>
  );
}

export default DonationPage;
