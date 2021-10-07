import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";
import Stuff from "../../../assets/Testee/contact-us-flatlay.jpg";
import Notestaking from "../../../assets/Testee/taking-notes-on-programming.jpg";

export const FacilityHome = styled.div`
    
`;

export const AboutNavigation = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const AboutBackArrow = styled.div`
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


export const HeaderImage = styled.div`
    width: 90vw;
    height: 300px;
    background-color: grey;
    margin: 10px;
    background-image: url('${Stuff}');
    background-repeat: no-repeat;
    background-position: center;    
    background-size: cover;
`;


export const HeaderImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    /* background-color: coral; */
`;


export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    /* background-color: yellowgreen; */
`;



export const HeaderText = styled.div`
    font-weight: 500;
    font-size: 45px;
    margin: 30px 10px;
`;


export const SubItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90vw;
    /* background-color: cyan; */
`;



export const ItemCard = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    /* height: 75px; */
    align-items: center;
    background-color: ${props => props.theme.canvas};
    border-radius: 8px;
    cursor: pointer;
    margin: 30px 15px;
    transition:500ms;
    box-shadow:${props => props.theme.canvas === '#ffffff' ? "0px 2px 8px 1px rgb(0,0,0,0.12)" : "0px 2px 8px 1px rgb(255,255,255,0.06)"} ;
    
    @media all and (max-width:400px){
        width: 90vw;
    }
    :hover{
        width: 310px;
        margin-bottom:10px;
    }
`;



export const Picture = styled.div`
    width: 280px;
    background-color: grey;
    border-radius: 8px 8px 0px 0px;
    height: 200px;
    background-image: url('${props => props.image || Notestaking}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    margin: 10px 0px;    
    
    @media all and (max-width:400px){
        width: 80vw;
    }
`;



export const Text = styled.div`
    height: 200px;
    width: 280px;
    /* background-color: violet; */
    font-size: 21px;
    color: grey;
    margin: 10px 0px;
    font-weight: 400;
    overflow-y: hidden;
    
    @media all and (max-width:400px){
        width: 80vw;
    }
`;
