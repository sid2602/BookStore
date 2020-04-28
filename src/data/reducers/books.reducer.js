

import {
    BOOKS_GET_REQUEST,
    BOOKS_GET_SUCCESS,
    BOOKS_GET_FAILURE,
} from '../constans/books.constans'

const initialState = {
    "totalItems": 0,
    items: []

}

 const Books =(state= initialState,action) => {
    switch(action.type){
        case BOOKS_GET_SUCCESS:
        return{
            ...state,
            items: action.items
        }

        default:
            return state;
    }
}

export default Books;

