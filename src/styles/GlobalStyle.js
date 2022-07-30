import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --black: #000000;
        --white: #fff;
        --gray: #F5F5F5;
        --graydark: #E0E0E0;
        --graytext: #828282;
        --green: #27AE60;
        --darktext: #333333;
        
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Inter', sans-serif;
    }

`;

export default GlobalStyle;
