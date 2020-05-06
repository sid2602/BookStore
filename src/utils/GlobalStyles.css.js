import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

 const GlobalStyle = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        background-image: url("bgc.jpg");
        overflow: hidden;
    }

    ul{
        list-style-type: none;
    }

    a{
        color: black;
        text-decoration: none;
    }
 `;

 export default GlobalStyle;