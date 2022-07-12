import React from 'react'
import {useEffect, useState} from "react"


export function Appetizer() {
  
  const [appetizer, setAppetizer] = useState([])


    useEffect(() => {

     getMealTypes()

    }, [])
  
  const getMealTypes = async () => {
    const api = await fetch (
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=ff5debaea5bd4f8f96bc5f35c4139d92&type=appetizer"
    )
    const data = await api.json()
   
    setAppetizer(data.results)
  }
  
  
  
  
    return (
    <>
    
    <h1 className="font-bold ml-8 pb-4 pt-4"> Appetizer</h1>
    <div className="grid grid-cols-3 items-center group w-full gap-2 pb-6 ">
   
    {appetizer.map ((recipe) => {
     return (
      <div className="card w-full h-80 bg-blue-300 margin-auto">
    <h1 className='text-center text-white font-bold'>{recipe.title}</h1>
    <img src = {recipe.image} alt = {recipe.title } className = "object-scale-down  mx-auto rounded-md w-3/4 h-3/4 "></img>
    <button className ="bg-blue-700 w-40  ml-24 ">
      
      <h1 className ="text-white font-bold">See Recipe
      </h1>

      </button>
    </div>
  
     )

    })}


    </div>
    </>
  )
}
