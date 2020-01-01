import React,{useState} from 'react';
import Search from 'react-search'
import Product from "./Product";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Data from "./Data";
import Header from "./Header";
import Footer from "./Footer";
export default function Searching(props) {
    const Footers={
        marginTop:"35em"
    }
    const Style={
        marginTop:"1em"
    }
    return (
        <div>
            <Header/>
            {
                Data.map((item, index) =>
                    <div style={Style}
                    key={item.id}>
                        <Search items={item.value} />

                        <Search items={item.value}

                                maxSelected={20}
                                multiple={true}
                                />
                    </div>
                )

            }
   <div style={Footers}>
<Footer/>
   </div>
        </div>

    )
}
