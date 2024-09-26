import styled from "styled-components";
import HeaderBackground from "../../assets/header-background.png";

export const HeaderCabecalho = styled.header`
    background-color: black;
    height: 75px;
    position: fixed;
    top: 0;         /* Posiciona no topo */
    width: 100%;    /* Garante que ocupe a largura total */
    z-index: 999;   /* Garante que o header fique acima dos outros elementos */
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`   
export const DivCabecalho = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;

    .hamburger-search{
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
    }

    .hamburger-search img{
        width: 30px;
        height: 30px;
        margin-bottom: 0.2rem;
    }
    
    .logo{
        height: 55px;
        max-width: 300px;
    }

    .logo img{
        height: 100%;
        width: 100%;
    }

    .login-btn{
        display: block;
        padding: 7px 12px;
        margin-left: 15px;
        border: 1px solid white;
        border-radius: 12px;
        background-color: transparent;
        color: white;
        font-size: 1.2em;
        font-weight: bold;
        text-decoration: none;
        transition: 1.0s ease;
    }
    
    .login-btn:hover{
        color: #0404fb;
        border: 1px solid #0404fb;
    }
`

export const MenuCabecalho = styled.div`
    display: flex;
    font-weight: 700;
    font-size: 18px;
    align-items: center;

    #btn-menu{
        display: flex;
        padding: 0 1rem;
        margin-bottom: 0.3rem;
        border: none;
        background: none;
        color: white;
        cursor: pointer;
        gap: .5rem;
    }

    #hamburger{
        border-top: 3.5px solid;
        width: 26px;
    }

    #hamburger::after, #hamburger::before {
        content: '';
        display: block;
        width: 26px;
        height: 3px;
        background: currentColor;
        margin-top: 5px;
        transition: .3s;
        position: relative;
    }

    #nav.active #hamburger{
        border-top-color: transparent;
    }

    #nav.active #hamburger::before{
        transform: rotate(135deg);
    }

    #nav.active #hamburger::after{
        transform: rotate(-135deg);
        top: -7px;
    }

    #menu{
        display: block;
        position: absolute;
        width: 330px;
        top: 75px;
        left: 0px;
        list-style: none;
        background-color: #212121;
        transition: .6s;
        z-index: 1000;
        height: 0px;
        visibility: hidden;
        overflow-y: hidden;
    }

    #nav.active #menu{
        height: calc(100vh - 75px);
        visibility: visible;
        overflow-y: auto;
    }

    #menu li a{
        display: block;
        padding: 1.4rem 1rem;
        margin: 0.2rem 0.3rem;
        color: white;
        text-decoration: none;
        border-top: 2px solid rgba(136, 136, 136, 0.12);
    }

    li a:hover{
        background-color: rgba(255, 255, 255, 0.421);
    }
`



