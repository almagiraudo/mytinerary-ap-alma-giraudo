import { createReducer } from "@reduxjs/toolkit";
import like_actions from "../actions/likes";
const {read_likes, create_likes} = like_actions;

const initial_state ={
    user: {},
    likes: null, 
    token: ''
};
const like_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_likes.fulfilled,
        (state, action)=>{
            let new_state ={
                ...state,
                likes: action.payload.likes,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
    create_likes.fulfilled,
    (state, action)=>{
        let new_state ={
        ...state,
        likesCount: action.payload
    }
    return new_state
    }
)
)


export default like_reducer