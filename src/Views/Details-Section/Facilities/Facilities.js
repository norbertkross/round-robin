
import React, { useState, } from 'react'
import { AboutBackArrow, FacilityHome, AboutNavigation, HeaderImage, HeaderImageContainer, HeaderText, Text, TextContainer, SubItems, ItemCard, Picture, Price, ItemName, CounterBase, CounterLowerItem, CounterRow, ReduceCounter, AddToCounter, ShowCounterValue, CounterBaseRow, AddToCartButton, CartRevealer, CartRevealerButton, CartRevealerButtonImage, AddToCartButtonImage, PopUpCard, PopUpCardBody, Modal, Verified, CardContentBody, CheckoutLabel, CardContentBodyColumn, Listview, PayButtonBody, PayButton, CardPay, PurchasedItem, PurchasedItemImage, PurchasedItemDetailsColumn, ItemsDetailLabel, PriceLabel, PriceNQuantityLabel, QuantityLabel, SubTotal, PriceLabelSubTotal } from './facilities-style'
import { useHistory } from "react-router-dom";
import { BottomGap } from '../Circle-ItemDetail/circle-item-details-style';

import Fdg from "../../../assets/Testee/fdg.jpg"
import NJio from "../../../assets/Testee/njio.jpg"
import Q1 from "../../../assets/Testee/q1.jpg"
import CrosPencils from "../../../assets/Testee/pexels-ann-h-1762851.jpg"
import Q23 from "../../../assets/Testee/q23.jpg"
import Jfh from "../../../assets/Testee/jfh.jpg"
import Stuff from "../../../assets/Testee/contact-us-flatlay.jpg";

function FacilitiesHome() {

    const history = useHistory();

    function moveBack() {
        // history.push("/home");
        // history.push("/home");
        // history.replace("/");
        history.goBack();
    }


    const [shopItems, setItemsState] = useState([
        {
            "name": "Chicken Toaster",
            "price": 24.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Yinbirl",
            "price": 660.4,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "King Toast",
            "price": 71.5,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Kwadcnt",
            "price": 234,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Chicken",
            "price": 4.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Toaster",
            "price": 24.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Yinbirl",
            "price": 660.4,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "King Toast",
            "price": 71.5,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Kwadcnt",
            "price": 234,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Chicken",
            "price": 4.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
        {
            "name": "Toaster",
            "price": 24.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,

        },
    ]);

    const [showDialog, setDialogState] = useState(false);

    function showAndDismissDialog() {
        setDialogState(!showDialog)
    }
    // Show The Counter for this item so I can Pick it    
    function showCounterAtIndex(index) {
        var newArr = [...shopItems];
        newArr[index]["openedState"] = !newArr[index]["openedState"];
        setItemsState(newArr);
    }

    // INCREMEMNT
    function incrementCounterAtIndex(index) {
        var newArr = [...shopItems];
        newArr[index]["quantity"] = newArr[index]["quantity"] + 1;
        setItemsState(newArr);
    }

    // DECREMENT
    function decrementCounterAtIndex(index) {
        console.log(index);
        var newArr = [...shopItems];
        if (newArr[index]["quantity"] > 1) {
            newArr[index]["quantity"] = newArr[index]["quantity"] - 1;
        };
        setItemsState(newArr);
    }

    // Show The Counter for this item so I can Pick it    
    function showSelected(index) {
        var newArr = [...shopItems];
        newArr[index]["selected"] = !newArr[index]["selected"];
        setItemsState(newArr);
    }

    function giveImage(i) {
        switch (i) {
            case 1: return NJio;
            case 2: return CrosPencils;
            case 3: return Q23;
            case 4: return Stuff;
            case 5: return CrosPencils;
            case 6: return Q1;
            case 7: return NJio;
            case 8: return Fdg;
            case 9: return Stuff;
            case 11: return Jfh;
            case 12: return Q23;
            case 13: return Fdg;
            case 14: return Q1;
            case 15: return Fdg;
            case 16: return CrosPencils;
            default: return Jfh;
        }
    }

    return (
        <FacilityHome>
            <AboutNavigation>
                <AboutBackArrow onClick={(e) => { moveBack() }} />
            </AboutNavigation>
            <HeaderImageContainer>
                <HeaderImage />
            </HeaderImageContainer>
            <TextContainer>
                <HeaderText>
                    Products
                </HeaderText>
            </TextContainer>
            <SubItems>
                <CartRevealer>
                    <CartRevealerButton
                        onClick={(e) => { showAndDismissDialog() }}
                    >
                        <CartRevealerButtonImage>
                        </CartRevealerButtonImage>
                    </CartRevealerButton>
                </CartRevealer>
            </SubItems>
            <HeaderImageContainer>
                <SubItems>
                    {shopItems.map((item, index) => {
                        return <ItemCard key={index}>
                            <div>
                                <Picture image={giveImage(index)} />
                                <Text>
                                    <Price>${shopItems[index]["price"]}</Price>
                                    <ItemName>{shopItems[index]["name"]}</ItemName>
                                    <div style={{ height: "15px" }}></div>

                                    {shopItems[index]["openedState"] === false ? <CartRevealer>
                                        <CartRevealerButton onClick={e => { showCounterAtIndex(index) }}>
                                            <CartRevealerButtonImage>
                                            </CartRevealerButtonImage>
                                        </CartRevealerButton>
                                    </CartRevealer> :
                                        // <div style={{ height: "10px" }}></div>
                                        <CounterBaseRow>
                                            <CounterBase>
                                                <CounterLowerItem></CounterLowerItem>
                                                <CounterRow>
                                                    <ReduceCounter onClick={e => { decrementCounterAtIndex(index) }}>-</ReduceCounter>
                                                    <ShowCounterValue>{shopItems[index]["quantity"]}</ShowCounterValue>
                                                    <AddToCounter onClick={e => { incrementCounterAtIndex(index) }}>+</AddToCounter>
                                                </CounterRow>
                                            </CounterBase>
                                            <AddToCartButton onClick={e => { showSelected(index) }}>
                                                <AddToCartButtonImage isChecked={shopItems[index]["selected"]}></AddToCartButtonImage>
                                            </AddToCartButton>
                                        </CounterBaseRow>
                                    }
                                </Text>
                            </div>
                        </ItemCard>
                    })}

                </SubItems>
            </HeaderImageContainer>
            <BottomGap />

            {/* THIS IS A POP-UP DIALOG   */}

            {showDialog === true ?
                <Modal onClick={(e) => { showAndDismissDialog() }}>
                    {/* <PopUpBody onClick={(e)=>{showAndDismissDialog()}}> */}
                    <PopUpCardBody>
                        <PopUpCard>
                            <CardContentBody>
                                <CardContentBodyColumn>
                                    <Verified />
                                    <CheckoutLabel>Check Out</CheckoutLabel>
                                    <Listview>
                                    {shopItems.map((item, index) => {
                                        return <PurchasedItem>
                                        <PurchasedItemImage />
                                        <PurchasedItemDetailsColumn>
                                            <ItemsDetailLabel>
                                                Checken Roaster
                                            </ItemsDetailLabel>
                                            <PriceNQuantityLabel>
                                                <PriceLabel>$ 2347.72</PriceLabel>
                                                <QuantityLabel>(x2)</QuantityLabel>
                                            </PriceNQuantityLabel>
                                            <SubTotal>
                                                    <PriceLabelSubTotal>$78634</PriceLabelSubTotal>
                                                </SubTotal>                                                
                                        </PurchasedItemDetailsColumn>
                                    </PurchasedItem>})}
                                        
                                    </Listview>
                                     
                                    <PayButtonBody>
                                        <PayButtonBody>
                                            <PayButton onClick={e => {
                                                e.stopPropagation();
                                            }}>
                                                Pay
                                                <CardPay />
                                            </PayButton>
                                        </PayButtonBody>
                                    </PayButtonBody>
                                </CardContentBodyColumn>
                            </CardContentBody>
                        </PopUpCard>
                    </PopUpCardBody>
                </Modal>
                : <div style={{ width: "0px", height: "0px" }}></div>
            }
        </FacilityHome>
    )
}

export default FacilitiesHome