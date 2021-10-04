import React, { useState } from 'react'
import { CardContentTopGap, ContactBackArrow, ContactCard, ContactCardBody, ContactHome, ContactNavigation, ContactPostArrow, ContactSendButton, EmailLabel, EmailLogo, Gap1, Gap2, Gap3, Gap4, GetInTouch, InputFieldSpacing, InputIcon, InputItemContainer, MessageSent, MessageSentIcon, MessageSentIconBody, NameInput, PopUpBody, PopUpCard, PopUpCardBody, SendButtonContainer, SendIcon, TextMessageInput, TheEmail, } from './contact-style'
import { useHistory } from "react-router-dom";
import { BottomGap } from '../Circle-ItemDetail/circle-item-details-style';
import Email from "../../../assets/email.svg";
import AddToChat from "../../../assets/add_to_chat.svg";


export default function Contact() {

    const history = useHistory();

    const [showDialog,setDialogState] = useState(false);

    function showAndDismissDialog(){
        setDialogState(!showDialog)
    }

    function moveBack() {
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }
    return (
        <ContactHome>
            <ContactNavigation>
                <ContactBackArrow onClick={(e) => { moveBack() }} />
                <ContactPostArrow />
            </ContactNavigation>
            <Gap1 />
            <GetInTouch>Get In Touch</GetInTouch>
            <Gap2 />
            <TheEmail>
                <EmailLabel>eugenekross</EmailLabel>
                <EmailLogo />
                <EmailLabel>company.com</EmailLabel>
            </TheEmail>
            <Gap3 />
            <ContactCardBody>
                <ContactCard>
                    <CardContentTopGap />
                    {/* Username     */}
                    <InputItemContainer>
                        <InputIcon />
                        <NameInput placeholder="Username" />
                    </InputItemContainer>
                    <InputFieldSpacing/>

                    {/* Email */}
                    <InputItemContainer>
                        <InputIcon url={Email}/>
                        <NameInput placeholder="Email" />
                    </InputItemContainer>
                    <InputFieldSpacing/>

                    {/* Message */}
                    <InputItemContainer>
                        <InputIcon url={AddToChat}/>
                        <TextMessageInput placeholder="Message" />
                    </InputItemContainer>

                    <Gap4 />
                    <SendButtonContainer>
                        <ContactSendButton onClick={(e)=>{showAndDismissDialog()}}>
                           <SendIcon/>
                        </ContactSendButton>
                    </SendButtonContainer>
                    <CardContentTopGap />
                </ContactCard>
            </ContactCardBody>

            { showDialog === true?
            <PopUpBody onClick={(e)=>{showAndDismissDialog()}}>
                <PopUpCardBody>
                    <PopUpCard>
                        <MessageSent>Message Sent Successfully</MessageSent>
                        <MessageSentIconBody>
                            <MessageSentIcon/>
                        </MessageSentIconBody>
                    </PopUpCard>
                </PopUpCardBody>
            </PopUpBody> :<div style={{width:"0px",height:"0px"}}></div>
            }
            <BottomGap />
        </ContactHome>
    )
}
