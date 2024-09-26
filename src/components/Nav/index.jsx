import { HeaderCabecalho, DivCabecalho } from "./nav-styled";
import { Link } from "react-router-dom";
import PesquisaIcone from "../../assets/logo-pesquisa.png";
import MenuHamburger from "./MenuHamburger";
import LogoFormulae from "../../assets/logo-formulae.png";


const Nav=()=>{

    return(
        <HeaderCabecalho>
            <DivCabecalho>
                <div className="hamburger-search">
                    <MenuHamburger/>
                    <img src={PesquisaIcone} alt="Icone de Pesquisa" />
                </div>
                <Link href="/" className="logo">
                    <img src={LogoFormulae} alt="" />
                </Link>
                <Link to='/login' className="login-btn">Entrar</Link>
            </DivCabecalho>
        </HeaderCabecalho>
    )
}

export default Nav