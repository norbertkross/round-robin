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
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Up_Left:Up_Left_Dark}');
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


export const DetailsContainerItemImage = styled.div`
    width: 43vw;
    height: 500px;
    margin: 5px;
    background-image: url('${props => props.image || Up_Left}');
    background-repeat: no-repeat;
    background-position: center;    
    /* background-size: cover; */
    background-size: contain;

    @media all and (max-width:600px){
        width: 90vw;  
    }
`;


export const DetailsContainerItemTextBody = styled.div`
    width: 43vw;
    /* background-color: coral; */
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

