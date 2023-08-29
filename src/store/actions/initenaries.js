import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_initearies = createAsyncThunk(
    'read_initearies',
    async(obj)=>{
        try {
            let data = await axios(apiUrl + 'itineraries?city_id='+obj.city_id)
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

const itinerary_actions = {read_initearies}
export default itinerary_actions