import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000;
    --gray: #888;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Inter', sans-serif;
  }

  html {
    background: var(--black);
    color: var(--gray);
    font-size: 62.5%;
  }

  .central {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;