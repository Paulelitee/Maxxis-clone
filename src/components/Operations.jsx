import '../App.css';
import { useState , useEffect, useReducer, useRef} from 'react'


export const Operations = ({ dispatch, digit} ) => {

return(
  <>
  <button
   onClick = {() => dispatch({ type: 'choose-operation', payload: {digit}})}>
   {digit}
   </button>
  </>
)

}

