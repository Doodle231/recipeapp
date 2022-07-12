import React from 'react'
import {useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'

export function MainCourse() {
  
 let navigate = useNavigate()
  


  const [mainCourse, setMainCourse] = useState([])


    useEffect(() => {

     getMealTypes()

    }, [])
  
  const getMealTypes = async () => {
    const api = await fetch (
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=ff5debaea5bd4f8f96bc5f35c4139d92&type=maincourse"
    )
    const data = await api.json()
   
    setMainCourse(data.results)

   
  }
  

  
    return (
    <>
    
    <h1 className="font-bold ml-8 pb-4 pt-4"> Main Course</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 items-center  w-full gap-2 pb-6 text-center ">
   
    {mainCourse.map ((recipe) => {
     return (
      <div className="card w-76 h-88 bg-blue-500 ml-2 mr-2">
    <h1 className='text-center text-white font-bold mt-1'>{recipe.title}</h1>
    <img src = {recipe.image} alt = {recipe.title }  className = "object-scale-down  mx-auto rounded-2xl w-3/4 h-3/4 mt-4 mb-2 shadow-blue-500/50 border-2 border-yellow-200 "></img>
    <button onClick = { () => {  
        navigate("/Item", { state: {recipeID: recipe.id } } )

     }}
     
      className ="bg-green-700 w-40 h-8 m-auto rounded-xl border-2 border-yellow-200 mb-4">
      

      <h1 id = {recipe.id }className ="text-white font-bold">See Recipe
      </h1>

      </button>
    </div>
  
     )

    })}


    </div>
    </>
  )
}
