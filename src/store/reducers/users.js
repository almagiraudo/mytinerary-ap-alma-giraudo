import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
const {read_users, signin, signin_token, signout} =user_actions

const initial_state = {
    users: [],
    user: {},
    token: ''
};

const user_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        read_users.fulfilled,
        (state, action)=>{
            let new_state = {
                ...state,
                users: action.payload.users
            }
            return new_state
        }
    ).addCase(
        signin.fulfilled,
        (state,action)=>{
            let new_state ={
                ...state,
                user: action.payload.user,
                toke: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=>{
            let new_state ={
                ...state,
                user: action.payload.user,
                toke: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signout.fulfilled,
        (state,action)=>{
            let new_state ={
                ...state,
                user: action.payload.user,
                toke: action.payload.token
            }
            return new_state
        }
    )
);
export default user_reducer 