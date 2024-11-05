import styled from "styled-components";
import PerfilBackground from "../../assets/images/editar-conta-background.png"

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const MainPerfil = styled.main`
    margin-top: 75px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: calc(100vh - 75px);
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${PerfilBackground}) no-repeat center / cover;
`

export const SectionPerfil = styled.section`
    border: 3px solid rgba(0, 0, 255, 0.8);
    border-radius: 10px;
    width: 400px;
    min-height: 400px;
    padding: 20px 40px;
    margin: 100px 0;
    background-color: rgba(1, 1, 82, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    
    h2{
        color: white;
        font-size: 1.6rem;
        text-shadow: 5px 5px 35px white;
        text-align: center;
    }
`

export const DivUserInfo1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.2rem;
`

export const DivAvatarUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0;
    margin: 0 20px 0 0;

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 10px;
    }

    h4{
        font-size: 1.2rem;
        margin-top: 5px;
        color: white;
    }
`

export const DivNomeSobrenome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 0.5rem;

    h3{
        color: #b9b9ff;
    }

    p{
        color: white;
        font-style: italic;
        font-size: 1.4rem;
        font-weight: bold;
    }
`

export const DivUserInfo2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    border-top: 1px dashed white;
    padding-top: 1.5rem;

    h3{
        color: #b9b9ff;
    }
    
    p{
        color: white;
        font-style: italic;
        font-size: 1.4rem;
        font-weight: bold;
        padding: .2rem 0 1rem 0;
    }

    .password-perfil{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const OcultoIcon = styled(FaEyeSlash)`
    margin-top: 6px;
    width: 23px;
    height: 23px;
    color: #3f3fff;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;

    &:hover{
        color: darkblue;
    }
`;

export const VisivelIcon = styled(FaEye)`
    margin-top: 6px;
    width: 23px;
    height: 23px;
    color: #3f3fff;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;

    &:hover{
        color: darkblue;
    }
`;