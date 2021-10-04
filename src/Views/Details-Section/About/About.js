
import React from 'react'
import { AboutBackArrow, AboutHome, AboutNavigation, HeaderImage, HeaderImageContainer, HeaderText, SubText, TextContainer } from './about-style'
import { useHistory } from "react-router-dom";
import { BottomGap } from '../Circle-ItemDetail/circle-item-details-style';

function About(){

    const history = useHistory();

    function moveBack(){
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }

    return (
        <AboutHome>
            <AboutNavigation>
                <AboutBackArrow onClick={(e)=>{moveBack()}}/>
            </AboutNavigation>
            <HeaderImageContainer>
                <HeaderImage/>
            </HeaderImageContainer> 
            <TextContainer>
                <HeaderText>
                    Popsickle
                </HeaderText>
            </TextContainer>  
            <HeaderImageContainer>
                <SubText>
                    Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
                    Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
                    Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
                    Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
                </SubText>
            </HeaderImageContainer> 
            <BottomGap/>                     
        </AboutHome>
    )
}


export default About