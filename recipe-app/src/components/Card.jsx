import React from 'react'
import soup from "../assets/soup.png"

function Card() {
  return (
    <div className = "container grid grid-cols-3 grid-rows-2 w-full h-full pt-6 bg-blue-200 gap-y-2">
    <div className="card w-60 h-60 bg-orange-100 ml-auto mr-auto ">1
    
    <img src = {soup} alt = "" className = "h-32 w-44 mx-auto rounded-md border-2 mt-4 "></img>
    </div>
    <div className="card w-60 h-60 bg-orange-100 ml-auto mr-auto ">2
    <img src = {soup} alt = "" className = "h-44 w-60 mx-auto rounded-md border-2 "></img>
    </div>
    <div className="card w-60 h-60 bg-orange-100 ml-auto mr-auto ">3
    <img src = {soup} alt = "" className = "h-44 w-60 mx-auto rounded-md border-2 "></img>
    </div>
    <div className="card w-60 h-60 bg-orange-100 ml-auto mr-auto ">4
    <img src = {soup} alt = "" className = "h-44 w-60 mx-auto rounded-md border-2 "></img>
    </div>
    <div className="card w-60 h-60 bg-orange-100 ml-auto mr-auto ">5
    <img src = {soup} alt = "" className = "h-44 w-60 mx-auto rounded-md border-2 "></img>
    </div>
    <div className="card w-60 h-60 bg-orange-100 ml-auto mr-auto">6
    <img src = {soup} alt = "" className = "h-44 w-60 mx-auto rounded-md border-2 "></img>
    </div>
    </div>
  )
}

export default Card