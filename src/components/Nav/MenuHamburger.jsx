import { AngleIcon, CorridaIcon, EventosIcon, FormulaIcon, HomeIcon, LoginIcon, LogoutIcon, MenuCabecalho, NewsIcon, PesquisaIcon, QuizIcon, RaceIcon, SustentabilidadeIcon, TecnologiaIcon } from "./nav-styled";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const MenuHamburger=({isAuthenticated, handleLogout})=>{

    // Estado para controlar se o menu está ativo ou não
    const [menuActive, setMenuActive] = useState(false);

    // Controle do submenu
    const [subMenuActive, setSubMenuActive] = useState(false); 

    const navigate = useNavigate();
    
    // Função para alternar o estado do menu
    const toggleMenu = (event) => {
        event.preventDefault();  // Evita comportamentos indesejados ao clicar
        setMenuActive(!menuActive); // Alterna entre true e false
    };

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => {
        setMenuActive(false);
        setSubMenuActive(false); // Fecha o submenu ao fechar o menu principal
    };

    const toggleSubMenu = () => {
        setSubMenuActive(!subMenuActive); // Alterna a exibição do submenu
    };

    const logout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("usuarioDados");
        // Adicione qualquer outra chave específica de usuário que esteja no sessionStorage
        window.location.reload(); // Opcional, para garantir que os dados antigos não fiquem na memória
    };

    const handleQuizNavigation = () => {
        if (isAuthenticated) {
            navigate("/quiz");
            closeMenu();
        } else {
            navigate("/login");
            closeMenu();
        }
    };

    return(
        <MenuCabecalho>
            <nav id="nav" className={menuActive ? "active" : ""}>
                <button id="btn-menu" onClick={toggleMenu}>
                    <span id="hamburger"></span>
                </button>
                <ul id="menu">
                    <li><Link to="/" onClick={closeMenu}><HomeIcon /><p>Página Principal</p></Link></li>
                    <li><Link to="/formulae" onClick={closeMenu}><FormulaIcon /><p>Fórmula E</p></Link></li>
                    <li><Link to="/proximas-corridas" onClick={closeMenu}><RaceIcon /><p>Próximas Corridas</p></Link></li>
                    <li>
                        <a className="sub-btn" onClick={toggleSubMenu}>
                            <NewsIcon /><p>Notícias</p>
                            <AngleIcon style={{ transform: subMenuActive ? 'rotate(90deg)' : 'rotate(0deg)' }}/>
                        </a>
                        <ul className={`sub-menu ${subMenuActive ? "active" : ""}`}>
                            <li><Link to="/noticia-tecnologia" onClick={closeMenu} className="sub-item"><TecnologiaIcon/>Tecnologia</Link></li>
                            <li><Link to="/noticia-corrida" onClick={closeMenu} className="sub-item"><CorridaIcon/>Corrida</Link></li>
                            <li><Link to="/noticia-eventos" onClick={closeMenu} className="sub-item"><EventosIcon/>Eventos</Link></li>
                            <li><Link to="/noticia-sustentabilidade" onClick={closeMenu} className="sub-item"><SustentabilidadeIcon/>Sustentabilidade</Link></li>
                            <li><Link to="/noticia-pesquisa" onClick={closeMenu} className="sub-item"><PesquisaIcon/>Pesquisa</Link></li>
                        </ul>
                    </li>
                    <li><a onClick={handleQuizNavigation}><QuizIcon /><p>Quiz</p></a></li>
                    {isAuthenticated ? ( 
                        <li><a onClick={() => {handleLogout(); closeMenu(); logout();}}><LogoutIcon /><p>Sair</p></a></li>
                    ) : ( 
                        <li><Link to="/login" onClick={closeMenu}><LoginIcon /><p>Login</p></Link></li> 
                    )}
                </ul>
            </nav>
        </MenuCabecalho>
    )
}

export default MenuHamburger