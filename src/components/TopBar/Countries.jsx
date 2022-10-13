import '../../App.css';
import { useState , useEffect, useReducer, useRef} from 'react'
import { SearchIcon } from '@heroicons/react/24/solid'
import usa from  './resources/1200px-Flag_of_the_United_States.svg.webp'
import canada from './resources/ca-flag.jpg'
import australia from './resources/australia-flag-meaning-symbolism.png'
import finland from './resources/Flag_of_Finland.svg.png'
import Sweden from './resources/Flag_of_Sweden.svg.png'



const flagShown = 'w-5 h-5 mx-2 ease-in-out relative transition duration-2000 object-fill rounded-full'
const flagHidden = 'hidden '



export function Countries() {
    const [countries, setCountries] = useState([
        {name: 'America', class: flagHidden,  url: usa},
        {name: 'Austrailia', class: flagHidden,  url: australia},
        {name: 'Finland', class: flagHidden,  url: finland},
        {name: 'Sweden', class: flagHidden,  url: Sweden},
         {name: 'Canada', class: flagHidden, url: canada}])
    const flag = useRef(null)

    const[constFlag, setConstFlag] = useState('w-5 h-5 mx-2 object-fill rounded-full')
  
    const toggleFlag = (e) => {
     
        let newCountries = [...countries]
        newCountries.forEach((item, index, arr) => {arr[index].class = flagShown})
        setCountries(newCountries)
        console.log('fired')
      }
    
  
    const resetFlag = () => {
     
        let newCountries = [...countries]
        newCountries.forEach((item, index, arr) => {arr[index].class = flagHidden})
        setCountries(newCountries)
        console.log('removed')
        }

        
    useEffect(() => {
        flag.current.addEventListener('mouseover', toggleFlag)
        flag.current.addEventListener('mouseleave', resetFlag)
  
        return() => {
          flag.current.removeEventListener('mouseover', toggleFlag)        
        }
  
  
      }, [flag])
  
      return(
        <>
                <img src = {usa} className = { constFlag } ref = {flag} ></img>
                 {countries.map(country =>  <img
                        src = {country.url}
                        className = {country.class}
                        key = {country.name}
       >
        </img>)}
        </>
      )
}