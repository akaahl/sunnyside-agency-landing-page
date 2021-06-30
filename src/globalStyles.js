import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1024px) {
        html {
            /* font-size: 90%; */
        }
    }

    body {
        position: relative;
        font-family: 'Barlow', sans-serif;
        overflow-x: hidden;
    }

    button, h1, h2, h3, h4 {
        font-family: 'Fraunces', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
