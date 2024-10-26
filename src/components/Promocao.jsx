import Promotion from "./Promotion.jsx";

import PromocaoDemais from "../assets/promocao/DEMAIS__1_.jpg"

function Promocao() {
    return (
        <selection class="selecaopromocao">
            <h1 class="Titulo">
                    Promoção

                </h1>

                <div>
                    <Promotion imgpromotion={PromocaoDemais} titulopromocao="Segunda - Butique de Carnes e Conveniência Terra América" validade="31/12/2024" participe="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/25d41e35-7d7d-485e-abd5-ff93dcc028f6/730326051" />

                </div>

        </selection>

    );
}
export default Promocao;