import styled from "styled-components";
import HomeBackgroundLeft from "../../assets/images/home-background-l.png"
import HomeBackgroundRight from "../../assets/images/home-background-r.png"

/*----------------------------------------------------------*/
/*Estilização geral para o Home*/
export const MainHome = styled.main`

    display: grid;
    padding-top: 75px;
    grid-template-columns: 1fr 9fr 1fr;
    grid-auto-rows: 150px;
    grid-template-areas:
        'slideshow      slideshow   slideshow'
        'slideshow      slideshow   slideshow'
        'slideshow      slideshow   slideshow'
        'slideshow      slideshow   slideshow'
        'info-extra-l   recente     info-extra-r'
        'info-extra-l   noticia1    info-extra-r'
        'info-extra-l   noticia1    info-extra-r'
        'info-extra-l   noticia2    info-extra-r'
        'info-extra-l   noticia2    info-extra-r'
        'info-extra-l   noticia3    info-extra-r'
        'info-extra-l   noticia3    info-extra-r'
        'info-extra-l   noticia4    info-extra-r'
        'info-extra-l   noticia4    info-extra-r'
        'info-extra-l   noticia5    info-extra-r'
        'info-extra-l   noticia5    info-extra-r'
    ;

    .recente{
        grid-area: recente;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        
        h2{
            color: #04049a;
            font-size: 2.7em;
            margin: 20px 35px;
        }
    }

    .info1{
        grid-area: noticia1;
    }

    .info2{
        grid-area: noticia2;
    }

    .info3{
        grid-area: noticia3;
    }

    .info4{
        grid-area: noticia4;
    }

    .info5{
        grid-area: noticia5;
    }

    .info-extra-l{
        grid-area: info-extra-l;
        background: url(${HomeBackgroundLeft}) no-repeat center / cover;
    }

    .info-extra-r{
        grid-area: info-extra-r;
        background: url(${HomeBackgroundRight}) no-repeat center / cover;
    }
`

/*----------------------------------------------------------*/
/*Estilização para o Slideshow Container*/
export const SlideshowContainer = styled.section`
    width: 100%;
    position: relative;
    grid-area: slideshow;
    overflow: hidden;
`

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    text-align: justify;

    a img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1.7s ease; /* Transição suave do zoom */
    }        

    a:hover img{
        transform: scale(1.09); /* Aplica o leve zoom na imagem */
    }

    .gradient-overlay{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0) 100%);
    }

    h1{
        position: absolute;
        bottom: 60px;
        left: 20px;
        color: #fff;
        font-size: 32px;
        font-weight: bold;
        margin: 40px 20px;
    }

    p{
        position: absolute;
        bottom: 30px;
        left: 20px;
        color: #fff;
        font-size: 18px;
        margin: 30px 20px;
    }

    .numeracao-slide{
        position: absolute;
        top: 10px;
        left: 10px;
        color: #fff;
        font-size: 14px;
    }
`

/*----------------------------------------------------------*/
/*Estilização para as setas e botões do slideshow */
export const PrevButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 45%;
    left: 0;
    font-size: 24px;
    color: white;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const NextButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 45%;
    right: 0;
    font-size: 24px;
    color: white;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const DotsContainer = styled.div`
    text-align: center;
    position: relative;
    bottom: 30px;
`

export const Dot = styled.span`
    height: 15px;
    width: 15px;
    margin: 0 3px;
    background-color: ${props => (props.$active ? '#515151' : '#999999')};
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    cursor: pointer;
`

/*----------------------------------------------------------*/
/*Estilização para o resto da página Home */
export const InfoWrapper = styled.div`
    
    padding: 20px 35px;

    .info-container{
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: row;
        border-top: 1px solid black;
    }

    .info-container .box-img{
        flex: 3;
    }

    .box-img a img{
        margin: 20px 0px;
        max-width: 100%;
        height: 100%;
        transition: transform 1.3s ease; /* Transição suave do zoom */
    }

    .box-img a:hover img{
        transform: scale(1.06); /* Aplica o leve zoom na imagem */
    }

    .info-container .box-info{
        padding: 20px 30px;
        text-align: justify;
        flex: 4;
        width: 100%;
        height: 100%;
    }

    .box-info span{
        font-size: 1.3em;
        font-weight: bold;
        color: #5800C3;
    }

    .box-info a{
        font-style: none;
        text-decoration: none;
    }

    .box-info a h3{
        font-size: 1.5em;
        color: #0404fb;
        transition: color 1s ease;
        margin: 10px 0px;
    }

    .box-info a h3:hover{
        color: #04049a;
    }

    .box-info p{
        font-size: 1.0em;
        margin-bottom: 10px;
    }

    .box-info .data-info{
        font-size: 0.9em;
        color: gray;
    }
`

