import styled from 'styled-components';
import QuizBackground from "../../assets/quiz-background.png"

export const MainQuiz = styled.main`
    color: white;
    background-color: #1c1c1c;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${QuizBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    text-align: center;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
    
    h1{
        margin-bottom: 2rem;
    }
    
    img{
        max-width: 100%;
    }
    
    button{
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.8rem 1.5rem;
        background: linear-gradient(90deg,
            rgba(65, 15, 30, 1) 0%,
            rgba(95, 10, 30, 1) 100% 
        );
        color: white;
        border-radius: 3rem;
        border: none;
    }
    
    button:hover{
        background: linear-gradient(90deg,
            rgba(95, 10, 30, 0.8) 0%,
            rgba(65, 15, 30, 0.8) 100%
        );
    }
`

export const WelcomeSection = styled.section`
    text-align: center;
    max-width: 500px;

    h2, p{
        margin-bottom: 1rem;
    }

    p{
        color: red;
        margin-top: 1.2rem;
    }

    
    img{
        margin: 2rem 0;
    }    
`

export const DivQuestion = styled.div`
    text-align: center;
    max-width: 500px;
    background-color: darkred;
    border-radius: 1rem;
    padding: 2rem;

    h2{
        margin-bottom: 2rem;
    }

    p{
        margin-bottom: 0.6rem;
    }

    button{
        border: 2px solid #fff;
    }
`

export const DivOver = styled.div`
    text-align: center;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    h2, p{
        margin-bottom: 1rem;
    }

    p{
        color: red;
        margin-top: 1.2rem;
    }
    
    button{
        margin-top: 1.5rem;
    }
`

export const DivOption = styled.div`
    background-color: #3c0e70;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.4s;

    &:hover{
        opacity: 1;    
    }

    p{
        margin-top: 0.6rem;
    }

    &.correct{
        background-color: #0bfc03;
        font-weight: bold;
    }

    &.wrong{
        background-color: red;
        opacity: 0.4;
    }
`