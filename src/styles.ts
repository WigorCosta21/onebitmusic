import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryWhite: "#FEFEFE",
  secondaryWhite: "#F9F9F9",
  deepBlack: "#222222",
  vibrantRed: "#F64348",
  mediumGray: "#5C5C5C",
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
