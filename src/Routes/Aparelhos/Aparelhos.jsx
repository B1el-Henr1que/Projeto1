//Nesta página deverá ter uma lista de aparelhos, os dados deverão vir de uma lista criada em um 
//arquivo JS a parte, no mínimo 5 aparelhos;

//Criar uma rota para esta pagina e criar 5 aparelhos para visualização e estilização 
//Trazer a lista de array do javascript para a pagina 
import React from "react"
import {Link} from "react-router-dom"
import {ListaProdutos} from "../../Compenents/ListaProdutos"
import CartaoProduto from "../../Compenents/CartaoProduto"




const Aparelhos = () => {


    return(
        <div>

            {ListaProdutos.map((e) =>{
                return(
             <CartaoProduto key={e.id} {...e}/>
                )
            })}
            {/* <h1>Aparelhos</h1>
            <div>
            
            <h2> Apple Iphone 14 128gb</h2>
            <h3>A partir de 3999,90 em 12x sem juros</h3>
            <p>
                <button><Link to="/Aparelhos/1">Comprar</Link></button>
            </p>
            </div>

            <div>
            <h2> Apple Iphone 14 Pró 256gb</h2>
                <h3>A partir de 5999,90 em 12x </h3>
            <p>
                <button><Link to= "/Aparelhos/2">Comprar</Link></button>

            </p>
            </div>

            <div>
            <p>
            <h2> Apple Ipad 8 128gb</h2>
                <h3>A partir de 2999,90 em 12x sem juros</h3>
                <button><Link to= "/Aparelhos/3">Comprar</Link></button>

            </p>
            </div>

            <div>
                <h2> Apple Ipad 9 128gb</h2>
                <h3>A partir de 4899,90 em 12x sem juros</h3>

            <p>
               <button><Link to= "/Aparelhos/3">Comprar</Link></button> 

            </p>
            </div>

            <div>
            <p>
            <h2> Samsung Z Flip 256gb</h2>
                <h3>A partir de 5699,90 em 12x sem juros</h3>
                <button><Link to= "/Aparelhos/3">Comprar</Link></button>

            </p> 
    </div> */}
        </div>

    )
}

export default Aparelhos