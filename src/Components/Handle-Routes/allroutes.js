import { useSelector,useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import App from "../../App";
import { darkTheme, lightTheme } from "../../Views/AppTheme/theme-constants";
import { GlobalStyles } from "../../Views/AppTheme/themes";
import HomeLower from "../../Views/Home/Home-Lower/HomeLower";
import MainHome from "../../Views/Home/Home-Upper/MainHome";
import App404route from "./app404route";
import About from "../../Views/Details-Section/About/About";
import {useEffect} from 'react'
import { changeThemeFromLocal } from "../../state/actions/state-actions";
import { getData } from "../../state/storage-local/setANDgetStorage";
import Contact from "../../Views/Details-Section/Contact/Contact";
import CircleItemDetails from "../../Views/Details-Section/Circle-ItemDetail/CircleItemDetails";



function AllRoutes() {
    const themState = useSelector(state => {
        return state.appReducer.isdark
      })    

      const dispatch = useDispatch();
    
      useEffect(() => {
        const localData = getData("theme-value")
          dispatch(changeThemeFromLocal(localData))
      },)

    return (
    <ThemeProvider theme={themState === false ? lightTheme : darkTheme}>
    <GlobalStyles />
    {/* <div onClick={e => switchTheme()}></div> */}
    <div>
        <Router>
                <Switch>
                    <Route exact path="/" component={HoldHome} />
                    <Route path="/about" component={About} /> 
                    <Route path="/contact" component={Contact} /> 
                    <Route path="/details/:id" component={CircleItemDetails} /> 
                    {/* <Route path="/widgets/:name/:id" component={CodeDetails}></Route> */}

                    {/* Paths that don't match */}
                    <Route path="*" component={App404route} />
                </Switch>
            </Router>
    </div>
    </ThemeProvider>

    );
}

function HoldHome(){
    return(
        <div>
        <MainHome></MainHome>
        <HomeLower />
      </div>
    );
}

export default AllRoutes