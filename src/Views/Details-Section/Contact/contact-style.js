import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";

export const ContactHome = styled.div`
    
`;

export const ContactNavigation = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ContactBackArrow = styled.div`
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
