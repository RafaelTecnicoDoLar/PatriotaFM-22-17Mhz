import logo from "../assets/logo/logo.jpg"
import vite from "../assets/Vite.png"
import react from "../assets/React.png"

function Footer() {
    return (
        <footer className="Footer">
            <img class="LogoFooter" src={logo} />
            <div>

                <p>
                    © 2024, Vox 90 FM.

                </p>

                <p>
                    Todos os direitos reservados.

                </p>

                <a className="LinkSiteVox" href="www.vox90.com.br" target="blank">Site Oficial Vox 90.3</a>

            </div>

            <div className="RealizacaoProjeto">
                <h2>
                    Projeto feito utilizando o Vite + React
                </h2>

                <div className="Projeto">



                    <img className="Vite" src={vite} />

                    <h1>
                        +
                    </h1>

                    <img className="React" src={react} />

                </div>
            </div>

        </footer>

    );
}

export default Footer;