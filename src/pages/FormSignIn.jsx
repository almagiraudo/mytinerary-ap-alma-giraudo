import React, { useRef } from 'react'
import apiUrl from '../../apiUrl'
import axios from 'axios';
import { Link as Anchor } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import user_actions from "../store/actions/users"
import NavBar from '../components/NavBar';
const { signin } = user_actions
export default function FormSignIn() {
    const mail = useRef("")
    const password = useRef("")
    const dispatch = useDispatch()

    async function handleSignIn() {
        let data = {
            mail: mail.current.value,
            password: password.current.value
        }
        dispatch(signin({ data }));
    }

    let user = useSelector(store => store)
    return (
        <div className='relative pt-5' >
            
            <div className=' bg-image-url w-full  h-full object-fill'> 
           <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Road" />
           </div>

        <div className='flex justify-center  absolute inset-0 '>
        <div className=' w-full max-w-lg pt-[200px] '>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div class="flex flex-col items-center justify-center lg:justify-start">
                
            
            <p class=" text-lg">Sign in with:</p>

           <div className='m-6 '>            
            <button type="button">
              
              <svg class="w-10 h-10 f  text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
  </svg>
            </button>
            </div>

                </div>
                <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p class="mx-4 mb-0 text-center font-semibold dark:text-black">
              Or
            </p>
          </div>


                <div className="mb-4">
                    <label ref={mail} className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                </div>
                <div class="mb-6">
                    <label ref={password} className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                    
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className='flex items-center justify-between text-gray-700 text-md font-bold pt-8'>
                    <p>Don´t you have an account?</p>
                    <Anchor to='/nav/auth/signup'><button className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>Sign Up</button></Anchor>
                </div>
            </form>
            </div>
        </div>
        </div>
    )

}