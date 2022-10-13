import React, { useState } from 'react'
import '../App.css'


export function PrimaryButton(props) {
    
    return(
        <button className = {'h-10 text-sm bg-transparent border-4 hover:text-orange-600 px-10 border-orange-600 text-white uppercase font-extrabold' }>{props.title}</button>
    )
}