import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["purple-500"]};
  }

  html, body {
    overflow-x: hidden;
    max-width: 100vw;
}


  body {
    background-color: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["gray-700"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
  }
`
