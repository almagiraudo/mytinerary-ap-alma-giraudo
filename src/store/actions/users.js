/* import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../apiUrl";
import axios from "axios";

const read_users = createAsyncThunk(
    'read_users',
    async()=>{
        try {
            let data = await axios(apiUrl + 'users')
            console.log(data);
            return{
                users: data.data.data_users
            }
        } catch (error) {
            console.log(error);
            return{
                users : []
            }
        }
    }
)
const user_actions = {read_users}
export default user_actions */