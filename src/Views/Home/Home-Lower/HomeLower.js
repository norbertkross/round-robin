import { CardBodyItemTop, CardBodyItemTopImage, CardBodyItemTopName, CardBodyItemTopQuote, CardContent, CarouselChild, CarouselChildInner, CarouselContainer, GapBetween, HomeLoweBody, ParticlesContainer } from "./home-lower-style";

function HomeLower(){
    return(
        <HomeLoweBody>
            <GapBetween/>
            <ParticlesContainer>
                <CarouselContainer>
                    <CarouselChild>

                        <CarouselChildInner>
                            <CardBodyItemTop>
                                <CardBodyItemTopQuote></CardBodyItemTopQuote>
                                <CardBodyItemTopName>NorbertkroKross</CardBodyItemTopName>
                                <CardBodyItemTopImage></CardBodyItemTopImage>
                            </CardBodyItemTop>
                            <CardContent>lorem ipsium ipsium sit dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet</CardContent>
                        </CarouselChildInner>
                        <CarouselChildInner>
                            <CardBodyItemTop>
                                <CardBodyItemTopQuote></CardBodyItemTopQuote>
                                <CardBodyItemTopName>NorbertkroKross</CardBodyItemTopName>
                                <CardBodyItemTopImage></CardBodyItemTopImage>
                            </CardBodyItemTop>
                            <CardContent>lorem ipsium ipsium sit dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet ipsium lorem diot lorem ipsium ipsium sit dormet ipsium lorem diot dormet</CardContent>
                        </CarouselChildInner>

                        <CarouselChildInner/>
                        <CarouselChildInner/>
                        <CarouselChildInner/>                       
                        <CarouselChildInner/>
                        <CarouselChildInner/>
                      
                    </CarouselChild>
                </CarouselContainer>

            </ParticlesContainer>
        </HomeLoweBody>
    );
}

export default HomeLower