import { AboutInnerArrow, HomeAboutButton, HomeAboutButtonCard, HomeAboutCardInnerButton, HomeAboutCardText, WrapInnerButton } from "./about-style";
import { useHistory } from "react-router-dom";

    
    export default function AboutHomePageButton() {
        const history = useHistory();
        function goToAboutPage() {
            history.push(`/about`);
        }
        return (
           <HomeAboutButton>
               <HomeAboutButtonCard>
                   <HomeAboutCardText>About Us</HomeAboutCardText>
                   <WrapInnerButton>
                   <HomeAboutCardInnerButton onClick={e=>{goToAboutPage()}}>
                       <AboutInnerArrow/>
                   </HomeAboutCardInnerButton>
                   </WrapInnerButton>
               </HomeAboutButtonCard>
           </HomeAboutButton>
        )
    }    