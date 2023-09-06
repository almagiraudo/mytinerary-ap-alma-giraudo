import React, { useRef } from 'react'
import apiUrl from '../../apiUrl'
import axios from 'axios';
import { Link as Anchor } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import user_actions from "../store/actions/users"
const {signin} = user_actions
export default function FormSignIn() {
    const mail = useRef("")
    const password = useRef("")
    const dispatch = useDispatch()

    async function handleSignIn(){
        let data = {
            mail: mail.current.value,
            password: password.current.value
        }
        dispatch(signin({data}));
    }

    let user = useSelector(store=>store)
    return (
        <div className='pt-10'>
            <form className='flex flex-col  gap-4 items-center bg-zinc-500 pb-3 ' >
                <input type="text" className='text-center mt-3' ref={mail} name='mail' id='mail' placeholder='Type your mail' />
                <input type="password" className='text-center' ref={password} name='password' id='password' placeholder='Type your password' />
                <input type="button" className='bg-indigo-700 cursor-pointer w-[200px] text-white py-4' value="Sign In!" onClick={handleSignIn} />
                <p>Don´t you have an account?</p>
                <Anchor to='/nav/auth/signup'><button>Sign Up</button></Anchor> 
            </form>

        </div>
    )

}