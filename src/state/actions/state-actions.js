
    export const changeTheme = () =>{
        return {
            type:"CHANGE-THEME"
        }
    }

    export const changeThemeFromLocal = (localstate) =>{
        return {
            type:"GET-THEME-FROM-LOCAL",
            payload:localstate
        }
    }

    export const changeName = (newname) =>{
        return {
            type:"CHANGE-NAME",
            payload:newname
        }
    }