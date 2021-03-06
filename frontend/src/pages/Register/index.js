import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); // Serve para fazer a navegação através de uma função js.

    async function handleRegister(e) {

        e.preventDefault(); // Desabilita o comportamento do formulário de recarregar a página

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        await api.post('ongs', data)
        .then(response => {
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        })
        .catch(error => {
            alert(error);
        });
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Logar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="E-mail" type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}