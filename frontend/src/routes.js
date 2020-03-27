// npm install react-router-dom -> para utilizar o esquema de rotas

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes() {
    return (
        // BrowserRouter precisa estar por fora de tudo
        <BrowserRouter>
             {/* Switch: Garante que apenas uma rota seja chamada por vez. É descartável */}
            <Switch>
                {/* É preciso colocar 'exact' para não atrapalhar as outras rotas pois ele considera a barra e "ignora" o resto */}
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incident/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}

