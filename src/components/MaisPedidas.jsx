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

import Territory from "../assets/albuns/Territory.jpg"
import Territorymp3 from "../assets/audio/Territory.mp3"

import TheLegacy from "../assets/albuns/TheLegacy.jpg"
import TheLegacymp3 from "../assets/audio/TheLegacy.mp3"

import WastedYears from "../assets/albuns/WastedYears.jpg"
import WastedYearsmp3 from "../assets/audio/WastedYears.mp3"

import Polly from "../assets/albuns/Polly.jpg"
import Pollymp3 from "../assets/audio/Polly.mp3"

import BeforeIForget from "../assets/albuns/BeforeIForget.jpg"
import BeforeIForgetmp3 from "../assets/audio/BeforeIForget.mp3"

function MaisPedidas() {
    return (
        <div className="containerm-maispedidas">
            <h1 className="Titulo">
                As mais pedidas
            </h1>

            <section className="maispedidas">
                <BoxMusic capa={HolyWars} nome="MEGADETH" musica="Holy Wars The Punishment Due" audio={HolyWarsmp3} />
                <BoxMusic capa={CrackCocaine} nome="OZZY OSBOURNE" musica="Crack Cocaine" audio={CrackCocainemp3} />
                <BoxMusic capa={PaperCut} nome="LINKIN PARK" musica="PaperCut" audio={PaperCutmp3} />
                <BoxMusic capa={Eruption} nome="VAN HALEN" musica="Eruption 2015 Remaster" audio={Eruptionmp3} />
                <BoxMusic capa={KnockinOnHeavensDoor} nome="GUNS N' ROSES " musica=" knockin on heaven's door" audio={KnockinOnHeavensDoormp3} />

                <BoxMusic capa={Territory} nome="SEPULTURA" musica="Territory" audio={Territorymp3} />
                <BoxMusic capa={WastedYears} nome="IRON MAIDEN" musica="Wasted Years - 2015 Remaster" audio={WastedYearsmp3} />
                <BoxMusic capa={TheLegacy} nome="TESTAMENT" musica="The Legacy" audio={TheLegacymp3} />
                <BoxMusic capa={Polly} nome="NIRVANA " musica="Polly" audio={Pollymp3} />
                <BoxMusic capa={BeforeIForget} nome="SLIPKNOT" musica="Before I Forget" audio={BeforeIForgetmp3} />
            </section>

        </div>
    );
}
export default MaisPedidas;