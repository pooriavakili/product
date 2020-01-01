import React, { useContext } from "react";
import { ContextShop } from "./stateManagment/Context";
import One from './components/One'
export default function App() {
    useContext(ContextShop)
    return(
<div>
    <One/>
</div>
    );
}

