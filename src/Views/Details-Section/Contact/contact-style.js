import styled from "styled-components";
import Up_Left from "../../../assets/up_left.svg";
import Up_Left_Dark from "../../../assets/assets-dark/up_left.svg";
import NewPost from "../../../assets/new_post.svg";
import NewPost_Dark from "../../../assets/assets-dark/new_post.svg";
import Email from "../../../assets/email.svg";
import Customer from "../../../assets/customer.svg";
import Pencil from "../../../assets/pencil.svg"
import Pencil_Dark from "../../../assets/assets-dark/pencil.svg"
import Chat_message_sent from "../../../assets/chat_message_sent.svg"
import Chat_message_sent_Dark from "../../../assets/assets-dark/chat_message_sent.svg"


export const ContactHome = styled.div`
    position: absolute;
    min-height: 100vh;
    width: 100vw;
`;

export const ContactNavigation = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContactBackArrow = styled.div`
    width: 40px;
    height: 40px;
    /* background-color: blue; */
    margin: 10px;
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Up_Left:Up_Left_Dark}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`;

export const ContactPostArrow = styled.div`
    width: 40px;
    height: 40px;
    /* background-color: blue; */
    margin: 10px 20px;
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?NewPost:NewPost_Dark}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

export const GetInTouch = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    color: grey;
    font-weight: 600;
    font-size: 26px;
    /* background-color: blue; */
`;

export const TheEmail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: grey;
    /* background-color: blue; */
`;


export const Gap1 = styled.div`
    height: 10px;
`;

export const Gap2 = styled.div`
    height: 100px;
`;

export const Gap3 = styled.div`
    height: 50px;
`;


export const EmailLabel = styled.div`
    display: flex;
    justify-content: center;
    color: grey;
    font-weight: 500;
    font-size: 20px;
`;


export const EmailLogo = styled.div`
    display: flex;
    justify-content: center;
    width: 20px;
    height:20px;
    margin: 4px;
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Email:Email}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;



export const ContactCardBody = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContactCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 30px;
    width: 450px;

    @media all and (max-width:500px){
        width: 90vw;
    }

    @media all and (max-width:300px){
        width: 98vw;
    }
`;


export const CardContentTopGap = styled.div`
    height: 30px;
`;

export const InputItemContainer = styled.div`
    /* background-color: greenyellow; */
    display: flex;
    flex-wrap: nowrap;
    margin: 10px 30px;
    @media all and (max-width:500px){
        margin: 10px 8px;
    }
`;

export const InputIcon = styled.div`
    /* background-color: green; */
    display: flex;
    justify-content: center;
    width: 25px;
    height:25px;
    margin: 2px 8px;
    background-image: url('${props=> props.url || Customer}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;   

    @media all and (max-width:500px){
        margin: 2px 2px;
        width: 20px;
        height:20px;        
    }         
`;

export const NameInput = styled.input`
    color: grey;
    font-size: 18px;
    margin-left: 2px;
    background-color:${props=> props.theme.canvas ==='#ffffff'?props.theme.canvas:'rgb(128, 128, 128,.1)'};
    // Remove Border of Input Text Field
    border:none;
    // Text For placeholder decoration
    ::placeholder {
        color: rgb(128, 128, 128,.6);
        font-size: 18px;
    }
    // Input decoration when focused
    :focus{
    outline: none;
    }
    @media all and (max-width:500px){
        margin: 0px;
    }      
`;

export const TextMessageInput = styled.textarea`
    color: grey;
    font-size: 18px;
    margin-left: 2px;
    background-color:${props=> props.theme.canvas ==='#ffffff'?props.theme.canvas:'rgb(128, 128, 128,.1)'};
    // Remove Border of Input Text Field
    border:none;
    // So that user can not resize
    resize: none;
    // Text For placeholder decoration
    ::placeholder {
        color: rgb(128, 128, 128,.6);
        font-size: 18px;
    }
    // Input decoration when focused
    :focus{
    outline: none;
    }
`;


export const InputFieldSpacing = styled.div`
    height: 5px;
`;

export const Gap4 = styled.div`
    height: 10px;
`;


export const SendButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /* background-color: royalblue; */
`;



export const ContactSendButton = styled.div`
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 6px 30px;
    margin-right: 30px;
    cursor: pointer;
`;



export const SendIcon = styled.div`
    /* background-color: green; */
    display: flex;
    justify-content: center;
    width: 40px;
    height:30px;
    margin: 2px 8px;
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Pencil:Pencil_Dark}');    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
`;



export const PopUpBody = styled.div`
    position: absolute;
    top: 0px;
    display: grid;
    place-items: center;
    width: 100%;
    height:100%;
    background-color:${props=> props.theme.canvas ==='#ffffff'?"rgb(36, 36, 36,.7)":"rgb(217, 217, 217,.85)"} ;
   
`;

/// POPUP menu Dialog
export const PopUpCardBody = styled.div`
    display: flex;
    justify-content: center;
`;

export const PopUpCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    width: 400px;
    height: 200px;
    background-color: ${props => props.theme.canvas};

    @media all and (max-width:500px){
        width: 90vw;
    }

    @media all and (max-width:300px){
        width: 98vw;
    }
`;


export const MessageSent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: grey;
    font-weight: 600;
    font-size: 20px;
    margin-top: 30px;
    /* background-color: blue; */
`;

export const MessageSentIconBody = styled.div`
    display: flex;
    justify-content: center;
`;

export const MessageSentIcon = styled.div`
    width: 100px;
    height: 100px;
    /* background-color: blue; */
    margin: 20px 20px;
    background-image: url('${props=> props.theme.canvas ==='#ffffff'?Chat_message_sent:Chat_message_sent_Dark}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;