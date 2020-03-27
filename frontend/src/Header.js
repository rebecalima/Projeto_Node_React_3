import React from 'react';

// EXEMPLO 1
// export default function Header(props) {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     );
// }

// EXEMPLO 2
// children obtem todo conteúdo que tem dentro da tag. Exemplo disso no App.js
export default function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}