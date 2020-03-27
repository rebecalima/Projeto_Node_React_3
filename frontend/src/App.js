// import React, { useState } from 'react';
import React from 'react';
// import Logon from './pages/Logon';

import './global.css'

// import Header from './Header';

// JSX(JavaScript XML) -> HTML está entregado dentro do JS

/** CONCEITOS NO REACT
 * 
 * Componentes: Dentro do REACT é uma função. ex abaixo: <App />
 * 
 * Propriedades: Tem a mesma sintaxe de atributos do js, 
 * porém os atributos são passados para os componentes
 * 
 * Estado: O conceito diz que o estado é uma informação que será mantida pelo componente.
 * Toda vez que o estado é alterado, o componente irá renderizar outra vez.
 * 
 * Imutabilidade: Está intimamente ligada com o estado. Por questão de perfomance, não é possível 
 * manipular o valor do estado de forma direta. É preciso sobrepor o valor, alterando assim o estado.
 * 
 * useState: Serve para alterar o estado do componente (o valor de alguma variável de estado).
 * Quando ele é usado é retornado um array com duas posições Array [valor(valor do estado), funcao(que atualiza o estado)].
*/
import Routes from './routes';

function App() {

  // PARTE DO EXEMPLO 3
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  return (
    <Routes />
    // EXEMPLO 1 - Utilizando propriedades (sem desestruturação)
    // <Header title="Semana Omnistack"/>

    // EXEMPLO 2 - Utilizando propriedades obtendo o conteudo todo de dentro da tag
    // <Header>
    //   Semana Omnistack
    // </Header>

    // EXEMPLO 3 - Utilizando estado
    // <div>
    //   <Header>Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    // <Logon />
  );
}

export default App;
