import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { DivLoginMenu, DivLoginUsername, EditIcon, PowerOffIcon, ProfileIcon } from "./nav-styled"
import UsuarioImg from "./../../assets/images/usuario-login.png"

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

    const logout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("usuarioDados");
        // Adicione qualquer outra chave específica de usuário que esteja no sessionStorage
        window.location.reload(); // Opcional, para garantir que os dados antigos não fiquem na memória
    };

    // Carrega `usuarioDados` do `sessionStorage` ao montar o componente
    useEffect(() => {
        const usuarioDadosArmazenados = sessionStorage.getItem("usuarioDados");
        if (usuarioDadosArmazenados) {
            setUsuarioDados(JSON.parse(usuarioDadosArmazenados));
        }
    }, []);

    // Atualiza `usuarioDados` quando houver mudanças no `sessionStorage`
    useEffect(() => {
        const handleStorageChange = () => {
            const usuarioDadosAtualizados = sessionStorage.getItem("usuarioDados");
            if (usuarioDadosAtualizados) {
                setUsuarioDados(JSON.parse(usuarioDadosAtualizados));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    

    // Função para buscar os dados do usuário logado
    useEffect(() => {
        const fetchUsuarioDados = async () => {
            const usuarioLogado = sessionStorage.getItem("usuario");

            if (usuarioLogado) {
                try {
                    // Verifica se o usuário inseriu um email (contém "@" e um domínio)
                    const isEmail = usuarioLogado.includes("@");
                    const queryParam = isEmail ? `email=${usuarioLogado}` : `usuario=${usuarioLogado}`;

                    const response = await fetch(`http://localhost:5003/usuarios?${queryParam}`);
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
                    <img src={usuarioDados && usuarioDados.avatar ? usuarioDados.avatar : UsuarioImg} alt="Icone Usuario" />
                </div>
            </DivLoginUsername>
            <DivLoginMenu className={isDropdownOpen ? "dropdown" :""}>
                <ul>
                    <li><a href="#" onClick={handleMenuItemClick}><ProfileIcon/>Perfil</a></li>
                    <li><Link to="/editar-conta" onClick={handleMenuItemClick}><EditIcon/>Editar Conta</Link></li>
                    <li className="sair-conta">
                        <a onClick={() => { handleLogout(); handleMenuItemClick(); logout();}}><PowerOffIcon/>Sair</a>
                    </li>
                </ul>
            </DivLoginMenu>
        </div>
    )
}

export default LoginBtn