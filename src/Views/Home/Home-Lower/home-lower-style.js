import styled from "styled-components";
import Particles from "../../../assets/Particles.svg"
import Quote from "../../../assets/quote.svg"
import UserPicture from "../../../assets/Testee/istockphoto-1252881116-612x612.jpg"

export const HomeLoweBody = styled.div`
    /* background-color: greenyellow; */
`;

export const GapBetween = styled.div`
    height: 80px;
    width: 100vw;
    background-color: greenyellow;
`;

export const ParticlesContainer = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
    width: 100vw;
    background-image: url('${Particles}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media all and (max-width:650px) {
        background-color: pink;
        }     
`;


export const CarouselContainer = styled.div`
    height: 40vh;
    width: 65vw;
    flex-wrap: nowrap;
    /* background-color: green; */
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar{
        /* display: none; */
        width: 0px;
    }
    
    @media all and (max-width:650px) {
        height: 45vh;
        width: 85vw;
        }     
`;


export const CarouselChild = styled.div`
    display: flex;   
    flex-wrap: nowrap;
    height: calc(40vh - 30px);
    /* width: 1505px;     */
    overflow-y: scroll;
    margin: 10px 10px;
    /* background-color: rgb(127,69,217,.5); */

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar{
        display: none;
    }

    @media all and (max-width:650px) {
        height: 100%;
        width: 85vw;
   }     
`;

export const CarouselChildInner = styled.div`
    flex: none;
    height: 40vh - 30px;
    width: 400px;
    background-color: ${props =>props.theme.canvas};   
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);  
    border-radius: 16px;
    margin-left: 10px;
    margin: 10px;
`;

export const CardBodyItemTop = styled.div`
/* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 10px 10px;
`;

export const CardBodyItemTopQuote = styled.div`
    /* background-color: whitesmoke; */
    background-image: url('${Quote}');
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export const CardBodyItemTopName = styled.div`
color: grey;
font-weight: bold;
font-size: 20px;
`;

export const CardBodyItemTopImage = styled.div`
    background-color: pink;
    background-image: url('${UserPicture}');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`;


export const CardContent = styled.div`
/* background-color: yellow; */
display: grid;
place-items: center;
color: yellowgreen;
height: calc(100% - 70px);
width: 100% -20px;
color: grey;
font-weight: 200;
font-size: 20px;
margin-left: 20px;
margin-right: 10px;
overflow: hidden;
`;