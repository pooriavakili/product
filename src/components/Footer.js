import React, {useContext, useState} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from '@material-ui/icons/Home'
import SignIn from '@material-ui/icons/VpnKey'
import Register from '@material-ui/icons/AddCircle'
import {ContextShop} from "../stateManagment/Context";
function Footer() {
    const[value,setValue]=useState(0)
    useContext(ContextShop);
    return (

        <BottomNavigation
        bottom={value}
        onChange={(event,newValue)=>{
            setValue(newValue)
        }}

        showLabels
        >
<BottomNavigationAction href='/' label='Home' icon={<Home/>}/>
<BottomNavigationAction href='/signin' label='SignIn' icon={<SignIn/>}/>
<BottomNavigationAction href='/register' label='Register' icon={<Register/>}/>
        </BottomNavigation>


    );
}
export default Footer;