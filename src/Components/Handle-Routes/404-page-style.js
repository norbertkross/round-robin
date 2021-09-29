import styled from "styled-components";

import Logo404 from "../../assets/notfound.svg"

export const Container404 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* background-color: violet; */
`;

export const Text404 = styled.div`
    color: ${props=>{
        console.log(props.theme.themeColor);
        
        return props.theme.themeColor
        }};
    font-size: 20px;
    font-weight: bold;
    margin: 20px 5px;
`;

export const Image404 = styled.div`
    background-color: violet;
    margin: 20px 5px;
    height: 70vh;
    width: 70vh;
    background-image: url('${Logo404}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: 500ms;   
      
    @media all and (max-width: 450px){
        height:80vw;
        width: 80vw;
        align-items: baseline;
        margin: 0px 5px;
    }
          
`;

