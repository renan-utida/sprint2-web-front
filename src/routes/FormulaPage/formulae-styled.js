import styled from "styled-components";

export const MainFormulaE = styled.main`
    width: 100%;
    margin-top: 60px;
    background-color: #0e233c;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: center;
    }

    a{
        max-width: 310px;
        height: 100px;
        display: block;
        margin: 30px auto 0 auto;
    }

    a img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1000px){
        a{
            max-width: 290px;
            height: 95px;
        }
    }

    @media screen and (max-width: 800px){
        a{
            max-width: 275px;
            height: 90px;
        }
    }

    @media screen and (max-width: 700px){
        a{
            max-width: 250px;
            height: 85px;
            margin: 25px auto 0 auto;
        }
    }

    @media screen and (max-width: 600px){
        a{
            max-width: 225px;
            height: 80px;
            margin: 22px auto 0 auto;
        }
    }

    @media screen and (max-width: 520px){
        a{
            max-width: 200px;
            height: 75px;
            margin: 20px auto 0 auto;
        }
    }

    @media screen and (max-width: 440px){
        a{
            max-width: 180px;
            height: 70px;
        }
    }

    @media screen and (max-width: 380px){
        a{
            max-width: 160px;
        }
    }
`

export const SectionFormula = styled.section`
    background-color: #fff;
    margin: 50px 40px;
    
    div{
        display: flex;
        flex-direction: column;
        max-width: 1480px;
        margin: 0 auto;

    }

    button{
        padding: 28px 30px;
        position: relative;
        background: white;
        text-align: left;
        font-size: 20px;
        font-family: "Nunito", sans-serif;
        font-style: italic;
        font-weight: bold;
        border-top: 1px solid #D6D6D6;
        border-bottom: 1px solid #D6D6D6;
        transition: 0.4s;
        cursor: pointer;
    }

    button svg{
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
        margin: 10px 13px 16px 13px;
        font-size: 1rem;
        text-indent: 42px;
        text-align: justify;
    }

    .panel .img-sobre-fe{
        max-width: 100%;
        height: 400px;
        margin: 25px 13px;
    }

    .panel .primeiro-campeao{
        max-width: 100%;
        height: 500px;
        margin: 25px 80px;
    }

    .panel .diferencial-img{
        max-width: 100%;
        height: 420px;
        margin: 25px 13px;
    }

    .panel .inovacao-img{
        max-width: 100%;
        height: 500px;
        margin: 25px 40px;
    }

    .panel .attack-mode{
        max-width: 100%;
        height: 500px;
        margin: 25px 55px;
    }

    .panel .contribuicao-futuro{
        max-width: 100%;
        height: 380px;
        margin: 25px 13px;
    }

    .panel .gen3-evo{
        max-width: 100%;
        height: 550px;
        margin: 25px 13px;
    }

    .panel .lucas-di-grassi{
        max-width: 100%;
        height: 480px;
        margin: 25px 50px;
    }

    @media screen and (max-width: 1100px){
        button{
            font-size: 19px;
        }
    }

    @media screen and (max-width: 1000px){
        margin: 42px 40px;

        button{
            font-size: 18px;
        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 370px;
            margin: 25px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 460px;
            margin: 25px 80px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 385px;
            margin: 25px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 460px;
            margin: 25px 40px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 460px;
            margin: 25px 55px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 350px;
            margin: 25px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 500x;
            margin: 25px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 450px;
            margin: 25px 50px;
        }
    }

    @media screen and (max-width: 850px){
        margin: 35px 40px 40px 40px;

        button{
            font-size: 17px;
        }

        .panel p{
            font-size: 0.9rem;
            text-indent: 38px;
            margin: 10px 13px;

        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 340px;
            margin: 25px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 420px;
            margin: 25px 80px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 355px;
            margin: 25px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 420px;
            margin: 25px 40px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 420px;
            margin: 25px 55px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 320px;
            margin: 25px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 445px;
            margin: 25px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 410px;
            margin: 25px 50px;
        }
    }

    @media screen and (max-width: 750px){
        margin: 30px 40px 40px 40px;

        button{
            font-size: 15px;
        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 320px;
            margin: 22px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 390px;
            margin: 22px 80px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 335px;
            margin: 22px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 390px;
            margin: 22px 40px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 390px;
            margin: 22px 45px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 300px;
            margin: 22px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 415px;
            margin: 22px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 385px;
            margin: 22px 50px;
        }
    }

    @media screen and (max-width: 650px){
        margin: 25px 30px 30px 30px;

        button{
            font-size: 15px;
            padding: 28px 60px 28px 30px;
        }

        .panel p{
            font-size: 0.8rem;
            text-indent: 35px;
            margin: 10px 13px 5px 13px;

        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 290px;
            margin: 20px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 360px;
            margin: 20px 60px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 310px;
            margin: 20px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 360px;
            margin: 20px 40px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 360px;
            margin: 20px 35px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 280px;
            margin: 20px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 380px;
            margin: 20px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 360px;
            margin: 20px 50px;
        }
    }

    @media screen and (max-width: 575px){
        margin: 20px 25px 25px 25px;

        button{
            font-size: 15px;
            padding: 28px 60px 28px 30px;
        }

        .panel p{
            font-size: 0.75rem;
            text-indent: 32px;
            margin: 10px 13px 5px 13px;

        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 250px;
            margin: 15px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 300px;
            margin: 15px 50px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 260px;
            margin: 15px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 300px;
            margin: 15px 40px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 300px;
            margin: 15px 35px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 230px;
            margin: 15px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 320px;
            margin: 15px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 300px;
            margin: 15px 45px;
        }
    }

    @media screen and (max-width: 500px){
        margin: 20px 15px 18px 15px;

        button{
            font-size: 15px;
            padding: 28px 60px 28px 30px;
        }

        .panel p{
            font-size: 0.75rem;
            text-indent: 32px;
            margin: 10px 13px 5px 13px;

        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 250px;
            margin: 15px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 300px;
            margin: 15px 50px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 260px;
            margin: 15px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 300px;
            margin: 15px 30px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 300px;
            margin: 15px 25px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 230px;
            margin: 15px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 320px;
            margin: 15px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 300px;
            margin: 15px 40px;
        }
    }

    @media screen and (max-width: 425px){
        margin: 18px 12px 15px 12px;

        .panel p{
            font-size: 0.75rem;
            text-indent: 32px;
        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 200px;
            margin: 12px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 240px;
            margin: 12px 30px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 210px;
            margin: 12px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 240px;
            margin: 12px 20px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 240px;
            margin: 12px 20px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 180px;
            margin: 12px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 250px;
            margin: 15px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 240px;
            margin: 15px 30px;
        }
    }

    @media screen and (max-width: 370px){
        margin: 18px 12px 15px 12px;
        
        button{
            font-size: 14px;
            padding: 28px 60px 28px 30px;
        }

        .panel p{
            font-size: 0.75rem;
            text-indent: 32px;
        }

        .panel .img-sobre-fe{
            max-width: 100%;
            height: 170px;
            margin: 12px 13px;
        }

        .panel .primeiro-campeao{
            max-width: 100%;
            height: 210px;
            margin: 12px 13px;
        }

        .panel .diferencial-img{
            max-width: 100%;
            height: 180px;
            margin: 12px 13px;
        }

        .panel .inovacao-img{
            max-width: 100%;
            height: 180px;
            margin: 12px 13px;
        }

        .panel .attack-mode{
            max-width: 100%;
            height: 200px;
            margin: 12px 13px;
        }

        .panel .contribuicao-futuro{
            max-width: 100%;
            height: 170px;
            margin: 12px 13px;
        }

        .panel .gen3-evo{
            max-width: 100%;
            height: 220px;
            margin: 15px 13px;
        }

        .panel .lucas-di-grassi{
            max-width: 100%;
            height: 200px;
            margin: 15px 20px;
        }
    }

`