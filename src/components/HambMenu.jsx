import { useState } from "react"
import { Link as Anchor } from "react-router-dom"

export default function HambMenu() {
 const [isOpen, setOpen] = useState(false)

  return ( <>
  <div className="mr-[50px] ">
    <svg className="w-6 h-6 text-black dark:text-black flex md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
    onClick={()=>{setOpen(!isOpen)}}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
  </svg>
  { isOpen ?(
    <div className="flex flex-col justify-between gap-3 rounded-lg shadow-md p-5 absolute w-[100px] right-[50px] mt-5 items-center bg-slate-400 md:hidden">

     <Anchor to='/' className="bg-white rounded-lg w-[100px] text-center mx-1 text-[20px] px-2  ">Home</Anchor>
     <Anchor to='/cities' className="bg-white rounded-lg w-[100px] text-center mx-1 text-[20px] px-2  ">Cities</Anchor>
     <Anchor to='/nav/login' className="bg-white rounded-lg w-[100px] text-center mx-1 text-[20px] px-2  ">Singin</Anchor>

    </div>)
    :(null)
  }
  </div>
  </>)
}
