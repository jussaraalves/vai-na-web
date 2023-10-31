import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Roboto:wght@400;700&display=swap');
  
  body {
    font-family: 'Pixelify Sans', sans-serif;
    background-image: url('https://i.pinimg.com/originals/c5/af/67/c5af676adb3b806f6cb69fe12920acc6.gif');
    background-repeat: repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
`