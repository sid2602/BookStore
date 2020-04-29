import {
    BOOKS_GET_REQUEST,
    BOOKS_GET_SUCCESS,
    BOOKS_GET_FAILURE,
} from '../constans/books.constans';

const Request = () => ({type: BOOKS_GET_REQUEST});
const Success = items => ({type: BOOKS_GET_SUCCESS,items});
const Failure = error => ({type: BOOKS_GET_FAILURE,error});

export {
    Request,
    Success,
    Failure
}
