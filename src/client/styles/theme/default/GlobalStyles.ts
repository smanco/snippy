import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   body {
     font-family: ${(props) => props.theme.fontFamily};
     background: ${(props) => props.theme.background};
     color: ${(props) => props.theme.color};
     transition: all 0.50s linear; 
  }
`;
export default GlobalStyles;
