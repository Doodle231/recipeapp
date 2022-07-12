import React from 'react'
import herofood from "../assets/herofood.png"

import {useNavigate} from "react-router-dom"
import {Card} from "../components/Card"




function Home() {
  let navigate = useNavigate()
 
  return (
    <div>
    
    <div className ="topsection grid grid-cols-2  h-full bg-emerald-500  ">
        
        <div className = "hungry-section pl-2 sm:pl-12 pt-4 w-full text-white">
        <h1 className = "text-white text-lg pt-6 font-extrabold md:text-5xl">Feeling Hungry? </h1>
        <div className ="text-white pt-3 h-56 w-32  md:w-3/4 text-sm md:text-xl">You can use this app to search for a meal that pleases you. </div>
        
        
         <h1 className =" text-sm w-full md:text-2xl">Search for a recipe</h1>
         <input placeholder = " Type here to search " className = "recipesearch  bg-gray-300 w-auto mt-2 md:h-8 text-black" ></input>
         <button className ="bg-green-700 w-20  md:ml-8 rounded-md ml-6 mt-2">Search </button>
        
        </div>

        <div className='w-full h-full  '>
        <img src = {herofood} className = "w-full h-[60%] sm:w-full sm:h-full sm:pr-14  pt-12 object-fit align-bottom pr-2" alt =""></img>
        </div>
    </div>

     <div className="midsection  w-full   sm:bg-foodbg sm:backdrop-brightness-50 sm:pl-2 ">
     
     <div className=" text-zinc-200 text-4xl  text-center pt-4 font-bold">Categories</div>

     <div className="cardcontainer w-full h-96 sm:flex flex-row font-bold text-2xl mt-12 gap-x-5 ">
     
     <Card name ="Appetizer" location ="/Appetizer"/>
     <Card name ="Main Course" location ="MainCourse"/>
     <Card name ="Soup" location ="Soup"/>
     <Card name ="Salad" location ="Salad"/>
     
     </div>
     </div>

<div className='w-full h-[500px] bg-yellow-500 '>
<div>hey</div>
</div>

    </div>
  )
}

export default Home