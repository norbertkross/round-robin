import styled from "styled-components";
import Particles from "../../../assets/Particles.svg"

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
    background-color: khaki;
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
    background-color: red;
    overflow-y: scroll;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar{
        display: none;
    }
    @media all and (max-width:650px) {
        height: 45vh;
        width: 85vw;
        }     
`;


export const CarouselChild = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 50vh;
    width: 70vw;
    background-color: blue;
    margin: 10px;
    @media all and (max-width:650px) {
        height: 50vh;
        width: 90vw;
        }     
`;

export const CarouselChildInner = styled.div`
    height: 200px;
    width: 250px;
    margin: 30px;
    background-color: black;     
`;

