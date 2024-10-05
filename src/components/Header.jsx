import logo from "../assets/logo/logo.jpg"
import ImgRelogio from "../assets/relogio.png"

function Header() {
    return (
        <header >
            <img class="Logo" src={logo} />

            <nav>
                <a href="" class="itens-menu" >Promoções</a>
                <a href="" class="itens-menu" >Blog</a>
                <a href="" class="itens-menu" >Programação</a>
                <a href="" class="itens-menu" >Anuncie</a>

            </nav>

            <div class="relogio">
                <img height="20rem" src={ImgRelogio} />

                <h1>
                    10:21
                </h1>

            </div>

        </header>
    )
}
export default Header;