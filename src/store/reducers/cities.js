import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";
const {read_carousel, read_cities, read_city} = city_actions

const initial_state = {
    carousel : [],
    cities: [],
    city: {}
}

const city_reducer = createReducer(
    initial_state,                    //estado inicial
    builder => builder.addCase(     //callback constructora de estados globales
        read_carousel.fulfilled,              //accion a reducir
        (state, action)=>{
            let new_state = {
                ...state,           //a la copia del estado tegno q llenarle la propiedad carousel con los datos q me envia la accion
                carousel: action.payload.carousel
            }
            return new_state        //retorno el nuevo estado para q se actualice la vista
        }               
    )
    .addCase(
        read_cities.fulfilled,
        (state, action)=>{
            let new_state = {
                ...state,
                cities: action.payload.cities
            }
            return new_state
        }
        )
    .addCase(
        read_city.fulfilled,
        (state, action)=>{
            let new_state = {
                ...state,
                city: action.payload.city
            }
            return new_state
        }
        )
    
)
export default city_reducer