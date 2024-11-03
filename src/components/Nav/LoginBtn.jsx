import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { DivLoginMenu, DivLoginUsername, EditIcon, PowerOffIcon, ProfileIcon } from "./nav-styled"
import UsuarioImg from "./../../assets/images/usuario-login.png"
import UsuarioImg1 from "./../../assets/images/usuario-login1.png"
import UsuariaImg from "./../../assets/images/usuaria-login.png"


const LoginBtn = ({handleLogout}) => {

    // Estado para controlar se o dropdown está aberto ou fechado
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Estado para armazenar os dados do usuário logado
    const [usuarioDados, setUsuarioDados] = useState(null);

    // Referência para o elemento do dropdown
    const dropdownRef = useRef(null);

    // Função para alternar a visibilidade do dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Fecha o dropdown se o clique for fora dele
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    // Função para fechar o dropdown ao clicar em um dos links
    const handleMenuItemClick = () => {
        setIsDropdownOpen(false);
    };

    // Função para buscar os dados do usuário logado
    useEffect(() => {
        const fetchUsuarioDados = async () => {
            const usuarioLogado = sessionStorage.getItem("usuario");

            if (usuarioLogado) {
                try {
                    const response = await fetch(`http://localhost:5003/usuarios?usuario=${usuarioLogado}`);
                    const data = await response.json();
                    if (data.length > 0) {
                        setUsuarioDados(data[0]); // Atualiza os dados do usuário no estado
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error);
                }
            }
        };

        fetchUsuarioDados();
    }, []);
    
    // Adiciona o evento de clique ao montar e remove ao desmontar o componente
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef}>
            <DivLoginUsername onClick={toggleDropdown}>
                <div className="username"> {/* [4] Exibe o nome e o email do usuário logado */}
                    <div className="boasvindas-login">
                        <h3>Olá,</h3>
                        <h3 className="nome-login">{usuarioDados ? usuarioDados.nome : "Nome"}</h3>
                    </div>
                    <span>{usuarioDados ? usuarioDados.email : "email"}</span>
                </div>
                <div className="imgCx">
                    <img src={UsuarioImg} alt="Icone Usuario" />
                </div>
            </DivLoginUsername>
            <DivLoginMenu className={isDropdownOpen ? "dropdown" :""}>
                <ul>
                    <li><a href="#" onClick={handleMenuItemClick}><ProfileIcon/>Perfil</a></li>
                    <li><Link to="/editar-conta" onClick={handleMenuItemClick}><EditIcon/>Editar Conta</Link></li>
                    <li className="sair-conta">
                        <a onClick={() => { handleLogout(); handleMenuItemClick(); }}><PowerOffIcon/>Sair</a>
                    </li>
                </ul>
            </DivLoginMenu>
        </div>
    )
}

export default LoginBtn