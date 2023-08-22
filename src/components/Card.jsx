import { Link as Anchor } from "react-router-dom"

export default function Card({src, alt, _id, text}) {
  return (
    
      /* <div className="flex w-[370px]  rounded-xl shadow items-start">
        <img className="bg-origin-border rounded-md " src={src} alt={alt} />
      <div>
        <p className=" flex w-[140px] h-[20px] pb-7 text-sm pl-5
         text-center justify-between text-white ">{text}</p>
      </div>
        <div>
        <Anchor to = {'/nav/citydetail/'+ _id}   className="rounded-xl 
         bg-indigo-700 text-white text-md text-center 
          items-center cursor-pointer ">View More</Anchor>
          </div>
      </div> */
      
      /*<div className="flex w-[370px]  rounded-xl shadow items-start  ">
        <Anchor to = {'/nav/citydetail/'+ _id}   className="rounded-xl 
         bg-indigo-700 text-white text-md text-center 
          items-center cursor-pointer ">
        <img className="bg-origin-border rounded-md " src={src} alt={alt} />
        <p className=" flex w-[140px] h-[20px] pb-7 text-sm pl-5 text-center justify-between text-white ">{text}</p>
        View More</Anchor>
      </div>
  */

<div className="relative shadow-black w-[410px]">
              <img className=" rounded-3xl "  src={src} alt={alt} />
        <div className=" absolute top-0  ">
              <h1 className=" text-lg text-center font-bold text-white pl-4 pt-3 border-solid">{text}</h1>
        </div>




        <div className=" absolute bottom-0 mt-2 pl-4 pb-3">
        <Anchor to = {'/nav/citydetail/'+ _id} >
              <button className="  text-md px-2 py-1 font-bold bg-indigo-700 hover:bg-indigo-500 rounded-lg text-white">View More</button></Anchor>
        </div>
    </div>
     
  )
 }

