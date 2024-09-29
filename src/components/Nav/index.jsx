import MenuHamburger from "./MenuHamburger";
import { HeaderCabecalho, DivCabecalho } from "./nav-styled";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import PesquisaIcone from "../../assets/images/logo-pesquisa.png";
import LogoFormulae from "../../assets/images/logo-formulae.png";


const Nav=()=>{

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Hook para monitorar a rota atual

    // Função para verificar a autenticação
    const checkAuthentication = () => {
        const usuario = sessionStorage.getItem("usuario");
        if (usuario) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    // Atualiza o estado da autenticação ao carregar o componente, ao mudar de rota ou ao alterar o sessionStorage
    useEffect(() => {
        checkAuthentication();

        // Adiciona um evento para verificar as mudanças no sessionStorage
        window.addEventListener("storage", checkAuthentication);

        // Limpa o evento ao desmontar o componente
        return () => {
            window.removeEventListener("storage", checkAuthentication);
        };
    }, [location]); // O hook useEffect agora monitora mudanças de rota

    // Função de logout
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        setIsAuthenticated(false);
        alert("Saindo da Sessão");
        navigate("/");
    };

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
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="login-btn">Sair</button>
                ) : (
                    <Link to="/login" className="login-btn">Entrar</Link>
                )}
            </DivCabecalho>
        </HeaderCabecalho>
    )
}

export default Nav