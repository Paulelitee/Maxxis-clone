import '../../App.css'
import React from 'react'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/24/solid'


const searchBox = <div>
        <input
                type = {'text'}
                placeholder = {'Search'}
                className = {'border  focus:opacity-100 focus:m border-white0  text-sm pl-5   placeholder:text-white opacity-50 h-10 pr-40  h-100% bg-transparent'}
        ></input> 

            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth={3}
                    stroke="orange" className="w-5 h-5 absolute right-20 top-3 opacity-50  hover:opacity-100 hover:stroke-orange-500 ">
                    <path strokeLinecap="round"
                    strokeLinejoin="round"  
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                    className = {'stroke-white  hover:stroke-orange-500 '} />
            </svg>
            </div>

    const cancel = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
                                        className="w-5 h-5 ml-4 hover:stroke-orange-500 h-10">
                                        <path strokeLinecap="round"
                                        className = {'stroke-gray-300 hover:stroke-orange-500 '}
                                        strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

    const search = <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth={3}
                                        stroke="currentColor" className="w-5 h-5 ml-4 hover:stroke-orange-500 h-10">
                                       <path strokeLinecap="round"
                                        strokeLinejoin="round"  
                                         d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                                        className = {'stroke-gray-300 hover:stroke-orange-500 '} />
                                </svg>
  



export function SearchButton() {


    const [isActive, setIsActive] = useState(true)
   
    
    
    return(
        <div className = {'flex flex-row items-center  justify-end w-1/2 '} >
            
            <div
                    className = {isActive ? 'hidden' : 'block'}>
                {searchBox}
            </div>
            
            <div className = {'hover:stroke-orange-500'}
                    onClick = {() => setIsActive(!isActive)}>
                            {isActive ? search : cancel}
            </div>
            
             

    </div>
    )
}
