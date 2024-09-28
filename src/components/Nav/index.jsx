import { HeaderCabecalho, DivCabecalho } from "./nav-styled";
import { Link } from "react-router-dom";
import PesquisaIcone from "../../assets/images/logo-pesquisa.png";
import LogoFormulae from "../../assets/images/logo-formulae.png";
import MenuHamburger from "./MenuHamburger";


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