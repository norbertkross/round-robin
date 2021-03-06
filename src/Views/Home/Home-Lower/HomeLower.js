import { ArrowUpContainer, ArrowUpIcon, BasePadding, BottomContainer, BottomItemsDiv, BottomItemsHeader, 
    BottomItemsSubText, BottomLayer, BottomLogo, BottomLogosContainer, CardBodyItemTop, CardBodyItemTopImage, 
    CardBodyItemTopName, CardBodyItemTopQuote, CardContent, CarouselChild, CarouselChildInner, CarouselContainer, 
    GapBetween, 
    HomeLoweBody, PaddingAfterCardContent, ParticlesContainer, SpaceBeforeBottom } from "./home-lower-style";
import Github from "../../../assets/github.svg"
import Github_Dark from "../../../assets/assets-dark/github.svg"
import Twitter from "../../../assets/twitter.svg"
import Twitter_Dark from "../../../assets/assets-dark/twitter.svg"
import Youtube from "../../../assets/play_button.svg"
import Youtube_Dark from "../../../assets/assets-dark/play_button.svg"
import LinkedIn from "../../../assets/linkedin.svg"
import LinkedIn_Dark from "../../../assets/assets-dark/linkedin.svg"
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import AboutHomePageButton from "../../Details-Section/About/AboutHomePageButton";


function HomeLower() {
    const [size,setSize] = useState({height:0.0,width:0.0})
    const themeState = useSelector(state=>state.appReducer)

    useEffect(()=>{

        function setMediaSized(){
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
        return <CarouselChildInner key={index}>
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
        return <BottomItemsDiv key={index}>
                <BottomItemsHeader>
                {mainItem['heading']}
                </BottomItemsHeader>

            {/* body of this index item */}            
            {mainItem['content_items'].map((item,index)=>{
                return <BottomItemsSubText key={index}>
                            {item}
                </BottomItemsSubText>
            })}
                </BottomItemsDiv>
    })

    return (
        <HomeLoweBody>
            <GapBetween/>
            {/* <GapBetween /> */}
            <ParticlesContainer>
                <CarouselContainer>
                    <CarouselChild>

                        {items}

                    </CarouselChild>
                </CarouselContainer>
            </ParticlesContainer>
               <AboutHomePageButton/> 
            {/* Bottom Container */}
            <SpaceBeforeBottom/>            
            <BottomContainer>
                {bottomNav}
            </BottomContainer>

            {/* Footer Icons and external links */}
            <BasePadding/>
            <BottomLayer>
                <BottomLogosContainer>
                    <BottomLogo url={themeState.isdark === false?Github:Github_Dark} key={"Github"}/>
                    <BottomLogo url={themeState.isdark === false?Twitter:Twitter_Dark} key={"Twitter"}/>
                    <BottomLogo url={themeState.isdark === false?Youtube:Youtube_Dark} key={"Youtube"}/>
                    <BottomLogo url={themeState.isdark === false?LinkedIn:LinkedIn_Dark} key={"LinkedIn"}/>
                </BottomLogosContainer> 

                {size.width>500?<ArrowUpIcon/>: <div/>}               
            </BottomLayer>
            <BottomLayer>
            {size.width <=500? 
                <ArrowUpContainer>
                   <ArrowUpIcon/>
                </ArrowUpContainer> : <div/>} 

                               
            </BottomLayer>
            <div style={{height:"20px"}}/>
        </HomeLoweBody>
    );
}

export default HomeLower