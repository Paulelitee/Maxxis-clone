import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react'
import { TopBar } from './components/TopBar/TopBar';
import { MenuBar } from './components/MenuBar/MenuBar'
import { FeaturedNews } from './components/FeaturedNews/FeaturedNews'
import { MainSection } from './components/MainSection/MainSection'




const App = (props) => {

 

  return (

        <>
        <div className = {'bg-black '}>
              <TopBar />
              <div className = {'h-px mx-10 bg-white opacity-20'}></div>
              <MenuBar />
              <FeaturedNews />
        </div>
        <MainSection />
        </>
    
  )

}

export default App;
