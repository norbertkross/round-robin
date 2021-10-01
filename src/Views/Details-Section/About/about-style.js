import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";
import Code_Review from "../../../assets/Testee/istockphoto-1252881116-612x612.jpg";

export const AboutHome = styled.div`
    
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
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Up_Left:Up_Left_Dark}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`;


export const HeaderImage = styled.div`
    width: 90vw;
    height: 300px;
    background-color: blue;
    margin: 10px;
    background-image: url('${Code_Review}');
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
    font-weight: 400;
    font-size: 45px;
    margin: 20px 10px;
`;


export const SubText = styled.div`
    width: 90vw;
    /* background-color: cyan; */
    font-size: 24px;
    color: grey;
    font-weight: 400;
`;