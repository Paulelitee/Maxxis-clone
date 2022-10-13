import React from 'react'
import { useState } from 'react'



export function  PriceSlider(props)  {

    const [count, setCount] = useState(0)

    return(
            <div className = {'slider'}>
                    <input type = {'range'}></input>
                    <input
                            type = {'range'}
                            value = {0}
                            max = {100}></input>
                    <h1>{count}</h1>
            </div>    

    )
}