import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose}  from 'redux'
import { Provider } from 'react-redux';
import allReducer from './state/reducers/combined-reducers';
import {createBrowserHistory} from 'history'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'

import AllRoutes from './Components/Handle-Routes/allroutes';


// STORE
// ACTION
// REDUCER
// DISPACT

export const history = createBrowserHistory()

/// STORE
//  const store = createStore(appReducer)
 const appstore = createStore(
   allReducer(history),  
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
    )

ReactDOM.render(
  <React.StrictMode>
     
      <Provider store={appstore}>
        <ConnectedRouter history={history}> 
          <AllRoutes/>
        </ConnectedRouter>
      </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
