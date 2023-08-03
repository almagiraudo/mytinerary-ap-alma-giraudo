import Home from "../pages/Home"
import NavLayout from "./NavLayout"
export default function MainLayout({children}) {
  return (
    <div className="px-[50px] pb-[399px] ">
      <NavLayout/>
      {children}
      <Home/> 
      
      </div>
  )
}
