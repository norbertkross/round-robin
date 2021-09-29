
    export const changeTheme = () =>{
        return {
            type:"CHANGE-THEME"
        }
    }

    export const changeName = (newname) =>{
        return {
            type:"CHANGE-NAME",
            payload:newname
        }
    }