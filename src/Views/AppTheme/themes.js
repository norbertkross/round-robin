import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body,html{
        margin: 0px;
        background-color: ${props=>props.theme.canvas};
        color: ${props=>props.theme.primary};        
    }

    /* unvisited link */
    a:link {
    color: ${props=>props.theme.themeColor};
    }
`;