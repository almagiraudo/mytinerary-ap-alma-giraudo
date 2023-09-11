import React, { useEffect, useState } from 'react';
import activity_actions from '../store/actions/activities';
import { useDispatch } from 'react-redux';
const { read_activities } = activity_actions;

export default function Activity({ itinerary_id }) {
    const dispatch = useDispatch();
    const [activity, setActivity]=useState([]);
    useEffect(() => {
        dispatch(read_activities({ itinerary_id }))
        .then(response => setActivity(response.payload.activities)
        ); 
    }, [itinerary_id]);
    return (
        <div className="w-[260px] h-[300px] mb-4 flex flex-row items-center  justify-start bg-slate-100 mb-4v rounded-md  sm:w-[750px]">
            {activity?.map(each => (
                <div key={each._id} className="w-5/12 flex flex-col rounded-xl h-[190px] items-center p-2 m-4 bg-slate-400">
                    <img className="w-[240px] h-[130px]" src={each.photo} alt={each.name} />
                    <p className="text-[16px] font-bold">{each.name}</p>
                </div>
            ))}
        </div>
    );
}
