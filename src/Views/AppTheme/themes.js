import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body,html{
        margin: 0px;
        background-color: ${props=>props.theme.canvas};
        color: ${props=>props.theme.primary}; 
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;       
        /// A hack to hide an overflown bar [Remove this]
        overflow-x: hidden;
        /* ::-webkit-scrollbar {
            display: none;
        } */
    }

    /* unvisited link */
    a:link {
    color: ${props=>props.theme.themeColor};
    }
`;