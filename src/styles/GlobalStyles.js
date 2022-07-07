import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset} 
* {
  box-sizing: border-box; 
  font-family: 'Gothic A1', sans-serif;
}

body {
  font-family: 'Gothic A1', sans-serif;
}
`;

export default GlobalStyles;
