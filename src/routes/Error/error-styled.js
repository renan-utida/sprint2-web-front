import styled from "styled-components";
import ErrorBackground from '../../assets/error-background.png'; // Importando a imagem de fundo

export const MainError = styled.main`
    background-image: url(${ErrorBackground});
    background-size: cover; /* Faz com que a imagem cubra toda a tela */
    background-position: center; /* Centraliza a imagem */
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        font-size: 4em;
        font-weight: bold;
        text-decoration: none;
        margin-bottom: 60px;
    }

    h1{
        color: red;
        font-size: 3.5em;
        margin-bottom: 120px;
    }
`;