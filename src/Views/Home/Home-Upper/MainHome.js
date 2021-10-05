import { useState, useEffect,useCallback } from "react"
import { /*useSelector*/useDispatch } from "react-redux";
import { changeTheme } from "../../../state/actions/state-actions";
import { BaseContainer, CenterLogo, GroupItem1, GroupItem2, GroupItem3, GroupItem4, GroupItem5, GroupItem6, HoldRoundItems, HomeBodyTop, MiddleContaner, NavItem, NavItem2, TopHeader } from "../Home-Upper/main-home-style";
import { useHistory } from "react-router-dom";
import { MotionScene, MotionScreen, SharedElement, useMotion } from "react-motion-layout";

function MainHome() {
    const history = useHistory();

    // const themeState = useSelector(state=>state.appReducer)
    const dispatch = useDispatch()

    const [size, setSize] = useState({ height: 0.0, width: 0.0 })

    function giveHeight() {
        // var ht =  (size.width / size.height) <=1?size.width : size.height;
        var ht = (size.width / size.height) <= 1 ? true : false;
        return ht;
    }

    useEffect(() => {

        function setMediaSized() {
            setSize({ height: window.innerHeight, width: window.innerWidth })
        }

        // Event Listener to listen for changes in device size
        window.addEventListener("resize", (event) => { setMediaSized() });
        setMediaSized();
    }, [])


    function goToThisItem(item_detail) {
        history.push(
            {
                pathname: `/details/${item_detail}`,
                state: {
                    data: item_detail,
                }
            });
    }

    const withTransition = useMotion(`front-scene`);
    const callback = useCallback(() => history.push({ pathname: `/details/1}`}));
    function goToContactPage() {
        history.push(`/contact`);
    }

    return (
        <div>
            <MotionScreen>
                <MotionScene  easing="cubic-bezier(0.22, 1, 0.36, 1)" name={`front-scene`} >
                    <BaseContainer height={giveHeight()}>
                        <MiddleContaner height={giveHeight()}>
                            <TopHeader>
                                <NavItem2 onClick={e => { dispatch(changeTheme()) }} />
                                <NavItem onClick={e => { goToContactPage() }} />
                            </TopHeader>

                            <HomeBodyTop>
                                <CenterLogo />
                            </HomeBodyTop>
                            {/* <h1>hello {themeState.isdark.toString()}</h1>   */}
                            <HoldRoundItems>
                                <SharedElement.Div animationKey={`el`} onClick={withTransition(callback)}>
                                    <GroupItem1 height={giveHeight()} 
                                    // onClick={(e) => { goToThisItem("1") }}
                                     />
                                </SharedElement.Div>

                                <GroupItem2 height={giveHeight()} onClick={(e) => { goToThisItem("2") }} />
                                <GroupItem3 height={giveHeight()} onClick={(e) => { goToThisItem("3") }} />
                                <GroupItem4 height={giveHeight()} onClick={(e) => { goToThisItem("4") }} />
                                <GroupItem5 height={giveHeight()} onClick={(e) => { goToThisItem("5") }} />
                                <GroupItem6 height={giveHeight()} onClick={(e) => { goToThisItem("6") }} />
                            </HoldRoundItems>

                        </MiddleContaner>
                    </BaseContainer>
                </MotionScene>
            </MotionScreen>
        </div>
    );
}

export default MainHome