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
        <div className='relative pt-5' >

            <div className=' bg-image-url w-full  h-full object-fill'>
                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Road" />
            </div>
            <div className='flex justify-center  absolute inset-0 '>
                <div className=' w-full max-w-lg pt-[200px] '>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label ref={name} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label ref={lastName} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" ref={mail} name="mail" id="mail" >Mail</label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="example@mail.com"></input>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label ref={password} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Password
                                </label>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"></input>
                            <p class="text-gray-600 text-xs italic mt-6 mb-2">Please, tell us, where are you from?</p>

                            {/* <div class="">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label ref={country} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Country
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"></input>
    </div> */}
                            <div class="inline-block relative w-64">
                                <select ref={country} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>Country</option>
                                    <option>Argentina</option>
                                    <option>Brasil</option>
                                    <option >United States</option>
                                    <option >Chile</option>
                                    <option >Mexico</option>
                                    <option >Perú</option>
                                    <option >Ecuador</option>
                                    <option >España</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Please add a photo here
                            </label>
                            <input ref={photo} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="URL photo" type="text" />
                        </div>
                        <div className='flex justify-center mt-6 mb-6'>
                            <input type="button" className='bg-indigo-700 cursor-pointer w-[200px] text-white font-semibold text-xl rounded-md py-4' value="Sign Up!" onClick={handleSignUp} />
                        </div>
                        <div class="flex justify-center   uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6">
                            <p>Already have an account?</p>
                            </div>
                            <div className='flex justify-center '>
                            <Anchor to='/nav/auth/login'><button className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>Sign In</button></Anchor>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


/*  <div className='pt-10'>
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
 </div> */