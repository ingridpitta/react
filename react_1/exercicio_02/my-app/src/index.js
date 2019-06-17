//Importar arquivos que serão utilizados
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img01 from './img/img01.jpg';
import img02 from './img/img02.png';
import * as serviceWorker from './serviceWorker';

// let contadorNum = 500;
// const nome = {
//     primeiroNome: "Ingrid",
//     sobrenome: "Pitta",
// }

// function nomeCompleto(nome) {
//     if(nome) {
//     return nome.primeiroNome + ' ' + nome.sobrenome;
//     }else{
//     return 'Desconhecido'
//     }
    
// }

// const exercicio=
//                 <div className="contador">
//                     <h1>Count: {contadorNum}</h1>
//                     {/* <h2>{nome.primeiroNome} {nome.sobrenome}</h2> */}
//                     <h3>Olá, {nomeCompleto(null)}</h3>
//                     <div>
//                         <button>+1</button>
//                         <button>-1</button>
//                         <button>Reset</button>
//                     </div>
//                 </div>


// ReactDOM.render(exercicio, document.getElementById('root'));

// function Bemvinda(props){ //Nome do componente sempre em letra maiúscula;
//     //Todo componente precisa de uma propriedade que é sempre um objeto;
//     console.log(props)
//     return (
//         <div>
//         <h1>Oi, {props.apelido}</h1> 
//         {/* //Todo componente retorna um Jsx; */}
//     </div>
//     )  
// }

// ReactDOM.render(<Bemvinda apelido="Ingrid" idade="26" saudacao="Olá!" signo="Peixes"/>, document.getElementById('root')); //React renderiza o componente e aqui são declarados os atributos das props;

//Componente(Base)
function Cards(props){
    return (
        <div className = "comentario">
            <img src={props.imagem} alt= {props.descricao} className="comentario__perfil"/>
            <div>
            <h1 className="comentario__nome">{props.nome}</h1>
            <h2 className="comentario__subtitulo">{props.comentario}</h2>
            <hr/>
            <p>{props.perfil}</p>
            </div>
        </div>
    )
}

// O componente pode ser declarado utilizando class, mas ao chamar as props devemos utilizar (this.props.propriedad_desejada)
// class Cards extends React.Component{
//     render() {
//         return (
//             <div className = "comentario">
//                 <img src={this.props.imagem} alt= {this.props.descricao} className="comentario__perfil"/>
//                 <div>
//                 <h1 className="comentario__nome">{this.props.nome}</h1>
//                 <h2 className="comentario__subtitulo">{this.props.comentario}</h2>
//                 <hr/>
//                 <p>{this.props.perfil}</p>
//                 </div>
//             </div>
//         )
//     }
// }

//Layout com componentes 
function App(){
    return (
        <div>
            <Cards 
            nome="Mellina"
            comentario="AMEI ESSE VÍDEO QUERO +++"
            perfil="Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! In elementis mé pra quem é amistosis quis leo."
            imagem={img01}
            descricao = "gata mellina"
            />

        <Cards 
            nome="Joana"
            comentario="Meh aCHEI NEEEM MAis ou Mennox"
            perfil="Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! In elementis mé pra quem é amistosis quis leo."
            imagem={img02}
            descricao = "gata joana"
            />
        </div>
    )
    
}

//Atribui características(propriedades) dos objetos React à classe especificada;
class Chocolate extends React.Component {
    render() {
        return (
            <div>
                <h1>Reprograma - Chocolate</h1>
                {/* componente já criado sendo chamado */}
                <Cards 
                nome="Joana"
                comentario="Meh aCHEI NEEEM MAis ou Mennox"
                perfil="Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! In elementis mé pra quem é amistosis quis leo."
                imagem={img02}
                descricao = "gata joana"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
