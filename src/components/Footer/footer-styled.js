import styled from "styled-components";

export const FooterRodape = styled.footer`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 300px;
    padding: 5rem 7.5rem 3rem 7.5rem;
    background-color: #04044c;
    border-top: 1px solid #5a5aff;
    
    nav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    nav .footer-logo{
        flex: 4;
        display: flex;
        flex-direction: column;
        margin: 0rem 1rem;
    }

    nav .footer-logo a{
        margin-bottom: 1rem;
    }

    .footer-logo a img{
        width: 300px;
        height: auto;
    }

    .footer-logo .footer-followus{
        margin-top: 1rem;
    }

    .footer-followus h2{
        color: #0000ff;
        font-size: 1.5rem;
        margin-bottom: 0.7rem;
    }

    .footer-followus ul{
        display: flex;
        list-style: none;
        gap: 1rem;
    }

    .footer-followus ul li .icon-media{
        width: 35px;
        height: 35px;
        color: white;
        padding: 0.3rem;
        cursor: pointer;
        transition: color 0.4s ease;
    }

    .footer-followus ul li .icon-media:hover{
        color: #5a5aff;
    }

    nav .links-rapidos{
        flex: 3;
        display: flex;
        flex-direction: column;
        margin: 0rem 1rem;
    }

    .links-rapidos h2{
        color: #0000ff;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }

    .links-rapidos ul{
        list-style: none;
    }

    .links-rapidos li{
        margin-bottom: 0.7rem;
    }

    .links-rapidos ul li a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        transition: color 0.4s ease;
    }
    
    .links-rapidos ul li a:hover{
        color: #5a5aff;
    }
    
    nav .footer-contactus{
        flex: 3;
        display: flex;
        flex-direction: column;
        margin: 0rem 1rem;
    }
    
    .footer-contactus h2{
        color: #0000ff;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
    
    .footer-contactus ul{
        list-style: none;
    }
    
    .footer-contactus ul li{
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
    }
    
    .footer-contactus ul li .icon-contact{
        width: 35px;
        height: 35px;
        color: white;
        padding: 0.3rem;
        transition: color 0.4s ease;
    }
    
    .footer-contactus ul li .icon-map{
        width: 40px;
        height: 40px;
        color: white;
        margin: 0 0.3rem;
        transition: color 0.4s ease;
    }
    
    .footer-contactus ul li p{
        font-size: 1rem;
        text-decoration: none;
        color: white;
        font-weight: 500;
    }
    
    .footer-contactus ul li .local{
        font-size: 0.9rem;
        margin-left: 5px;
    }
    
    nav .footer-termos{
        flex: 3;
        display: flex;
        flex-direction: column;
        margin: 0rem 1rem;
    }
    
    .footer-termos h2{
        color: #0000ff;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
    
    .footer-termos ul{
        list-style: none;
    }
    
    .footer-termos ul li{
        margin-bottom: 0.7rem;
    }
    
    .footer-termos ul li a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        transition: color 0.4s ease;
    }
    
    .footer-termos ul li a:hover{
        color: #5a5aff;
    }
    
    .footer-direitos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 3rem;
    }

    .footer-direitos p{
        color: white;
        font-family: "Nunito", sans-serif;
        font-weight: 600;
        font-size: 1.0rem;
        font-style: italic;
    }
    
    @media screen and (max-width: 1250px){

        padding: 5rem 6.5rem 3rem 6.5em;

        nav .footer-logo{
            margin: 0rem 0.8rem;
        }

        nav .footer-logo a{
            margin-bottom: 0.9rem;
        }

        .footer-logo .footer-followus{
            margin-top: 0.9rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.8rem;
        }

        .links-rapidos ul li a{
            font-size: 0.9rem;
        }

        nav .footer-contactus{
            margin: 0rem 0.8rem;
        }

        .footer-contactus ul li .icon-map{
            width: 55px;
            height: 55px;
            margin: 0 0.4rem;
        }

        .footer-contactus ul li p{
            font-size: 0.9rem;
        }

        .footer-contactus ul li .local{
            margin-left: 10px;
            font-size: 0.85rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.8rem;
        }

        .footer-termos ul li a{
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 1100px){
        padding: 5rem 5.3rem 3rem 5.3rem;

        nav .footer-logo{
            margin: 0rem 0.6rem;
        }

        .footer-logo a img{
            width: 275px;
            height: auto;
        }

        .footer-followus h2{
            font-size: 1.4rem;
            margin-bottom: 0.65rem;
        }

        .footer-followus ul{
            gap: .9rem;
        }

        .footer-followus ul li .icon-media{
            width: 34px;
            height: 34px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.6rem;
        }

        .links-rapidos h2{
            font-size: 1.4rem;
        }
        
        nav .footer-contactus{
            margin: 0rem 0.6rem;
        }
        
        .footer-contactus h2{
            font-size: 1.4rem;
        }
        
        .footer-contactus ul li{
            gap: 0.75rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 33px;
            height: 33px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 50px;
            height: 50px;
            margin: 0 0.4rem;
        }

        .footer-contactus ul li .local{
            margin-left: 5px;
            font-size: 0.85rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.6rem;
        }
        
        .footer-termos h2{
            font-size: 1.4rem;
        }
        
        .footer-direitos{
            padding-top: 3rem;
        }

        .footer-direitos p{
            font-size: 1.0rem;
        }
    }

    @media screen and (max-width: 1000px){
        padding: 5rem 3.8rem 3rem 3.8rem;

        nav .footer-logo{
            margin: 0rem 0.6rem;
        }

        .footer-logo a img{
            width: 240px;
            height: auto;
        }

        .footer-followus h2{
            font-size: 1.3rem;
            margin-bottom: 0.65rem;
        }

        .footer-followus ul{
            gap: .65rem;
        }

        .footer-followus ul li .icon-media{
            width: 32px;
            height: 32px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.55rem;
        }

        .links-rapidos h2{
            font-size: 1.3rem;
            margin-bottom: 1.1rem;
        }
        
        nav .footer-contactus{
            margin: 0rem 0.55rem;
        }
        
        .footer-contactus h2{
            font-size: 1.3rem;
            margin-bottom: 1.1rem;
        }
        
        .footer-contactus ul li{
            gap: 0.75rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 31px;
            height: 31px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 48px;
            height: 48px;
            margin: 0 0.4rem;
        }

        .footer-contactus ul li .local{
            margin-left: 5px;
            font-size: 0.8rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.55rem;
        }
        
        .footer-termos h2{
            font-size: 1.3rem;
            margin-bottom: 1.1rem;
        }

        .footer-direitos p{
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 840px){
        padding: 5rem 6.5rem 3rem 6.5rem;

        nav .footer-logo{
            flex: 5;
            margin: 0rem 1rem 3.6rem 1rem;
        }

        nav .footer-logo a{
            margin-bottom: 1rem;
        }

        .footer-logo a img{
            width: 300px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 0.9rem;
        }

        .footer-followus h2{
            font-size: 1.5rem;
            margin-bottom: 0.7rem;
        }

        .footer-followus ul{
            gap: 1rem;
        }

        .footer-followus ul li .icon-media{
            width: 35px;
            height: 35px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            flex: 3;
            margin: 0rem 1rem;
        }

        .links-rapidos h2{
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
        }

        .links-rapidos li{
            margin-bottom: 0.7rem;
        }

        .links-rapidos ul li a{
            font-size: 1rem;
        }
        
        nav .footer-contactus{
            flex: 5;
            margin: 0rem 1rem;
        }
        
        .footer-contactus h2{
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.8rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 35px;
            height: 35px;
            color: white;
            padding: 0.3rem;
            transition: color 0.4s ease;
        }
        
        .footer-contactus ul li .icon-map{
            width: 33px;
            height: 33px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 1rem;
        }

        .footer-contactus ul li .local{
            margin-left: 7px;
            font-size: 0.9rem
        }
        
        nav .footer-termos{
            flex: 3;
            margin: 0rem 1rem;
        }
        
        .footer-termos h2{
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 1rem;
        }
        
        .footer-direitos{
            padding-top: 3rem;
        }

        .footer-direitos p{
            font-size: 1.0rem;
        }
    }

    @media screen and (max-width: 770px){
        padding: 5rem 5.8rem 3rem 5.8rem;

        nav .footer-logo{
            margin: 0rem 0.8rem 3.6rem 0.8rem;
        }

        nav .footer-logo a{
            margin-bottom: 1rem;
        }

        .footer-logo a img{
            width: 270px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 0.9rem;
        }

        .footer-followus h2{
            font-size: 1.4rem;
            margin-bottom: 0.7rem;
        }

        .footer-followus ul{
            gap: 0.8rem;
        }

        .footer-followus ul li .icon-media{
            width: 33px;
            height: 33px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.8rem;
        }

        .links-rapidos h2{
            font-size: 1.4rem;
            margin-bottom: 1.1rem;
        }

        .links-rapidos li{
            margin-bottom: 0.7rem;
        }

        .links-rapidos ul li a{
            font-size: 0.95rem;
        }
        
        nav .footer-contactus{
            margin: 0rem 0.8rem;
        }
        
        .footer-contactus h2{
            font-size: 1.4rem;
            margin-bottom: 1.1rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.7rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 30px;
            height: 30px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 30px;
            height: 33px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 0.95rem;
        }

        .footer-contactus ul li .local{
            margin-left: 5px;
            font-size: 0.9rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.8rem;
        }
        
        .footer-termos h2{
            font-size: 1.4rem;
            margin-bottom: 1.1rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 0.95rem;
        }
        
        .footer-direitos{
            padding-top: 3rem;
        }

        .footer-direitos p{
            font-size: 1.0rem;
        }
    }

    @media screen and (max-width: 690px){
        padding: 5rem 4.5rem 3rem 4.5rem;

        nav .footer-logo{
            margin: 0rem 0.6rem 3.2rem 0.6rem;
        }

        nav .footer-logo a{
            margin-bottom: 1rem;
        }

        .footer-logo a img{
            width: 235px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 0.9rem;
        }

        .footer-followus h2{
            font-size: 1.3rem;
            margin-bottom: 0.6rem;
        }

        .footer-followus ul{
            gap: 0.65rem;
        }

        .footer-followus ul li .icon-media{
            width: 31px;
            height: 31px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.6rem;
        }

        .links-rapidos h2{
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        .links-rapidos li{
            margin-bottom: 0.7rem;
        }

        .links-rapidos ul li a{
            font-size: 0.9rem;
        }
        
        nav .footer-contactus{
            margin: 0rem 0.6rem;
        }
        
        .footer-contactus h2{
            font-size: 1.3rem;
            margin-bottom: 1.0rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.6rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 28px;
            height: 28px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 28px;
            height: 31px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 0.9rem;
        }

        .footer-contactus ul li .local{
            margin-left: 3px;
            font-size: 0.85rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.6rem;
        }
        
        .footer-termos h2{
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 0.9rem;
        }
        
        .footer-direitos{
            padding-top: 3rem;
        }

        .footer-direitos p{
            font-size: 1.0rem;
        }
    }

    @media screen and (max-width: 580px){
        padding: 4.5rem 3.5rem 2.5rem 3.5rem;

        nav .footer-logo{
            margin: 0rem 0.4rem 3.2rem 0.4rem;
        }

        nav .footer-logo a{
            margin-bottom: 1rem;
        }

        .footer-logo a img{
            width: 200px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 0.9rem;
        }

        .footer-followus h2{
            font-size: 1.15rem;
            margin-bottom: 0.6rem;
        }

        .footer-followus ul{
            gap: 0.55rem;
        }

        .footer-followus ul li .icon-media{
            width: 28px;
            height: 28px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.4rem;
        }

        .links-rapidos h2{
            font-size: 1.15rem;
            margin-bottom: 0.9rem;
        }

        .links-rapidos li{
            margin-bottom: 0.7rem;
        }

        .links-rapidos ul li a{
            font-size: 0.85rem;
        }
        
        nav .footer-contactus{
            margin: 0rem 0.4rem;
        }
        
        .footer-contactus h2{
            font-size: 1.15rem;
            margin-bottom: 0.9rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.5rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 25px;
            height: 25px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 25px;
            height: 28px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 0.85rem;
        }

        .footer-contactus ul li .local{
            margin-left: 3px;
            font-size: 0.80rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.4rem;
        }
        
        .footer-termos h2{
            font-size: 1.15rem;
            margin-bottom: 0.9rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 0.85rem;
        }
        
        .footer-direitos{
            padding-top: 3rem;
        }

        .footer-direitos p{
            font-size: 0.95rem;
        }
    }

    @media screen and (max-width: 500px){
        padding: 4rem 2.8rem 2rem 2.8rem;

        nav .footer-logo{
            margin: 0rem 0.25rem 3.2rem 0.25rem;
        }

        nav .footer-logo a{
            margin-bottom: 1rem;
        }

        .footer-logo a img{
            width: 175px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 1rem;
        }

        .footer-followus h2{
            font-size: 1.1rem;
            margin-bottom: 0.6rem;
        }

        .footer-followus ul{
            gap: 0.4rem;
        }

        .footer-followus ul li .icon-media{
            width: 26px;
            height: 26px;
            padding: 0.3rem;
        }

        nav .links-rapidos{
            margin: 0rem 0.25rem;
        }

        .links-rapidos h2{
            font-size: 1.1rem;
            margin-bottom: 0.9rem;
        }

        .links-rapidos li{
            margin-bottom: 0.7rem;
        }

        .links-rapidos ul li a{
            font-size: 0.8rem;
        }
        
        nav .footer-contactus{
            margin: 0rem 0.25rem;
        }
        
        .footer-contactus h2{
            font-size: 1.1rem;
            margin-bottom: 0.9rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.35rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 23px;
            height: 23px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 23px;
            height: 26px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 0.8rem;
        }

        .footer-contactus ul li .local{
            margin-left: 3px;
            font-size: 0.75rem
        }
        
        nav .footer-termos{
            margin: 0rem 0.25rem;
        }
        
        .footer-termos h2{
            font-size: 1.1rem;
            margin-bottom: 0.9rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 0.8rem;
        }
        
        .footer-direitos{
            padding-top: 3rem;
        }

        .footer-direitos p{
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 446px){
        padding: 4rem 3rem 2rem 3rem;

        nav .footer-logo{
            flex: 4;
            margin: 0rem 1rem;
        }

        nav .footer-logo a{
            margin-bottom: 0.8rem;
        }

        .footer-logo a img{
            width: 270px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 1rem;
        }

        .footer-followus h2{
            font-size: 1.4rem;
            margin-bottom: 0.6rem;
        }

        .footer-followus ul{
            gap: 0.9rem;
        }

        .footer-followus ul li .icon-media{
            width: 34px;
            height: 34px;
            padding: 0.2rem;
        }

        nav .links-rapidos{
            flex: 4;
            margin: 2.6rem 1rem 1.3rem 1rem;
        }

        .links-rapidos h2{
            font-size: 1.45rem;
            margin-bottom: 1.2rem;
        }

        .links-rapidos li{
            margin-bottom: 0.8rem;
        }

        .links-rapidos ul li a{
            font-size: 1.15rem;
        }
        
        nav .footer-contactus{
            flex: 4;
            margin: 1.3rem 1rem;
        }
        
        .footer-contactus h2{
            font-size: 1.45rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.8rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 34px;
            height: 34px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 34px;
            height: 37px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 1rem;
            margin-top: .2rem;
        }
        
        .footer-contactus ul li .local{
            font-size: 0.9rem;
            margin-left: 5px;
        }
        
        nav .footer-termos{
            flex: 4;
            margin: 1.3rem 1rem;
        }
        
        .footer-termos h2{
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 1.15rem;
        }
        
        .footer-direitos{
            padding-top: 2rem;
        }

        .footer-direitos p{
            font-size: 1.0rem;
        }
    }

    @media screen and (max-width: 395px){
        padding: 4rem 2.8rem 2rem 2.8rem;

        nav .footer-logo{
            flex: 4;
            margin: 0rem 1rem;
        }

        nav .footer-logo a{
            margin-bottom: 0.8rem;
        }

        .footer-logo a img{
            width: 260px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 1rem;
        }

        .footer-followus h2{
            font-size: 1.35rem;
            margin-bottom: 0.6rem;
        }

        .footer-followus ul{
            gap: 0.85rem;
        }

        .footer-followus ul li .icon-media{
            width: 33px;
            height: 33px;
            padding: 0.2rem;
        }

        nav .links-rapidos{
            flex: 4;
            margin: 2.6rem 1rem 1.3rem 1rem;
        }

        .links-rapidos h2{
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
        }

        .links-rapidos li{
            margin-bottom: 1rem;
        }

        .links-rapidos ul li a{
            font-size: 1.1rem;
        }
        
        nav .footer-contactus{
            flex: 4;
            margin: 1.3rem 1rem 1rem 1rem;
        }
        
        .footer-contactus h2{
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.7rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 33px;
            height: 33px;
            padding: 0.3rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 33px;
            height: 34px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 0.9rem;
            margin-top: .2rem;
        }
        
        .footer-contactus ul li .local{
            font-size: 0.85rem;
            margin-left: 5px;
        }
        
        nav .footer-termos{
            flex: 4;
            margin: 1.3rem 1rem 1rem 1rem;
        }
        
        .footer-termos h2{
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 1.1rem;
        }
        
        .footer-direitos{
            padding-top: 2rem;
        }

        .footer-direitos p{
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 359px){
        padding: 4rem 2.35rem 2rem 2.35rem;

        nav .footer-logo{
            flex: 4;
            margin: 0rem 1rem;
        }

        nav .footer-logo a{
            margin-bottom: 0.8rem;
        }

        .footer-logo a img{
            max-width: 215px;
            height: auto;
        }

        .footer-logo .footer-followus{
            margin-top: 1rem;
        }

        .footer-followus h2{
            font-size: 1.25rem;
            margin-bottom: 0.6rem;
        }

        .footer-followus ul{
            gap: 0.75rem;
        }

        .footer-followus ul li .icon-media{
            width: 29px;
            height: 29px;
            padding: 0.2rem;
        }

        nav .links-rapidos{
            flex: 4;
            margin: 2.4rem 1rem 1.2rem 1rem;
        }

        .links-rapidos h2{
            font-size: 1.3rem;
            margin-bottom: 1.2rem;
        }

        .links-rapidos li{
            margin-bottom: 1rem;
        }

        .links-rapidos ul li a{
            font-size: 1rem;
        }
        
        nav .footer-contactus{
            flex: 4;
            margin: 1.2rem 1rem 1rem 1rem;
        }
        
        .footer-contactus h2{
            font-size: 1.3rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-contactus ul li{
            margin-bottom: 0.5rem;
            gap: 0.65rem;
        }
        
        .footer-contactus ul li .icon-contact{
            width: 31px;
            height: 31px;
            padding: 0.2rem;
        }
        
        .footer-contactus ul li .icon-map{
            width: 31px;
            height: 33px;
            margin: 0 0.3rem;
        }
        
        .footer-contactus ul li p{
            font-size: 0.85rem;
            margin-top: .2rem;
        }
        
        .footer-contactus ul li .local{
            font-size: 0.8rem;
            margin-left: 8px;
        }
        
        nav .footer-termos{
            flex: 4;
            margin: 1.2rem 1rem 1rem 1rem;
        }
        
        .footer-termos h2{
            font-size: 1.3rem;
            margin-bottom: 1.2rem;
        }
        
        .footer-termos ul li{
            margin-bottom: 0.7rem;
        }
        
        .footer-termos ul li a{
            font-size: 1rem;
        }
        
        .footer-direitos{
            padding-top: 1.7rem;
        }

        .footer-direitos p{
            font-size: 0.73rem;
        }
    }
`