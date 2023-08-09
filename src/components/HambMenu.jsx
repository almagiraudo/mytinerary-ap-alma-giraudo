import Home from "../pages/Home"
import Cities from "../pages/Cities"
import Singin from "../pages/SignIn"
import { useState } from "react"

export default function HambMenu() {
 const [isOpen, setOpen] = useState(false)

  return ( <>
    <svg className="w-6 h-6 text-black dark:text-black flex md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
    onClick={()=>{setOpen(!isOpen)}}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
  </svg>
  { isOpen ?
    <div className="flex flex-col justify-between gap-5 mt-10 items-center">
    <Home/>
    <Cities/>
    <Singin/>
    </div>
    :(null)
  }
  </>)
}
