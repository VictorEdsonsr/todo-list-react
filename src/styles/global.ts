import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html,body,#root{
        min-height: 100%;
    }

    body{
        background: rgb(13,29,31);
background: linear-gradient(0deg, rgba(13,29,31,1) 33%, rgba(194,194,194,1) 100%);
    }
    body,input,button{
        color:#fff;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button{
        cursor: pointer;
    }
`;
