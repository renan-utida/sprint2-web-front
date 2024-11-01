import styled, { keyframes } from "styled-components";
import QuizBackground from "../../assets/images/quiz-background.png"

// Definindo a animação para mover a imagem da direita para o centro
const slideIn = keyframes`
  0% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0; /* Começa invisível */
  }
  50% {
    opacity: 1; /* Tornar-se totalmente visível */
  }
  100% {
    transform: translateX(0); /* Fica no centro */
  }
`;

export const MainQuiz = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 90px 0;
    width: 100%;
    min-height: 100vh;
    color: white;
    overflow-x: hidden;
    background: linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.9)), 
    url(${QuizBackground}) no-repeat center / cover;
    
    h1{
        display: inline-block;
        margin-bottom: 0.2rem;
        font-size: 2.6rem;
        font-family: "Kalam", cursive;
        background: linear-gradient(to left, #0000ff, #6D6DF9, #3C3CFF, #0000ff, #0000ff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    img{
        max-width: 100%;
        cursor: pointer;
    }
    
    button{
        font-weight: bold;
        font-size: 1.4rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: linear-gradient(90deg, rgba(4, 4, 100, 1) 0%, rgba(0, 0, 255, 1) 100%);
        color: white;
        border-radius: 3rem;
        border: none;
    }
    
    button:hover{
        background: linear-gradient(90deg, rgba(0, 0, 255, 0.8) 0%, rgba(4, 4, 100, 0.8) 100% );
    }
    
    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.4rem; 
        }
        
        button{
            font-size: 1.35rem;
            padding: 0.9rem 1.8rem;
        }
    }
    
    @media screen and (max-width: 750px){    
        h1{
            font-size: 2.25rem;
        }
        
        button{
            font-size: 1.3rem;
            padding: 0.85rem 1.7rem;
        }
    }
    
    @media screen and (max-width: 590px){ 
        margin-top: -8px;

        h1{
            font-size: 2.1rem;
        }
        
        button{
            font-size: 1.25rem;
            padding: 0.8rem 1.6rem;
        }
    }
    
    @media screen and (max-width: 430px){        
        h1{
            font-size: 1.85rem;
        }
        
        button{
            font-size: 1.10rem;
            padding: 0.75rem 1.5rem;
        }
    }
`

export const WelcomeSection = styled.section`
    text-align: center;
    max-width: 640px;
    text-shadow: 5px 5px 45px white;
    
    h2{
        margin-bottom: 0.2rem;
        font-family: "Nunito", sans-serif;
        font-style: italic;
        font-size: 1.7rem;
    }
    
    p{
        color: #DFDFE0;
        font-size: 1.3rem;
        font-family: "Nunito", sans-serif;
        font-style: italic;
    }
    
    h3{
        margin: 1rem 0 1.2rem 0;
        font-size: 1.8rem;
        font-family: "Nunito", sans-serif;
        font-style: italic;
        color: #0000ff;
        text-shadow: none;
        background: linear-gradient(to left, #0000ff, #0000ff, #3C3CFF, #6D6DF9, #0000ff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    img{
        margin: 0.2rem 0;
        height: auto;
        animation: ${slideIn} 3s ease forwards; /* Aplicando a animação */
    }
    
    @media screen and (max-width: 1000px){
        max-width: 570px;
        text-shadow: 5px 5px 35px white;
        
        h2{ font-size: 1.55rem; }
        p{ font-size: 1.2rem; }
        h3{
            margin: 0.95rem 0 1.1rem 0;
            font-size: 1.7rem;
        }
    }
    
    @media screen and (max-width: 750px){
        max-width: 460px;
        text-shadow: 5px 5px 35px white;
        
        h2{ font-size: 1.4rem; }
        p{ font-size: 1.1rem; }
        
        h3{
            margin: 0.9rem 0 1.05rem 0;
            font-size: 1.65rem;
        }
        
        img{ margin: 0.4rem 0; }
    }
    
    @media screen and (max-width: 590px){
        max-width: 360px;
        
        h2{ font-size: 1.15rem; }
        
        p{ font-size: 0.95rem; }
        
        h3{
            margin: 0.85rem 0 1.0rem 0;
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 430px){
        max-width: 240px;
        
        h2{ font-size: .95rem; }
        
        p{ font-size: 0.82rem; }
        
        h3{
            margin: 0.78rem 0 0.95rem 0;
            font-size: 1.38rem;
        }
        
        img{ margin: 2rem 0; }
    }
`

export const DivQuestion = styled.div`
    text-align: center;
    max-width: 640px;
    background-color: #04044c;
    border-radius: 1rem;
    border: 2px solid #0000ff;
    padding: 1.2rem 2rem 1rem 2rem;
    
    h2{
        margin-bottom: 1.5rem;
        font-size: 1.35rem;
    }

    p{
        margin: .2rem;
        font-size: 1.2rem;
    }
    
    .contagem-perguntas{
        margin-bottom: 1.2rem;
        font-size: 1rem;
        font-style: italic;
        font-family: "Nunito", sans-serif;
    }
    
    button{
        border: 1px solid #fff;
        margin: 0.7rem 0 0.4rem 0;
        font-size: 1.4rem;
    }

    @media screen and (max-width: 1000px){
        max-width: 570px;
        padding: 1rem 2rem 0.9rem 2rem;

        h2{
            margin-bottom: 1.35rem;
            font-size: 1.3rem;
        }
        
        p{
            margin: 0.18rem;
            font-size: 1.1rem;
        }

        .contagem-perguntas{
            margin-bottom: 1.1rem;
            font-size: 0.95rem;
        }

        button{
            margin: 0.6rem 0 0.35rem 0;
            font-size: 1.25rem;
        }
    }
    
    @media screen and (max-width: 750px){   
        max-width: 460px; 
        padding: 0.9rem 1.7rem 0.85rem 1.7rem;

        h2{
            margin-bottom: 1.2rem;
            font-size: 1.2rem;
        }
        
        p{
            margin: 0.15rem;
            font-size: 1.05rem;
        }

        .contagem-perguntas{
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }

        button{
            margin: 0.5rem 0 0.35rem 0;
            font-size: 1.2rem;
        }
    }
    
    @media screen and (max-width: 590px){    
        max-width: 360px;
        padding: 0.8rem 1.5rem 0.75rem 1.5rem;

        h2{
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        p{
            margin: 0rem;
            font-size: 0.9rem;
        }

        .contagem-perguntas{
            margin-bottom: 0.9rem;
            font-size: 0.85rem;
        }

        button{
            margin: 0.35rem 0 0.4rem 0;
            font-size: 1.1rem;
        }
    }
    
    @media screen and (max-width: 430px){
        max-width: 250px;
        padding: 0.6rem 0.8rem;

        h2{
            margin-bottom: 0.8rem;
            font-size: 0.82rem;
        }
        
        p{
            font-size: 0.65rem;
        }

        .contagem-perguntas{
            margin-bottom: 0.5rem;
            font-size: 0.6rem;
        }

        button{
            margin: 0.1rem 0 0.2rem 0;
            font-size: 0.9rem;
        }
    }
`

export const DivOver = styled.div`
    text-align: center;
    max-width: 640px;
    background-color: #04044c;
    border-radius: 1rem;
    border: 2px solid #0000ff;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    
    h2{
        margin-bottom: 1rem;
        font-size: 2.5rem;
        font-style: italic;
    }

    p{
        color: white;
        font-size: 1.2rem;
        margin: 0.8rem 0 1rem 0 ;
    }
    
    button{
        margin-top: 1rem;
        font-size: 1.6rem;
        font-family: "Nunito", sans-serif;
        font-style: italic;
        border: 1px solid #0000ff;
    }

    @media screen and (max-width: 1000px){
        max-width: 570px;
        padding: 1.8rem 3.8rem;

        h2{
            margin-bottom: 1rem;
            font-size: 2.3rem;
        }
        
        p{
            font-size: 1.1rem;
            margin: 0.8rem 0 1rem 0 ;
        }

        button{
            margin-top: 0.85rem;
            font-size: 1.45rem;
        }
    }
    
    @media screen and (max-width: 750px){   
        max-width: 460px; 
        padding: 1.65rem 3.6rem;

        h2{
            margin-bottom: 0.75rem;
            font-size: 2.15rem;
        }
        
        p{
            font-size: 1.0rem;
            margin: 0.7rem 0 .85rem 0 ;
        }

        button{
            margin-top: 0.8rem;
            font-size: 1.4rem;
        }
    }
    
    @media screen and (max-width: 590px){    
        max-width: 360px;
        padding: 1.5rem 3.4rem;

        h2{
            margin-bottom: 0.65rem;
            font-size: 2.05rem;
        }
        
        p{
            font-size: 0.95rem;
            margin: 0.65rem 0 .8rem 0 ;
        }

        button{
            margin-top: 0.7rem;
            font-size: 1.3rem;
        }
    }
    
    @media screen and (max-width: 430px){
        max-width: 250px;
        padding: 1.5rem 1.4rem;

        h2{
            margin-bottom: 0.6rem;
            font-size: 1.75rem;
        }
        
        p{
            font-size: 0.8rem;
            margin: 0.6rem 0 0.75rem 0 ;
        }

        button{
            margin-top: 0.65rem;
            font-size: 1.1rem;
        }
    } 
`

export const DivOption = styled.div`
    background-color: #04049a;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.4s;

    &:hover{
        opacity: 1;    
    }

    p{
        margin-top: 0.4rem;
    }

    &.correct{
        background-color: #167347;
        opacity: 1;
        font-weight: bold;
    }

    &.wrong{
        background-color: #7D1818;
        font-weight: bold;
        opacity: 1;
    }
`