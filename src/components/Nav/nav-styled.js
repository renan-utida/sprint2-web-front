import styled from "styled-components";
import HeaderBackground from "../../assets/images/header-background.png";

import { FaHome } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
import { FaConnectdevelop } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export const HeaderCabecalho = styled.header`
    height: 75px;
    position: fixed;
    top: 0;         /* Posiciona no topo */
    width: 100%;    /* Garante que ocupe a largura total */
    z-index: 999;   /* Garante que o header fique acima dos outros elementos */
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`   
export const DivCabecalho = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    
    .hamburger-search{
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        margin-right: 50px;
    }
    
    .hamburger-search img{
        width: 30px;
        height: 30px;
        margin-bottom: 0.2rem;
        display: none;
    }
    
    .logo{
        height: 55px;
        max-width: 300px;
    }
    
    .logo img{
        height: 100%;
        width: 100%;
    }
    
    .login-btn{
        display: block;
        padding: 10px 13px;
        margin-left: 15px;
        border-radius: 12px;
        border: none;
        background-color: transparent;
        color: white;
        background-color: #0404fb;
        font-size: 1.1rem;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        transition: background-color 0.6s ease;
    }
    
    .login-btn:hover{
        background-color: #0606a6;
    }
    
    @media screen and (max-width: 1000px){
        padding: 13px 24px;
        
        .hamburger-search{
            gap: 0.7rem;
        }
        
        .hamburger-search img{
            width: 29px;
            height: 29px;
        }
        
        .logo{
            height: 50px;
            max-width: 195px;
        }
        
        .login-btn{
            padding: 8px 12px;
            margin-left: 10px;
            font-size: 1.1rem;
        }
    }
    
    @media screen and (max-width: 700px){
        padding: 15px 16px;
        
        .hamburger-search{
            gap: 0.6rem;
        }
        
        .hamburger-search img{
            width: 28px;
            height: 28px;
        }
        
        .logo{
            height: 45px;
            max-width: 183px;
        }
        
        .login-btn{
            margin-left: 8px;
            font-size: 1.05rem;
        }
    }
    
    @media screen and (max-width: 520px){
        padding: 20px 10px 20px 8px;
        
        .hamburger-search{
            gap: 0.5rem;
        }
        
        .logo{
            height: 40px;
            max-width: 165px;
        }
        
        .login-btn{
            margin-left: 3px;
            font-size: 0.95rem;
            padding: 8px 10px;
        }
    }
    
    @media screen and (max-width: 375px){
        padding: 19px 9px 19px 5px;
        
        .hamburger-search{
            gap: 0.1rem;
        }
        
        .logo{
            height: 36px;
            max-width: 130px;
        }
        
        .login-btn{
            margin-left: 0px;
            font-size: 0.85rem;
            padding: 8px 8px;
        }
    }
    `

export const MenuCabecalho = styled.div`
    display: flex;
    font-weight: 700;
    font-size: 18px;
    align-items: center;

    #btn-menu{
        display: flex;
        padding: 0 1rem;
        margin-bottom: 0.3rem;
        border: none;
        background: none;
        color: white;
        cursor: pointer;
        gap: .5rem;
    }

    #hamburger{
        border-top: 3.5px solid;
        width: 26px;
    }

    #hamburger::after, #hamburger::before {
        content: '';
        display: block;
        width: 26px;
        height: 3px;
        background: currentColor;
        margin-top: 5px;
        transition: .3s;
        position: relative;
    }

    #nav.active #hamburger{
        border-top-color: transparent;
    }

    #nav.active #hamburger::before{
        transform: rotate(135deg);
    }

    #nav.active #hamburger::after{
        transform: rotate(-135deg);
        top: -7px;
    }

    #menu{
        display: block;
        position: absolute;
        width: 330px;
        top: 75px;
        left: 0px;
        list-style: none;
        background-color: #212121;
        transition: .6s;
        z-index: 1000;
        height: 0px;
        visibility: hidden;
        overflow-y: hidden;

         /* Estilização do scrollbar para o menu hamburguer */
        &::-webkit-scrollbar {
        width: 0.4rem;
        }

        &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #000;
        box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
        }

        &::-webkit-scrollbar-thumb {
        background-color: #616162;
        border-radius: 10px;
        }
    }

    #nav.active #menu{
        height: calc(100vh - 75px);
        visibility: visible;
        overflow-y: auto;
    }

    #menu li a{
        padding: 1.4rem 1rem;
        display: flex;
        margin: 0.2rem 0.3rem;
        color: white;
        text-decoration: none;
        border-top: 2px solid rgba(136, 136, 136, 0.12);
        cursor: pointer;
    }

    li a:hover{
        background-color: rgba(255, 255, 255, 0.421);
    }

    #menu li a p{
        margin-bottom: 2px;
    }

    .sub-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .sub-menu {
        display: none; /* Oculta o submenu inicialmente */
        list-style: none;
        padding-left: 1.5rem;
        background-color: #303230;
    }

    .sub-menu.active {
        display: block; /* Mostra o submenu quando ativo */
    }

    .sub-menu li a {
        color: white;
        text-decoration: none;
        padding: 0.8rem;
        display: block;
        transition: background-color 0.5s;
    }

    .sub-menu li a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media screen and (max-width: 1000px){
        #btn-menu{
            padding: 0 1rem 0 0.9rem;
            margin-bottom: 0.3rem;
        }
        
        #menu{
            width: 320px;
        }
        
        #menu li a{
            padding: 1.3rem 0.9rem;
        }
    }
    
    @media screen and (max-width: 700px){
        font-size: 17px;
        #btn-menu{
            padding: 0 .9rem 0 0.8rem;
        }
        
        #hamburger{
            width: 25px;
        }
    
        #hamburger::after, #hamburger::before {
            width: 25px;
        }

        #menu{
            width: 300px;
        }
    
        #menu li a{
            padding: 1.2rem 0.85rem;
        }
    }

    @media screen and (max-width: 520px){
        font-size: 16px;

        #btn-menu{
            padding: 0 0.7rem 0 0.6rem;
        }
        
        #hamburger{
            border-top: 3.1px solid;
            width: 24px;
        }
        
        #hamburger::after, #hamburger::before {
            width: 24px;
            height: 2.2px;
        }
        
        #menu{
            width: 260px;
        }
        
        #menu li a{
            padding: 1.15rem 0.8rem;
        }
    }

    @media screen and (max-width: 360px){
        font-size: 15px;

        #btn-menu{
            padding: 0 0.6rem 0 0.5rem;
        }
        
        #hamburger{
            width: 23px;
        }
        
        #hamburger::after, #hamburger::before {
            width: 23px;
        }
        
        #menu{
            width: 235px;
        }
        
        #menu li a{
            padding: 1.05rem 0.7rem;
        }
    }
`

export const DivLoginMenu = styled.div`
    position: absolute;
    top: calc(100% + 5px);
    right: 15px;
    width: 175px;
    min-height: 100px;
    background-color: white;
    box-shadow: 2px 2px 35px rgba(0, 0, 0, 0.5 ), -2px -2px 35px rgba(0, 0, 0, 0.5 );
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    &.dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    &::before{
        content: '';
        position: absolute;
        top: -8px;
        right: 35px;
        width: 20px;
        height: 20px;
        background: white;
        transform: rotate(45deg);
        z-index: -1;
    }

    ul{
        display: flex;
        flex-direction: column;
        background-color: white;
        list-style: none;
    }

    ul li{
        padding: 15px 20px;
        background-color: #fff;
        transition: background-color 0.15s ease;
    }

    ul li:hover{
        background-color: #e0e0e0;
    }

    ul li a{
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font: 0.9rem;
    }

    ul .sair-conta{
        border-top: 1px solid gray;
        font-weight: bold;
        display: flex;
    }

    ul .sair-conta a{
        color: #dc0000;
    }
`

export const DivLoginUsername = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
    cursor: pointer;

    .username{
        display: flex;
        flex-direction: column;
        text-align: end;
        font-weight: 500;
        line-height: 1rem;
    }

    .username .boasvindas-login{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin: 5px 0 7px 0;
        gap: 5px;
    }

    .boasvindas-login h3{
        color: white;
        font-size: 1.1rem;
    }

    .boasvindas-login .nome-login{
        color: #6060ff;
        font-size: 1.3rem;
    }

    span{
        font-size: 0.75rem;
        color: #fff;
        font-style: italic;
    }

    .imgCx{
        position: relative;
        width: 42px;
        height: 42px;
        background-color: blue;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid blue;
    }

    .imgCx img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`

// Para cada ícone, crie uma versão estilizada
export const HomeIcon = styled(FaHome)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const FormulaIcon = styled(FaTrophy)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const RaceIcon = styled(FaFlagCheckered)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const NewsIcon = styled(FaNewspaper)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const AngleIcon = styled(FaAngleRight)`
    position: absolute;
    right: 1rem; /* Alinha o ícone ao canto direito */
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    color: #ffffff;      // Cor base do ícone
    transition: 0.3s ease;
`;

export const QuizIcon = styled(FaGamepad)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const LoginIcon = styled(MdLogin)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const LogoutIcon = styled(MdLogout)`
    width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const PowerOffIcon = styled(FaPowerOff)`
    width: 1.15rem;   // Tamanho base do ícone
    height: 1.15rem;
    margin-right: 0.3rem;
    margin-top: 0.1rem;
    color: #dc0000;      // Cor base do ícone
`;

export const EditIcon = styled(FaRegEdit)`
    width: 1.15rem;   // Tamanho base do ícone
    height: 1.15rem;
    margin-right: 0.3rem;
    margin-top: 0.1rem;
    color: #000;      // Cor base do ícone
`;

export const ProfileIcon = styled(FaUser)`
    width: 1.15rem;   // Tamanho base do ícone
    height: 1.15rem;
    margin-right: 0.3rem;
    margin-top: 0.1rem;
    color: #000;      // Cor base do ícone
`;

export const TecnologiaIcon = styled(FaConnectdevelop)`
    width: 1.1rem;   // Tamanho base do ícone
    height: 1.1rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const CorridaIcon = styled(FaBolt)`
    width: 1.1rem;   // Tamanho base do ícone
    height: 1.1rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const EventosIcon = styled(FaPeopleGroup)`
    width: 1.1rem;   // Tamanho base do ícone
    height: 1.1rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const SustentabilidadeIcon = styled(FaRecycle)`
    width: 1.1rem;   // Tamanho base do ícone
    height: 1.1rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;

export const PesquisaIcon = styled(FaSearch)`
    width: 1.1rem;   // Tamanho base do ícone
    height: 1.1rem;
    margin-right: 0.8rem;
    color: #ffffff;      // Cor base do ícone
`;





