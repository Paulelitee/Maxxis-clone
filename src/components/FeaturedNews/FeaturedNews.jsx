import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"className = {'stroke-white'} />
</svg>

const arrowDown = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" className = {'stroke-white'}/>
</svg>


export function FeaturedNews()   {
    const [isActive, setActive] = useState(true)
    const featuredDiv = useRef(null)

    function toggleActive() {
        setActive(!isActive)
    }

    useEffect(() => {
        featuredDiv.current.addEventListener('mouseover', () => {setActive(false)})
        featuredDiv.current.addEventListener('mouseleave', () => {setActive(true)})

        return() => {
            featuredDiv.current.removeEventListener('mouseover', () => {setActive(false)})

        }
    }, [featuredDiv])

        return(
            <div className = {'py-3 flex flex-oow justify-center items-center bg-orange-600'} ref = {featuredDiv}>
                <h1 className = {' text-white text-lg uppercase inline  font-semibold mx-2'}>view our featured news</h1>
                {isActive ? arrowLeft : arrowDown}
            </div>
        )
}