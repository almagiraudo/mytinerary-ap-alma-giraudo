import { useParams } from "react-router-dom"
import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import city_actions from "../store/actions/cities"
import NavBar from "../components/NavBar"
import { Link as Anchor } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import itinerary_actions from "../store/actions/initenaries"
const {read_itineraries} = itinerary_actions
const{read_city} = city_actions

export default function CityDetail() {
  const [show, setShow] = useState(false)
  const { _id } = useParams()
  const dispatch = useDispatch()
  const city = useSelector(store => store)
  const itineraries = useSelector(store=>store.itineraries.itinerary_actions.read_itineraries)
  
  useEffect(
    ()=>{
      dispatch(read_itineraries({id:_id}))
    }
  )

  
  useEffect(
    () => { 
      dispatch(read_city({id:_id}))
    }, []
    )


  return (
    <>
      <NavBar />
      <div className="text-black mt-10 flex justify-center items-center text-xl">
        <h1>City Detail {city.text}</h1>
      </div>
      <div className=" p-5">
        <img className="rounded-md" src={city.photo} alt={city.country} />
      </div>
      <div>
        <p className="text-black font-sans font-bold mt-8 ml-5" >{city.featuredLocation} </p>
        <p className="text-black font-sans font-semibold mt-8 ml-5 ">{city.description}</p>
        <p className="text-black font-sans font-semibold mt-8 ml-5 ">{city.smalldescription}</p>
      </div>
      <Anchor to='/nav/cities'><button className="rounded-xl 
         bg-indigo-700 text-white text-xl text-center
      items-center cursor-pointer w-[200px] h-10 mt-9 ml-10 ">Return</button></Anchor>
      <span onClick={()=>setShow(!show)} className="shadow rounded cursor-pointer px-4 font-bold ">
        {show && read_itineraries.map(each=><p>{each.name}</p>)}
      </span>
      <div className="text-black pt-[50px] ml-5 ">
        <p>Page Cities Detail under construction</p>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}
