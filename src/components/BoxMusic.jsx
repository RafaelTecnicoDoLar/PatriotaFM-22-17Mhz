import HolyWars from "../assets/albuns/HolyWars.jpeg"
import HolyWarsmp3 from "../assets/audio/Holywars.mp3"

import CrackCocaine from "../assets/albuns/CrackCocaine.jpeg"
import CrackCocainemp3 from "../assets/audio/CrackCocaine.mp3"

import PaperCut from "../assets/albuns/Papercut.jpeg"
import PaperCutmp3 from "../assets/audio/PaperCut.mp3"

function BoxMusic() {
    return (
        <section>
            <h1 class="Titulo">
                As mais pedidas
            </h1>

            <div class="card">
                <img src={HolyWars} />

                <h2 class="autor">
                    MEGADETH
                </h2>

                <p class="subtitulo">
                    Holy Wars The Punishment Due
                </p>

                <audio controls="controls">
                    <source src={HolyWarsmp3} type="audio/mp3" />
                    seu navegador não suporta HTML5

                </audio>

            </div>

            <div class="card">
                <img src={CrackCocaine} />

                <h2 class="autor">
                    OZZY OSBOURNE
                </h2>

                <p class="subtitulo">
                Crack Cocaine
                </p>

                <audio controls="controls">
                    <source src={CrackCocainemp3} type="audio/mp3" />
                    seu navegador não suporta HTML5

                </audio>

            </div>

            <div class="card">
                <img src={PaperCut} />

                <h2 class="autor">
                    LINKIN PARK
                </h2>

                <p class="subtitulo">
                PaperCut
                </p>

                <audio controls="controls">
                    <source src={PaperCutmp3} type="audio/mp3" />
                    seu navegador não suporta HTML5

                </audio>

            </div>

        </section>
    );
}

export default BoxMusic;