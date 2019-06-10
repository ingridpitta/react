import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contadorNum = 500;
const nome = {
    primeiroNome: "Ingrid",
    sobrenome: "Pitta",
}

function nomeCompleto(nome) {
    if(nome) {
    return nome.primeiroNome + ' ' + nome.sobrenome;
    }else{
    return 'Desconhecido'
    }
    
}

const exercicio=
                <div className="contador">
                    <h1>Count: {contadorNum}</h1>
                    {/* <h2>{nome.primeiroNome} {nome.sobrenome}</h2> */}
                    <h3>Olá, {nomeCompleto(null)}</h3>
                    <div>
                        <button>+1</button>
                        <button>-1</button>
                        <button>Reset</button>
                    </div>
                </div>


ReactDOM.render(exercicio, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
