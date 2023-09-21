import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
import itinerary_reducer from "./reducers/itineraries";
import user_reducer from "./reducers/users"; 
import activity_reducer from "./reducers/activities";
import like_reducer from "./reducers/likes";
export default configureStore({
    reducer: {
        cities: city_reducer,
        itineraties: itinerary_reducer,
        users: user_reducer,
        activities: activity_reducer,
        likes: like_reducer
    }
})