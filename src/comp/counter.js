import React, { useState } from 'react'
import {RemoteCounter} from './Remotecounter'



export const CounterContext = React.createContext() 


function Counter() {
    const [count, setCount] = useState(20)
    function setMe(){
        setCount(count+1)
    }

    return (
        <div>
            <CounterContext.Provider value={{setMe,count} } >
               
                <RemoteCounter/>
            </CounterContext.Provider >       
        </div>
    )
}

export default Counter