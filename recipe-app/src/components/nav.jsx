import React from 'react'

function Nav() {
  return (
    <div className = "flex  h-14 w-full bg-cyan-600   font-bold text-lg justify-center">
    <div className = "text-slate-100    self-center text-xl pl-8"> Rockin Recipe App </div>
    <div className = "links text-slate-900 w-4/5 self-center space-x-10 text-right pr-12"> 
    <a href = "#" >Home</a>
    <a href = "#" >Browse Recipe</a>
    <a href = "#" >Search</a>
    <a href = "#" >Surprise Me!</a>
    </div>
    
    
    
    
    </div>
  )
}

export default Nav