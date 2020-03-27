import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { Link, useHistory } from 'react-router-dom';
// npm install react-icons -> para instalar todos os pacotes de icones pro react

export default function Logon() {
    const [id, setID] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        await api.post('login', { id })
        .then(response => {
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        })
        .catch(error => {
            alert("Falha no Login");
        })
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" 
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    {/* Com o Link ele não recarrega a página, apenas troca de rota */}
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro.
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}