import React from 'react'
import NavBar from '../components/NavBar'

export default function NavLayout({children}) {
  return (
<div> 
    <NavBar/> 
    {children}    
    </div>
  )
}
