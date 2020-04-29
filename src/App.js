import React , {useEffect}  from 'react';

import {connect} from 'react-redux';
import {getAllBooks} from './data/operations/fetchBooks'

import Navigation from './components/navigation';


function App({Books,getAllBooks}) {
  
  
  // SearchBooks("Anna");
  useEffect(()=>{
    getAllBooks("Alicja")
  },[])

  console.log(Books);
  return (
     
      <div className="App">
        <Navigation/>
      </div>
    
  );
}


const mapDispatchToProps = dispatch =>({
  getAllBooks: (item)=>dispatch(getAllBooks(item))
})

const mapStateToProps = (state) =>({
  Books : state.Books
})

const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(App);

export default ConectedApp;
