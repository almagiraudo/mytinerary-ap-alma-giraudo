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
    const [showImages, setShowImages] = useState(false);
    const [expandedItineraryId, setExpandedItineraryId] = useState(false);
    const { _id } = useParams();
    const dispatch = useDispatch();
    const itinerary = useSelector(store => store.itineraties.itineraries);

    useEffect(
        () => {
            dispatch(read_itineraries({ _id }));
        }, []
    );
    console.log(user)
    return (


        <div className="w-full">

            <div className="img bg-opacity-70 bg-white flex pt-20 flex-col justify-center items-center gap-[16px] ">
                <p key={each.id} className="text-center font-bold">{each.name}</p>
                <div className="w-[600px] object-cover ">
                    <div key={each.id}><img src={each.photo} alt={each.name} />
                    </div>
                    <div className="pt-5 flex flex-row justify-evenly">
                        <LikeButton />
                        <span onClick={() => setExpandedItineraryId(each._id)}>
                            <button className="cursor-pointer rounded-md bg-slate-500 text-white w-[200px] ">
                                Details
                            </button>
                        </span>
                    </div>
                </div>

                {expandedItineraryId === each._id && (
                    <div className=" text-black text-center text-xl flex flex-row gap-6" key={each._id}>
                        <div className='flex flex-col gap-3'>
                            <p> User: {user.name} </p>
                            <img src={user.photo} className='w-20 rounded-full ' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Price:</p>
                            <p>{"💵".repeat(each.price)}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className="text-center">Duration: </p>
                            <p> {each.duration}</p>
                        </div>
                        <div className='flex  items-start flex-col gap-4' >
                            <p>Hashtags:</p>
                            {each.tags.map(tag =>
                                <p className="text-center  bg-slate-400 p-2 rounded-full">{tag}</p>)}

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