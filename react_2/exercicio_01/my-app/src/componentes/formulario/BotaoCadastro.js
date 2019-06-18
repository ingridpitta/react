import React from 'react'


export default function BotaoCadastro(props) {
    return (
        <div className="pagina__botao">
            <button className="botao-icone" onClick={() => props.acaoBotao(props.valorImagem)}>
                <img src={props.srcImagem}
                className="botao-imagem"
                alt={props.altImagem}/>
                <span>{props.textoImagem}</span>
            </button>
        </div>
    )
}