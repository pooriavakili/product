import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {BrowserRouter,Route} from "react-router-dom";
import Routes from "./components/Routes";
const Routeha=(
    <BrowserRouter>
        {
            Routes.map((route)=>(
                <Route {...route}/>
            ))
        }
    </BrowserRouter>
)
ReactDOM.render(Routeha, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
