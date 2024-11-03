import styled from "styled-components";
import EditarContaBackground from "../../assets/images/editar-conta-background.png"
import { FaRegEdit } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export const MainEditarConta = styled.main`
    margin-top: 75px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${EditarContaBackground}) no-repeat center / cover;

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
    border-bottom: 1px dashed white;
    
    h2{
        font-size: 1.2rem;
        color: #b9b9ff;
    }
    
    p{
        margin: 10px 0 15px 0;
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
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
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
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 23px;
    height: 23px;
    color: #3f3fff;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;

    &:hover{
        color: darkblue;
    }
`;

export const FecharIcon = styled(FaXmark)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: blue;      // Cor base do ícone
    transition: color 0.4s ease;

    &:hover{
        color: #8181ff;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.1s;
    background-color: rgba(0, 0, 0, 0.8); // Escurecimento do fundo
    z-index: 999; // Para ficar abaixo do modal
`;

export const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    min-height: 230px;
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px 5px 45px rgba(220, 220, 220, 0.4), -5px -5px 45px rgba(220, 220, 220, 0.4);
    border: 3px solid white;
    z-index: 1000;

    h3 {
        font-size: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid gray;
        margin-bottom: 1rem;
        text-align: left;
    }

    label, input {
        width: 90%;
        margin: 0.5rem 0;
    }

    input {
        padding: 8px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    `

export const DivModal1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    min-height: 300px;
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px 5px 45px rgba(220, 220, 220, 0.4), -5px -5px 45px rgba(220, 220, 220, 0.4);
    border: 3px solid white;
    z-index: 1000;

    h3 {
        font-size: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid gray;
        margin-bottom: 1rem;
        text-align: left;
    }

    label, input {
        width: 100%;
        margin: 0.5rem 0;
    }

    input {
        padding: 8px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        align-self: center;
    }

    button {
        margin: 20px 0;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        background-color: #0404e4;
        color: white;
        border: none;
        transition: background-color 0.2s;

        &:hover {
            background-color: darkblue;
        }
    }
`;

export const DivBotoesModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin: auto 0;

    .modal-btn-sim {
        margin: 5px;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        background-color: #0404e4;
        color: white;
        border: none;
        transition: background-color 0.2s;

        &:hover {
            background-color: darkblue;
        }
    }

    .modal-btn-nao {
        margin: 5px;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        background-color: #e20404;
        color: white;
        border: none;
        transition: background-color 0.2s;

        &:hover {
            background-color: darkred;
        }
    }
`