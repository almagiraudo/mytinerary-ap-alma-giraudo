
import { useEffect, useState,useRef } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import apiUrl from "../../apiUrl";
import Card from "../components/Card";
import CardError from "../components/CardError";

export default function Cities() {

  const[cities, setCities]= useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  
  useEffect(
    ()=> {
    axios(apiUrl+'cities?city='+text.current.value)  
        .then(res=>setCities(res.data.response))
        .catch(err => {
          setCities([])
          console.log(err)})
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
    <input 
     ref={text}  onKeyUp={handleFilter}
      type="search" id="default-search" 
     placeholder="search for your destiny" 
    className="flex border-solid w-[300px] h-10 text-center object-center
     border-slate-500 bg-slate-300 rounded-lg  "
     
     />
    </div>
     <div className="flex justify-center flex-wrap gap-10 mt-10  ">
     {cities.length != 0 ?
     cities.map(city=> (
      <Card key={city._id} text={city.city} src={city.photo} _id={city._id} />
    )) : 
    <div><CardError/></div>
  }
    </div>
        
     </>      
  )
 
}
