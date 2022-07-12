import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Item() {
  const { state } = useLocation();
  let id = state.recipeID

  const [foodItem, setFoodItem] = useState([])


  useEffect(() => {

  getFoodItem()

  },[])

  const getFoodItem = async () => {

    
    const api = await fetch (
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=ff5debaea5bd4f8f96bc5f35c4139d92`
    )
    const data = await api.json()
   
    setFoodItem(data)
   console.log(data)
   
  }




  
  return (
<>

     {console.log(foodItem)}
      <div className="card relative text-center">
      <div className="mt-8    text-2xl font-bold text-left mx-32"> Food Category</div>
      <img src = {foodItem.image} className =" md:h-[400px] md:w-[400px] md:mx-32 mt-8 md:object-fill"></img>
      </div>
      <div className="overlay bg-gray-400 md:rounded-full h-[100px] md:w-[30%] w-full md:mx-32 absolute bottom-10 ">
      <h1 className='text-center pt-4 text-lg text-black font-extrabold'>Food Name</h1>
      <div className="div text-center text-md italic">description of food here</div>
      </div>
      
<div className="rightcontainer bg-yellow-200 md:w-[30%] md:h-3/4 md:absolute md:right-32 m-auto md:top-24 pt-4 relative text-center"> Ingredients
<div className ="bg-gray-300 w-80 h-[30%]  m-auto mt-4">1
</div>

<div className="pt-4">Recipe</div>

<div className ="bg-gray-300 w-80 h-[30%]  m-auto mb-16 mt-4">2
</div>
</div>


      
</>
    
    
   
  )
}

export default Item