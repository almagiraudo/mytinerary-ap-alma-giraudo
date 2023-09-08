import React from 'react'
import FormSignIn from '../pages/FormSignIn'
import NavBar from '../components/NavBar'
export default function Signin() {
  return (
    <div>
        <NavBar className='flex absolute inset-0 '/>
      <FormSignIn/>
    </div>
  )
}
