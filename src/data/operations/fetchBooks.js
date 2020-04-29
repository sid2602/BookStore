
import {Request,Success,Failure} from '../actions/addBooks.action'


const fetchBooks = async(tekst) =>{

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${tekst}`);
    const json = await response.json();
    return json;
}

export const getAllBooks = (tekst) =>
    async (dispatch) => {
        dispatch(Request())

        try{
            const books = await fetchBooks(tekst);
            dispatch(Success(books.items))
        }catch(error){
            dispatch(Failure(error))
        }
        
    }