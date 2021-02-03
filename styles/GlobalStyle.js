import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;

    max-width: 1200px;
    margin: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: ${({ theme }) => theme.primary};
  }

  a, 
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  main {
    margin-top: 5rem;
  }
`;
