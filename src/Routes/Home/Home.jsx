import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

const Home = () =>{
    const img1 = "https://external.webstorage.gr/mmimages/image/7/29/83/24/1718774-APPLE-IPHONE-14-128GB-BLUE-hero-560x560.jpg"
   const img2 = "https://d8vlg9z1oftyc.cloudfront.net/ailos/image/product/13d41f381890b2d624502523e528bcbc20230224151800/original/iphone-14-pro-max_7386.jpg"
    return(

        <nav>
       <div>
            <title>Fiap Cell</title>

            <div>
            
               <h2> Ofertas imperdiveis de Smartphone </h2>
               <img width={100} src={img1}/>
               <h3>Iphone 14 128gb</h3>
               <p>A partir de 3399,90 em 12x sem juros</p>
               <button><Link to="/Aparelhos/2">Comprar</Link></button>
           
            </div>

            <div>
                <h3> Iphone 14 Pró 256gb</h3>
               <img width={100} src={img2}/>
               <p>A partir de 4999,90 em 12x sem juros</p>
               <button><Link to="/Aparelhos/1">Comprar</Link></button>
            </div>
        </div>
        </nav>
    )
}

export default Home