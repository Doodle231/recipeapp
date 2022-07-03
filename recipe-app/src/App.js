import Nav from "./components/nav";
import Home from "./components/home";
import React, {useState} from "react";


function App() {
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)
  

function getMealData () { 
  fetch(
    ' https://api.spoonacular.com/recipes/716429/information?apiKey=ff5debaea5bd4f8f96bc5f35c4139d92&type=true&number=6'
  )
.then((response) => response.json ())
.then((data) => {
  setMealData(data)
  console.log(data)
})
.catch (() => {
  console.log ("error")
})


}


  return (
   <>

 
  <Nav/>
  <Home/>
  
   
   </>
  );
}

export default App;
