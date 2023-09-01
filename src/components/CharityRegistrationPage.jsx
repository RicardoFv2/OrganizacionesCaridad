import React, { useState } from 'react';
import './css/CharityRegistrationPage.css';
import { Link } from 'react-router-dom';

const CharityRegistrationPage = () => {
    const [charityName, setCharityName] = useState('');
    const [charityAddress, setCharityAddress] = useState('');

    const handleRegistration = () => {
        // Aquí debes implementar la lógica para registrar la organización de caridad
    };

    return (
        <div className='CharityRegistrationPage'>
            <div>
                <nav>
                    <button><Link to={"/"} >Home</Link></button>
                    <button><Link to={"/donation"} >Donar</Link></button>
                </nav>
            </div>
            <h2>Registro de Organización de Caridad</h2>
            <form>
                <div>
                    <label htmlFor="charityName">Nombre de la Organización:</label>
                    <input
                        type="text"
                        id="charityName"
                        value={charityName}
                        onChange={(e) => setCharityName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="charityAddress">Dirección Ethereum:</label>
                    <input
                        type="text"
                        id="charityAddress"
                        value={charityAddress}
                        onChange={(e) => setCharityAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="button" onClick={handleRegistration}>
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default CharityRegistrationPage;
