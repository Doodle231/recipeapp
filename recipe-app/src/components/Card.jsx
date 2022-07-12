import React from 'react'
import appetizer from "../assets/appetizer.png"
import maincourse from "../assets/maincourse.png"
import salad from "../assets/salad.png"
import soup from "../assets/soup.png"
import {useNavigate} from "react-router-dom"

export function Card(props) {
 
 let navigate = useNavigate()
  return (
    <>
    
    <div className="card1 h-96 w-3/4 bg-red-200 sm:w-72 sm:h-80 rounded-3xl text-center pt-4 text-sm  left-20 mb-8 pb-8 m-auto">{props.name}
     <img src = {appetizer} alt = "" className = "h-full w-full mx-auto  hover:cursor-pointer object-scale-down "></img>
     <button  
     onClick = { () => {  
        navigate(props.location)
     }}
     
     className ="bg-blue-500 mt-2 w-3/4 rounded-lg md:h-10"> 
     <h1 className=' text-white'>See items</h1>
     </button>
     </div>


    
    </>
  )
}

export default Card