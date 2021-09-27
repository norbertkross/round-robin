import ExternalControlledCarousel from "./Home-Carousel/HomeCarousel";
import { CarouselChild, CarouselChildInner, CarouselContainer, GapBetween, HomeLoweBody, ParticlesContainer } from "./home-lower-style";

function HomeLower(){
    return(
        <HomeLoweBody>
            <GapBetween/>
            <ParticlesContainer>
                <CarouselContainer>
                    {/* <CarouselChild> */}
                        <CarouselChildInner>
                            
                        </CarouselChildInner>
                        <CarouselChildInner>

                        </CarouselChildInner>
                        <CarouselChildInner>            
                        </CarouselChildInner>
                    {/* </CarouselChild> */}
                </CarouselContainer>

                <ExternalControlledCarousel>
                    
                </ExternalControlledCarousel>
            </ParticlesContainer>
        </HomeLoweBody>
    );
}

export default HomeLower