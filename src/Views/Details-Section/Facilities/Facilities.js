
import React from 'react'
import { AboutBackArrow, FacilityHome, AboutNavigation, HeaderImage, HeaderImageContainer, HeaderText, Text, TextContainer, SubItems, ItemCard, Picture } from './facilities-style'
import { useHistory } from "react-router-dom";
import { BottomGap } from '../Circle-ItemDetail/circle-item-details-style';

function FacilitiesHome(){

    const history = useHistory();

    function moveBack(){
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }

    const items  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

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
                        <Picture/>
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