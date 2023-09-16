import React from "react"
import { useParams, useNavigate } from "react-router-dom"


const AparelhosDetails = () => {
    const { id } = useParams();

    const navigate = useNavigate()
    const handleContact = () => {
        console.log("Retornando pagina")
        return navigate("/")

    }

    return(
        <div>
            <img
        src="https://external.webstorage.gr/mmimages/image/7/29/83/24/1718774-APPLE-IPHONE-14-128GB-BLUE-hero-560x560.jpg" // Substitua pelo URL da imagem desejada
        alt="Apple iPhone 14"
        width={200}
      />
            <h3>Apple Iphone 14 128gb 5G cor: Preto</h3>
            <p>no valor de 4.999.90 em até 12x sem juros</p>
            <p>Economize 5$ reais por mês com o débito autmoatico</p>
            <p>No plano 15GB. Os preços podem variar conforme a forma de pagamento e opção de fidelização.</p>
            <p>A regra de parcelamento em 21x e 24x é exclusiva para produtos da vitrine com pré-pago igual ou superior a R$2700,00. Demais produtos serão parcelados em 12x no cartão de crédito. 
                Parcelamento em 21x exclusivo para Banco Caixa Econômica Federal até 30/09/2023, Santander até 31/12/2023 e Banco Original até 30/09/2023. 
                Parcelamento em 24x exclusivo para o Banco do Brasil até 15/06/2024 e Bradesco até 30/09/2023.</p>
            <button onClick={handleContact}> Home </button>
            </div>
    )
}

export default AparelhosDetails