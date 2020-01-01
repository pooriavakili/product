import React, {useContext} from 'react';
import {ContextShop} from "../stateManagment/Context";
import Header from "./Header";
import Product from "./Product";
import {Link} from "react-router-dom";
import Footer from "./Footer";
function One(props) {
    useContext(ContextShop);
    const Style = {
        padding: "1em",
        backgroundColor: "green",
        color: "#fff",
        textDecoration: "none"
    };
    const Links= {

display:"flex",
        justifyContent: "center"
    }
const Linkss={
    color:"black",
    marginRight:"1em",
    textDecoration:"none",
    cursor:"pointer",
    fontSize:"1.3em"
}
    const text={
        fontSize:"1.5em",
        display:"grow"
    }
    return (
        <div>
            <Header />
            {Product.map((item, index) => {
                if (index % 2 === 0) {
                    return (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom:"2em",

                                }}
                            >
                                <img src={item.aks} />

                                <h1>{item.title}</h1>
                                <h2>{item.pack}</h2>
                                <h3>{item.price}</h3>
                                <button style={Style}>{item.buy}</button>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom:"2em",
                                }}
                            >
                                <img src={item.aks} />
                                <h1 style={text}>{item.title}</h1>
                                <h2 style={text}>{item.pack}</h2>
                                <h3 style={text}>{item.price}</h3>

                                <Link to='/kharid' style={Style}>{item.buy}</Link>
                            </div>

                        </div>
                    );
                }
            })}
            <div style={Links}>
            <Link style={Linkss} to='/two'>1</Link>
            <Link style={Linkss}
               to='/three'>2</Link>
            </div>
            <div style={{
                marginTop:"2em"
            }}>
            <Footer  />
            </div>
        </div>
    );
}
export default One;