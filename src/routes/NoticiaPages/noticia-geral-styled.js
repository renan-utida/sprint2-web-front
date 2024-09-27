import styled from "styled-components";

/*----------------------------------------------------------*/
/*Estilização geral para a página de Noticias sobre Tecnologia*/
export const MainNoticia = styled.main`

    display: grid;
    margin: 0px 150px;
    padding-top: 75px;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
    grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;

    .titulo-noticia {
        grid-area: titulo;
    }

    .corpo-noticia{
        grid-area: corpo;
    }

    @media screen and (max-width: 1400px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 1324px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 1240px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 1080px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 1000px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 820px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 672px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 440px){
        grid-template-areas:
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'titulo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
        'corpo'
    ;
    }

    @media screen and (max-width: 1080px){
        margin: 0 125px;
    }

    @media screen and (max-width: 920px){
        margin: 0 95px;
    }

    @media screen and (max-width: 800px){
        margin: 0 80px;
    }
    
    @media screen and (max-width: 575px){
        margin: 0 65px;
    }

    @media screen and (max-width: 420px){
        margin: 0 50px;
    }

    @media screen and (max-width: 388px){
        margin: 0 35px;
    }

    @media screen and (max-width: 358px){
        margin: 0 25px;
    }

    @media screen and (max-width: 338px){
        margin: 0 18px;
    }

    @media screen and (max-width: 324px){
        margin: 0 10px;
    }
`

export const SectionTituloTecnologia = styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;

    span{
        font-size: 1.9rem;
        font-weight: bold;
        font-style: italic;
        color: #5800C3;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.5rem;
        color: #0404fb;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.3rem;
        margin-bottom: 20px;
    }

    .data{
        color: #3b3b3b;
        margin-top: 10px;
    }

    strong{
        color: black;
    }

    @media screen and (max-width: 1330px){
        p{ font-size: 1.2rem; }
    }
    @media screen and (max-width: 1250px){
        h1{ font-size: 2.3rem; }
        p{ font-size: 1.1rem; }
        .data{ margin-top: 15px;}
    }

    @media screen and (max-width: 1120px){
        h1{ font-size: 2.2rem; }
    }

    @media screen and (max-width: 1041px){
        h1{ font-size: 2rem; }
    }

    @media screen and (max-width: 960px){
        span{ font-size: 1.6rem; }
        h1{ font-size: 1.8rem; }
    }
    
    @media screen and (max-width: 825px){
        p{ font-size: 0.98rem; }
    }
    
    @media screen and (max-width: 732px){
        h1{ font-size: 1.7rem;}
    }
    
    @media screen and (max-width: 700px){
        h1{ font-size: 1.6rem; }
    }
    
    @media screen and (max-width: 678px){
        h1{ font-size: 1.5rem; }
    }
    
    @media screen and (max-width: 615px){
        span{ font-size: 1.4rem; }
        h1{ font-size: 1.4rem; }
        .data{ margin-top: 8px;}
        .data{ font-size: 0.9rem;}
    }
    
    @media screen and (max-width: 586px){
        span{ font-size: 1.25rem; }
    }
    
    @media screen and (max-width: 450px){
        h1{ font-size: 1.3rem; }
        p{ font-size: 0.86rem; }
        .data{ font-size: 0.7rem;}
    }
    `

export const SectionTituloCorrida = styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;

    span{
        font-size: 1.9rem;
        font-weight: bold;
        font-style: italic;
        color: #5800C3;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.5rem;
        color: #0404fb;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.35rem;
        margin-bottom: 20px;
    }

    .data{
        color: #3b3b3b;
        margin-top: 10px;
    }

    strong{
        color: black;
    }

    @media screen and (max-width: 1408px){
        h1{ font-size: 2.4rem; }
        p{ font-size: 1.3rem; }
    }
    
    @media screen and (max-width: 1362px){
        h1{ font-size: 2.3rem; }
    }
    
    @media screen and (max-width: 1271px){
        h1{ font-size: 2.1rem; margin-bottom: 25px;}
        p{ font-size: 1.2rem; }
        .data{ margin-top: 14px;}
    }
    
    @media screen and (max-width: 1124px){
        span{font-size: 1.75rem; }
        h1{ font-size: 1.95rem; }
        .data{ margin-top: 6px;}
    }
    
    @media screen and (max-width: 960px){
        span{ font-size: 1.55rem; }
        h1{ font-size: 1.9rem; }
        p{ font-size: 1.1rem; }
        .data{ margin-top: 10px;}
    }
    
    @media screen and (max-width: 810px){
        span{ font-size: 1.5rem; }
        h1{ font-size: 1.85rem; }
        p{ font-size: 1.05rem; }
    }
    
    @media screen and (max-width: 719px){
        h1{ font-size: 1.8rem; margin-bottom: 12px;}
        p { font-size: 1rem;}
        .data{ margin-top: 4px;}
    }
    
    @media screen and (max-width: 678px){
        span{ font-size: 1.4rem; }
        h1{ font-size: 1.7rem;}
        p { font-size: 0.95rem;}
    }
    
    @media screen and (max-width: 586px){
        span{ font-size: 1.35rem; }
        h1{ font-size: 1.63rem; }
        p{ font-size: 0.93rem;}
        .data{ font-size: 0.85rem;}
    }
    
    @media screen and (max-width: 450px){
        span{ font-size: 1.3rem; }
        h1{ font-size: 1.5rem; }
        p{ font-size: 0.85rem; }
        .data{ font-size: 0.70rem;}
    }
    `

export const SectionTituloEventos = styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;

    span{
        font-size: 1.9rem;
        font-weight: bold;
        font-style: italic;
        color: #5800C3;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.5rem;
        color: #0404fb;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.4rem;
        margin-bottom: 20px;
    }

    .data{
        color: #3b3b3b;
        margin-top: 10px;
    }

    strong{
        color: black;
    }

    @media screen and (max-width: 1408px){
        h1{ font-size: 2.4rem; }
        p{ font-size: 1.35rem; }
    }
    
    @media screen and (max-width: 1362px){
        h1{ font-size: 2.3rem; }
    }
    
    @media screen and (max-width: 1271px){
        h1{ font-size: 2.1rem; margin-bottom: 25px;}
        p{ font-size: 1.3rem; }
        .data{ margin-top: 14px;}
    }
    
    @media screen and (max-width: 1124px){
        h1{ font-size: 2.05rem; }
        span{font-size: 1.75rem; }
        p{ font-size: 1.25rem; }
    }
    
    @media screen and (max-width: 960px){
        span{ font-size: 1.6rem; }
        h1{ font-size: 1.9rem; }
        p{ font-size: 1.1rem; }
        .data{ margin-top: 22px;}
    }
    
    @media screen and (max-width: 810px){
        span{ font-size: 1.5rem; }
        h1{ font-size: 1.85rem; }
        p{ font-size: 1.05rem; }
        .data{ margin-top: 14px;}
    }
    
    @media screen and (max-width: 719px){
        h1{ font-size: 1.8rem;}
        p { font-size: 1rem;}
        .data{ margin-top: 4px;}
    }
    
    @media screen and (max-width: 678px){
        span{ font-size: 1.4rem; }
    }
    
    @media screen and (max-width: 586px){
        h1{ font-size: 1.7rem; }
        span{ font-size: 1.35rem; }
        p{ font-size: 0.95rem;}
        .data{ font-size: 0.85rem;}
    }
    
    @media screen and (max-width: 450px){
        h1{ font-size: 1.6rem; }
        p{ font-size: 0.9rem; }
        .data{ font-size: 0.70rem;}
    }
    `

export const SectionTituloSustentabilidade = styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;

    span{
        font-size: 1.9rem;
        font-weight: bold;
        font-style: italic;
        color: #5800C3;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.4rem;
        color: #0404fb;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.25rem;
        margin-bottom: 20px;
    }

    .data{
        color: #3b3b3b;
        margin-top: 10px;
    }

    strong{
        color: black;
    }

    @media screen and (max-width: 1408px){
        h1{ font-size: 2.3rem; }
    }
    
    @media screen and (max-width: 1362px){
        h1{ font-size: 2.1rem; }
        p{ font-size: 1.2rem; }
    }

    @media screen and (max-width: 1271px){
        h1{ font-size: 2.0rem; }
        p{ font-size: 1.15rem; }
        .data{ margin-top: 7px;}
    }
    
    @media screen and (max-width: 1226px){
        h1{ font-size: 1.9rem; }
    }

    @media screen and (max-width: 1124px){
        h1{ font-size: 1.85rem; }
        span{font-size: 1.75rem; }
    }

    @media screen and (max-width: 1041px){
        p{ font-size: 1.1rem; }
    }
    
    @media screen and (max-width: 960px){
        span{ font-size: 1.6rem; }
        h1{ font-size: 1.8rem; }
    }
    
    @media screen and (max-width: 836px){
        p{ font-size: 0.95rem; }
    }
    
    @media screen and (max-width: 810px){
        span{ font-size: 1.5rem; }
        h1{ font-size: 1.7rem;}
    }
    
    @media screen and (max-width: 719px){
        h1{ font-size: 1.6rem; }
        p { font-size: 0.9rem;}
        .data{ margin-top: 4px;}
    }
    
    @media screen and (max-width: 678px){
        h1{ font-size: 1.5rem; }
        span{ font-size: 1.35rem; }
    }
    
    @media screen and (max-width: 615px){
        span{ font-size: 1.3rem; }
        h1{ font-size: 1.4rem; }
        .data{ font-size: 0.8rem;}
    }
    
    @media screen and (max-width: 586px){
        span{ font-size: 1.25rem; }
    }
    
    @media screen and (max-width: 450px){
        h1{ font-size: 1.3rem; }
        p{ font-size: 0.86rem; }
        .data{ font-size: 0.7rem;}
    }
    `

export const SectionTituloPesquisa = styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;

    span{
        font-size: 1.9rem;
        font-weight: bold;
        font-style: italic;
        color: #5800C3;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.5rem;
        color: #0404fb;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.4rem;
        margin-bottom: 20px;
    }

    .data{
        color: #3b3b3b;
        margin-top: 10px;
    }

    strong{
        color: black;
    }

    @media screen and (max-width: 1408px){
        h1{ font-size: 2.4rem; }
        p{ font-size: 1.35rem; }
    }
    
    @media screen and (max-width: 1362px){
        h1{ font-size: 2.3rem; }
    }
    
    @media screen and (max-width: 1271px){
        h1{ font-size: 2.1rem; margin-bottom: 25px;}
        p{ font-size: 1.3rem; }
        .data{ margin-top: 14px;}
    }
    
    @media screen and (max-width: 1124px){
        h1{ font-size: 2rem; }
        span{font-size: 1.75rem; }
        p{ font-size: 1.2rem; }
    }
    
    @media screen and (max-width: 960px){
        span{ font-size: 1.6rem; }
        h1{ font-size: 1.9rem; }
        p{ font-size: 1.1rem; }
    }
    
    @media screen and (max-width: 810px){
        span{ font-size: 1.5rem; }
        h1{ font-size: 1.8rem; }
        p{ font-size: 1rem; }
    }
    
    @media screen and (max-width: 719px){
        h1{ font-size: 1.7rem;}
        p { font-size: 0.95rem;}
        .data{ margin-top: 4px;}
    }
    
    @media screen and (max-width: 678px){
        span{ font-size: 1.4rem; }
    }
    
    @media screen and (max-width: 586px){
        h1{ font-size: 1.6rem; }
        span{ font-size: 1.35rem; }
        p{ font-size: 0.9rem;}
        .data{ font-size: 0.85rem;}
    }
    
    @media screen and (max-width: 450px){
        h1{ font-size: 1.5rem; }
        p{ font-size: 0.86rem; }
        .data{ font-size: 0.7rem;}
    }
    `

export const SectionCorpoNoticia = styled.section`
    margin: 30px 0px;

    .paragr{
        font-size: 1.3rem;
        text-indent: 70px;
        text-align: justify;
        margin-bottom: 25px;
        font-family: "Nunito", sans-serif;
    }
    
    .img-tec1{
        width: 100%;
        height: 325px;
        margin: 30px 0px;
    }

    .img-tec2{
        width: 100%;
        height: 460px;
        margin: 30px 0px 15px 0px;
    }

    .img-cor1{
        width: 100%;
        height: 380px;
        margin: 30px 0px;
    }

    .img-cor2{
        width: 100%;
        height: 460px;
        margin: 30px 0px 15px 0px;
    }

    .img-eve1{
        width: 100%;
        height: 375px;
        margin: 27px 0px;
    }

    .img-eve2{
        width: 100%;
        height: 400px;
        margin: 27px 0px 15px 0px;
    }

    .img-sus1{
        width: 100%;
        height: 370px;
        margin: 25px 0px;
    }

    .img-sus2{
        width: 100%;
        height: 420px;
        margin: 25px 0px 15px 0px;
    }

    .img-pes1{
        width: 100%;
        height: 390px;
        margin: 30px 0px;
    }

    .img-pes2{
        width: 100%;
        height: 340px;
        margin: 30px 0px 15px 0px;
    }
    
    h2{
        color: #04049a;
        margin-top: 30px;
        font-size: 2.3rem;
    }

    @media screen and (max-width: 1400px){
        margin: 28px 0;
        .img-tec1{ height: 310px; margin: 27px 0px; }
        .img-tec2{ height: 440px; margin: 27px 0px 15px 0px; }
        .img-cor1{ height: 355px; margin: 27px 0px; }
        .img-cor2{ height: 430px; margin: 27px 0px 15px 0px;}
        .img-eve1{ height: 350px; margin: 27px 0px; }
        .img-eve2{ height: 380px; margin: 27px 0px 15px 0px; }
        .img-sus1{ height: 355px; margin: 20px 0px; }
        .img-sus2{ height: 395px; margin: 20px 0px 15px 0px; } 
        .img-pes1{ height: 375px; margin: 25px 0px; }
        .img-pes2{ height: 325px; margin: 25px 0px 15px 0px; }
    }
    
    @media screen and (max-width: 1374px){
        .paragr{ font-size: 1.2rem; }       
        h2{ font-size: 2.0rem; }
        .img-eve1{ height: 340px; margin: 27px 0px; }
        .img-eve2{ height: 370px; margin: 27px 0px 15px 0px; }
    }
    
    @media screen and (max-width: 1306px){
        .paragr{ font-size: 1.13rem; margin-bottom: 23px; }
    }
    
    @media screen and (max-width: 1240px){
        margin: 26px 0;
        .paragr{ font-size: 1.08rem; margin-bottom: 21px; }
        .img-tec1{ height: 290px; margin: 24px 0px; }
        .img-tec2{ height: 415px; margin: 24px 0px 13px 0px; }
        .img-cor1{ height: 330px; margin: 24px 0px; }
        .img-cor2{ height: 405px; margin: 24px 0px 15px 0px;}
        .img-eve1{ height: 325px; margin: 24px 0px; }
        .img-eve2{ height: 365px; margin: 24px 0px 15px 0px; }
        .img-sus1{ height: 330px; margin: 20px 0px; }
        .img-sus2{ height: 370px; margin: 20px 0px 15px 0px; }
        .img-pes1{ height: 355px; margin: 24px 0px; }
        .img-pes2{ height: 310px; margin: 24px 0px 15px 0px; }
        h2{ font-size: 1.85rem; }
    }
    
    @media screen and (max-width: 1174px){
        margin: 25px 0;
        .paragr{ font-size: 1.03rem; text-indent: 48px;}
        .img-tec1{ height: 275px; margin: 22px 0px; }
        .img-tec2{ height: 400px; margin: 22px 0px 12px 0px; }
        .img-cor1{ height: 320px; margin: 24px 0px; }
        .img-cor2{ height: 390px; margin: 24px 0px 15px 0px;}
        .img-eve1{ height: 320px; margin: 24px 0px; }
        .img-eve2{ height: 355px; margin: 24px 0px 15px 0px; }
        .img-sus1{ height: 315px; margin: 20px 0px; }
        .img-sus2{ height: 355px; margin: 20px 0px 12px 0px; }
        .img-pes1{ height: 340px; margin: 22px 0px; }
        .img-pes2{ height: 300px; margin: 22px 0px 12px 0px; }
    }
    
    @media screen and (max-width: 1095px){
        margin: 24px 0;
        .paragr{ font-size: 0.97rem; }
        .img-cor1{ height: 310px; margin: 20px 0px; }
        .img-cor2{ height: 380px; margin: 20px 0px 15px 0px;}
        .img-eve1{ height: 305px; margin: 20px 0px; }
        .img-eve2{ height: 340px; margin: 20px 0px 15px 0px; }
        .img-sus1{ height: 305px; margin: 20px 0px; }
        .img-sus2{ height: 342px; margin: 20px 0px 12px 0px; }
    }
    
    @media screen and (max-width: 1000px){
        margin: 24px 0;
        .paragr{ font-size: 0.92rem; }
        .img-tec1{ height: 245px; margin: 20px 0px; }
        .img-tec2{ height: 360px; margin: 20px 0px 10px 0px; }
        .img-cor1{ height: 290px; margin: 18px 0px; }
        .img-cor2{ height: 355px; margin: 18px 0px 15px 0px;}
        .img-eve1{ height: 285px; margin: 18px 0px; }
        .img-eve2{ height: 315px; margin: 18px 0px 15px 0px; }
        .img-sus1{ height: 295px; margin: 18px 0px; }
        .img-sus2{ height: 335px; margin: 18px 0px 12px 0px; }
        .img-pes1{ height: 300px; margin: 18px 0px; }
        .img-pes2{ height: 270px; margin: 18px 0px 12px 0px; }
        h2{ font-size: 1.7rem; margin-top: 10px;}
    }
    
    @media screen and (max-width: 820px){
        margin: 21px 0;
        .img-tec1{ height: 225px; margin: 10px 0px; }
        .img-tec2{ height: 330px; margin: 15px 0px 8px 0px; }
        .img-cor1{ height: 270px; margin: 14px 0px; }
        .img-cor2{ height: 330px; margin: 14px 0px 8px 0px;}
        .img-eve1{ height: 260px; margin: 12px 0px; }
        .img-eve2{ height: 290px; margin: 12px 0px 8px 0px; }
        .img-sus1{ height: 265px; margin: 12px 0px; }
        .img-sus2{ height: 300px; margin: 12px 0px 8px 0px; }
        .img-pes1{ height: 265px; margin: 14px 0px; }
        .img-pes2{ height: 235px; margin: 14px 0px 8px 0px; }
    }
    
    @media screen and (max-width: 755px){
        .paragr{ font-size: 0.9rem; text-indent: 42px;}
        .img-tec1{ height: 215px; margin: 5px 0px 10px 0; }
        .img-tec2{ height: 310px; margin: 10px 0px 5px 0px; }
        .img-cor1{ height: 255px; margin: 10px 0px; }
        .img-cor2{ height: 315px; margin: 10px 0px 8px 0px;}
        .img-eve1{ height: 255px; margin: 10px 0px; }
        .img-eve2{ height: 285px; margin: 10px 0px 6px 0px; }
        .img-sus1{ height: 250px; margin: 8px 0px; }
        .img-sus2{ height: 285px; margin: 10px 0px 6px 0px; }
        .img-pes1{ height: 260px; margin: 10px 0px; }
        .img-pes2{ height: 225px; margin: 10px 0px 8px 0px; }
        h2{ font-size: 1.6rem; }
    }
    
    @media screen and (max-width: 675px){
        .paragr{ font-size: 0.86rem; text-indent: 40px;}
        .img-tec1{ height: 195px; }
        .img-tec2{ height: 290px; margin: 5px 0px 5px 0px; }
        .img-cor1{ height: 235px; margin: 5px 0px; }
        .img-cor2{ height: 310px; margin: 5px 0px 6px 0px;}
        .img-eve1{ height: 235px; margin: 5px 0px; }
        .img-eve2{ height: 260px; margin: 5px 0px 6px 0px; }
        .img-sus1{ height: 230px; margin: 4px 0px; }
        .img-sus2{ height: 260px; margin: 5px 0px 6px 0px; }
        .img-pes1{ height: 235px; margin: 5px 0px; }
        .img-pes2{ height: 205px; margin: 5px 0px 6px 0px; }
        h2{ font-size: 1.4rem; }
    }
    
    @media screen and (max-width: 560px){
        .paragr{ font-size: 0.84rem; text-indent: 37px;}
        .img-tec1{ height: 175px; }
        .img-tec2{ height: 260px; margin: 0px 0px 5px 0px; }
        .img-cor1{ height: 215px; margin: 5px 0px; }
        .img-cor2{ height: 290px; margin: 5px 0px 6px 0px;}
        .img-eve1{ height: 220px; margin: 5px 0px; }
        .img-eve2{ height: 245px; margin: 5px 0px 6px 0px; }
        .img-pes1{ height: 225px; margin: 5px 0px; }
        .img-pes2{ height: 195px; margin: 5px 0px 6px 0px; }
        h2{ font-size: 1.25rem; }
    }
    
    @media screen and (max-width: 442px){
        .paragr{ font-size: 0.8rem; text-indent: 37px;}
        .img-tec1{ height: 155px; }
        .img-tec2{ height: 225px; }
        .img-cor1{ height: 185px; margin: 5px 0px; }
        .img-cor2{ height: 255px; margin: 5px 0px;}
        .img-eve1{ height: 160px; margin: 5px 0px; }
        .img-eve2{ height: 180px; margin: 5px 0px; }
        .img-sus1{ height: 180px; margin: 2px 0px; }
        .img-sus2{ height: 210px; margin: 4px 0px; }
        .img-pes1{ height: 170px; margin: 2px 0px; }
        .img-pes2{ height: 155px; margin: 2px 0px; }
        h2{ font-size: 1.0rem;}
    }
    
    @media screen and (max-width: 393px){
        .paragr{ font-size: 0.79rem; text-indent: 35px;}
        .img-pes1{ height: 160px; margin: 2px 0px; }
        h2{ font-size: 0.95rem;}
    }
`

/*----------------------------------------------------------*/
/*Estilização para as infos extras */
export const ExtraNoticia = styled.div`
    
    margin: 20px 0px;

    .info-extra-container{
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: row;
        border-top: 1px solid black;
    }

    .info-extra-container .img-link{
        max-width: 425px;
        height: auto;
        margin-top: 20px;
    }

    .img-link img{
        width: 100%;
        height: 100%;
        transition: transform 1.3s ease; /* Transição suave do zoom */
    }

    .info-extra-container a:hover img{
        transform: scale(1.06); /* Aplica o leve zoom na imagem */
    }

    .info-extra-container .box-extra-info{
        padding: 15px 0px 20px 30px;
        text-align: justify;
        flex: 1;
        width: 100%;
        height: 100%;
    }

    .box-extra-info span{
        font-size: 1.3rem;
        font-weight: bold;
        color: #5800C3;
    }

    .box-extra-info a{
        font-style: none;
        text-decoration: none;
    }

    .box-extra-info a h3{
        font-size: 1.6rem;
        color: #0404fb;
        transition: color 1s ease;
        margin: 10px 0px;
    }

    .box-extra-info a h3:hover{
        color: #04049a;
    }

    .box-extra-info p{
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-family: "Nunito", sans-serif;
    }

    .box-extra-info .data-extra-info{
        font-size: 1rem;
        color: gray;
    }

    @media screen and (max-width: 1455px){
        .box-extra-info p{
            font-size: 1.1rem;
        }
    }

    @media screen and (max-width: 1400px){
        .info-extra-container{height: 235px;}
        .box-extra-info a h3{ font-size: 1.5rem;}
        .box-extra-info .data-extra-info{ font-size: 0.9rem; }
    }
    
    @media screen and (max-width: 1324px){
        .info-extra-container{height: 200px;}
        .box-extra-info a h3{ font-size: 1.4rem;}
        .box-extra-info p{ font-size: 1.0rem;}
        .box-extra-info .data-extra-info{ font-size: 0.8rem; }
    }
    
    @media screen and (max-width: 1295px){
        .info-extra-container{height: 195px;}
        .box-extra-info span { font-size: 1.05rem;}
        .box-extra-info a h3{ font-size: 1.33rem;}
        .box-extra-info p{ font-size: 0.95rem;}
    }
    
    @media screen and (max-width: 1245px){
        .box-extra-info a h3{ font-size: 1.27rem;}
        .box-extra-info p{ font-size: 0.89rem;}
        .box-extra-info .data-extra-info{ font-size: 0.75rem; }
    }
    
    @media screen and (max-width: 1146px){
        .box-extra-info a h3{ font-size: 1.24rem; margin: 8px 0;}
        .box-extra-info p{ font-size: 0.80rem;}
        .box-extra-info .data-extra-info{ font-size: 0.77rem; }
    }
    
    @media screen and (max-width: 1065px){
        .info-extra-container{height: 185px;}
        .box-extra-info span { font-size: 0.9rem;}
        .box-extra-info a h3{ font-size: 1.1rem;}
        .box-extra-info p{ font-size: 0.78rem;}
        .box-extra-info .data-extra-info{ font-size: 0.75rem; }
    }

    @media screen and (max-width: 1000px){
        .info-extra-container{height: 170px;}
        .info-extra-container .box-extra-info{padding: 15px 0px 20px 25px;}
        .box-extra-info span { font-size: 0.86rem;}
        .box-extra-info a h3{ font-size: 1.06rem; margin: 6px 0;}
        .box-extra-info p{ font-size: 0.74rem;}
        .box-extra-info .data-extra-info{ font-size: 0.69rem; }
    }
    
    @media screen and (max-width: 880px){
        .info-extra-container{height: 160px;}
        .info-extra-container .box-extra-info{padding: 12px 0px 16px 22px;}
        .box-extra-info span { font-size: 0.8rem;}
        .box-extra-info a h3{ font-size: 0.95rem;}
        .box-extra-info p{ font-size: 0.7rem;}
        .box-extra-info .data-extra-info{ font-size: 0.62rem; }
    }

    @media screen and (max-width: 818px){
        .info-extra-container{height: 155px;}
        .info-extra-container .box-extra-info{ padding: 10px 0px 13px 20px;}
        .box-extra-info span { font-size: 0.72rem;}
        .box-extra-info a h3{ font-size: 0.88rem; margin: 4px 0;}
        .box-extra-info p{ font-size: 0.68rem; margin-bottom: 5px;}
        .box-extra-info .data-extra-info{ font-size: 0.6rem; }
    }
    
    @media screen and (max-width: 768px){
        .info-extra-container .box-extra-info{ padding: 8px 0px 8px 18px;}
        .box-extra-info a h3{ font-size: 0.83rem; margin: 3px 0;}
        .box-extra-info p{ font-size: 0.61rem; margin-bottom: 4px;}
    }
    
    @media screen and (max-width: 676px){
        .info-extra-container{height: 145px;}
        .info-extra-container .box-extra-info{ padding: 6px 0px 6px 15px;}
        .box-extra-info span { font-size: 0.70rem;}
        .box-extra-info a h3{ font-size: 0.80rem; margin: 3px 0;}
        .box-extra-info p{ font-size: 0.59rem; margin-bottom: 3px;}
        .box-extra-info .data-extra-info{ font-size: 0.55rem; }
    }
    
    @media screen and (max-width: 639px){
        .info-extra-container {height: 136px;}
        .info-extra-container .box-extra-info{ padding: 7px 0px 5px 13px;}
        .box-extra-info span { font-size: 0.65rem;}
        .box-extra-info a h3{ font-size: 0.75rem; margin: 1px 0 2px 0;}
        .box-extra-info p{ font-size: 0.55rem; margin-bottom: 3px;}
        .box-extra-info .data-extra-info{ font-size: 0.5rem; }
    }
    
    @media screen and (max-width: 548px){
        .info-extra-container {height: 130px;}
        .info-extra-container .box-extra-info{ padding: 5px 0px 5px 13px;}
        .box-extra-info span { font-size: 0.59rem;}
        .box-extra-info a h3{ font-size: 0.66rem; margin: 1px 0 2px 0;}
        .box-extra-info p{ font-size: 0.52rem;}
        .box-extra-info .data-extra-info{ font-size: 0.46rem; }
    }
    
    @media screen and (max-width: 515px){
        .info-extra-container {height: 120px;}
        .info-extra-container .img-link{ margin-top: 13px;}
        .info-extra-container .box-extra-info{ padding: 0px 0px 5px 12px;}
        .box-extra-info span { font-size: 0.51rem;}
        .box-extra-info a h3{ font-size: 0.60rem;}
        .box-extra-info p{ font-size: 0.48rem;}
        .box-extra-info .data-extra-info{ font-size: 0.39rem; }
    }
    
    @media screen and (max-width: 492px){
        .info-extra-container .img-link{ margin-top: 12px;}
        .info-extra-container{height: 100px;}
        .info-extra-container .box-extra-info{ padding: 0px 0px 3px 10px;}
        .box-extra-info span { font-size: 0.48rem;}
        .box-extra-info a h3{ font-size: 0.53rem;}
        .box-extra-info p{ font-size: 0.45rem; margin-bottom: 1px;}
        .box-extra-info .data-extra-info{ font-size: 0.35rem; }
    }
    
    @media screen and (max-width: 439px){
        .info-extra-container{height: 92px;}
        .box-extra-info span { font-size: 0.42rem;}
        .box-extra-info a h3{ font-size: 0.48rem;}
        .box-extra-info p{ font-size: 0.39rem; margin-bottom: 1px;}
        .box-extra-info .data-extra-info{ font-size: 0.34rem; }
    }
    
    @media screen and (max-width: 306px){
        .info-extra-container .img-link{height: 82px;}
        .info-extra-container .box-extra-info{ padding: 0px 0px 2px 7px;}
        .box-extra-info a h3{ font-size: 0.45rem;}
        .box-extra-info p{ font-size: 0.35rem; margin-bottom: 0;}
        .box-extra-info .data-extra-info{ font-size: 0.31rem; }
    }
`