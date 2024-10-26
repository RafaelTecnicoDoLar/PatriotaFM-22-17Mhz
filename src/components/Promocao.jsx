import Promotion from "./Promotion.jsx";

import PromocaoDemais from "../assets/promocao/DEMAIS__1_.jpg"
import Sabadouinvistasitejp from "../assets/promocao/sabadou_invicta_site_JP.jpg"
import Fakeouverdade from "../assets/promocao/FAKE_OU_VERDADEjp.jpg"

function Promocao() {
    return (
        <div>
            <h1 class="Titulo">
                Promoção

            </h1>

            <selection class="selecaopromocao">
                
                    <Promotion imgpromotion={PromocaoDemais} titulopromocao="Segunda - Butique de Carnes e Conveniência Terra América" validade="31/12/2024" participe="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/25d41e35-7d7d-485e-abd5-ff93dcc028f6/730326051" />
                    <Promotion imgpromotion={Sabadouinvistasitejp} titulopromocao="Sabadou - Barbearia Invicta" validade="31/12/2024" participe="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/4b26de37-9990-4e4f-86b3-ea7b82763ee5/741175192" />
                    <Promotion imgpromotion={Fakeouverdade} titulopromocao="Bom Dia Vox - É Fake ou Verdade?" validade="31/12/2024" participe="https://smartradio.cadena.com.br/vox90fm-americana/promotion_inscription/c6aa45ee-d6b2-4638-b85d-6c2a96711ce0/642628756" />

            </selection>
        </div>


    );
}
export default Promocao;