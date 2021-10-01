import React from 'react'
import { useSelector } from 'react-redux';
import { Container404, Image404, Text404 } from './404-page-style'


function App404route() {

    const state = useSelector(state=>{console.log(); return state.appReducer})
    console.log(`404 Routes: ${JSON.stringify(state)}`);
    return (
        <Container404>
            <Text404>Page Not Found</Text404>
            <Image404 />
        </Container404>
    )
}

export default App404route