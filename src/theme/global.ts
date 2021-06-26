import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        overflow-x: hidden;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,p,a,div {
        font-family: "Roboto"
    }
`;
