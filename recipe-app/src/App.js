import Nav from "./components/nav";
import Home from "./pages/home"; 
import {Route, Router, Routes} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import {Item} from "./pages/Item"

import { MainCourse } from "./pages/MainCourse";
import {Soup} from "./pages/Soup"
import {Salad} from "./pages/Salad"
import {Appetizer} from "./pages/Appetizer"

function App() {
  

  return (
    <>

  <BrowserRouter>
   <Nav/>
   
  
   
   <Routes>
   <Route path ="/" element = {<Home/>} />
 <Route path ="/MainCourse" element = {<MainCourse/>} />
 <Route path ="/Soup" element = {<Soup/>} />
 <Route path ="/Salad" element = {<Salad/>} />
 <Route path ="/Appetizer" element = {<Appetizer/>} />
 <Route path ="/Item" element = {<Item/>} />
</Routes>
</BrowserRouter>

    </>
   );


}


  


export default App;
