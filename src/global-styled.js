
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans", sans-serif;
    }
    
    #root {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    /*        ScrollBar 5    */

    body::-webkit-scrollbar {
        background-color: #000;
        width: .6rem;

    }
    
    body::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: #0404fb;
        border-radius: 10px;
    }

`

export default GlobalStyle