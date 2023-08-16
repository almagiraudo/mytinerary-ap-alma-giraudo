import Home from "../pages/Home"
import NavLayout from "./NavLayout"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"


export default function MainLayout() {
  return (
    <div className="px-[50px] pb-[399px] ">
      <NavLayout/>
      <Outlet/>

      <Home/> 

      <Footer/>
      
      </div>
  )
}
