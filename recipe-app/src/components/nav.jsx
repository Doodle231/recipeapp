import React from 'react'


function Nav() {
  return (
    <div className = "flex  h-14 w-full bg-cyan-600   font-bold text-sm sm:text-lg sm:justify-center pl-4  top-0">
    <div className = "text-slate-100    self-center sm:text-sm md:text-xl md:pl-8"> Rockin Recipe App </div>
    <div className = "hidden sm:flex links text-slate-900 md:w-4/5 self-center space-x-10 text-right justify-end mr-4"> 
    
   
    
   
    <a href = "#" >Browse Recipe</a>
    <a href = "#" >Search</a>
    <a href = "#" >Surprise Me!</a>
    </div>
    
    
    
    
    </div>
  )
}

export default Nav