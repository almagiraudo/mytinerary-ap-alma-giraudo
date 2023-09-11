import city_actions from "../store/actions/cities"
import itinerary_actions from "../store/actions/itineraries"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../components/NavBar";
import { Link as Anchor } from "react-router-dom";
import Footer from "../components/Footer";
import store from "../store/store";
import NoItinerariesCard from "../components/NoItinerariesCard";
import LikeButton from "../components/LikeButton";
import Itinerary from "../components/Itinerary";
const { read_itineraries } = itinerary_actions
const { read_city } = city_actions


export default function CityDetail() {
  const [showImages, setShowImages] = useState(false);
  const [expandedItineraryId, setExpandedItineraryId] = useState(null);
  const { _id } = useParams();
  const city = useSelector(store => store.cities.city);
  const dispatch = useDispatch();
  const itinerary = useSelector(store => store.itineraties.itineraries);
  console.log(store);

  useEffect(
    () => {
      dispatch(read_city({ _id }));
      dispatch(read_itineraries({ _id }));

    }, []
  );
  console.log(itinerary);
  return (
    <>
      <NavBar />
      <div className="relative mt-5">
        <div className=" w-full h-auto object-fill ">
          <img src={city.photo} alt={city.country} />
        </div>
        <div className="xl:absolute inset-0 flex flex-col justify-center items-center text-center ">
          <div className="bg-opacity-70 bg-white  rounded-lg p-4 lg:w-[600px] lg:mt-10 px-6">
            <p className="text-black font-bold mt-8 text-4xl"> {city.featuredLocation} </p>
            {/* <p className="text-black font-semibold mt-2">{city.description}</p> */}
            <p className="text-black font-semibold mt-2 ">{city.smalldescription}</p>
          </div  >
          <div className="shadow  rounded cursor-pointer  font-bold bg-indigo-700 text-white text-xl 
              w-[200px] h-10 mt-9 mb-5 ">
            <span onClick={() => setShowImages(!showImages)}><p className="pt-2">View More
            </p>
            </span>
          </div>
        </div>
      </div>
      <div >
        {showImages && (itinerary.map(each =>
          <Itinerary each={each}
            user={each.city_id.admin_id}
          />
        )
        )}
        {itinerary?.length === 0 && <NoItinerariesCard/>}
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
  );
}
