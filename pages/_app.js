import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: column;
    font-family: 'Lato', 'sans-serif';

    color: ${({ theme }) => theme.colors.contrastText}
  }
  html, body{
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/jpg" href="https://i0.wp.com/contilnetnoticias.com.br/wp-content/uploads/2018/07/naom_5b38be2d748ce.jpg?fit=1920%2C1080&ssl=1" />
     </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> 
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
