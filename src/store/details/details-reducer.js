import {SET_COUNTRY, SET_ERROR, SET_LOADING} from "./details-action";

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null
};
export const detailsReducers= (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: payload
            }
        default:
            return state
    }
};