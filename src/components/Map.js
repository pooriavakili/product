import React, {useContext, useEffect} from 'react';
import {ContextShop} from "../stateManagment/Context";
export default function Map(){
    useContext(ContextShop);
    useEffect(()=>{
        window.location.href='https://www.openstreetmap.org/search?query=iran%2Ftehran#map=11/35.7065/51.3477'

    })

        return(
            <div>
            </div>
        )

}