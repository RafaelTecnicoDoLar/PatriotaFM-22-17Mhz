import BoxMusic from "./BoxMusic.jsx"

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

function MaisPedidas() {
    return (
        <div>
            <h1 class="Titulo">
                As mais pedidas
            </h1>

            <section class="maispedidas">
                <BoxMusic capa={HolyWars} nome="MEGADETH" musica="Holy Wars The Punishment Due" audio={HolyWarsmp3} />
                <BoxMusic capa={CrackCocaine} nome="OZZY OSBOURNE" musica="Crack Cocaine" audio={CrackCocainemp3} />
                <BoxMusic capa={PaperCut} nome="LINKIN PARK" musica="PaperCut" audio={PaperCutmp3} />
                <BoxMusic capa={Eruption} nome="VAN HALEN" musica="Eruption 2015 Remaster" audio={Eruptionmp3} />
                <BoxMusic capa={KnockinOnHeavensDoor} nome="GUNS N' ROSES " musica=" knockin on heaven's door" audio={KnockinOnHeavensDoormp3} />

            </section>

        </div>
    );
}
export default MaisPedidas;