import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        position: relative;
        font-family: 'Barlow', sans-serif;
    }

    button, h1, h2, h3 {
        font-family: 'Fraunces', sans-serif;
    }
`;

export default GlobalStyle;
