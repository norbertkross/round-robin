import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";
import Buying from "../../../assets/buying.svg";
import Check from "../../../assets/checkmark.svg";
import UnCheck from "../../../assets/multiply.svg";
import Notestaking from "../../../assets/Testee/taking-notes-on-programming.jpg";
import CrosPencils from "../../../assets/Testee/pexels-ann-h-1762851.jpg"

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
    background-image: url('${CrosPencils}');
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
    width: 280px;
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
        /* width: 285px; */
        /* margin-bottom:5px; */
    }
`;



export const Picture = styled.div`
    width: 270px;
    background-color: grey;
    border-radius: 8px 8px 0px 0px;
    height: 200px;
    background-image: url('${props => props.image || Notestaking}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    margin: 5px 5px;    
    
    @media all and (max-width:400px){
        width: 80vw;
    }
    :hover{
        width: 275px;
        margin-bottom:2px 5px;
    }    
`;



export const Text = styled.div`
    /* height: 200px; */
    width: 270px;
    margin: 10px 5px;
    /* background-color: violet; */
    /* font-size: 21px;
    color: grey;
    font-weight: 400;
    overflow-y: hidden; */
    
    @media all and (max-width:400px){
        width: 80vw;
    }
`;

export const Price = styled.div`
    font-size: 17px;
    /* color: grey; */
    /* margin: 10px 5px; */
    font-weight: 400;
`;

export const ItemName = styled.div`
    font-size: 24px;
    color: grey;
    /* margin: 10px 5px; */
    font-weight: 400;
`;

/// Counter Item

export const CartRevealer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;


export const CartRevealerButton = styled.div`
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    padding: 5px;
    border: 1px solid ${props => props.theme.themeColor};
    border-radius: 50%;
    cursor: pointer;
    /* background-image: url('${Buying}');
    background-position: center;
    background-repeat:no-repeat;
    background-size: contain; */

    :hover{
        background-color: ${props => props.theme.themeColor};
    }
`;

export const CartRevealerButtonImage = styled.div`
    width: 25px;
    height: 25px;
    /* padding: 10px; */
    /* border: 1px solid ${props => props.theme.themeColor};
    border-radius: 50%; */
    background-image: url('${Buying}');
    background-position: center;
    background-repeat:no-repeat;
    background-size: contain;
`;


export const CounterBaseRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
`;


export const CounterBase = styled.div`
    display: grid;
    place-items: center;
    height: 40px;
    width: 120px;    
    /* background-color: blueviolet; */
`;

export const CounterLowerItem = styled.div`
    height: 35px;
    width: 120px;
    background-color:rgb(236,236,236);
    border-radius: 8px;    
`;


export const CounterRow = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
`;


export const AddToCounter = styled.div`
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 500;
    color: grey;
    /* background-color:gold; */
`;

export const ShowCounterValue = styled.div`
    height: 40px;
    width: 40px;
    background-color:${props => props.theme.canvas};
    border-radius: 8px;
    box-shadow: 0px 2px 8px 2px rgb(0,0,0,0.12);
    display: grid;
    place-items: center;
    font-size: 18px;
    font-weight: 500;  

`;

export const ReduceCounter = styled.div`
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 500;    
    color: grey;
    /* background-color:coral; */
`;

export const AddToCartButton = styled.div`
    display: grid;
    place-items: center;
    width: 60px;
    height: 40px;
    background-color: ${props => props.theme.themeColor};
    border-radius: 20px;
`;

export const AddToCartButtonImage = styled.div`
    width: 25px;
    height: 25px;
    /* padding: 10px; */
    /* border: 1px solid ${props => props.theme.themeColor};
    border-radius: 50%; */
    background-image: url('${props => props.isChecked === false?Check:UnCheck}');
    background-position: center;
    background-repeat:no-repeat;
    background-size: contain;
`;

