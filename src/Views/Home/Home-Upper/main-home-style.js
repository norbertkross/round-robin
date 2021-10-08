import styled from "styled-components";
import Logo from "../../../assets/EUgene@2x.png"
import Zenly from "../../../assets/zenly.svg"
import Zenly_Dark from "../../../assets/assets-dark/zenly.svg"
import VideoCall from "../../../assets/video_call.svg"
import VideoCall_Dark from "../../../assets/assets-dark/video_call.svg"
import TodoList from "../../../assets/todo_list.svg"
import TodoList_Dark from "../../../assets/assets-dark/todo_list.svg"
import Pencil from "../../../assets/pencil.svg"
import Pencil_Dark from "../../../assets/assets-dark/pencil.svg"
import light_automation from "../../../assets/light_automation.svg"
import light_automation_Dark from "../../../assets/assets-dark/light_automation.svg"
import January from "../../../assets/january.svg"
import January_Dark from "../../../assets/assets-dark/january.svg"
import Home from "../../../assets/home.svg"
import Home_Dark from "../../../assets/assets-dark/home.svg"
import ChampagneBottle from "../../../assets/champagne_bottle.svg"
import ChampagneBottle_Dark from "../../../assets/assets-dark/champagne_bottle.svg"

var IllustrationSize = 150;
var IllustrationSizeAnimated = IllustrationSize.toString() + "px";
var IllustrationSizeNormal = (IllustrationSize - 15).toString() +"px";

// Zoom For Small Screens
 var smallZoom = "17vw";
export const BaseContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    /* background-color: bisque; */
    // TODO: should auto adjust 
    @media all and (max-width:650px) {
        /* height: ${props=>props.height ?'100vw':'100vh'}; */
        min-height: ${props=>props.height  != null ?'calc(100vw + 35px)':'100vh'};

        }    
`;

export const MiddleContaner = styled.div`
    display: flex;
    flex-direction: column;  
    /* background-color  :salmon ; */
        @media all and (max-width:650px) {
        /* background-color:yellowgreen; */
        height: ${props=>props.height != null ?'calc(100vw + 35px)':'100vh'};
        }
`;

export const TopHeader = styled.div`
    display: flex;
    flex-direction: row; 
    /* justify-content: end; */
    justify-content: space-between;
    height:35px;
    /* background-color: teal; */
    padding-right: 10px;
`;

export const NavItem = styled.div`
    height: 35px;
    width: 35px;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    transition: 500ms;
    cursor: pointer;
    :hover{
        height: 40px;
        width: 40px;
      }    
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Pencil:Pencil_Dark}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media all and (max-width:650px) {
        height: 30px;
        width: 30px;
        margin-right: 2px;
        }    
`;
export const NavItem2 = styled.div`
    height: 35px;
    width: 35px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    transition: 500ms;
    cursor: pointer;
    :hover{
        height: 40px;
        width: 40px;
      }  
         
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?light_automation:light_automation_Dark}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media all and (max-width:650px) {
        height: 30px;
        width: 30px;
        }    
`;

export const HomeBodyTop = styled.div`
    display: grid;
    place-items: center;
    /* grid-gap: 2px;
    grid-template-columns: repeat(7,2fr);
    grid-template-rows: repeat(5,2fr); */

    // Accomosate for 35px top and down
    height: calc(100vh - 35px);
    width: 100vw;
    @media all and (max-width:650px) {
        height: ${props=>props.height  != null ?'calc(100vw + 35px)':'100vh'};
        }    

`;


export const CenterLogo = styled.div`
    /* background-color:orange; */
    background-image: url('${Logo}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;  
    transition: 500ms;
    :hover{
        height: 100px;
        width: 220px;
      }     
    @media all and (max-width:500px) {
        height: 80px;
        width:  100px;

        :hover{
        height: 100px;
        width: 120px;
      }         
    }
    
    @media all and (min-width:1700px) {
        height: 300px;
        width:  400px;
        :hover{
        height: 320px;
        width: 420px;
      }         
    }

    height: 130px;
    width:  200px;
`;

export const HoldRoundItems = styled.div`
    position: absolute;
    margin-top: 35px;

    @media all and (max-width:650px) {
        margin-top: 70px;
        }    
`;
//////////////////////////////////////////////////////
            // Items Being Positioned Aroud
//////////////////////////////////////////////////////
export const GroupItem1 = styled.div`
    position: absolute;
    top: 1vh;
    left: 30vw;
    height: ${IllustrationSizeNormal};
    width: ${IllustrationSizeNormal};
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Home:Home_Dark}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; 
    transition: 500ms;
    cursor: pointer;
    :hover{
        height: ${IllustrationSizeAnimated};
        width: ${IllustrationSizeAnimated};
    }
    /* background-color: rebeccapurple; */
    @media all and (max-width:900px){
        /* background-color: green; */
        height: 16vw;
        width: 16vw; 

        :hover{
        height: ${smallZoom};
        width: ${smallZoom};
      }         
    }

    @media all and (max-width:650px) {
        top: 2vw;
        left: 30vw;
    }
    
`;

export const GroupItem2 = styled.div`
    position: absolute;
    top: 1vh;
    left: 70vw;
    height: ${IllustrationSizeNormal};
    width: ${IllustrationSizeNormal};
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?VideoCall:VideoCall_Dark}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;     
    transition: 500ms;
    cursor: pointer;

    :hover{
        height: ${IllustrationSizeAnimated};
        width: ${IllustrationSizeAnimated};
    }    
    /* background-color: rebeccapurple; */
    @media all and (max-width:900px){
        /* background-color: green; */
        height: 16vw;
        width: 16vw; 
        :hover{
        height: ${smallZoom};
        width: ${smallZoom};
      }         
    }

    @media all and (max-width:650px) {
        top: 3vw;
        left: 70vw;
    }    

`;

export const GroupItem3 = styled.div`
    position: absolute;
    top: 40vh;
    left: 7vw;
    height: ${IllustrationSizeNormal};
    width: ${IllustrationSizeNormal};
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?TodoList:TodoList_Dark}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; 
    transition: 500ms;
    cursor: pointer;

    :hover{
        height: ${IllustrationSizeAnimated};
        width: ${IllustrationSizeAnimated};
    }        
    /* background-color: rebeccapurple; */
    @media all and (max-width:900px){
        /* background-color: green; */
        height: 16vw;
        width: 16vw; 
        :hover{
        height: ${smallZoom};
        width: ${smallZoom};
      }         
    }

    @media all and (max-width:650px) {
        /* background-color: rebeccapurple; */
        top: ${props=>props.height  != null?'33vw':'40vh'};
        left: ${props=>props.height  != null? '3vh':'7vw'};
    }     

`;

export const GroupItem4 = styled.div`
    position: absolute;
    top: 45vh;
    right:-95vw;
    height: ${IllustrationSizeNormal};
    width: ${IllustrationSizeNormal};
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Zenly:Zenly_Dark}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;  
    transition: 500ms;
    cursor: pointer;

    :hover{
        height: ${IllustrationSizeAnimated};
        width: ${IllustrationSizeAnimated};
    }       
    /* background-color: rebeccapurple; */
    @media all and (max-width:900px){
        height: 16vw;
        width: 16vw; 
        :hover{
        height: ${smallZoom};
        width: ${smallZoom};
      }         
    }

    @media all and (max-width:650px) {
        /* background-color: rebeccapurple; */
        top:38vw;
        right: -95vw;
    }     
`;

export const GroupItem5 = styled.div`
    position: absolute;
    bottom: -93vh;
    right:-70vw;
    height: ${IllustrationSizeNormal};
    width: ${IllustrationSizeNormal};
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?January:January_Dark}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;   
    transition: 500ms;
    cursor: pointer;

    :hover{
        height: ${IllustrationSizeAnimated};
        width: ${IllustrationSizeAnimated};
    }      
    /* background-color: rebeccapurple; */
    @media all and (max-width:900px){
        /* background-color: green; */
        height: 16vw;
        width: 16vw; 

       :hover{
        height: ${smallZoom};
        width: ${smallZoom};
      } 
    }

    @media all and (max-width:650px) {
        /* background-color: rebeccapurple; */
        top: 70vw;
        right: -80vw;
    }    

`;


export const GroupItem6 = styled.div`
    position: absolute;
    bottom: -93vh;
    left: 20vw;
    height: ${IllustrationSizeNormal};
    width: ${IllustrationSizeNormal};
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?ChampagneBottle:ChampagneBottle_Dark}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;   
    transition: 500ms;
    cursor: pointer;

    :hover{
        height: ${IllustrationSizeAnimated};
        width: ${IllustrationSizeAnimated};
    }      
    /* background-color: rebeccapurple; */
    @media all and (max-width:900px){
        /* background-color: green; */
        height: 16vw;
        width: 16vw; 
        :hover{
        height: ${smallZoom};
        width: ${smallZoom};
      }         
    } 
    
    @media all and (max-width:650px) {
        /* background-color: rebeccapurple; */
        top: 70vw;
        right: -95vw;
    }     
    
`;
