import styled from "styled-components";

export const MainMaisInfo = styled.section`
    min-height: 100vh;
    margin-top: 75px;
`

export const Icone = styled.img`
    width: 32px;
    height: 32px;
`

export const DivInfo = styled.div`
    
    margin-top: 50px;
    margin-left: 100px;

    .local-data{
        display:flex;
        gap: 75px;
    }

    .local{
        display:flex;
        gap: 10px;
    }

    .temperatura{
        display:flex;
        gap: 10px;
    }

    .umidade{
        display:flex;
        gap: 10px;
    }

    .velocidade{
        display:flex;
        gap: 10px;
    }

    .distancia{
        display:flex;
        gap: 10px;
    }

    .card-piloto{
        display:flex;
        margin-top: 50px;
        gap: 120px;
        background-color: #4646ff;
        color: white;
        border-radius: 50px;
        width: 600px;
        min-height: 300px
    }

    .conteudo-card-piloto{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .nome-piloto{
        font-size: 25px;
    }

    .titulo-telemetria{
        font-size: 35px;
        margin: 50px;
        text-decoration: underline;
    }

    .pilotos{
        display: flex;
    }

`