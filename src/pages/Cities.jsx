
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import apiUrl from "../../apiUrl";

export default function Cities() {
  const[cities, setCities]= useState([])
  
  useEffect(
    ()=> {
    axios(apiUrl+'cities')  
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
          },[]
         )
  
  return (
    <>
    <NavBar/>
    
    <input type="text" name="text" id="text" onKeyUp={handleFilter}/>
    {cities.map(eatch=><p key={eatch._id}>{eatch.city}</p>)}
     </>      
  )
 
}
