import React from 'react';
import './cadastro.css';
import Inicial from './cadastro/Inicial';
import PessoaFisica from './cadastro/PessoaFisica';
import PessoaJuridica from './cadastro/PessoaJuridica';
import Final from './cadastro/Final';



export default class Cadastro extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            conteudo: undefined
        }
    }

    handleMudaConteudo = (valor) => {
        // console.log(valor, "valor do clique")
        this.setState({conteudo: valor}) //forma reduzida
        /* 
        this.setState((valor) => {
            return{
                conteudo: valor
            }
        })
        */
    }

    render() {
        return (
            <div className="cadastro">
                {
                    this.state.conteudo === undefined &&
                    <Inicial alteraConteudo=
                    {this.handleMudaConteudo}/>
                }

                {
                    this.state.conteudo === "PF" && <PessoaFisica conteudo="final" alteraConteudo={this.handleMudaConteudo}/>
                } 
                
                {
                    this.state.conteudo === "PJ" && <PessoaJuridica />
                } 

                {
                    
                    this.state.conteudo === "final" && <Final />
                }
            </div>
        )
    }  
}
