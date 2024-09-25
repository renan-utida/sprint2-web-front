import { useState } from "react";
import { MenuCabecalho } from "./nav-styled";
import { Link } from "react-router-dom";

const MenuHamburger=()=>{

    // Estado para controlar se o menu está ativo ou não
    const [menuActive, setMenuActive] = useState(false);
    
    // Função para alternar o estado do menu
    const toggleMenu = (event) => {
        event.preventDefault();  // Evita comportamentos indesejados ao clicar
        setMenuActive(!menuActive); // Alterna entre true e false
    };

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => {
        setMenuActive(false);
    };

    return(
        <MenuCabecalho>
            <nav id="nav" className={menuActive ? "active" : ""}>
                <button id="btn-menu" onClick={toggleMenu} onTouchStart={toggleMenu}>
                    <span id="hamburger"></span>
                </button>
                <ul id="menu">
                    <li><Link to="/" onClick={closeMenu}>Página Principal</Link></li>
                    <li><Link to="/formulae" onClick={closeMenu}>Fórmula E</Link></li>
                    <li><Link to="/proximas-corridas" onClick={closeMenu}>Próximas Corridas</Link></li>
                    <li><a href="#" onClick={closeMenu}>Classificação</a></li>
                    <li><Link to="/piloto-page" onClick={closeMenu}>Pilotos</Link></li>
                    <li><a href="#" onClick={closeMenu}>Equipes</a></li>
                    <li><a href="#" onClick={closeMenu}>Sobre</a></li>
                    <li><Link to="/login" onClick={closeMenu}>Quiz</Link></li>
                    <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
                </ul>
            </nav>
        </MenuCabecalho>
    )
}

export default MenuHamburger