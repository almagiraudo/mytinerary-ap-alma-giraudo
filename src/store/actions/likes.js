import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../apiUrl";
import axios from "axios"

const read_likes = createAsyncThunk(
    'read_likes',
    async()=>{
        try{
            let likes = await axios(apiUrl + 'likes')
            
            console.log(likes)
        }catch(error){
            console.log(error);
            return{
                likes:[]
            }
        }
    }
)
const create_likes = createAsyncThunk(
    'create_likes',
    async(obj)=>{
        try {
            let data = await axios.post(apiUrl + 'likes?user_id=', obj.user_id)
            console.log(data.response)
            dispatchEvent(updateLikes(data.response));
            return{
                likes: data.response
                }
            
        } catch (error) {
            console.log(error);
            return{
                likes:[]
            }
        }
    }
)

const like_actions = {read_likes, create_likes}
export default like_actions