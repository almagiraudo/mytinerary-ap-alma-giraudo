import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import city_actions from "../store/actions/cities"
import NavBar from "../components/NavBar"
import { Link as Anchor } from "react-router-dom"
import Footer from "../components/Footer"
import itinerary_actions from "../store/actions/itineraries"
import store from "../store/store"
const { read_itineraries } = itinerary_actions
const { read_city } = city_actions

export default function CityDetail() {
  const [show, setShow] = useState(false)
  const { _id } = useParams()
 // let id = _id
  const city = useSelector(store => store.cities.city)
  const dispatch = useDispatch()
  const itinerary = useSelector(store =>store.itineraties.itineraries)
console.log(store)
  useEffect(
    () => {
      dispatch(read_city({ _id }))
      dispatch(read_itineraries({_id })) 

    }, []
  )
 console.log(itinerary)
  return (
    <>
      <NavBar />
      <div className="relative mt-5">
      <div className=" w-full h-auto object-cover ">
        <img  src={city.photo} alt={city.country} />
      </div>
      
      <div className="lg:absolute inset-0 flex flex-col justify-center items-center text-center p-8">
        <div className="bg-opacity-70 bg-white  rounded-lg p-4 lg:w-[600px] lg:mt-10 ">
        <p className="text-black font-bold mt-8 text-4xl" > {city.featuredLocation} </p>
        <p className="text-black font-semibold mt-2">{city.description}</p>
        <p className="text-black font-semibold mt-2 ">{city.smalldescription}</p>
        </div>
        <div className="shadow  rounded cursor-pointer px-4 font-bold bg-indigo-700 text-white text-xl text-center
      items-center w-[200px] h-10 mt-9 ml-10 ">
        <span onClick={() => setShow(!show)} >
        {show && itinerary.map(each =><p key={each._id}>View Itineraries </p>)} 
      </span>
      </div>
      </div> 
      </div>
      <Anchor to='/nav/cities'><button className="rounded-xl 
        bg-indigo-700 text-white text-xl text-center
      items-center cursor-pointer w-[200px] h-10 mt-9 ml-10 ">Return</button></Anchor>
       
      <div className="text-black pt-[50px] ml-5 ">
        <p>Page Cities Detail under construction</p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
