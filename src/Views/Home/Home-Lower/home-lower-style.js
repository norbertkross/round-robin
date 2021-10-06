import styled from "styled-components";
import Particles from "../../../assets/Particles.svg"
import Quote from "../../../assets/quote.svg"
import Quote_Dark from "../../../assets/assets-dark/quote.svg"
import UserPicture from "../../../assets/Testee/istockphoto-1252881116-612x612.jpg"
import ArrowUp from "../../../assets/upward_arrow.svg"
import ArrowUp_Dark from "../../../assets/assets-dark/upward_arrow.svg"


export const HomeLoweBody = styled.div`
    /* background-color: greenyellow; */
`;

export const GapBetween = styled.div`
    height: 160px;
    width: 100vw;
    /* background-color: greenyellow; */
    @media all and (max-width:350px){
    height: 30px;
    /* background-color: greenyellow; */
    }    
`;

export const ParticlesContainer = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
    width: 100vw;
    background-image: url('${Particles}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    /* background-color: coral; */

    @media all and (max-width:650px) {
        /* background-color: pink; */
        }     
`;


export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 65vw;
    /* flex-wrap: nowrap; */
    /* background-color: yellowgreen; */
    /* scrollbar-width: none;  */
    /* Firefox */
    /* -ms-overflow-style: none;   */
    /* Internet Explorer 10+ */    
    /* -webkit-overflow-scrolling: touch; */
    /* ::-webkit-scrollbar{ */
        /* display: none; */
        /* width: 0px;
    } */
    
    @media all and (max-width:650px) {
        width: 85vw;
        }     

    @media all and (max-width:350px){
    width: 100vw;
    }        
`;


export const CarouselChild = styled.div`
    display: flex;   
    flex-wrap: wrap;
    justify-content: center;
    /* flex-wrap: nowrap; */
    /* height: calc(40vh - 30px); */
    width: 100%;    
    margin: 10px 10px;

    /* scrollbar-width: none;  */
    /* Firefox */
    /* -ms-overflow-style: none;   */
    /* Internet Explorer 10+ */
    
    /* -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar{
        display: none;
    } */

    @media all and (max-width:650px) {
        height: 100%;
        width: 85vw;
   }     
`;

export const CarouselChildInner = styled.div`
    flex: none;
    width: 350px;
    background-color: ${props => props.theme.canvas};   
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);  
    border-radius: 16px;
    margin: 30px 20px;
    position: relative;
    transition: 500ms;
    :hover{
        /* height: 40px;*/
        width: 370px; 
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        top: -5px;

      }

    @media all and (max-width:350px){
        width: 85vw;
        margin: 20px 5px;
    }
`;

export const CardBodyItemTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 10px 10px;
`;

export const CardBodyItemTopQuote = styled.div`
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Quote:Quote_Dark}');
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media all and (max-width:350px){
    height: 25px;
    width: 25px;
    }
`;

export const CardBodyItemTopName = styled.div`
color: grey;
font-weight: bold;
font-size: 20px;
`;

export const CardBodyItemTopImage = styled.div`
    background-color: grey;
    background-image: url('${UserPicture}');
    height: 50px;
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;

    @media all and (max-width:350px){
    height: 35px;
    width: 35px;
    }
`;


export const CardContent = styled.div`
display: grid;
place-items: start;
width: 100% -20px;
color: grey;
font-weight: 200;
font-size: 20px;
margin-left: 20px;
margin-right: 10px;
overflow: hidden;
`;


export const PaddingAfterCardContent = styled.div`
    height:50px;
    /* background-color: tomato; */
`;



/// Bottom Navigation Bar

export const SpaceBeforeBottom = styled.div`
    height:80px;
    /* background-color: tomato; */
`;


export const BottomContainer = styled.div`
    /* background-color: coral; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;

    @media all and (max-width: 400px){
        flex-direction: column;
        align-items: baseline;
        /* margin: 10px 10px; */

    }

`;


export const BottomItemsDiv = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    /* width: 350px; */
    /* border: 4px solid red; */

    
    @media all and (max-width: 400px){
        margin: 20px 0px;
        align-items: baseline;

    }

`;


export const BottomItemsHeader = styled.div`
    font-weight: 600; 
    font-size: 24px;
    margin: 10px 5px;
`;


export const BottomItemsSubText = styled.div`
    color: grey;
    font-weight: 400;
    font-size: 18px;
    margin: 2px 5px;
    cursor: pointer;
`;


export const BottomLayer = styled.div`
    display: flex;
    justify-content: space-between;    
`;


export const BottomLogosContainer = styled.div`
    /* background-color: goldenrod ; */
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
`;

export const BottomLogo = styled.div`
  height: 45px;
  width: 45px;
  background-image: url('${props => props.url != null?props.url:props.theme.canvas ==='#ffffff'?ArrowUp:ArrowUp_Dark}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  transition: 500ms;

:hover{
    height: 60px;
    width: 60px;
} 
  
`;


export const ArrowUpContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100vw;
`;

export const BasePadding = styled.div`
  height:20px ;
`;

export const ArrowUpIcon = styled.div`
  height: 40px;
  width: 40px;
  background-image: url('${props=> props.theme.canvas ==='#ffffff'?ArrowUp:ArrowUp_Dark}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-top: 20px;
  margin-right: 20px;
`;





