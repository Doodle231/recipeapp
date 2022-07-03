import React from 'react'
import herofood from "../assets/herofood.png"
import appetizer from "../assets/appetizer.png"
import maincourse from "../assets/maincourse.png"
import salad from "../assets/salad.png"
import soup from "../assets/soup.png"
import Card from './Card'

function Home() {
  return (
    <div>
    
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

     <div className="midsection  w-full  bg-foodbg backdrop-brightness-50 pl-16">
     <div className="modal z-3 absolute w-screen h-screen bg-black bottom-0 right-0 left-0 bg-opacity-70">
     <div className= "modalcontent w-10/12 h-10/12 ml-auto mr-auto text-center">
     
     <div className="modalbody w-full h-full ">
    <Card/>
     <button className ="nextbutton bg-blue-500 w-32 h-12 absolute bottom-16 border-2 right-76 border-black ">Next </button>
     <button className ="nextbutton bg-red-500 w-32 h-12 absolute bottom-16 right-36 border-2 border-black ">Close </button>
     </div>
     </div>


     </div>
     <div className=" text-zinc-200 text-4xl  text-center pt-4 ">Categories</div>

     <div className="cardcontainer w-full h-96 flex flex-row font-bold text-2xl mt-12 gap-x-5">
     <div className="card1 bg-red-200 w-72 h-80 rounded-3xl text-center pt-4 ">Appetizer
     <img src = {appetizer} alt = "" className = "h-52 mx-auto mt-6"></img>
     
     </div>
     <div className="card2 bg-green-200 w-72 h-80 rounded-3xl text-center pt-4">Main Course
     <img src = {maincourse} alt = "" className = "h-52 mx-auto mt-6"></img>
     </div>
     <div className="card3 bg-teal-200 w-72 h-80 rounded-3xl text-center pt-4">Soup
     <img src = {soup} alt = "" className = "h-52 mx-auto mt-6"></img>
     </div>
     
     <div className="card4 bg-amber-200 w-72 h-80 rounded-3xl text-center pt-4">Salad
     <img src = {salad} alt = "" className = "h-52 mx-auto mt-6"></img>
     </div>
     </div>
     </div>


    </div>
  )
}

export default Home