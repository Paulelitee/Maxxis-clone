import React, {useState} from 'react'
import '../../App.css'
import { PrimaryButton } from '../PrimaryButton'




export function Slider(props)       {

    return(
      
                                   <div >
                                                            <h1 className = {`font-extrabold text-5xl uppercase white block w-full text-center bg-${props.imageurl}`}>{props.head}</h1>
                                                            <PrimaryButton  title = {props.title} />
                                                    </div>
            
    )
}