import React, {Component} from 'react'
import Comentario from '../componentes/comentario/Comentario'
import {getComentarios} from '../service/base'
import './chat.css'

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comentarios: undefined, // ou new Array()
        }
    }

    componentDidMount() {
        getComentarios()
        .then(response => {
            console.log(response)
            this.setState({
                comentarios: response.data //Atualiza o state com o array de comentários;
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render(){
        const {comentarios} = this.state
        return (
            <div className="chat">
                {
                    comentarios ? comentarios.map((item,index) => {
                        return <Comentario comentario={item} key={index+"comentario"}/> 
                    }) : <span>Carregando Comentários :D</span>
                }
            </div>
        )
    }
}