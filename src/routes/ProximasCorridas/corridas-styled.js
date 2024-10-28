import styled from "styled-components";

export const MainCorridas = styled.main`
    width: 100%;
    min-height: 100vh;
    margin-top: 75px;
    background-color: rgb(240, 255, 255);
`

export const SectionInfo = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 4rem 0;
`

export const DivLugar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    width: 450px;
    height: 500px;
    color: white;

    border: 4px solid #0000ff;
    border-radius: 0.8rem;
    background-color: #00005A;

    .data-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
`