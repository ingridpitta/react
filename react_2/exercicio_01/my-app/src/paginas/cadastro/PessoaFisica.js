import React from 'react'
import Grupo from '../../componentes/formulario/Grupo'
import BotaoSubmit from '../../componentes/formulario/BotaoSubmit';



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
        this.props.alteraConteudo(this.props.conteudo)
        // console.log("enviou")
    }

    handleChange = (nomeDoInput, valorDoInput, erro="") => {
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }

    estaDesabilitado = () => {
        //Destructing
        const {nomeSobrenome, numeroCpf, dataNascimento, email, senha} = this.state

        if(!nomeSobrenome.valor||nomeSobrenome.erro||!numeroCpf.valor||numeroCpf.erro||!dataNascimento.valor||dataNascimento.erro||!email.valor||email.erro||!senha.valor|| senha.erro){
            return true
        }else{
            return false
        }
    }

    render() {
        const desabilitado = this.estaDesabilitado()
        return (
            <div className="pagina">
                <h2>Cadastro Pessoa Física</h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div>
                        <Grupo erro={this.state.nomeSobrenome.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="nomeSobrenome">
                                Nome Completo:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                type="text" 
                                className="campo" 
                                id="nomeSobrenome" 
                                placeholder="Nome" 
                                value={this.state.nomeSobrenome.valor} 
                                name="nomeSobrenome" 
                                onChange={this.handleChange} 
                            />
                        </Grupo>
                    </div>
                    <div>
                        <Grupo erro={this.state.numeroCpf.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="numeroCpf">
                                CPF:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                type="text" 
                                className="campo" 
                                id="numeroCpf"
                                placeholder="000.000.000-00" 
                                value={this.state.numeroCpf.valor} 
                                name="numeroCpf" 
                                onChange={this.handleChange} 
                            />
                        </ Grupo>
                    </div>
                    <div>
                        <Grupo erro={this.state.dataNascimento.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="dataNascimento">
                                Data de nascimento:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                className="campo" 
                                type="text" 
                                id="dataNascimento"
                                placeholder="dd/mm/aaaa" 
                                value={this.state.dataNascimento.valor} 
                                name="dataNascimento" 
                                onChange={this.handleChange} 
                            />
                        </ Grupo>
                    </div>
                    <div>
                        <Grupo erro={this.state.email.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="email">
                                Email:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                className="campo" 
                                type="email" 
                                id="email"
                                placeholder="email@email.com" 
                                value={this.state.email.valor} 
                                name="email" 
                                onChange={this.handleChange}  
                            />
                        </Grupo>
                    </div>
                    <div>
                        <Grupo erro={this.state.senha.erro}>
                            <Grupo.Legenda
                                htmlForLegenda="senha">
                                senha:
                            </Grupo.Legenda>
                            <Grupo.CaixaTexto
                                required={true}
                                className="campo" 
                                type="password" 
                                id="senha"
                                placeholder="Senha" 
                                value={this.state.senha.valor} 
                                name="senha" 
                                onChange={this.handleChange}  
                            />
                        </Grupo>
                    </div>
                    <BotaoSubmit desabilitado={desabilitado}
                    acaoBotao={this.handleSubmit} classeBotao="botao">
                        Enviar
                    </BotaoSubmit>
                </form>
            </div>
        )
    }
}