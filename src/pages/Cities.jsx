
import { useEffect, useState,useRef } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import apiUrl from "../../apiUrl";
import Card from "../components/Card";

export default function Cities() {

  const[cities, setCities]= useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  
  useEffect(
    ()=> {
    axios(apiUrl+'cities?city='+text.current.value
    )  
        .then(res=>setCities(res.data.response))
        .catch(err=>console.log(err))
          },[reEffect]
        )
       

  function handleFilter(){
    console.log(text.current.value)
    setReEffect(!reEffect)
  }
   
  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center mt-10"> 
    <input className="flex border-solid text-center object-center
     border-slate-500 bg-slate-300 rounded-lg  "
     ref={text} 
      type="text" name="text" id="text" 
     placeholder="search for your destiny" 
     onKeyUp={handleFilter}
     
     />
    </div>
     <div className="flex  flex-wrap gap-10 mt-10 ml-[90px] ">
     {cities.map(city=> (
      <Card key={city._id} text={city.city} src={city.photo} />
    ))}
    </div>
        
     </>      
  )
 
}
