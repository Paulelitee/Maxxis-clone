import  {useState} from 'react'
import  '../App.css'

export  const Products = (props) => {

    



    return(
      <div class = {'container'}>
      <img src = {''} className = {'imageBox'}></img>
      <h1 className = {'itemName'}>Haro Bmx</h1>
      <h1 className = {'itemDesc'}>1984 Haro master sport. Only 250 pieces ever made</h1>
      <h1 className = {'price'}>$500</h1>
      <div className = {'rating'}></div>
      <div className = {'icons'}>
          <div className = {'shopIcon'}></div>
          <div className = {'favIcon'}></div>
      </div>
  </div>

    
    )
}