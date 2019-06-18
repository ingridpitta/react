import React from 'react'

export default function CaixaTexto(props) {
    function valida(e){
        props.onChange(e.target.name, e.target.value)
    }

    return(
        <input 
            className="campo" 
            id={props.id}
            type={props.type}
            placeholder={props.placeholder} 
            value={props.valor} 
            name={props.name}
            onChange={valida}
        />      
    )
}