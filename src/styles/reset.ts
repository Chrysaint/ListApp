import { createGlobalStyle } from "styled-components";
import * as pallete from "./variables";

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
      background-color: ${pallete.BACKGROUND_COLOR};
    }
    
    #root {
      flex-grow: 1;
    }
    
    a {
      text-decoration: none;
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


`;
