import { useState, useEffect, useRef } from "react";

import { DivLoginMenu, DivLoginUsename } from "./nav-styled"
import UsuarioImg from "./../../assets/images/usuario-login.png"
import UsuarioImg1 from "./../../assets/images/usuario-login1.png"
import UsuariaImg from "./../../assets/images/usuaria-login.png"


const LoginBtn = ({handleLogout}) => {

    // Estado para controlar se o dropdown está aberto ou fechado
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    // Adiciona o evento de clique ao montar e remove ao desmontar o componente
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef}>
            <DivLoginUsename onClick={toggleDropdown}>
                <div className="username">
                    <h3>Nome</h3>
                    <span>email</span>
                </div>
                <div className="imgCx">
                    <img src={UsuarioImg} alt="Icone Usuario" />
                </div>
            </DivLoginUsename>
            <DivLoginMenu className={isDropdownOpen ? "dropdown" :""}>
                <ul>
                    <li><a href="">Perfil</a></li>
                    <li><a href="">Cx de Entrada</a></li>
                    <li><a href="">Configuracoes</a></li>
                    <li><a href="">Ajuda</a></li>
                    <li><a onClick={handleLogout}>Sair da Conta</a></li>
                </ul>
            </DivLoginMenu>
        </div>
    )
}

export default LoginBtn