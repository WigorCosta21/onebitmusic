import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FEFEFE",
  black: "#222222",
  red: "#F64348",
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
`;

export default GlobalStyle;
