import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";

export const CircleItemHome = styled.div`
    
`;

export const CircleItemNavigation = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const CircleItemBackArrow = styled.div`
    width: 40px;
    height: 40px;
    /* background-color: blue; */
    margin: 10px;
    background-image: url('${props => props.theme.canvas === '#ffffff' ? Up_Left : Up_Left_Dark}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    margin-top: 30px;
    /* background-color: coral; */
`;

export const ImageView = styled.div`
/* background-color: coral; */
display: flex;
flex-direction: column;
align-items: center;
`;

export const ImageViewButton = styled.div`
    /* display: inline-block; */
    background-color: ${props => props.theme.themeColor};
    color: ${props => props.theme.canvas};
    font-weight: bold;
    padding: 10px 30px;
    width: max-content;
    margin: 10px;
    border-radius: 3px;
    box-shadow: 0px 2px 8px 1px rgb(0,0,0,0.2);
    cursor: pointer;
`;

export const DetailsContainerItemImage = styled.div`
    width: 43vw;
    height: 500px;
    margin: 5px;
    background-image: url('${props => props.image || Up_Left}');
    background-repeat: no-repeat;
    background-position: center;    
    /* background-size: cover; */
    background-size: contain;
    animation-name: heroic;
    animation-duration: 500ms;
    transition:500ms;
    @keyframes heroic{
    0%   {
        width: 35vw;
        height: 400px;
    }
    100% {
        width: 43vw;
        height: 500px;
    }
    }

    :hover{
        width: 33vw;
        height: 380px;        
    }
    @media all and (max-width:600px){
        width: 90vw;  
        @keyframes heroic{
        0%   {
            width: 75vw;
        }
        100% {
            width: 90vw;
        }
      }
      :hover{
        width: 80vw;       
    }
    }
`;


export const DetailsContainerItemTextBody = styled.div`
    width: 43vw;
    /* background-color: red; */
    @media all and (max-width:600px){
        width: 90vw;  
    }  
`;


export const DetailsContainerItemText = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 43vw;
    margin: 5px 30px;   
    background-size: cover;
    /* background-color: coral; */
    font-size: 22px;
    color: grey;

    @media all and (max-width:600px){
        width: 90vw; 
        margin: 5px 10px;    
    }    
`;

export const BottomGap = styled.div`
    height: 80px;
`;

export const DetailsHeaderText = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 28px;
    margin: 12px 10px;
    color: ${props => props.theme.themeColor};
`;


