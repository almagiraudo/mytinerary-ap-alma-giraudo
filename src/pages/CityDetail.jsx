import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import apiUrl from "../../apiUrl"
import NavBar from "../components/NavBar"
import { Link as Anchor } from "react-router-dom"
import Footer from "../components/Footer"


export default function CityDetail() {
  const { _id } = useParams()
  const [city, setCity] = useState([])


  useEffect(
    () => {
      axios(apiUrl + 'cities/' + _id)
        .then(res =>{setCity(res.data.response)
           console.log(city)})
        .catch(err => console.log(err))
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
      <div className="text-black pt-[50px] ml-5 ">
        <p>Page Cities Detail under construction</p>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}
