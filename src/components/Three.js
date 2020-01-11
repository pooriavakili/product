import React, {Fragment, useContext} from 'react'
import {ContextShop} from "../stateManagment/Context";
import Product2 from "./Product2";
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";

export default function Three() {
    useContext(ContextShop)
    const Div={
        display: 'inline-block',
        marginTop: '1em',
        marginLeft: '3em',
        padding: '5em',
        border: '1px solid #000',
        borderRadius: '3em'
    }
    const Title={
        display: 'flex',
        justifyContent: 'center',
    }
    const Aks={
        width:200,
        height:200,
        display: 'flex',
        justifyContent: 'center'
    }
    const TitleStyle={
        fontSize: '1.5em',
    }
    const Pack={
        display: 'flex',
        justifyContent: 'center'
    }
    const PackStyle={
        fontSize: '1.3em',
        direction: 'rtl'
    }
    const Price={
        display: 'flex',
        justifyContent: 'center'
    }
    const PriceStyle={
        fontSize: '1.3em',
        direction: 'rtl'
    }
    const Button={
        display: 'flex',
        justifyContent: 'center'
    }
    const StyleButton={
        textDecoration: 'none',
        background:"green",
        color: "#fff",
        padding:"1em",
        borderRadius: '1.5em'
    }
    const Page={
        display: 'flex',
        justifyContent: 'center'
    }
    const PageStyle={
        textDecoration: 'none',
        color: 'black',
        marginLeft: '.8em',
        marginTop: '.7em',
    }
    return(
        <Fragment>
            <Header/>
            {
                Product2.map((item,index)=>(
                    <div style={Div} key={item.id}>
                        <img style={Aks}  src={item.aks} />
                        <div style={Title}>
                            <h1 style={TitleStyle} >{item.title}</h1>
                        </div>
                        <div style={Pack}>
                            <h2 style={PackStyle}> تعداد:{item.pack}</h2>
                        </div>
                        <div style={Price}>
                            <h3 style={PriceStyle}>قیمت:{item.price}</h3>
                        </div>
                        <div style={Button}>
                            <Link style={StyleButton} to='/kharid'>{item.buy}</Link>
                        </div>
                    </div>

                ))
            }
            <div style={Page}>
                <Link to='/two' style={PageStyle}>2</Link>
                <Link to='/three' style={PageStyle}>3</Link>
            </div>
            <div style={{
                marginTop:'2em'
            }}>
                <Footer/>
            </div>
        </Fragment>
    )
}