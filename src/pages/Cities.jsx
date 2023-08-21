
import { useEffect, useState,useRef } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import apiUrl from "../../apiUrl";
import Card from "../components/Card";
export default function Cities({data}) {

  const[cities, setCities]= useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  
  useEffect(
    ()=> {
    axios(apiUrl+'cities?city='+text.current.value)  
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
    
    <input className="border-solid border-slate-500 bg-slate-300 rounded-lg  " ref={text} type="text" name="text" id="text" onKeyUp={handleFilter}/>
    {cities.map(each=><p key={each._id}>{each.city}</p>)}
     <Card
            key={index}
            src={each.photo}
            alt={each.id}
            text={each.city}
            id={each.id}
     />
          
        
     </>      
  )
 
}
