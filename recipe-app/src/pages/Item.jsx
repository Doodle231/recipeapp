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
 
  }





  
  return (
<>
 
      <div className="card relative text-center">
      <div className="mt-8    text-2xl font-bold text-left mx-32"> Food Category</div>
      <img src = {foodItem.image} className =" md:h-[400px] md:w-[400px] md:mx-32 mt-8 md:object-fill"></img>
      </div>
      <div className="overlay bg-blue-400 md:rounded-full h-[100px] md:w-[30%] w-full md:mx-32 absolute bottom-10 ">
      <h1 className='text-center pt-4 text-lg text-black font-extrabold'>{foodItem.title}</h1>
      <div className="div text-center text-md italic"></div>
      </div>
      
<div className="rightcontainer bg-yellow-200 md:w-[50%] md:h-fit md:absotlute md:right-32 m-auto md:top-24 pt-4 absolute  text-center "> Ingredients
<div className ="bg-blue-400 w-80 h-fit  m-auto mt-4 "> 

   {foodItem.extendedIngredients && foodItem.extendedIngredients.map((item) => {

    return (
      <h1>{item.name}</h1>
    )
   })}

</div>

<div className="pt-4">Recipe</div>
{console.log(foodItem)}
<div className ="bg-blue-400 w-80 h-fit  m-auto mb-16 mt-4 pb-6 pl-4 pr-4 pt-4">

{foodItem.analyzedInstructions && foodItem.analyzedInstructions[0].steps.map((number) => {

return (
  <h1>{number.step}</h1>
)
})}

</div>
</div>

<div className="bg-yellow-200 w-[400px] h-24 mx-32 mt-24 text-center p-4 	font-bold">
<h1 className ="text-black">Health Score</h1>
{foodItem.healthScore}
</div>

<div className="bg-yellow-200 w-[400px] h-24 mx-32 mt-8 text-center p-4 	font-bold">
<h1 className ="text-black">Price per Serving</h1>
{foodItem.pricePerServing}
</div>

<div className="bg-yellow-200 w-[400px] h-24 mx-32 mt-8 text-center p-4 	font-bold">
  <h1 className ="text-black">Servings</h1>
  {foodItem.servings}
</div>

<div className="bg-yellow-200 w-[400px] h-24 mx-32 mt-8 text-center p-4 	font-bold">
  <h1 className ="text-black">Prepration Time</h1>
   {foodItem.readyInMinutes} minutes
  </div>      
</>
    
    
   
  )
}

export default Item