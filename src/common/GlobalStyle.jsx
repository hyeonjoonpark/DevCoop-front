import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 4px;
    background-color: #41434C;

    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }
`;
