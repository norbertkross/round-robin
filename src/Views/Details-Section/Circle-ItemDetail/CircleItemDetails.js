import React from 'react'
import { CircleItemBackArrow, CircleItemNavigation, CircleItemHome, DetailsContainer, DetailsContainerItemImage, DetailsContainerItemText, BottomGap, DetailsContainerItemTextBody, DetailsHeaderText, } from './circle-item-details-style'
import { useHistory,useParams} from "react-router-dom";

// Images
import Zenly from "../../../assets/zenly.svg"
import VideoCall from "../../../assets/video_call.svg"
import TodoList from "../../../assets/todo_list.svg"
import January from "../../../assets/january.svg"
import Home from "../../../assets/home.svg"
import ChampagneBottle from "../../../assets/champagne_bottle.svg"

export default function CircleItemDetails() {
    
    const history = useHistory();
    const params = useParams();

    const item=[
        {
        "id":"1",
        "name":"Home",
        "description":`Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
        Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
        Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli
        Lorem ipsium sit dormet opnum saerti ipsium dorli Lorem ipsium sit dormet opnum saerti ipsium dorli`,
        "image":Home,
        },
        {
        "id":"2",
        "name":"Video Call",
        "description":"I am a VIDEO description",
        "image":VideoCall,
        },
        {
            "id":"3",
            "name":"Todo List",
            "description":"I am a TodoList description",
            "image":TodoList,
            },        
        {
        "id":"4",
        "name":"Zenly",
        "description":"I am a description",
        "image":Zenly,
        },

        {
        "id":"5",
        "name":"January",
        "description":"I am a CALENDER description",
        "image":January,
        },
        {
        "id":"6",
        "name":"Champagne Bottle",
        "description":"I am a CELEBRATION description",
        "image":ChampagneBottle,
        },
    ];

    function moveBack(){
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }    


    function itemNumber(){
        return Number(params["id"]) || 1
    }
    
    return (
        <CircleItemHome>
            <CircleItemNavigation>
                <CircleItemBackArrow onClick={(e)=>{moveBack()}}/>
            </CircleItemNavigation> 
            <DetailsContainer>
                <DetailsContainerItemImage image={item[itemNumber()-1]['image']}/>
                <DetailsContainerItemTextBody>
                    <DetailsHeaderText>{item[itemNumber()-1]['name']}</DetailsHeaderText>
                <DetailsContainerItemText>
                    {item[itemNumber()-1]['description']}
                </DetailsContainerItemText>
                </DetailsContainerItemTextBody>
            </DetailsContainer>
            <BottomGap/>                 
        </CircleItemHome>
    )
}
