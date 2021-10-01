import React from 'react'
import { ContactBackArrow, ContactHome, ContactNavigation, } from './contact-style'
import { useHistory } from "react-router-dom";


export default function Contact() {

    const history = useHistory();

    function moveBack(){
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }    
    return (
        <ContactHome>
            <ContactNavigation>
                <ContactBackArrow onClick={(e)=>{moveBack()}}/>
            </ContactNavigation>                    
        </ContactHome>
    )
}
