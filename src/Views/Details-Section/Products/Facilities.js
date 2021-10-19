
import React, { useState, } from 'react'
import { AboutBackArrow, FacilityHome, AboutNavigation, HeaderImage, HeaderImageContainer, 
    HeaderText, Text, TextContainer, SubItems, ItemCard, Picture, Price, ItemName, CounterBase,
     CounterLowerItem, CounterRow, ReduceCounter, AddToCounter, ShowCounterValue, CounterBaseRow,
      AddToCartButton, CartRevealer, CartRevealerButton, CartRevealerButtonImage, AddToCartButtonImage,
       PopUpCard, PopUpCardBody, Modal, Verified, CardContentBody, CheckoutLabel, CardContentBodyColumn,
     Listview, PayButtonBody, PayButton, CardPay, PurchasedItem, PurchasedItemImage, PurchasedItemDetailsColumn, 
        ItemsDetailLabel, PriceLabel, PriceNQuantityLabel, QuantityLabel, SubTotal, PriceLabelSubTotal, PriceTotal, SentIconBody, SentIcon, 
         } from './facilities-style'
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
            "image":NJio,

        },{
            "name": "Yinbirl",
            "price": 660.4,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":CrosPencils,

        },{
            "name": "Thingsy",
            "price": 71.5,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Q23,

        },{
            "name": "Kwadant",
            "price": 234,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Stuff,

        },{
            "name": "Chicken",
            "price": 4.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Q1,

        },{
            "name": "Roafer",
            "price": 24.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":NJio,

        },{
            "name": "Yerna",
            "price": 660.4,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Fdg,

        },{
            "name": "KToost",
            "price": 71.5,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Stuff,

        },{
            "name": "Kwadcnt",
            "price": 234,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Jfh,

        },{
            "name": "Chicken",
            "price": 4.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Q23,

        },{
            "name": "Toaster",
            "price": 24.34,
            "quantity": 1,
            "openedState": false,
            "selected": false,
            "image":Fdg,

        },
    ]);

    const [showDialog, setDialogState] = useState(false);
    const [showSuccessDialog, setSuccessDialog] = useState(false);
    const [cart, setCart] = useState([]);

    function showAndDismissDialog() {
        setDialogState(!showDialog)
    }

    function showAndDismissSuccessDialog() {
        setSuccessDialog(!showSuccessDialog)
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


    // Get Items Into Cart
    function getCartSelectedItems(){        
        var selected = [];
         shopItems.forEach((data,index)=>{
            if(data["selected"] === true){
                selected.push(data)
            }
        })
        setCart(selected);
    }

    function calculateTotalPricing(){
        var sum = 0.0;
        cart.forEach((value)=>{
            sum = sum + value['price'] * value['quantity']
        })

        return sum
    }

    function removeCurrentAndShowNewDialog(){
        showAndDismissDialog();
        showAndDismissSuccessDialog();
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
                        onClick={(e) => { 
                            getCartSelectedItems();
                            showAndDismissDialog();
                         }}
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
                                <Picture image={shopItems[index]["image"]} />
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
                        <PopUpCard onClick={e => {e.stopPropagation();}}>
                            <CardContentBody>
                                <CardContentBodyColumn>
                                    {/* <Verified /> */}
                                    <div style={{height:"15px"}}/>
                                    <CheckoutLabel>{cart.length >0?"Check Out":"No items. Add items to check out"}</CheckoutLabel>
                                    <Listview>
                                    {cart.map((item, index) => {
                                        return <PurchasedItem key={index}>
                                        <PurchasedItemImage />
                                        <PurchasedItemDetailsColumn>
                                            <ItemsDetailLabel>
                                                {item["name"]}
                                            </ItemsDetailLabel>
                                            <PriceNQuantityLabel>
                                                <PriceLabel>${item["price"].toFixed(2)}</PriceLabel>
                                                <QuantityLabel>(x{item["quantity"]})</QuantityLabel>
                                            </PriceNQuantityLabel>
                                            <SubTotal>
                                                    <PriceLabelSubTotal>${(item["price"] * item["quantity"]).toFixed(2)}</PriceLabelSubTotal>
                                                </SubTotal>                                                
                                        </PurchasedItemDetailsColumn>
                                    </PurchasedItem>})}
                                        
                                    </Listview>
                                        <PayButtonBody>
                                            <PriceTotal> {cart.length >0?`$ ${calculateTotalPricing().toFixed(2)}`:""} </PriceTotal>
                                           {calculateTotalPricing().toFixed(2).toString() !== "0.00"?  <PayButton onClick={e => {
                                                e.stopPropagation();
                                                removeCurrentAndShowNewDialog();
                                            }}>
                                                Pay
                                                <CardPay />
                                            </PayButton> :<div/>}
                                        </PayButtonBody>
                                </CardContentBodyColumn>
                            </CardContentBody>
                        </PopUpCard>
                    </PopUpCardBody>
                </Modal>
                : <div style={{ width: "0px", height: "0px" }}></div>
            }

            {showSuccessDialog === true ?
                <Modal onClick={(e) => { showAndDismissSuccessDialog() }}>
                    <PopUpCardBody>
                        <PopUpCard onClick={e => {e.stopPropagation();}}>
                            <CardContentBody>
                                <CardContentBodyColumn>
                                    <Verified />
                                    <CheckoutLabel>Items Purchased Successfully</CheckoutLabel>
                                    <SentIconBody>
                                        <SentIcon/>                                    </SentIconBody>
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