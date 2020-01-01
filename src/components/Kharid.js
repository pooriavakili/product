import React, {Fragment, useContext} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {ContextShop} from "../stateManagment/Context";
export default function Kharid() {
    useContext(ContextShop);
const Style={
    display:"flex",
    justifyContent:"center",
    fontSize:"1.4em",
    marginTop:"7em"
}
const ButtonAsly={
    display:"flex",
    justifyContent:"center",
    marginTop:"20em",
}
const ButtonMap={
    padding:"1em",
    backgroundColor:"green",
    color:"white",
    textDecoration:"none"
}
const ButtonShop={
    padding:"1em",
    backgroundColor:"green",
    color:"white",
    marginLeft:"1em",
    textDecoration:"none"
}
const Footers={
    marginTop:"40em"
}
    return(
<div>
    <Header/>
    <p style={Style}>کدوم را انتخاب می کنی</p>
    <div style={ButtonAsly}>
        <Link to='/map' style={ButtonMap}> نقشه راه</Link>
    <Link to='/pardakht' style={ButtonShop}>پرداخت</Link>
    </div>
    <div style={Footers}>
    <Footer/>
    </div>
</div>
    )
}