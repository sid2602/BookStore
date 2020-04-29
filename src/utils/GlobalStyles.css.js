import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

 const GlobalStyle = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
    }

    body{
        background-image: url("witewall_3.png");
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