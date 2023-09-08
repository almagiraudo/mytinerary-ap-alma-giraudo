import React from 'react'
import NoItinerariesCard from './NoItinerariesCard';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import itinerary_actions from '../store/actions/itineraries';
import { useParams } from 'react-router-dom';
import store from '../store/store';
import CityDetail from '../pages/CityDetail';
import LikeButton from './LikeButton';
const { read_itineraries } = itinerary_actions

export default function Itinerary({ each, user }) {
    const [expandedItineraryId, setExpandedItineraryId] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false)
    const { _id } = useParams();
    const dispatch = useDispatch();
    const itinerary = useSelector(store => store.itineraties.itineraries);

    useEffect(
        () => {
            dispatch(read_itineraries({ _id }));
        }, []
    );
   
    const toggleItinerary = (itineraryId) =>{
        if (expandedItineraryId === itineraryId){
            setExpandedItineraryId(null);
            setIsExpanded(false);
        }else{
            setExpandedItineraryId(itineraryId);
            setIsExpanded(true)
        }
    };
    
    return (


        <div className="w-full flex justify-center pb-10 pt-10 ">

            <div key={each.id} className="img flex flex-col  items-center w-[600px]  bg-opacity-70 shadow-2xl rounded-md bg-transparent  pt-10  gap-[16px] ">
                <p key={each.id} className="text-center font-bold">{each.name}</p>
                <div className="">
                    <div key={each.id}><img src={each.photo} alt={each.name} />
                    </div>
                    <div className="pt-5 flex flex-row justify-around">
                        <LikeButton />
                        
                        <span onClick={() => toggleItinerary(each._id)}>
                            <button className="flex justify-center cursor-pointer  ">
                                {isExpanded ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> 
                                </svg>
                            ):(
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                </svg>
                            )}</button>
                        </span>
                    </div>
                </div>

                {expandedItineraryId === each._id && (
                    <div className=" text-black text-center text-xl flex flex-row gap-6" key={each._id}>
                        <div className='flex flex-col gap-3'>
                            <p> User: {user.name} </p>
                            <img src={user.photo} className=' rounded-full w-[90px] h-[80px] ' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Price:</p>
                            <p>{"💵".repeat(each.price)}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className="text-center">Duration: </p>
                            <p> {each.duration}</p>
                        </div>
                        <div className='flex  items-start flex-col gap-3' >
                            <p>Hashtags:</p>
                            {each.tags.map(tag =>
                                <p className="text-center flex-row">{tag}</p>)}

                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

{/* {showImages && (itinerary.length > 0 ?
(itinerary.map((each, index) =>
    <CityDetail
    admin_id={each.city_id.admin_id.name}
    photo= {each.city_id.admin_id.photo}
        src={each.photo}
        alt={each.city_id}
        text={each.name}
        price={each.price}
        tags={each.tags}
        duration={each.duration}
        />)):(

           <h1><em>There are no itineraries to show</em></h1> 
        ))} */}