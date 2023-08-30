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
  const [showImages, setShowImages] = useState(false)
  const [expandedItineraryId, setExpandedItineraryId] = useState(false);
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
      <div className=" w-full h-auto object-fill ">
        <img  src={city.photo} alt={city.country} />
      </div>
      
      <div className="xl:absolute inset-0 flex flex-col justify-center items-center text-center ">
        <div className="bg-opacity-70 bg-white  rounded-lg p-4 lg:w-[600px] lg:mt-10 px-6">
        <p className="text-black font-bold mt-8 text-4xl" > {city.featuredLocation} </p>
        <p className="text-black font-semibold mt-2">{city.description}</p>
        <p className="text-black font-semibold mt-2 ">{city.smalldescription}</p>
        </div>
        <div className="shadow  rounded cursor-pointer  font-bold bg-indigo-700 text-white text-xl 
       w-[200px] h-10 mt-9 mb-5 ">
        <span onClick={() =>setShowImages(!showImages)} ><p className="pt-2">View More
       {/*  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/> </svg> */}
       </p>
      </span>
      </div>
      </div> 
      </div>
      <div className="w-full  "> {showImages? (itinerary.map(each =>
      <div className="img bg-opacity-70 bg-white flex pt-20 flex-col justify-center items-center gap-[16px] ">
        <p key={each.id}  className="text-center font-bold">{each.name}</p> 
      <div className="w-[600px] object-cover ">
        <div key={each.id}><img  src={each.photo} alt={each.name} />
        </div>
        <div className="pt-5">
        <span onClick={() =>setExpandedItineraryId(each._id)}>
           <button className="cursor-pointer rounded-md bg-slate-500 text-white w-[200px] "> Details</button>  </span>
           </div>
        </div>
        {expandedItineraryId === each._id && (
        <div className=" text-black text-center text-xl " key={each._id} > 
        <p   className="text-center">Price: {each.price} </p>
        <p  className="text-center">Duration: {each.duration} </p>
        <p  className="text-center">{each.tags}</p>
        </div>
        )
        }
        </div>
        ) 
        ) : (null)}</div>
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
