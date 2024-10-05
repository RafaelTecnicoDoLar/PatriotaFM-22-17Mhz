import Listen from "../assets/albuns/listen-hellskitchen.jpg"
import Sound from "../assets/audio/Listen.mp3"
import barravertical from "../assets/barra-vertical.png"

function HeroSection() {
    return (
        <section class="sabadou" id="imgsabadou">
            <div class="HeroSection">

                <div class="player">
                    <audio controls="controls">
                        <source src={Sound} type="audio/mp3" />
                        seu navegador não suporta HTML5

                    </audio>

                    <h1 class="aovivo">
                        ao vivo
                    </h1>

                </div>

                <img src={barravertical} />

                <img class="imglisten" src={Listen} />

                <div>

                    <h2>
                        Listen - Hellskitchen
                    </h2>

                    <h3 class="frase">
                        Especial Rock Fest SBO
                    </h3>

                </div>

            </div>

        </section>

    );

}
export default HeroSection;