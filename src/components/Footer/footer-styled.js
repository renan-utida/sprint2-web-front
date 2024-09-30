import styled from "styled-components";

export const FooterRodape = styled.footer`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 300px;
    padding: 5rem 8rem 3rem 8rem;
    background-color: #04044c;
    border-top: 2px solid #5a5aff;
    
    nav{
        display: flex;
        flex-direction: row;
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
        border-radius: 3rem;
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
        margin-bottom: 0.5rem;
    }

    .links-rapidos ul li a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: color 0.4s ease;
    }

    .links-rapidos ul li a:hover{
        color: #5a5aff;
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
        margin-bottom: 0.5rem;
    }

    .footer-termos ul li a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: color 0.4s ease;
    }

    .footer-termos ul li a:hover{
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
        width: 50px;
        height: 50px;
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

    .footer-local{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 3rem;
    }

    .footer-local p{
        color: white;
        font-family: "Nunito", sans-serif;
        font-weight: 600;
        font-size: 1.0em;
        font-style: italic;
    }
`