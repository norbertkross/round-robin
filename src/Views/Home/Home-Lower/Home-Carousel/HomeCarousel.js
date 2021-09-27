import React, { Component } from 'react';
// import Carousel, { Props } from '../src/components/Carousel';

import { Carousel } from 'react-responsive-carousel';
import { CarouselChild } from '../home-lower-style';


    class ExternalControlledCarousel extends Component{
       
        constructor(props) {
            super(props);

            this.state = {
                currentSlide: 0,
                autoPlay: true,
            };
        }

        next = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide + 1,
            }));
        };

        prev = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide - 1,
            }));
        };

        changeAutoPlay = () => {
            this.setState((state) => ({
                autoPlay: !state.autoPlay,
            }));
        };

        updateCurrentSlide = (index) => {
            const { currentSlide } = this.state;

            if (currentSlide !== index) {
                this.setState({
                    currentSlide: index,
                });
            }
        };

        
        render() {
            // const baseChildren = [1, 2, 3,].map((item,index)=>{
            //     return <CarouselChild key={index}>ITEM: {index}</CarouselChild>
            // });



            const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
            const containerStyle = { margin: '5px 0 20px' };
            return (
                <div>
                    <div style={containerStyle}>
                        <p style={containerStyle}>
                            Use the buttons below to change the selected item in the carousel
                            <br />
                            <small>
                                <i>
                                    Note that the external controls might not respect the carousel boundaries but the
                                    carousel won't go past it.
                                </i>
                            </small>
                        </p>
                        <p>External slide value: {this.state.currentSlide}</p>
                        <button onClick={this.prev} style={buttonStyle}>
                            Prev
                        </button>
                        <button onClick={this.next} style={buttonStyle}>
                            Next
                        </button>
                        <button onClick={this.changeAutoPlay} style={buttonStyle}>
                            Toggle Autoplay ({this.state.autoPlay ? 'true' : 'false'})
                        </button>
                    </div>
                    {/* <Carousel
                        autoPlay={this.state.autoPlay}
                        selectedItem={this.state.currentSlide}
                        onChange={this.updateCurrentSlide}
                        showThumbs={false}
                        showArrows={false}
                        {...this.props}
                    >
                        <div>
                    <img src="assets/Testee/taking-notes-on-programming.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>                        
                  </Carousel> */}
            <Carousel
            autoPlay={this.state.autoPlay}
            selectedItem={this.state.currentSlide}
            onChange={this.updateCurrentSlide}
            showThumbs={false}
            showArrows={false}
            centerMode={true}
            centerSlidePercentage={70}
            >
                <CarouselChild></CarouselChild>
                <CarouselChild></CarouselChild>
                <CarouselChild></CarouselChild>
                
            </Carousel>                  
                </div>
            );
        }
    }

    export default ExternalControlledCarousel 
