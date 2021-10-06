import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";
import Code_Review from "../../../assets/Testee/istockphoto-1252881116-612x612.jpg";
import Arrow from "../../../assets/arrow.png";
import Arrow_Dark from "../../../assets/assets-dark/arrow.png";

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
    background-color: grey;
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


export const HomeAboutButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 60px;
    padding-bottom: 5px;
    /* background-color: chocolate; */
`;


export const HomeAboutButtonCard = styled.div`
    width: 350px;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.canvas};
    border-radius: 8px;
    box-shadow:${props => props.theme.canvas ==='#ffffff'?"0px 2px 8px 1px rgb(0,0,0,0.12)":"0px 2px 8px 1px rgb(255,255,255,0.06)"} ;
    
    @media all and (max-width:400px){
        width: 90vw;
    }
`;


export const WrapInnerButton = styled.div`
    /* display: flex;
    justify-content: flex-start; */
    width: 100px;
    height: 60px;
    color: grey;
    font-size: 40px;
    font-weight: 500;
    opacity: .6;
    /* margin-left: 20px; */
    /* background-color: blueviolet; */
    transition: 500ms;

    :hover{
        transform: translate(10px,0px);
    }
`;


export const HomeAboutCardText = styled.div`
    color: grey;
    font-size: 38px;
    font-weight: 500;
    opacity: .6;
    margin-left: 20px;
    
    @media all and (max-width:400px){
        font-size: 24px;
    }    
`;


export const HomeAboutCardInnerButton = styled.div`
    display: grid;
    place-items: center;
    width: 85px;
    height: 60px;
    background-color: ${props => props.theme.themeColor};
    /* background-color: ${props => props.theme.themeColor}; */
    border-radius: 8px;
    box-shadow: 0px 2px 8px 1px rgb(0,0,0,0.2);
    /* margin-right: 8px; */
    cursor: pointer;
`;




export const AboutInnerArrow = styled.div`
    width: 40px;
    height: 40px;
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Arrow:Arrow_Dark}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
`;
