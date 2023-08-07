import Home from "../pages/Home"
import NavLayout from "./NavLayout"
import { Outlet } from "react-router-dom"


export default function MainLayout() {
  return (
    <div className="px-[50px] pb-[399px] ">
      <NavLayout/>
      <Outlet/>
      <Home/> 
      
      </div>
  )
}
