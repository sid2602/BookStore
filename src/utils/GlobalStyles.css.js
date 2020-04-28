import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

 const GlobalStyle = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
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