// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Basic Resets */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    /* Aap Figma se exact font check kar sakte hain, warna yeh bhi theek hai */
    font-family: 'Poppins', sans-serif; 
    background-color: #FFFFFF;
  }
`;

export default GlobalStyles;