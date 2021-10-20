import React from 'react'
import { CircleItemBackArrow, CircleItemNavigation, CircleItemHome, DetailsContainer, DetailsContainerItemImage, DetailsContainerItemText, BottomGap, DetailsContainerItemTextBody, DetailsHeaderText, ImageView, ImageViewButton, } from './circle-item-details-style'
import { useHistory, useParams } from "react-router-dom";

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

    const item = [
        {
            "id": "1",
            "name": "Home & Furniture",
            "description": `In her dream she is fourteen, running home from work on precarious little heels, down the paved street, as molten metal plip-plops around her, dotting the cement with perfect silver discs. Her mother lags six feet behind, following her footsteps, urging her to tread carefully. A V2 rocket launches overhead, triggering the timer in her mind. She waits in the signature silence for the rocket to find its mark, as it careens noiselessly through the night sky.
            “One,” she shouts, “Two. Three. Four.”
            “We have plenty of time, Lizzy, plenty of time.” Her mother is shouting, over and over, no panic, just a calm, reassuring scream.
            It is the same dream as always. Lizzy reaches behind and grabs the older woman’s hand, pulls her into the shelter of their porch, watching as the house across the road explodes into a heap of searing, flaming rubble.
            `,
            "image": Home,
        },
        {
            "id": "2",
            "name": "Gadgets",
            "description": "I am a VIDEO description. I try to wake her but she is in a deep sleep. I know the conversation if she wakes. I will ask her if she has eaten and she will say she’s not hungry. I will try to cajole her into the warming sunlight, pressure her to have tea and a chat. She will refuse. She will tell me she is happy to be curled up in her warm bed, that she is tired. She will finally say that I should expect this from someone ninety-seven years old. It’s her own truth and I cannot dispute it, so I let her sleep undisturbed.",
            "image": VideoCall,
        },
        {
            "id": "3",
            "name": "Electronics",
            "description": `I remember once, when I was a teenager, someone at tailgate party tossed a cup of flour into the air over the fire we'd built. It went "WHOOSH" and lit the sky for miles up, or so it seemed. 
            Thank God there was no wind. It was epic. I had had a few tokes and I was trying to articulate to my friend Clarisse how my mother worked with flour every day, making it into things, and yet, watching it become NOTHING was so much more spectacular.             
            Clarisse was busy watching a moth on her sleeve, so I'm not sure she was even listening.             
            It's funny how you remember things. Even stoned, I remember that so clearly, how impressive that quick flour fire was, and how it overshadowed my mother's pedestrian use of flour and fire.`,
            "image": TodoList,
        },
        {
            "id": "4",
            "name": "Foods and more",
            "description": `For your hands, the note reads, scribbled in Dr. Delaney’s slanted, crowded handwriting. Stop by next Tuesday? I bought a piano. It’s no Bechstein, but I still think you’ll like it.
            In a near-Pavlovian response, our fingers twitch. It’s a scheme, no doubt, a trap to psychoanalyze us, but an enticing one all the same. We bring the package to the kitchen table. The pendant light overhead flickers like a metronome.
            We tug at the newspaper until it unfurls, leaving behind an ordinary-looking box. Turning it over causes the cardboard flaps to open themselves; a pair of black gloves fall out. We pluck them from the table and rub the textured material between our thumb and index finger. The gloves are nylon, maybe something similar, for the material is smooth, but still firm to the touch.
            We put one on. A second skin hovers above our own, clinging, but without the warmth of blood pumping through it. We shed it immediately, flinging the glove across the room. The light flickers again. We collapse into an empty stool. Our chest heaves, aches.             
            We stare at the note. For your hands. It almost stares back at us.`,
            "image": Zenly,
        },

        {
            "id": "5",
            "name": "For Activities",
            "description": `The journey to this specific star system took four years. The rest of the crew and I have enough resources to last another sixteen Earth months. By then, we'll have made a substantial dent in our research. Our food, water, fuel, along with our tolerance for the presence of one another, will have depleted, and we'll go into cryosleep for our return. A decade, that's how long we'll have been apart.
            So you'll be asleep, frozen in a coffin for about eight years?             
            I assured him that it was completely safe, that I wouldn't die in transport.             
            But doesn't that mean that you'll come back looking almost the same as when you left? Won't you technically be younger than me?`,
            "image": January,
        },
        {
            "id": "6",
            "name": "Drinks & Fun",
            "description": `Scientists are some of the professionals that, depending on their branch of specialization, are often courted by big-money tech companies and international organizations. He heard about a space program from one of his faithful customers, a man that worked as a research assistant for the state university who always ordered a bear claw with a large cup of coffee and a BLT for the road.
            He told me how the New Worlds Association was looking for people to blast off, in his own words, into space. That the money I'd receive would leave me set for life.              
            He was the one that showed me the association's website. It says here you have to send them a paper or something explaining your qualifications, along with an idea for a project applicable in space, highlighting a specific area of research. Does that sound like something you could do?`,
            "image": ChampagneBottle,
        },
    ];

    function moveBack() {
        // history.push("/home");
        history.replace("/");
        // history.goBack();
    }


    function GoToFacilities() {
        // history.push("/home");
        history.replace("/products");
        // history.goBack();
    }


    function itemNumber() {
        return Number(params["id"]) || 1
    }

    return (
        <CircleItemHome>
            <CircleItemNavigation>
                <CircleItemBackArrow onClick={(e) => { moveBack() }} />
            </CircleItemNavigation>
            <DetailsContainer>
                <ImageView>
                    <DetailsContainerItemImage image={item[itemNumber() - 1]['image']} />
                    <ImageViewButton onClick={(e)=>{GoToFacilities()}}>View All</ImageViewButton>
                </ImageView>
                <DetailsContainerItemTextBody>
                    <DetailsHeaderText>{item[itemNumber() - 1]['name']}</DetailsHeaderText>
                    <DetailsContainerItemText>
                        {item[itemNumber() - 1]['description']}
                    </DetailsContainerItemText>
                </DetailsContainerItemTextBody>
            </DetailsContainer>
            <BottomGap />
        </CircleItemHome>
    )
}
