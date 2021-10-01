import {useState,useEffect} from "react"
import { /*useSelector*/useDispatch } from "react-redux";
import { changeTheme } from "../../../state/actions/state-actions";
import { BaseContainer, CenterLogo, GroupItem1, GroupItem2, GroupItem3, GroupItem4, GroupItem5, GroupItem6, HoldRoundItems, HomeBodyTop, MiddleContaner, NavItem, NavItem2, TopHeader } from "../Home-Upper/main-home-style";


function MainHome() {

    // const themeState = useSelector(state=>state.appReducer)
    const dispatch = useDispatch()

    const [size,setSize] = useState({height:0.0,width:0.0})

     function giveHeight(){
            // var ht =  (size.width / size.height) <=1?size.width : size.height;
            var ht =  (size.width / size.height) <=1?true : false;
            return ht;
        }  

    useEffect(()=>{

        function setMediaSized(){
            setSize({height:window.innerHeight,width:window.innerWidth})            
        }
        
        // Event Listener to listen for changes in device size
        window.addEventListener("resize",(event)=>{setMediaSized()});
        setMediaSized();
    },[])

    return (
        <div>
            <BaseContainer height={giveHeight()}>
                <MiddleContaner height={giveHeight()}>
                    <TopHeader>                        
                        <NavItem2 onClick={e=>{dispatch(changeTheme())}}/>
                        <NavItem/>
                    </TopHeader>

                    <HomeBodyTop>
                       <CenterLogo />
                    </HomeBodyTop>
                      {/* <h1>hello {themeState.isdark.toString()}</h1>   */}
                    <HoldRoundItems>
                        <GroupItem1 height={giveHeight()} />
                        <GroupItem2 height={giveHeight()} />
                        <GroupItem3 height={giveHeight()} />
                        <GroupItem4 height={giveHeight()} />
                        <GroupItem5 height={giveHeight()} />
                        <GroupItem6 height={giveHeight()} />
                    </HoldRoundItems>

                </MiddleContaner>
            </BaseContainer>
        </div>
    );
}

export default MainHome