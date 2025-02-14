import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

  body {
    font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
    margin: 0;
    padding: 0;
  }
`;
