import styled from "styled-components";

export const MainFormulaE = styled.main`
    width: 100%;
    margin-top: 60px;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: center;
    }

    img{
        max-width: 310px;
        height: 100px;
        display: block;
        margin: 30px auto 0 auto;
    }
`

export const SectionFormula = styled.section`
    background-color: #fff;
    margin: 50px 20px;
    
    div{
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        margin: 0 auto;

    }

    button{
        padding: 28px 30px;
        position: relative;
        border: none;
        background: white;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 1px solid #F2F2F2;
        transition: 0.4s;
        cursor: pointer;
    }

    button svg{
        font-size: 16px;
        font-family: Arial, sans-serif;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%) rotate(180deg);
        transition: transform 0.3s;
        color: #333;
        width: 24px;
        height: 24px;
    }

    button.active svg{
        transform: translateY(-50%) rotate(360deg);
    }
    
    .active, button:hover{
        text-decoration: underline;
        background-color: #F6F6F6;
        transition: 0.1s;
    }

    .panel{
        padding: 0 18px;
        margin-bottom: 20px;
        margin-top: 5px;
        background-color: white;
        display: none;
        overflow: hidden;
    }
    
    .panel p{
        margin: 10px 13px 22px 13px;
        font-size: 1rem;
        text-indent: 42px;
        text-align: justify;
    }

`