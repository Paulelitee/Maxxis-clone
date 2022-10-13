import React, {useState} from 'react'
import '../../App.css'
import { PrimaryButton } from '../PrimaryButton'
import { Slider } from './Slider'


const titleClass = 'title font-extrabold text-5xl uppercase text-white block w-full text-center'
const firstSlide = <div className = {'px-36 pt-48 pb-5 bg-imageone bg-center   bg-cover bg-no-repeat'}>
                                         <h1 className = {'font-extrabold text-5xl uppercase text-white '}>Breaking News</h1>
                                        <p className = {'text-white text-lg font-light my-5'}>Maxxis Sweeps EWS Elite Men Overall</p>
                                         <PrimaryButton title = 'read more' />
                                </div>

const secondSlide = <Slider imageurl = 'imagetwo' title = 'start em young' head = 'tread victorously' />
                                 



export function FirstSection()   {
    const [render, setRender] = useState(firstSlide)

    
    return(
        <div className = { `  bg-center   bg-cover bg-no-repeat `} >
        <div className = {'w-full h-fit  bg-gradient-to-r from-black/90  to-transparent '} >
               <div>
                    {render}
               </div>
                <div className = {'flex flex-row justify-center mt-48'}>
                    <div className = {'h-4 w-4 m-2 bg-gray-800 hover:bg-orange-600'}></div>
                    <div onClick = {() => {setRender(secondSlide)}} className = {'h-4 w-4 m-2 bg-gray-800 hover:bg-orange-600'}></div>
                    <div className = {'h-4 w-4 m-2 bg-gray-800 hover:bg-orange-600'}></div>
                    
                </div>
        </div>
        </div>
    )
}