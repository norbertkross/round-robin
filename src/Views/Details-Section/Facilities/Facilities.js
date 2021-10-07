
import React from 'react'
import { AboutBackArrow, FacilityHome, AboutNavigation, HeaderImage, HeaderImageContainer, HeaderText, Text, TextContainer, SubItems, ItemCard, Picture } from './facilities-style'
import { useHistory } from "react-router-dom";
import { BottomGap } from '../Circle-ItemDetail/circle-item-details-style';

import Fdg from "../../../assets/Testee/fdg.jpg"
import NJio from "../../../assets/Testee/njio.jpg"
import Q1 from "../../../assets/Testee/q1.jpg"
import CrosPencils from "../../../assets/Testee/pexels-ann-h-1762851.jpg"
import Q23 from "../../../assets/Testee/q23.jpg"
import Jfh from "../../../assets/Testee/jfh.jpg"

function FacilitiesHome(){

    const history = useHistory();

    function moveBack(){
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }

    const items  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function giveImage(i){
    console.log(`${typeof i}`); 
    switch (i){
        case 1: return NJio;
        case 2: return CrosPencils;
        case 3: return Q23;
        case 5: return CrosPencils;
        case 6: return Q1;
        case 7: return NJio;
        case 8: return Fdg;
        case 11: return Jfh;
        case 12: return Q23;
        case 13: return Fdg;
        case 14: return Q1;
        case 15: return Fdg;
        case 16: return CrosPencils;
        default: return Jfh;
    }
}



console.log(giveImage(2));

    return (
        <FacilityHome>
            <AboutNavigation>
                <AboutBackArrow onClick={(e)=>{moveBack()}}/>
            </AboutNavigation>
            <HeaderImageContainer>
                <HeaderImage/>
            </HeaderImageContainer> 
            <TextContainer>
                <HeaderText>
                    Our Facilities
                </HeaderText>
            </TextContainer>  
            <HeaderImageContainer>
                <SubItems>
                    {items.map((item,index)=>{
                        return <ItemCard>
                        <div>
                        <Picture image={giveImage(index)}/>
                        <Text>Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
                    Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli</Text>
                        </div>
                    </ItemCard>
                    })}

                </SubItems>
            </HeaderImageContainer> 
            <BottomGap/>                     
        </FacilityHome>
    )
}


export default FacilitiesHome