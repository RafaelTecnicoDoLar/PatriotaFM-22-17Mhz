

function BoxMusic({ capa, nome, musica, audio }) {
    return (
        <div>
            <div className="card">
                <img className="imgboxmusic" src={capa} />
                <p className="autor">{nome}</p>
                <p className="subtitulo">{musica}</p>
                <audio controls="controls"> <source src={audio} type="audio/mp3" />seu navegador não suporta HTML5</audio>

            </div>
        </div>

    );
}

export default BoxMusic;