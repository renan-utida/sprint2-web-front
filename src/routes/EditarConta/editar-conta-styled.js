import styled from "styled-components";
import EditarContaBackground from "../../assets/images/editar-conta-background.png"
import { FaRegEdit } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const MainEditarConta = styled.main`
    margin-top: 75px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${EditarContaBackground}) no-repeat center / cover;

    h1{
        color: white;
        font-size: 2.3rem;
        font-weight: bold;
        text-shadow: -5px 10px 20px #ccc;
        margin-top: 1rem;
    }
`

export const SectionEditarUsuario = styled.section`
    border: 3px solid rgba(0, 0, 255, 0.8);
    border-radius: 10px;
    width: 400px;
    min-height: 550px;
    padding: 20px 40px;
    margin: 20px 0 40px 0;
    background-color: rgba(1, 1, 82, 0.7);
    backdrop-filter: blur(5px);
`

export const DivEditarUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    
    h2{
        font-size: 1.2rem;
        color: #b9b9ff;
    }
    
    p{
        margin: 10px 0 5px 0;
        color: white;
        font-weight: bold;
        font-style: italic;
        font-size: 1.2rem;
    }
`

// Para cada ícone, crie uma versão estilizada
export const EditarIcon = styled(FaRegEdit)`
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 15px;
    width: 23px;
    height: 23px;
    color: #3f3fff;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;

    &:hover{
        color: red;
    }
`;

export const OcultoIcon = styled(FaEyeSlash)`
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 10px;
    width: 23px;
    height: 23px;
    color: #3f3fff;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;

    &:hover{
        color: white;
    }
`;

export const VisivelIcon = styled(FaEye)`
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 10px;
    width: 23px;
    height: 23px;
    color: #3f3fff;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;

    &:hover{
        color: white;
    }
`;