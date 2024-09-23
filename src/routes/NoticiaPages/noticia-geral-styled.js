import styled from "styled-components";

/*----------------------------------------------------------*/
/*Estilização geral para a página de Noticias sobre Tecnologia*/
export const MainNoticia = styled.main`

    display: grid;
    margin: 0px 250px;
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
        color: darkred;
        text-align: center;
        margin-bottom: 20px;
    }

    h1{
        font-size: 2.4em;
        color: red;
        margin-bottom: 20px;
    }

    p{
        font-size: 1.2em;
        margin-bottom: 20px;
    }
`

export const SectionCorpoNoticia = styled.section`
    margin: 30px 0px;

    p{
        font-size: 1.3em;
        text-indent: 70px;
        text-align: justify;
        margin-bottom: 25px;
    }
    
    .img-tec1{
        width: 100%;
        height: 325px;
        margin: 30px 0px;
    }

    .img-tec2{
        width: 100%;
        height: 450px;
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
`

/*----------------------------------------------------------*/
/*Estilização para as infos extras */
export const ExtraNoticia = styled.div`
    
    padding: 20px 0px;

    .info-extra-container{
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: row;
        border-top: 1px solid black;
    }

    .info-extra-container .box-img{
        flex: 3;
    }

    .box-extra-img a img{
        margin: 20px 0px;
        max-width: 100%;
        height: 100%;
        transition: transform 1.3s ease; /* Transição suave do zoom */
    }

    .box-extra-img a:hover img{
        transform: scale(1.06); /* Aplica o leve zoom na imagem */
    }

    .info-extra-container .box-extra-info{
        padding: 20px 30px;
        text-align: justify;
        flex: 4;
        width: 100%;
        height: 100%;
    }

    .box-extra-info span{
        font-size: 1.3em;
        font-weight: bold;
        color: darkred;
    }

    .box-extra-info a{
        font-style: none;
        text-decoration: none;
    }

    .box-extra-info a h3{
        font-size: 1.5em;
        color: red;
        transition: color 1s ease;
        margin: 10px 0px;
    }

    .box-extra-info a h3:hover{
        color: darkred;
    }

    .box-extra-info p{
        font-size: 1.0em;
        margin-bottom: 10px;
    }

    .box-extra-info .data-extra-info{
        font-size: 0.9em;
        color: gray;
    }
`