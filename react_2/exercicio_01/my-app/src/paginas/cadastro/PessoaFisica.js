import React from 'react'
import Legenda from '../../componentes/formulario/Legenda'
import CaixaTexto from '../../componentes/formulario/CaixaTexto'


export default class PessoaFisica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeSobrenome: {
                valor: "",
                erro: ""
            },
            numeroCpf: {
                valor: "",
                erro: ""
            },
            dataNascimento: {
                valor: "",
                erro: ""
            },
            email: {
                valor: "",
                erro: ""
            },
            senha: {
                valor: "",
                erro: ""
            },
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("enviou")
    }

    handleChange = (nomeDoInput, valorDoInput, erro="") => {
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }

    render() {
        return (
            <div className="pagina">
                <h2>Cadastro Pessoa Física</h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div>
                        <Legenda 
                            htmlForLegenda="nomeSobrenome">
                            Nome Completo:
                        </Legenda>
                        <CaixaTexto
                            id="nomeSobrenome" 
                            type="text" 
                            placeholder="Nome" 
                            value={this.state.nomeSobrenome.valor} 
                            name="nomeSobrenome" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Legenda 
                        htmlForLegenda="numeroCpf">
                            CPF:
                        </Legenda>
                        <CaixaTexto
                            id="numeroCpf" 
                            type="text" 
                            placeholder="000.000.000-00" 
                            value={this.state.numeroCpf.valor} 
                            name="numeroCpf" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Legenda 
                        htmlForLegenda="dataNascimento">
                            Data de Nascimento:
                        </Legenda>
                        <CaixaTexto
                            id="dataNascimento" 
                            type="text" 
                            placeholder="dd/mm/aaaa" 
                            value={this.state.dataNascimento.valor} 
                            name="dataNascimento" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Legenda 
                        htmlForLegenda="email">
                            E-mail:
                        </Legenda>
                        <CaixaTexto
                            id="email" 
                            type="email" 
                            placeholder="exemplo@gmail.com" 
                            value={this.state.email.valor} 
                            name="dataNasemailcimento" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Legenda 
                        htmlForLegenda="senha">
                            Senha:
                        </Legenda>
                        <CaixaTexto
                            id="senha" 
                            type="password" 
                            placeholder="Senha" 
                            value={this.state.senha.valor} 
                            name="senha" 
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}