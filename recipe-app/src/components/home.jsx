import React from 'react'
import herofood from "../assets/herofood.png"
function Home() {
  return (
    <div className ="topsection grid grid-cols-2  h-full bg-emerald-500 ">
        <div className = "hungry-section  pl-12 pt-4 w-1/2 text-white">
        <h1 className = "text-white text-3xl pt-6">Feeling Hungry? </h1>
        <div className ="text-white pt-3">You can use this app to search for a meal that pleases you. </div>
         <h1 className ="pt-4">Search for a recipe</h1>
         <input placeholder = " Type here to search " className = "recipesearch  bg-gray-300 w-auto mt-2" ></input>
         <button className ="bg-green-700 w-28 absolute ml-8 rounded-md mt-2">Search </button>
        </div>
        <img src = {herofood} className = "w-full h-full pr-14" alt =""></img>
 

    </div>
  )
}

export default Home