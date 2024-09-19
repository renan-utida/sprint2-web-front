import { HeaderCabecalho, DivCabecalho } from "./nav-styled";
import { Link } from "react-router-dom";
import PesquisaIcone from "../../assets/logo-pesquisa.png";
import MenuHamburger from "./MenuHamburger";


const Nav=()=>{

    return(
        <HeaderCabecalho>
            <DivCabecalho>
                <div className="hamburger-search">
                    <MenuHamburger/>
                    <img src={PesquisaIcone} alt="Icone de Pesquisa" />
                </div>
                <Link href="/" className="logo">Logo</Link>
                <button href="#" className="login">
                    <span>Entrar</span>
                </button>
            </DivCabecalho>
        </HeaderCabecalho>
    )
}

export default Nav