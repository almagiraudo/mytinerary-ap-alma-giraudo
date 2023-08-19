
import { useEffect, useState,useRef } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import apiUrl from "../../apiUrl";

export default function Cities() {
  const[cities, setCities]= useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  
  {/*useEffect(
    ()=> {
    axios(apiUrl+'cities?city='+text.current.value)  
        .then(res=>setCities(res.data.response))
        .catch(err=>console.log(err))
          },[reEffect]
        )*/}

  function handleFilter(){
    console.log(text.current.value)
    setReEffect(!reEffect)
  }
  
  return (
    <>
    <NavBar/>
    
    <input ref={text} type="text" name="text" id="text" onKeyUp={handleFilter}/>
    {cities.map(eatch=><p key={eatch._id}>{eatch.city}</p>)}
     </>      
  )
 
}
