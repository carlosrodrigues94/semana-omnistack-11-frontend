import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    font-family:Roboto;
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
html,body,#root{
    height:100%;
}
body {
    font:400 14px Roboto;
    background:#f0f0f5;
    -webkit-font-smoothing:antialiased;

}
    button{
        cursor:pointer;
    }
    button, input {
        border:0;
        background:none;
    }

`;
export default Global;
