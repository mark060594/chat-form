import { types } from "../types/types";

const initialState = {}
    
export const dataReducer = ( state = initialState, action ) => {


    switch ( action.type ) {
        case types.dataUser:
            return {

                ...state,
                ...action.payload,
              
            }
        
        default:
            return state;
    }
}