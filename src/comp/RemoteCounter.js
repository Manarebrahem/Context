import React, { useContext } from 'react'
import {CounterContext} from '.counter.js' 


function RemoteCounter() {
    const {setMe,count} = useContext(CounterContext);  
    console.log(setMe)
    console.log(count)

    return (
    <div>
        <button onClick={()=>{setMe()}}>remote {count}</button>
    </div>
  )
}

export default RemoteCounter