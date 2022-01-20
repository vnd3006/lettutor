import React, {useState, createContext} from "react";

export const ApiContext = createContext()

const ApiProvider =({children})=>{
    const [token,setToken] =useState('123');


    const TokenData = (token) => {
        setToken(token)
    }

    return (
        <ApiContext.Provider value={{TokenData, token}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider