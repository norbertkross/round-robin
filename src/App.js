import { lightTheme, darkTheme } from "./Views/AppTheme/theme-constants"
import { useState } from 'react';
import { GlobalStyles } from './Views/AppTheme/themes';
import { ThemeProvider } from 'styled-components';
import MainHome from "./Views/Home//Home-Upper/MainHome";
import HomeLower from "./Views/Home/Home-Lower/HomeLower";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router";



function App() {
  const themState = useSelector(state => {
    console.log(`APP state: ${state.appReducer.isdark}`);
    return state.appReducer.isdark
  })
  const [isDark, changeTheme] = useState(false)
  function switchTheme() {
    console.log(isDark);
    isDark === false ? changeTheme(true) : changeTheme(false);
  }

  return (
    <ThemeProvider theme={themState === false ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <div onClick={e => switchTheme()}></div> */}
      <div>
        <MainHome></MainHome>
        <HomeLower />
      </div>
    </ThemeProvider>
  );
}

export default App;
