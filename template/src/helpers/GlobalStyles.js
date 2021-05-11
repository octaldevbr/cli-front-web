import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
        font-family: sans-serif;
    }

    body, html, #root {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    button, a, .material-icons:hover {
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
