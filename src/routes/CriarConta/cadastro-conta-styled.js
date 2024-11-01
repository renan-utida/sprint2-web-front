import styled from "styled-components";
import CriarContaBackground from "../../assets/images/criar-conta-background.jpg"
import { MdEmail } from "react-icons/md";

export const MainCriarConta = styled.main`
    margin-top: 75px;
    text-shadow: #000 1px 1px;
    background-color: rgb(220, 220, 230);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${CriarContaBackground}) no-repeat center / cover;
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
    
    .input-field img{
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
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

// Para cada ícone, crie uma versão estilizada
export const EmailIcon = styled(MdEmail)`
    /* width: 1.4rem;   // Tamanho base do ícone
    height: 1.4rem; */
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #ffffff;      // Cor base do ícone
`;