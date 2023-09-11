import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import apiUrl from '../../apiUrl';
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
import Swal from 'sweetalert2';
const { read_users } = user_actions

export default function FormSignUp() {
    const name = useRef("");
    const lastName = useRef("");
    const country = useRef("");
    const photo = useRef("");
    const mail = useRef("");
    const password = useRef("");
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(read_users());
    }, [reload]);

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
            const response = await axios.post(apiUrl + "auth/signup", data);
            if (response.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'User registered',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            } else if (response.data?.payload?.messages) {
                Swal.fire({
                    title: 'Something went wrong!',
                    icon: 'error',
                    html: response.data.payload.messages.map(each => `<p>${each}</p>`).join('')
                });
            }
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred during registration.',
                icon: 'error',
                showConfirmButton: true
            });
        }
    }
    return (
        <div className='relative pt-5' >
            <div className=' bg-image-url w-full  h-full object-fill'>
                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Road" />
            </div>
            <div className='flex justify-center  absolute inset-0 '>
                <div className=' w-full max-w-lg pt-14 '>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                        <div className="flex flex-col items-center justify-center lg:justify-start">
                            <p className=" text-lg">Sign up with:</p>
                            <div className='m-6 '>
                                <button type="button">
                                    <svg className="w-10 h-10 f  text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p class="mx-4 mb-0 text-center font-semibold dark:text-black">
                                Or
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    First Name
                                </label>
                                <input ref={name} type="text" name="name" id='name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Jane"></input>
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Last Name
                                </label>
                                <input ref={lastName} type="text" name="lastName" id='lastName' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Doe"></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"   >Mail</label>
                                <input ref={mail} type="text" name="mail" id='mail' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="example@mail.com"></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Password
                                </label>
                                <input ref={password} type="password" id='password' name="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="******************"></input>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <p className="text-gray-600 text-xs italic mt-6 mb-2">Please, tell us, where are you from?</p>
                            <div className="inline-block relative w-64">
                                <select ref={country} type="text" name="country" id="country" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
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
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Please add a photo here
                            </label>
                            <input ref={photo} type="text" name="photo" id="photo" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="URLphoto" />
                        </div>
                        <div className='flex justify-center mt-6 mb-6'>
                            <input type="button" className='bg-indigo-700 cursor-pointer w-[200px] text-white font-semibold text-xl rounded-md py-4' value="Sign Up!" onClick={handleSignUp} />
                        </div>
                        <div className="flex justify-center   uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6">
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


