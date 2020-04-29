

import {
    BOOKS_GET_REQUEST,
    BOOKS_GET_SUCCESS,
    BOOKS_GET_FAILURE,
} from '../constans/books.constans'

const initialState = {
    "totalItems": 0,
    items: [],
    loading: false,
    error: ''
}

 const Books =(state= initialState,action) => {
    switch(action.type){

        case BOOKS_GET_REQUEST:
            return {
                ...state,
                loading:true,
                error: '',
            }

        case BOOKS_GET_SUCCESS:
        return{
            ...state,
            items: action.items,
            loading:false,
            error: ''
        }

        case BOOKS_GET_FAILURE:
        return{
            ...state,
            items: [],
            loading: false,
            error: action.error
        }

        default:
            return state;
    }
}

export default Books;

