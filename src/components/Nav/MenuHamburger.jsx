import { useState } from "react";
import { MenuCabecalho } from "./nav-styled"

const MenuHamburger=()=>{

    // Estado para controlar se o menu está ativo ou não
    const [menuActive, setMenuActive] = useState(false);
    
    // Função para alternar o estado do menu
    const toggleMenu = (event) => {
        event.preventDefault();  // Evita comportamentos indesejados ao clicar
        setMenuActive(!menuActive); // Alterna entre true e false
    };

    return(
        <MenuCabecalho>
            <nav id="nav" className={menuActive ? "active" : ""}>
                <button id="btn-menu" onClick={toggleMenu} onTouchStart={toggleMenu}>
                    <span id="hamburger"></span>
                </button>
                <ul id="menu">
                    <li><a href="#">Página Principal</a></li>
                    <li><a href="#">Fórmula E</a></li>
                    <li><a href="#">Corridas</a></li>
                    <li><a href="#">Dados Pilotos</a></li>
                    <li><a href="#">Quiz</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
        </MenuCabecalho>
    )
}

export default MenuHamburger