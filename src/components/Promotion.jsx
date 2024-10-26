function Promotion({ imgpromotion, titulopromocao, validade, participe }) {
    return (
        <div class="infopromocao">
            <div>
            <img class="imgpromocao" src={imgpromotion} />

            <p class="titulopromocao">
                {titulopromocao}

            </p>

            </div>
            
            <div class="subtitulopromocao">
                <p class="valdiadepromocao">
                    válido até:
                    {validade}

                </p>

                <a class="botaoparticipe" href={participe} target="_blank"> Participe</a>

            </div>


        </div>
    );
}
export default Promotion;