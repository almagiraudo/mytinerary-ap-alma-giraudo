import { createReducer } from "@reduxjs/toolkit";
import itinerary_actions from "../actions/itineraries";
const{read_itineraries} = itinerary_actions

const initial_state = {
    itineararies:[]
}

const itinerary_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
    read_itineraries.fulfilled,
    (state,action)=>{
        let new_state ={
            ...state,
            itineraries: action.payload.itineraries
        }
        return new_state
    }
    )
)
export default itinerary_reducer 