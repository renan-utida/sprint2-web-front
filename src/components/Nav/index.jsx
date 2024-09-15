import { HeaderCabecalho, DivCabecalho } from "./nav-styled"
import PesquisaIcone from "../../assets/logo-pesquisa.png"
import MenuHamburger from "./MenuHamburger"


const Nav=()=>{

    return(
        <HeaderCabecalho>
            <DivCabecalho>
                <div className="hamburger-search">
                    <MenuHamburger/>
                    <img src={PesquisaIcone} alt="Icone de Pesquisa" />
                </div>
                <a href="/" className="logo">Logo</a>
                <button href="#" className="login">
                    <span>Entrar</span>
                </button>
            </DivCabecalho>
        </HeaderCabecalho>
    )
}

export default Nav