import { createGlobalStyle } from "styled-components";
import * as styles from "./variables";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      display: flex;
      flex-direction: column;
      min-height: 100svh;
      background-color: ${styles.COLOR.background};
      color: ${styles.COLOR.font};
      font-family: 'Inter', sans-serif;
    }
    
    #root {
      flex-grow: 1;
    }
    
    a {
      text-decoration: none;
      color: ${styles.COLOR.font};
    }

    img, svg {
        width: 100%;
        height: 100%;
        display: block;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
    }

    ul, ol {
      list-style: none;
    }

    input {
      border: none;
      outline: none;
    }

`;
