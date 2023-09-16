import React from "react"
import {Link} from "react-router-dom"

export default function CartaoProduto(props) {


    return(
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.marca}</h2>
            <img src={props.img} alt={props.name} width={100} height={100}></img>
            <p>{props.preco}</p>
            
            <Link to={`Aparelhos/${props.id}`}></Link>



          
        </div>

    )
}

