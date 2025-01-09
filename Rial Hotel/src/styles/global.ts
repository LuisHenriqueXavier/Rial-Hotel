import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
    }


    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body{
        background-color: ${props => props.theme["gray-100"]};
    }


/* Remove a barra de rolagem no Firefox */
html {
    scrollbar-width: none; /* Firefox */
}

  /* Remove a barra de rolagem no Chrome, Edge, e Safari */
body {
    -ms-overflow-style: none; /* IE e Edge */
    overflow: -moz-scrollbars-none;
}

body::-webkit-scrollbar {
    display: none; /* Oculta no Chrome, Edge e Safari */
}

`;