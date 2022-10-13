import React from 'react'
import { useState } from 'react'
import '../../App.css'
import logo from '../logo.svg'

export function MenuBar()   {


const menuClass = 'text-white hover:text-orange-600 mx-10 font-extrabold uppercase'
const menuItems = ['tires', 'shop', 'about', 'news', 'sponsorships']

    return(

    <div className = {'flex flex-row justify-between items-center px-20 py-5'}>
        <div className = {'flex flex-row justify-start w-1/3'}>
        <img
                src = {logo}
                className = {'object-cover h-10 '}
        ></img>
        </div>
        <div className = {'flex flex-row  w-1/3 justify-center'}>
            {menuItems.map((item) => <h1
                    className = {menuClass}>{item}</h1>)}
        </div>
        <div className = {'w-1/3 flex flex-row justify-end'}>
                <button className = {'h-10 bg-transparent border-4 hover:text-orange-600 px-5 border-orange-600 text-white uppercase font-extrabold' }>tire finder</button>
    </div>
    </div>
    )
}