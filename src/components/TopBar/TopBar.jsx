import '../../App.css';
import { useState , useEffect, useReducer, useRef} from 'react'
import { Countries } from './Countries'
import { SearchButton } from './SearchButton'



const menuClass = 'hover:text-orange-500 hover:font-normal font-normal text-sm mx-4 text-white opacity-80 hover:opacity-100 uppercase'


export const TopBar = (props) => {

const menuItems = ['dealer locator', 'technology', 'maxxis career',  'contact us']
 
  
  return(
    <div className = {'flex flex-row bg-black px-8 items-center'}>
    <div className = {'flex flex-row w-1/2 items-center'}>
      <Countries />
       {menuItems.map(item => (<h1 key = {item.id} className = {menuClass}>{item}</h1>))}

       
    </div>

    <SearchButton />
    </div>
  )
      }





