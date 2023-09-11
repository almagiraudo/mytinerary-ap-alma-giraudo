import React, { useEffect } from 'react';
import activity_actions from '../store/actions/activities';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const { read_activities } = activity_actions;

export default function Activity({ itinerary_id }) {
    const dispatch = useDispatch();
    const activities = useSelector(store => store.activities.activities);
    const filteredActivities = activities.filter(activity => activity.itinerary_id === itinerary_id);
    useEffect(() => {
        dispatch(read_activities({ itinerary_id: itinerary_id }));
    }, [itinerary_id]);

    return (
        <div className="w-[350px] h-[300px] flex items-center  justify-start bg-slate-100 mb-4 sm:w-[750px]">
            {activities?.map(each => (
                <div key={each._id} className="w-5/12 flex flex-col rounded-xl h-[190px] items-center p-2 m-4 bg-slate-400">
                    <img className="w-[240px] h-[130px]" src={each.photo} alt={each.name} />
                    <p className="text-[16px] font-bold">{each.name}</p>
                </div>
            ))}
        </div>
    );
}
