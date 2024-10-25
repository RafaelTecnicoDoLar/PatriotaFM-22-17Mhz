import HolyWars from "../assets/albuns/HolyWars.jpeg"
import HolyWarsmp3 from "../assets/audio/Holywars.mp3"

import CrackCocaine from "../assets/albuns/CrackCocaine.jpeg"
import CrackCocainemp3 from "../assets/audio/CrackCocaine.mp3"

import PaperCut from "../assets/albuns/Papercut.jpeg"
import PaperCutmp3 from "../assets/audio/PaperCut.mp3"

import Eruption from "../assets/albuns/Eruption.jpeg"
import Eruptionmp3 from "../assets/audio/Eruption.mp3"

import KnockinOnHeavensDoor from "../assets/albuns/KnockingOnHeavensDoor.jpeg"
import KnockinOnHeavensDoormp3 from "../assets/audio/knockinOnHeavesDoor.mp3"

function BoxMusic() {
    return (
        <div>
            <h1 class="Titulo">
                As mais pedidas
            </h1>

            <section class="maispedidas">

                <div class="card">
                    <img src={HolyWars} class="imgboxmusic"/>

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
                    <img src={CrackCocaine} class="imgboxmusic"/>

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
                    <img src={PaperCut} class="imgboxmusic"/>

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

                <div class="card">
                    <img src={Eruption} class="imgboxmusic"/>

                    <h2 class="autor">
                        Van Halen
                    </h2>

                    <p class="subtitulo">
                        Eruption 2015 Remaster
                    </p>

                    <audio controls="controls">
                        <source src={Eruptionmp3} type="audio/mp3" />
                        seu navegador não suporta HTML5

                    </audio>

                </div>

                <div class="card">
                    <img src={KnockinOnHeavensDoor} class="imgboxmusic"/>

                    <h2 class="autor">
                        Van Halen
                    </h2>

                    <p class="subtitulo">
                        Eruption 2015 Remaster
                    </p>

                    <audio controls="controls">
                        <source src={KnockinOnHeavensDoormp3} type="audio/mp3" />
                        seu navegador não suporta HTML5

                    </audio>

                </div>

            </section>

        </div>
    );
}

export default BoxMusic;