import styled from "styled-components";

export const MainMaisInfo = styled.section`
    min-height: 100vh;
    margin-top: 75px;

    .titulo-telemetria {
        text-align: center;
    }
`

export const DivTelemetria = styled.div `
    
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 50px;
    margin-left: 100px;

    .localizacao {
        display: flex;
        align-items: center;
    }
        
    .info-pista {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    .telemetria-info {
        display: flex;
        align-items: center;
    }
`

export const Icone = styled.img`
    width: 32px;
    height: 32px;
`

export const Runners = styled.section `
    display: grid;
    grid-template-columns: repeat(3, 33%);
`

export const DivInfo = styled.div`
    
    margin-top: 50px;
    margin-left: 20px;

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
        width: 100%;
        min-height: 300px;
    }

    .conteudo-card-piloto{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .nome-piloto{
        font-size: 2rem;
    }

    .pilotos{
        display: flex;
    }

    .img-piloto{
    }

`