import React,{createContext} from 'react'
export const ContextShop=createContext();
const ContextProvider=({children})=>(
    <ContextShop.Provider>
        {children}
    </ContextShop.Provider>
)
export default ContextProvider