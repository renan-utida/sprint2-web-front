import styled from "styled-components";

export const MainCorridas = styled.main`
    width: 100%;
    min-height: 100vh;
    margin-top: 75px;
    background-color: rgb(240, 255, 255);

    h1{
        text-align: center;
        color: blue;
        margin-top: 20px;
        font-size: 2.4rem;
        font-style: italic;
    }
`

export const SectionInfo = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1.7rem 0;
`

export const DivLugar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    width: 450px;
    height: 505px;
    color: white;
    margin: 20px 0;

    border: 4px solid #0000ff;
    border-radius: 0.8rem;
    background-color: #00005A;

    .data-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1.2rem;
    }

    .img-lugar{
        width: 300px;
        height: 190px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 0.4rem;
        border: 2px solid white;
    }

    h2{
        margin-top: 1.2rem;
        padding-bottom: 0.4rem;
        font-size: 1.5rem;
        border-bottom: 1px solid white;
    }

    .info-pais{
        display: flex;
        margin-top: 1rem;
    }
    
    .info-pais img{
        width: 45px;
        height: 26px;
        margin-right: 0.8rem;
    }
    
    .info-pais h3{
        font-size: 1.35rem;
    }

    h4{
        margin-top: 1rem;
        font-size: 1;
        font-weight: 600;
        font-style: italic;
    }

    .informacao-lugar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1.3rem;
    }

    .informacao-lugar a{
        color: white;
        text-decoration: none;
        background-color: #0000CF;
        margin-right: 0.8rem;
        border-radius: 0.3rem;
        padding: .7rem 1.2rem;
        transition: opacity 0.2s ease;
    }

    .informacao-lugar a:hover{
        opacity: 0.75;
    }

    .informacao-lugar .weather-info{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-left: 5px;
    }

    .informacao-lugar img{
        width: 38px;
        height: 38px;
    }

    p{
        display: flex;
        align-items: center;
    }

    .style-umidade{
        margin-left: 0.4rem;
    }

    .informacao-lugar .temperatura-info{
        display: flex;
        flex-direction: row;
        margin-right: 1rem;
    }

    .informacao-lugar .umidade-info{
        display: flex;
        flex-direction: row;
    }

    .umidade-info .weather-number{
        display: flex;
        margin-left: 5px;
    }

    .temperatura-info .weather-number{
        display: flex;
    }


`