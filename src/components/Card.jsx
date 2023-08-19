import { useEffect, useState } from "react"
import { Link as Anchor } from "react-router-dom"
import apiUrl from "../../apiUrl";

export default function Card({src, alt, text}) {
const [data, setData] = useState([]);
  useEffect(()=>{
    axios(apiUrl)
    .then(res=>setData(res.data))
    .catch(console.log(err))
  },
  [])


  return (
    <div>
      
      <div className="flex w-[270px]  rounded-xl shadow items-start  ">
        <Anchor to = '/nav/citiesdetail'  className="rounded-xl  bg-indigo-700 text-white text-md text-center flex-col items-center cursor-pointer ">
        <img className="bg-origin-border rounded-xl" src={src} alt={alt} />
        <p className=" flex w-[140px] h-[20px] pb-7 text-center justify-between text-xl text-white ">{text}</p>
        View More</Anchor>
      </div>
      </div>

  )
 }


