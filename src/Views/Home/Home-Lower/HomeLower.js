import { ArrowUpContainer, ArrowUpIcon, BasePadding, BottomContainer, BottomItemsDiv, BottomItemsHeader, BottomItemsSubText, BottomLayer, BottomLogo, BottomLogosContainer, CardBodyItemTop, CardBodyItemTopImage, CardBodyItemTopName, CardBodyItemTopQuote, CardContent, CarouselChild, CarouselChildInner, CarouselContainer, GapBetween, HomeLoweBody, PaddingAfterCardContent, ParticlesContainer, SpaceBeforeBottom } from "./home-lower-style";
import Github from "../../../assets/github.svg"
import Twitter from "../../../assets/twitter.svg"
import Youtube from "../../../assets/play_button.svg"
import LinkedIn from "../../../assets/linkedin.svg"
import { useEffect, useState } from "react";

function HomeLower() {
    const [size,setSize] = useState({height:0.0,width:0.0})
    useEffect(()=>{

        function setMediaSized(){
            console.log("Event Triggering");
            setSize({height:window.innerHeight,width:window.innerWidth})            
        }
        
        // Event Listener to listen for changes in device size
        window.addEventListener("resize",(event)=>{setMediaSized()});
        setMediaSized();
    },[])
    var cardItems = [
        {
            "name": "Aberor Norbert",
            "quote": "I am a quote on your screen I am a quote on your screen I am a quote on your screen",
            "image": "some random image"
        },
        {
            "name": "norbertkross",
            "quote": "I am a quote on your screen I am a quote on your screen I am a quote on your screen",
            "image": "some random image"
        },
        {
            "name": "Eugene Okuleda",
            "quote": "I am a quote on your screen",
            "image": "some random image"
        },

    ];

    var bottomNavigationItems = [
        {"heading":"Content",
         "content_items":[
            "mon amie tu",
            "querty",
         ], 
       },

        {"heading":"Other Details",
         "content_items":[
            "More Items",
            "querty",
            "External Links",
         ], 
       },

       {"heading":"Nobody",
       "content_items":[
          "Calmer",
          "mon amie tu",
       ], 
     },       
    ];

    var items = cardItems.map((item, index) => {
        return <CarouselChildInner>
            <CardBodyItemTop>
                <CardBodyItemTopQuote></CardBodyItemTopQuote>
                <CardBodyItemTopName>{item['name']}</CardBodyItemTopName>
                <CardBodyItemTopImage></CardBodyItemTopImage>
            </CardBodyItemTop>
            <CardContent>{item['quote']}</CardContent>
            <PaddingAfterCardContent />
            {/* <CardContent>lorem ipsium ipsium sit dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet</CardContent> */}
        </CarouselChildInner>
    });

    var bottomNav = bottomNavigationItems.map((mainItem,index)=>{
        return <BottomItemsDiv>
                <BottomItemsHeader>
                {mainItem['heading']}
                </BottomItemsHeader>

            {/* body of this index item */}            
            {mainItem['content_items'].map((item,index)=>{
                return <BottomItemsSubText>
                            {item}
                </BottomItemsSubText>
            })}
                </BottomItemsDiv>
    })

    return (
        <HomeLoweBody>
            <GapBetween />
            <ParticlesContainer>
                <CarouselContainer>
                    <CarouselChild>

                        {items}

                    </CarouselChild>
                </CarouselContainer>
            </ParticlesContainer>

            {/* Bottom Container */}
            <SpaceBeforeBottom/>            
            <BottomContainer>
                {bottomNav}
            </BottomContainer>

            {/* Footer Icons and external links */}
            <BasePadding/>
            <BottomLayer>
                <BottomLogosContainer>
                    <BottomLogo url={Github}/>
                    <BottomLogo url={Twitter}/>
                    <BottomLogo url={Youtube}/>
                    <BottomLogo url={LinkedIn}/>
                </BottomLogosContainer> 

                {size.width>500?<ArrowUpIcon/>: <div/>}               
            </BottomLayer>
            <BottomLayer>
            {size.width <=500? <ArrowUpContainer>
                   <ArrowUpIcon/>
                </ArrowUpContainer> : <div/>} 

                               
            </BottomLayer>
            <div style={{height:"5px"}}/>
        </HomeLoweBody>
    );
}

export default HomeLower