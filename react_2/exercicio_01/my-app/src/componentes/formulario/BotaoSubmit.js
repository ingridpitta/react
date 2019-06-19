import React from 'react'

export default function BotaoSubmit(props) {
    let classes = props.desabilitado ? (props.classeBotao + " botao--desabilitado") : props.classeBotao

    // let classes = props.classeBotao
    // if(props.desabilitado){
    //     classes += " botao--desabilitado"
    // }

    return(
        <button className={classes} onClick={props.acaoBotao}>
            {props.children}
        </button>
    )
}

