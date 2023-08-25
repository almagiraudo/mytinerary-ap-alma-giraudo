import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUrl from "../../../apiUrl"
import axios from "axios"

const read_carousel = createAsyncThunk(
    'read_carousel',  //nombre de la peticion
    async()=>{          //callback q realiza la peticion
        try {
            let data = await axios(apiUrl+'cities/carousel')
            console.log(data);
            return{
                carousel: data.data.data_carousel
            }
            
        } catch (error) {
            console.log(error);
            return{
                carousel : []
            }
        }
        
    }
)

const read_cities = createAsyncThunk(
    'read_cities',
    async(obj)=>{
        try {
            let data = await axios(apiUrl + 'cities?city=' + obj.text)
            console.log(data);
            return{
                cities: data.data.response
            }
        } catch (error) {
            console.log(error)
            return{
                cities: []
            }
        }
    }
)
const  city_actions = {read_carousel, read_cities}
export default city_actions