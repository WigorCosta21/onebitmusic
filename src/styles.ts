import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FEFEFE",
  black: "#222222",
  red: "#F64348",
  gray: "#5C5C5C",
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
