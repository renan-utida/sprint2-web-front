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
        'extra'
        'extra'
        'extra'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia4'
        'noticia4'
        'noticia4'
        'noticia4'
        'noticia4'
        'noticia4'
    ;

    .titulo-noticia {
        grid-area: titulo;
    }

    .corpo-noticia{
        grid-area: corpo;
    }

    .veja-mais{
        grid-area: extra;
        color: #04049a;
        margin-top: 30px;
    }

    .veja-mais h2{
        font-size: 2.3em;
        margin-top: 75px;
    }

    .extra1{
        grid-area: noticia1;
    }
    
    .extra2{
        grid-area: noticia2;
    }

    .extra3{
        grid-area: noticia3;
    }

    .extra4{
        grid-area: noticia4;
    }

    @media screen and (max-width: 1320px){
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
        'extra'
        'extra'
        'extra'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia4'
        'noticia4'
        'noticia4'
        'noticia4'
        'noticia4'
    ;
        .veja-mais{
            font-size: 1rem;
        }
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
        'extra'
        'extra'
        'extra'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia4'
        'noticia4'
        'noticia4'
        'noticia4'
    ;
        .veja-mais{
            font-size: 0.85rem;
        }
    }

    @media screen and (max-width: 818px){
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
        'extra'
        'extra'
        'noticia1'
        'noticia1'
        'noticia1'
        'noticia2'
        'noticia2'
        'noticia2'
        'noticia3'
        'noticia3'
        'noticia3'
        'noticia4'
        'noticia4'
        'noticia4'
    ;
        .veja-mais{
            font-size: 0.7rem;
            margin: 0;
        }
    }

    @media screen and (max-width: 500px){
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
        'extra'
        'extra'
        'noticia1'
        'noticia1'
        'noticia2'
        'noticia2'
        'noticia3'
        'noticia3'
        'noticia4'
        'noticia4'
    ;
        .veja-mais{
            font-size: 0.50rem;
        }
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
        p{ font-size: 1rem }
    }
    
    @media screen and (max-width: 732px){
        h1{ font-size: 1.7rem}
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
        span{ font-size: 1.3rem; }
    }
    
    @media screen and (max-width: 450px){
        h1{ font-size: 1.3rem; }
        p{ font-size: 0.9rem }
        .data{ font-size: 0.7rem}
    }
    `

export const SectionTituloNoticia = styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;

    span{
        font-size: 1.9em;
        font-weight: bold;
        font-style: italic;
        color: #5800C3;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.5em;
        color: #0404fb;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.3em;
        margin-bottom: 20px;
    }

    .data{
        color: #3b3b3b;
    }

    strong{
        color: black;
    }
`

export const SectionCorpoNoticia = styled.section`
    margin: 30px 0px;

    p{
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
        height: 390px;
        margin: 30px 0px;
    }

    .img-cor2{
        width: 100%;
        height: 470px;
        margin: 30px 0px 15px 0px;
    }

    .img-eve1{
        width: 100%;
        height: 380px;
        margin: 30px 0px 15px 0px;
    }

    .img-eve2{
        width: 100%;
        height: 420px;
        margin: 30px 0px 15px 0px;
    }

    .img-sus1{
        width: 100%;
        height: 390px;
        margin: 30px 0px 15px 0px;
    }

    .img-sus2{
        width: 100%;
        height: 430px;
        margin: 30px 0px 15px 0px;
    }

    .img-pes1{
        width: 100%;
        height: 400px;
        margin: 30px 0px 15px 0px;
    }

    .img-pes2{
        width: 100%;
        height: 330px;
        margin: 30px 0px 15px 0px;
    }

    @media screen and (max-width: 1400px){
        margin: 26px 0;
        p{ font-size: 1.2rem; margin-bottom: 16px; }
        .img-tec1{ height: 310px; margin: 25px 0px; }
        .img-tec2{ height: 435px; margin: 25px 0px 15px 0px; }
    }
    
    @media screen and (max-width: 1080px){
        margin: 24px 0;
        p{ font-size: 1.1rem; text-indent: 55px;}
        .img-tec1{ height: 290px; margin: 18px 0px; }
        .img-tec2{ height: 415px; margin: 20px 0px 12px 0px; }
    }
    
    @media screen and (max-width: 820px){
        margin: 22px 0;
        .img-tec1{ height: 280px; margin: 10px 0px; }
        .img-tec2{ height: 385px; margin: 15px 0px 8px 0px; }
    }
    
    @media screen and (max-width: 710px){
        p{ font-size: 1.0rem; text-indent: 45px;}
        .img-tec1{ height: 250px; margin: 5px 0px 10px 0; }
        .img-tec2{ height: 355px; margin: 10px 0px 5px 0px; }
    }
    
    @media screen and (max-width: 625px){
        .img-tec1{ height: 230px; }
        .img-tec2{ height: 315px; margin: 5px 0px 5px 0px; }
    }
    
    @media screen and (max-width: 520px){
        p{ font-size: 0.9rem; text-indent: 40px;}
        .img-tec1{ height: 205px; }
        .img-tec2{ height: 260px; margin: 0px 0px 5px 0px; }
    }
    
    @media screen and (max-width: 440px){
        .img-tec1{ height: 190px; }
        .img-tec2{ height: 215px; }
    }
`

/*----------------------------------------------------------*/
/*Estilização para as infos extras */
export const ExtraNoticia = styled.div`
    
    margin: 15px 0px;

    .info-extra-container{
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: row;
        border-top: 1px solid black;
    }

    .info-extra-container a{
        max-width: 425px;
        height: 240px;
    }

    .info-extra-container a img{
        margin: 25px 0px;
        width: 100%;
        height: 100%;
        transition: transform 1.3s ease; /* Transição suave do zoom */
    }

    .info-extra-container a:hover img{
        transform: scale(1.06); /* Aplica o leve zoom na imagem */
    }

    .info-extra-container .box-extra-info{
        padding: 20px 0px 20px 25px;
        text-align: justify;
        flex: 4;
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
        .info-extra-container a{height: 225px;}
        .box-extra-info a h3{ font-size: 1.5rem;}
        .box-extra-info .data-extra-info{ font-size: 0.9rem; }
    }
    
    @media screen and (max-width: 1320px){
        .info-extra-container a{height: 200px;}
        .box-extra-info a h3{ font-size: 1.4rem;}
        .box-extra-info p{ font-size: 1.0rem;}
        .box-extra-info .data-extra-info{ font-size: 0.8rem; }
    }
    
    @media screen and (max-width: 1320px){
        .info-extra-container a{height: 190px;}
        .box-extra-info p{ font-size: 0.94rem;}
        .box-extra-info .data-extra-info{ font-size: 0.8rem; }
    }
    
    @media screen and (max-width: 1245px){
        .box-extra-info span { font-size: 1.05rem;}
        .box-extra-info a h3{ font-size: 1.3rem;}
        .box-extra-info p{ font-size: 0.85rem;}
        .box-extra-info .data-extra-info{ font-size: 0.75rem; }
    }
    
    @media screen and (max-width: 1146px){
        .box-extra-info a h3{ font-size: 1.25rem; margin: 8px 0;}
        .box-extra-info p{ font-size: 0.80rem;}
        .box-extra-info .data-extra-info{ font-size: 0.75rem; }
    }
    
    @media screen and (max-width: 1065px){
        .info-extra-container a{height: 185px;}
        .box-extra-info span { font-size: 0.9rem;}
        .box-extra-info a h3{ font-size: 1.1rem;}
        .box-extra-info p{ font-size: 0.80rem;}
        .box-extra-info .data-extra-info{ font-size: 0.75rem; }
    }

    @media screen and (max-width: 1000px){
        .info-extra-container a{height: 155px;}
        .box-extra-info span { font-size: 0.86rem;}
        .box-extra-info a h3{ font-size: 1.06rem; margin: 6px 0;}
        .box-extra-info p{ font-size: 0.74rem;}
        .box-extra-info .data-extra-info{ font-size: 0.65rem; }
    }

    @media screen and (max-width: 880px){
        .info-extra-container a{height: 145px;}
        .box-extra-info span { font-size: 0.8rem;}
        .box-extra-info a h3{ font-size: 0.95rem;}
        .box-extra-info p{ font-size: 0.7rem;}
        .box-extra-info .data-extra-info{ font-size: 0.62rem; }
    }

    @media screen and (max-width: 818px){
        .info-extra-container .box-extra-info{ padding: 12px 0px 12px 22px;}
        .info-extra-container a img{ margin: 18px 0px; }
        .info-extra-container a{height: 110px;}
        .box-extra-info span { font-size: 0.72rem;}
        .box-extra-info a h3{ font-size: 0.88rem; margin: 4px 0;}
        .box-extra-info p{ font-size: 0.68rem; margin-bottom: 5px;}
        .box-extra-info .data-extra-info{ font-size: 0.6rem; }
    }
    
    @media screen and (max-width: 768px){
        .info-extra-container .box-extra-info{ padding: 8px 0px 8px 18px;}
        .info-extra-container a{height: 110px;}
        .box-extra-info a h3{ font-size: 0.83rem; margin: 3px 0;}
        .box-extra-info p{ font-size: 0.61rem; margin-bottom: 4px;}
    }
    
    @media screen and (max-width: 676px){
        .info-extra-container .box-extra-info{ padding: 6px 0px 6px 15px;}
        .info-extra-container a img{ margin: 21px 0px; }
        .info-extra-container a{height: 100px;}
        .box-extra-info span { font-size: 0.70rem;}
        .box-extra-info a h3{ font-size: 0.80rem; margin: 3px 0;}
        .box-extra-info p{ font-size: 0.59rem; margin-bottom: 3px;}
        .box-extra-info .data-extra-info{ font-size: 0.55rem; }
    }
    
    @media screen and (max-width: 639px){
        .info-extra-container .box-extra-info{ padding: 7px 0px 5px 13px;}
        .info-extra-container a{height: 95px;}
        .box-extra-info span { font-size: 0.65rem;}
        .box-extra-info a h3{ font-size: 0.75rem; margin: 1px 0 2px 0;}
        .box-extra-info p{ font-size: 0.55rem; margin-bottom: 3px;}
        .box-extra-info .data-extra-info{ font-size: 0.5rem; }
    }
    
    @media screen and (max-width: 548px){
        .info-extra-container .box-extra-info{ padding: 5px 0px 5px 15px;}
        .info-extra-container a img{ margin: 24px 0px; }
        .box-extra-info span { font-size: 0.59rem;}
        .box-extra-info a h3{ font-size: 0.68rem; margin: 1px 0 2px 0;}
        .box-extra-info p{ font-size: 0.50rem; margin-bottom: 2px;}
        .box-extra-info .data-extra-info{ font-size: 0.46rem; }
    }
    
    @media screen and (max-width: 500px){
        .info-extra-container .box-extra-info{ padding: 0px 0px 5px 14px;}
        .info-extra-container a img{ margin: 13px 0px; }
        .info-extra-container a{height: 68px;}
        .box-extra-info span { font-size: 0.48rem;}
        .box-extra-info a h3{ font-size: 0.53rem;}
        .box-extra-info p{ font-size: 0.4rem;}
        .box-extra-info .data-extra-info{ font-size: 0.38rem; }
    }
    
    @media screen and (max-width: 460px){
        .info-extra-container .box-extra-info{ padding: 0px 0px 2px 10px;}
        .info-extra-container a img{ margin: 18px 0px; }
        .info-extra-container a{height: 60px;}
        .box-extra-info span { font-size: 0.43rem;}
        .box-extra-info a h3{ font-size: 0.48rem;}
        .box-extra-info p{ font-size: 0.37rem; margin-bottom: 1px;}
        .box-extra-info .data-extra-info{ font-size: 0.34rem; }
    }
    
    @media screen and (max-width: 296px){
        .info-extra-container .box-extra-info{ padding: 0px 0px 2px 10px;}
        .info-extra-container a img{ margin: 19px 0px; }
        .info-extra-container a{height: 57px;}
        .box-extra-info span { font-size: 0.42rem;}
        .box-extra-info a h3{ font-size: 0.47rem;}
        .box-extra-info p{ font-size: 0.33rem; margin-bottom: 0;}
        .box-extra-info .data-extra-info{ font-size: 0.32rem; }
    }
`