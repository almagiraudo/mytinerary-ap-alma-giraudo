import { Link as Anchor } from "react-router-dom"

export default function Card({src, alt, _id, text}) {
  return (
    
      
      <div className="flex w-[370px]  rounded-xl shadow items-start  ">
        <Anchor to = {'/nav/citydetail/'+ _id}   className="rounded-xl 
         bg-indigo-700 text-white text-md text-center 
          items-center cursor-pointer ">
        <img className="bg-origin-border rounded-md " src={src} alt={alt} />
        <p className=" flex w-[140px] h-[20px] pb-7 text-sm pl-5 text-center justify-between text-white ">{text}</p>
        View More</Anchor>
      </div>
    
  )
 }


