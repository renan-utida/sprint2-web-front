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
            font-size: 2.7rem;
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

    @media screen and (max-width: 1000px){
        grid-auto-rows: 50px;
        grid-template-areas:
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
        ;

        .recente h2{
            font-size: 2.2rem;
            margin: 20px 35px 5px 35px;
        }
    }

    @media screen and (max-width: 720px){
        .recente h2{
            font-size: 1.75rem;
            margin: 20px 35px 5px 35px;
        }
    }
    
    @media screen and (max-width: 620px){
        grid-template-columns: 1fr 11fr 1fr;
        grid-auto-rows: 25px;
        grid-template-areas:
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
        ;
    }
    
    @media screen and (max-width: 620px){
        grid-template-columns: 1fr 11fr 1fr;
        grid-auto-rows: 25px;
        grid-template-areas:
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'slideshow      slideshow   slideshow'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   recente     info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia1    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia2    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia3    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia4    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
            'info-extra-l   noticia5    info-extra-r'
        ;

        .recente h2{
            margin: 20px 35px 0px 20px;
        }
    }

    @media screen and (max-width: 580px){
        .recente h2{
            font-size: 1.4rem;
            margin: 20px 35px -5px 20px;
        }
    }

    @media screen and (max-width: 424px){
        .recente h2{
            margin: 20px 35px 0px 15px;
        }
    }

    @media screen and (max-width: 390px){
        .recente h2{
            font-size: 1.25rem;
            margin: 20px 35px 0px 10px;
        }
    }

    @media screen and (max-width: 390px){
        grid-template-columns: 1fr 15fr 1fr;
    }

    @media screen and (max-width: 350px){
        grid-template-columns: 1fr 20fr 1fr;
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
        bottom: 105px;
        left: 20px;
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
        margin: 40px 40px 40px 20px;
    }

    p{
        position: absolute;
        bottom: 65px;
        left: 20px;
        color: #fff;
        font-size: 1.3rem;
        font-family: "Nunito", sans-serif;
        font-style: italic;
        margin: 25px 40px 25px 20px;
    }

    .numeracao-slide{
        position: absolute;
        top: 10px;
        left: 10px;
        color: #fff;
        font-size: 14px;
    }

    @media screen and (max-width: 1448px){
        h1{ 
            font-size: 2.4rem;
        }
    }

    @media screen and (max-width: 1265px){
        h1{ 
            margin: 40px 30px 40px 15px;
            font-size: 2.3rem; 
            left: 15px;
        }
        
        p{ 
            margin: 25px 30px 25px 15px;
            left: 15px;
            font-size: 1.25rem; 
        }
    }
    
    @media screen and (max-width: 1120px){
        h1{ font-size: 2.15rem; }
        p{ font-size: 1.2rem;}
    }
    
    @media screen and (max-width: 910px){
        h1{ font-size: 2.1rem; }
        p{ font-size: 1.15rem;}
    }
    
    @media screen and (max-width: 750px){
        h1{ font-size: 1.95rem; }

        p{
            font-size: 1.1rem;
        }
    }
    
    @media screen and (max-width: 710px){
        h1{ 
            margin: 40px 25px 40px 10px;
            font-size: 1.8rem;
            bottom: 70px;
        }
        
        p{ 
            margin: 25px 25px 25px 10px;
            font-size: 1rem;
            bottom: 34px;
        }
    }
    
    @media screen and (max-width: 620px){
        h1{ 
            font-size: 1.65rem;
        }
        
        p{ 
            font-size: 0.9rem;
        }
    }
    
    @media screen and (max-width: 570px){
        h1{ 
            margin: 40px 21px 40px 6px;
            font-size: 1.6rem;
        }
        
        p{ 
            font-size: 0.85rem;
            margin: 25px 21px 25px 6px;
        }
    }
    
    @media screen and (max-width: 530px){
        h1{ 
            margin: 40px 18px 40px 3px;
            font-size: 1.55rem;
        }
        
        p{ 
            font-size: 0.8rem;
            margin: 25px 18px 25px 3px;
        }
    }
    
    @media screen and (max-width: 488px){
        h1{ 
            margin: 40px 15px 40px 0px;
            font-size: 1.4rem;
        }
        
        p{ 
            font-size: 0.8rem;
            margin: 25px 15px 25px 0px;
        }
    }
    
    @media screen and (max-width: 420px){
        h1{ 
            margin: 40px 12px 40px 0px;
            left: 12px;
            font-size: 1.35rem;
        }
        
        p{ 
            font-size: 0.77rem;
            left: 12px;
            margin: 25px 12px 25px 0px;
        }
    }
    
    @media screen and (max-width: 352px){
        h1{ 
            margin: 40px 10px 40px 0px;
            left: 10px;
            font-size: 1.25rem;
        }
        
        p{ 
            font-size: 0.74rem;
            left: 10px;
            margin: 25px 10px 25px 0px;
        }
    }
    
    @media screen and (max-width: 320px){
        h1{ 
            font-size: 1.20rem;
        }
        
        p{ 
            font-size: 0.73rem;
        }
    }
    
`

/*----------------------------------------------------------*/
/*Estilização para as setas e botões do slideshow */
export const PrevButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 43%;
    left: 0;
    font-size: 24px;
    color: white;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    @media screen and (max-width: 620px){
        top: 38%;
        font-size: 17px;
    }
    `

export const NextButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 43%;
    right: 0;
    font-size: 24px;
    color: white;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    @media screen and (max-width: 620px){
        top: 38%;
        font-size: 17px;
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

    @media screen and (max-width: 620px){
        width: 14px;
        height: 14px;
    }
`

/*----------------------------------------------------------*/
/*Estilização para o resto da página Home */
export const InfoWrapper = styled.div`
    
    padding: 20px 35px;

    .info-container{
        width: 100%;
        height: 260px;
        display: flex;
        flex-direction: row;
        border-top: 1px solid black;
    }

    .info-container .box-img{
        flex: 3;
    }

    .box-img a img{
        margin: 15px 0px;
        max-width: 100%;
        height: 100%;
        transition: transform 1.2s ease; /* Transição suave do zoom */
    }

    .box-img a:hover img{
        transform: scale(1.06); /* Aplica o leve zoom na imagem */
    }

    .info-container .box-info{
        padding: 20px 15px 20px 25px;
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

    @media screen and (max-width: 1150px){   
        .box-info span{
            font-size: 1.25rem;
        }

        .box-info a h3{
            font-size: 1.4rem;
            margin: 10px 0px;
        }

        .box-info p{
            font-size: 0.95rem;
            margin-bottom: 10px;
        }
        
        .box-info .data-info{
            font-size: 0.85rem;
        }
    }

    @media screen and (max-width: 980px){
        .info-container .box-img{
            flex: 4;
        }
        
        .info-container .box-info{
            flex: 4;
            padding: 15px 15px 15px 25px;
        }

        .box-info span{
            font-size: 1.15rem;
        }

        .box-info a h3{
            font-size: 1.35rem;
            margin: 10px 0px;
        }

        .box-info p{
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
        
        .box-info .data-info{
            font-size: 0.82rem;
        }
    }

    @media screen and (max-width: 875px){
        .info-container .box-img{
            flex: 4;
        }
        
        .info-container .box-info{
            flex: 4;
            padding: 12px 12px 12px 25px;
        }

        .box-info span{
            font-size: 1.1rem;
        }

        .box-info a h3{
            font-size: 1.3rem;
            margin: 8px 0px;
        }

        .box-info p{
            font-size: 0.85rem;
            margin-bottom: 8px;
        }
        
        .box-info .data-info{
            font-size: 0.78rem;
        }
    }

    @media screen and (max-width: 780px){
        .info-container .box-img{
            flex: 4;
        }
        
        .info-container .box-info{
            flex: 4;
            padding: 12px 10px 12px 25px;
        }

        .box-info span{
            font-size: 1.05rem;
        }

        .box-info a h3{
            font-size: 1.25rem;
            margin: 8px 0px;
        }

        .box-info p{
            font-size: 0.85rem;
            margin-bottom: 8px;
        }
        
        .box-info .data-info{
            font-size: 0.74rem;
        }
    }

    @media screen and (max-width: 695px){
        .info-container .box-img{
            flex: 4;
        }
        
        .info-container .box-info{
            flex: 4;
            padding: 10px 10px 10px 25px;
        }

        .box-info span{
            font-size: 0.9rem;
        }

        .box-info a h3{
            font-size: 1.1rem;
            margin: 6px 0px;
        }

        .box-info p{
            font-size: 0.8rem;
            margin-bottom: 8px;
        }
        
        .box-info .data-info{
            font-size: 0.7rem;
        }
    }

    @media screen and (max-width: 620px){
        padding: 10px 20px;
        .info-container{
            height: 175px;
        }

        .box-img a:hover img{
            transform: scale(1.04); /* Aplica o leve zoom na imagem */
        }

        .info-container .box-img{
            flex: 5;
        }
        
        .info-container .box-info{
            flex: 6;
            padding: 4px 0px 10px 15px;
        }

        .box-info span{
            font-size: 0.8rem;
        }

        .box-info a h3{
            font-size: 0.96rem;
            margin: 3px 0px;
        }

        .box-info p{
            font-size: 0.75rem;
            margin-bottom: 3px;
        }
        
        .box-info .data-info{
            font-size: 0.68rem;
        }
    }

    @media screen and (max-width: 580px){
        .info-container{
            height: 170px;
        }

        .info-container .box-img{
            flex: 4;
        }
        
        .info-container .box-info{
            flex: 5;
            padding: 4px 0px 10px 15px;
        }

        .box-info span{
            font-size: 0.8rem;
        }

        .box-info a h3{
            font-size: 0.9rem;
            margin: 4px 0px;
        }

        .box-info p{
            font-size: 0.685rem;
            margin-bottom: 4px;
        }
        
        .box-info .data-info{
            font-size: 0.65rem;
        }
    }

    @media screen and (max-width: 520px){
        .info-container{
            height: 155px;
        }

        .box-img a img{
            margin: 20px 0px 15px 0;
        }

        .info-container .box-img{
            flex: 5;
        }
        
        .info-container .box-info{
            flex: 7;
            padding: 4px 0px 10px 10px;
        }

        .box-info span{
            font-size: 0.75rem;
        }

        .box-info a h3{
            font-size: 0.86rem;
            margin: 2px 0px;
        }

        .box-info p{
            font-size: 0.68rem;
            margin-bottom: 3px;
        }
        
        .box-info .data-info{
            font-size: 0.64rem;
        }
    }

    @media screen and (max-width: 460px){
        .info-container{
            height: 150px;
        }

        .box-img a img{
            margin: 25px 0px 15px 0;
        }

        .info-container .box-img{
            flex: 5;
        }
        
        .info-container .box-info{
            flex: 7;
            padding: 4px 0px 10px 10px;
        }

        .box-info span{
            font-size: 0.7rem;
        }

        .box-info a h3{
            font-size: 0.78rem;
            margin: 2px 0px;
        }

        .box-info p{
            font-size: 0.64rem;
            margin-bottom: 3px;
        }
        
        .box-info .data-info{
            font-size: 0.60rem;
        }
    }

    @media screen and (max-width: 424px){
        padding: 8px 15px;
        .info-container{
            height: 145px;
        }

        .box-img a img{
            margin: 22px 0px 15px 0;
        }

        .info-container .box-img{
            flex: 5;
        }
        
        .info-container .box-info{
            flex: 7;
            padding: 4px 0px 10px 10px;
        }

        .box-info span{
            font-size: 0.66rem;
        }

        .box-info a h3{
            font-size: 0.75rem;
            margin: 2px 0px;
        }

        .box-info p{
            font-size: 0.61rem;
            margin-bottom: 3px;
        }
        
        .box-info .data-info{
            font-size: 0.57rem;
        }
    }

    @media screen and (max-width: 390px){
        padding: 8px 10px;
        .info-container{
            height: 140px;
        }

        .box-img a img{
            margin: 25px 0px 15px 0;
        }

        .info-container .box-img{
            flex: 5;
        }
        
        .info-container .box-info{
            flex: 6;
            padding: 4px 0px 10px 10px;
        }

        .box-info span{
            font-size: 0.63rem;
        }

        .box-info a h3{
            font-size: 0.72rem;
            margin: 2px 0px;
        }

        .box-info p{
            font-size: 0.59rem;
            margin-bottom: 3px;
        }
        
        .box-info .data-info{
            font-size: 0.56rem;
        }
    }

    @media screen and (max-width: 350px){
        .info-container{
            height: 120px;
        }

        .box-img a img{
            margin: 40px 0px 15px 0;
        }

        .info-container .box-img{
            flex: 5;
        }
        
        .info-container .box-info{
            flex: 7;
            padding: 4px 0px 10px 10px;
        }

        .box-info span{
            font-size: 0.63rem;
        }

        .box-info a h3{
            font-size: 0.72rem;
            margin: 2px 0px;
        }

        .box-info p{
            font-size: 0.59rem;
            margin-bottom: 3px;
        }
        
        .box-info .data-info{
            font-size: 0.56rem;
        }
    }
 `

