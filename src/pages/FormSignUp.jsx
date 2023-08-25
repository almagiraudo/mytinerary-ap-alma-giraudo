import axios from 'axios';
import { useRef, useState } from 'react';
import apiUrl from '../../apiUrl';
import { Link as Anchor } from 'react-router-dom'

export default function FormSignUp() {
    const name = useRef()
    const lastName = useRef()
    const country = useRef()
    const photo = useRef()
    const mail = useRef()
    const password = useRef()

    async function handleSignUp() {
        try {
            let data = {
                name: name.current.value,
                lastName: lastName.current.value,
                country: country.current.value,
                photo: photo.current.value,
                mail: mail.current.value,
                password: password.current.value
            }
            axios.post(
                apiUrl + 'users/signup',
                data
            ), console.log(data)
        } catch (error) {
            console.log(error)
        } 
    }
    return (
        <div className='pt-10'>
            <form className='flex flex-col  gap-4 items-center bg-zinc-500 pb-3  '>
                <input className='text-center mt-3' ref={name} type="text" name="name" id="name" placeholder="Type Name" />
                <input className='text-center' ref={lastName} type="text" name="lastName" id="lastName" placeholder="Type Last Name" />
                <input className='text-center' ref={country} type="text" name="country" id="country" placeholder="Type Country" />
                <input className='text-center' ref={photo} type="text" name="photo" id="photo" placeholder="Type Photo" />
                <input className='text-center' ref={mail} type="text" name="mail" id="mail" placeholder="Type Mail" />
                <input className='text-center' ref={password} type="password" name="password" id="password" placeholder="Type Password" />
                <input type="button" className='bg-indigo-700 cursor-pointer w-[200px] text-white py-4' value="Sign Up!" onClick={handleSignUp} />
                <p>Already have an account?</p>
                <Anchor to='/nav/auth/login'><button>Sign In</button></Anchor>
            </form>
        </div>
    )
}

