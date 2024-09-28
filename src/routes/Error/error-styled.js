import styled from "styled-components";
import ErrorBackground from '../../assets/images/error-background.png'; // Importando a imagem de fundo

export const MainError = styled.main`
    background: url(${ErrorBackground}) no-repeat center / cover;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-height: 1200px;
    }

    a {
        max-width: 480px;
        margin-bottom: 30px;
    }
    
    a img{
        width: 100%;
        height: auto;
    }

    h1{
        margin-bottom: 120px;
        color: red;
        text-shadow: 7px 7px 10px #000000;
        text-align: center;
        font-size: 3.5rem;
        font-family: "Nunito", sans-serif;
    }

    @media screen and (max-width: 1200px){
        a{ max-width: 415px; }

        h1{ font-size: 2.8rem; }
    }

    @media screen and (max-width: 960px){
        a{ max-width: 375px; }

        h1{ font-size: 2.6rem; }
    }

    @media screen and (max-width: 820px){
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${ErrorBackground}) no-repeat center / cover;
        
        a{ max-width: 325px; }

        h1{ font-size: 2.3rem; }
    }

    @media screen and (max-width: 700px){
        a{ max-width: 290px; }

        h1{ font-size: 2rem; }
    }

    @media screen and (max-width: 575px){
        a{ max-width: 260px; }

        h1{ font-size: 1.7rem; }
    }

    @media screen and (max-width: 475px){
        background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${ErrorBackground}) no-repeat center / cover;
        
        a{ max-width: 230px; }

        h1{ font-size: 1.4rem; text-shadow: 10px 10px 10px #000000; }
    }

    @media screen and (max-width: 380px){
        a{ max-width: 210px; }

        h1{ font-size: 1.2rem; }
    }

    @media screen and (max-width: 300px){
        a{ max-width: 190px; }

        h1{ font-size: 1rem; }
    }

    @media screen and (max-width: 240px){
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${ErrorBackground}) no-repeat center / cover;
        
        a{ max-width: 170ppx; }

        h1{ font-size: 0.9rem; }
    }


`

