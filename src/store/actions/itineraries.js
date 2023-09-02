import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_itineraries = createAsyncThunk(
    'read_itineraries',
    async({_id})=>{
        try {
            let data = await axios(apiUrl +'itineraries?city_id=' + _id)
            return{
                itineraries: data.data.response
            }
        } catch (error) {
            console.log(error);
            return{
                itineraries:[]
            }
        }
    }
)

const itinerary_actions = {read_itineraries}
export default itinerary_actions 