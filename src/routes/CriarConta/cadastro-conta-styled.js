import styled from "styled-components";
import CriarContaBackground from "../../assets/images/criar-conta-background.jpg"
import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";

export const MainCriarConta = styled.main`
    margin-top: 75px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.85)), url(${CriarContaBackground}) no-repeat center / cover;
`

export const SectionNovoUsuario = styled.section`
    width: 450px;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 30px 40px;
    border-radius: 10px;
    margin: 45px 0 180px 0;
    
    h1{
        font-size: 35px;
        text-align: center;
        color: white;
    }
        
    .input-field{
        position: relative;
        width: 100%;
        height: 50px;
        margin: 28px auto;
    }
    
    .input-field input{
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: white;
        padding: 20px 25px;
    }
    
    .input-field input::placeholder{
        color: white;
    }

    .recall-forget{
        display: flex;
        justify-content: space-between;
        font-size: 14.5px;
        margin: -15px 0 15px 0;
    }
    
    .recall-forget label{
        color: white;
    }
    
    .recall-forget input{
        margin-right: 5px;
    }
    
    .recall-forget a, .signup-link a{
        color: lightblue;
        text-decoration: none;
    }
    
    .recall-forget a:hover, .signup-link a:hover{
        text-decoration: underline;
    }
    
    button{
        width: 100%;
        height: 50px;
        background-color: white;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        text-shadow: none;
        transition: background-color 0.7s ease;
    }
    
    button:hover{
        background-color: rgba(255, 255, 255, 0.7);
        border: 1px solid black;
    }
    
    .signup-link{
        display: flex;
        justify-content: center;
        gap: 7px;
        font-size: 15px;
        margin: 20px 0 5px 0;
        text-shadow: none;
        color: black;
        font-weight: 600;
    }
    
    @media screen and (max-width: 1000px){
        padding: 26px 35px;
        
        h1{ font-size: 33px; }
        
        .input-field{ margin: 25px auto; }
        
        .recall-forget{ 
            font-size: 14px; 
            margin: -8px 0 15px 0;
        }
        
        .recall-forget input{
            margin-right: 4px;
        }
        
        button{ height: 48px; margin-top:5px; }
        
        .signup-link{
            font-size: 14.5px;
            margin: 25px 0 5px 0;
        }
    }        
    
    @media screen and (max-width: 700px){
        width: 390px;
        padding: 25px 34px;
        margin: 50px 0 170px 0;
        
        h1{ font-size: 30px; }
        
        .input-field{
            height: 46px;
            margin: 23px auto;
        }
        
        .input-field input{
            font-size: 14.5px;
        }
        
        .input-field img{
            width: 19px;
            height: 19px;
        }

        .recall-forget{
            font-size: 13px;
            margin: -3px 0 15px 0;
        }

        button{
            height: 45px;
            margin-top: 7px;
            font-size: 15.5px;
        }
        
        .signup-link{
            font-size: 14px;
        }
    }        
    
    @media screen and (max-width: 530px){
        width: 300px;
        padding: 23px 30px;
        
        h1{ font-size: 28px; }
        
        .input-field{
            height: 42px;
            margin: 21px auto;
        }
        
        .input-field input{
            font-size: 13.8px;
        }
        
        .input-field img{
            width: 18px;
            height: 18px;
        }

        .recall-forget{
            font-size: 12px;
            margin: 30px 0 20px 0;
        }

        button{
            height: 45px;
            margin-top: 8px;
            font-size: 15px;
        }
        
        .signup-link{
            font-size: 13.5px;
        }
    }       

    @media screen and (max-width: 360px){
        width: 270px;
        padding: 20px 20px;
        
        h1{ font-size: 26px; }
        
        .input-field{
            height: 40px;
            margin: 20px auto;
        }
        
        .input-field input{
            font-size: 13px;
        }
        
        .input-field img{
            width: 16px;
            height: 16px;
        }

        .recall-forget{
            font-size: 11.5px;
            margin: 30px 0 20px 0;
        }

        button{
            height: 42px;
            margin-top: 8px;
            font-size: 14.5px;
        }
        
        .signup-link{
            font-size: 13px;
        }
    }        
`

export const DivImgProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;

    .image-profile-box{
        margin: 10px auto;
        width: 150px;
        height: 150px;
        background-color: white;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border: 5px solid blue;

        &:hover img {
            filter: brightness(0.6);
        }

        &:hover .trocar-imagem-link {
            opacity: 1;
        }
    }

    .image-profile-box img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover; 
        transition: filter 0.3s ease;
    }

    .image-profile-box .trocar-imagem-link{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Centraliza o texto */
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
        font-size: 0.9rem;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        justify-content: center;
    }

    .img-modal-link{
        color: white;
        display: flex;
        flex-direction: row;
        gap: 5px;
        cursor: pointer;
        font-weight: 600;
        text-shadow: 4px 4px 10px black;
        transition: color 0.2s linear;
    }

    .img-modal-link:hover{
        color: rgba(255, 255, 255, 0.75);
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.1s;
    background-color: rgba(0, 0, 0, 0.4); // Escurecimento do fundo
    z-index: 999; // Para ficar abaixo do modal
`;

export const DivImageModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
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
`

export const SelecionarAvatar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto 1rem auto;

    .avatar{
        width: 150px;
        height: 150px;
        background-color: white;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        border: 5px solid blue;
    }

    .avatar img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }

    .avatar-pessoal{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        margin-top: 1.3rem;
    }

    .avatar-pessoal .camera-avatar{
        display: flex;
        flex-direction: row;
        gap: 8px;
        color: #0404e4;
        transition: color 0.2s ease;

        &:hover {
            color: darkblue;
        }
    }

    .camera-avatar a{
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        color: inherit;
        transition: color 0.2s ease;
    }

    .avatar-pessoal .galeria-avatar{
        display: flex;
        flex-direction: row;
        gap: 8px;
        color: #0404e4;
        transition: color 0.2s ease;

        &:hover {
            color: darkblue;
        }
    }

    .galeria-avatar a{
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        color: inherit;
        transition: color 0.2s ease;
    }

    .sugestao-avatar{
        display: flex;
        flex-direction: column;
        margin: 1.6rem 0 0.8rem 0;
    }

    .sugestao-avatar h4{
        margin-bottom: 0.7rem;
        font-size: 1.4rem;
        font-weight: 600;
        font-style: italic;
        color: rgb(220, 220, 220);
    }

    .sugestao-avatar .sugestao-img{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .sugestao-img a img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
        margin: 5px 0;
        background-color: white;
        border: 2px solid blue;
        transition: transform 0.4s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`

export const DivBotoesModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin: auto 0;
    border-top: 1px solid gray;
    padding-top: 1rem;

    .save-modal-btn{
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
    
    .close-modal-btn {
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

// Para cada ícone, crie uma versão estilizada
export const EmailIcon = styled(MdEmail)`
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.7);      // Cor base do ícone
`;

export const UserIcon = styled(FaUser)`
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 17px;
    color: rgba(255, 255, 255, 0.7);      // Cor base do ícone
`;

export const PasswordIcon = styled(FaLock)`
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 17px;
    color: rgba(255, 255, 255, 0.7);      // Cor base do ícone
`;

export const ImageIcon = styled(FaImage)`
    position: absolute;
    width: 20px;
    height: 17px;
    color: white;     // Cor base do ícone
`;

export const OcultoIcon = styled(FaEyeSlash)`
    position: absolute;
    right: 55px;
    top: 14px;
    width: 23px;
    height: 23px;
    color: white;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;
    user-select: none;

    &:hover{
        color: rgba(255, 255, 255, 0.75);
    }
`;

export const VisivelIcon = styled(FaEye)`
    position: absolute;
    right: 55px;
    top: 14px;
    width: 23px;
    height: 23px;
    color: white;      // Cor base do ícone
    cursor: pointer;
    transition: color 0.35s ease;
    user-select: none;

    &:hover{
        color: rgba(255, 255, 255, 0.7);
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
